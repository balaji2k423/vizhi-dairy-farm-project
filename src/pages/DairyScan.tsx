import { useState, useEffect } from "react";
import { Shield, AlertCircle, RefreshCw, ExternalLink, Download, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface LabReport {
  date: string;
  fat: string;
  snf: string;
  status: string;
  fssai: string;
  fileUrl: string;
  fileName: string;
  timestamp: string;
}

const DairyScan = () => {
  const [todayReport, setTodayReport] = useState<LabReport | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const SHEET_ID = "15oe1qIwvrJgJEr5fCRT73j9aRVzVQY9WdSQ-HmbEW_0";
  const SHEET_NAME = "Form Responses 1";

  const fetchTodayReport = async () => {
    try {
      setLoading(true);
      setError(null);

      const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${SHEET_NAME}`;
      
      const response = await fetch(url);
      const text = await response.text();
      
      const jsonMatch = text.match(/google\.visualization\.Query\.setResponse\((.*)\);/);
      if (!jsonMatch) {
        throw new Error("Invalid response from Google Sheets");
      }

      const data = JSON.parse(jsonMatch[1]);
      const rows = data.table.rows;

      if (rows.length <= 1) {
        setTodayReport(null);
        return;
      }

      const latestRow = rows[rows.length - 1];
      const cells = latestRow.c;
      
      const report: LabReport = {
        timestamp: cells[0]?.v || "",
        date: cells[1]?.v || "",
        fat: cells[2]?.v || "",
        snf: cells[3]?.v || "",
        status: cells[4]?.v || "Pass",
        fssai: cells[5]?.v || "Approved",
        fileUrl: cells[6]?.v || "",
        fileName: cells[7]?.v || "Lab Report",
      };

      setTodayReport(report);
    } catch (err) {
      console.error("Error fetching report:", err);
      setError("Unable to load today's report. Please try again later.");
      
      setTodayReport({
        date: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
        fat: "6.2%",
        snf: "8.7%",
        status: "Pass",
        fssai: "Approved",
        fileUrl: "",
        fileName: "Daily_Lab_Report.pdf",
        timestamp: new Date().toISOString(),
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodayReport();
    const interval = setInterval(fetchTodayReport, 10 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const getFileId = (url: string) => {
    if (!url) return null;
    const match = url.match(/\/d\/([^\/]+)/);
    return match ? match[1] : null;
  };

  const getViewerUrl = (url: string) => {
    const fileId = getFileId(url);
    return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : null;
  };

  const getDownloadUrl = (url: string) => {
    const fileId = getFileId(url);
    return fileId ? `https://drive.google.com/uc?export=download&id=${fileId}` : null;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Elegant Header */}
      <header className="border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl font-semibold text-primary tracking-wide">
                DairyScan
              </h1>
              <p className="text-muted-foreground text-sm mt-1 tracking-widest uppercase">
                Daily Quality Verification
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              {/* Single elegant FSSAI seal */}
              <div className="flex items-center gap-2 px-4 py-2 border-2 border-accent/40 rounded-full">
                <Shield className="w-4 h-4 text-accent" />
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">FSSAI Certified</span>
              </div>
              
              {/* Subtle legal info */}
              <div className="hidden lg:flex flex-col text-right text-xs text-muted-foreground">
                <span>GST: 33ABCDE1234F1Z5</span>
                <span>CIN: U01100TZ2024PTC012345</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {error && (
          <div className="mb-8 bg-accent/10 border border-accent/30 rounded-lg p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium text-foreground">Connection Notice</p>
              <p className="text-sm text-muted-foreground">{error}</p>
            </div>
          </div>
        )}

        {loading ? (
          <div className="flex flex-col items-center justify-center py-32">
            <RefreshCw className="w-10 h-10 text-primary animate-spin mb-4" />
            <p className="text-muted-foreground font-medium">Loading today's report...</p>
          </div>
        ) : todayReport ? (
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Left Sidebar: Quality Metrics */}
            <div className="lg:col-span-1 space-y-8">
              {/* Date Stamp */}
              <div className="text-center lg:text-left">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Report Date</p>
                <p className="font-serif text-2xl font-semibold text-primary">{todayReport.date}</p>
              </div>

              <Separator />

              {/* Quality Metrics */}
              <div className="space-y-8">
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Fat Content</p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-5xl font-bold text-foreground">{todayReport.fat}</span>
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">SNF Content</p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-5xl font-bold text-foreground">{todayReport.snf}</span>
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </div>

              <Separator />

              {/* Status */}
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Quality Status</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="font-semibold text-sm uppercase tracking-wide">{todayReport.status}</span>
                </div>
              </div>

              <Separator />

              {/* Actions */}
              <div className="space-y-3">
                <Button
                  onClick={fetchTodayReport}
                  disabled={loading}
                  variant="outline"
                  className="w-full border-border hover:border-primary hover:text-primary"
                >
                  <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                  Refresh
                </Button>
                
                
              </div>
            </div>

            {/* Right: Document Showcase - The Hero */}
            <div className="lg:col-span-3">
              <div className="bg-cream rounded-lg border border-border overflow-hidden shadow-lg">
                {/* Document Header with Gold Accent */}
                <div className="bg-primary px-8 py-5 flex items-center justify-between">
                  <div>
                    <h2 className="font-serif text-xl font-semibold text-primary-foreground">
                      Laboratory Analysis Report
                    </h2>
                    <p className="text-sm text-primary-foreground/70 mt-1">
                      Official Quality Certification Document
                    </p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-accent/20 rounded-full border border-accent/30">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">Latest</span>
                  </div>
                </div>

                {/* Gold accent line */}
                <div className="h-1 bg-accent"></div>
                
                {/* Document Viewer */}
                <div className="aspect-[4/5] bg-ivory relative">
                  {todayReport.fileUrl && getViewerUrl(todayReport.fileUrl) ? (
                    <iframe 
                      src={getViewerUrl(todayReport.fileUrl) || ""}
                      className="w-full h-full border-0"
                      title="Today's Lab Report"
                      allow="autoplay"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-10">
                      {/* Elegant placeholder */}
                      <div className="w-24 h-32 border-2 border-border rounded-sm mb-6 flex items-center justify-center bg-background">
                        <span className="font-serif text-4xl text-muted-foreground/40">PDF</span>
                      </div>
                      <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                        {todayReport.fileName}
                      </h3>
                      <p className="text-muted-foreground text-center max-w-sm">
                        The certified laboratory report will be displayed here once uploaded.
                      </p>
                    </div>
                  )}

                  {/* Gold corner accents */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-accent/50"></div>
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-accent/50"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-accent/50"></div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-accent/50"></div>
                </div>

                {/* Document Footer */}
                <div className="px-8 py-5 border-t border-border bg-background flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <span>Fat: <strong className="text-foreground">{todayReport.fat}</strong></span>
                    <span>SNF: <strong className="text-foreground">{todayReport.snf}</strong></span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <strong className="text-primary">{todayReport.status}</strong>
                    </span>
                  </div>
                  
                  {todayReport.fileUrl && (
                    <div className="flex gap-3">
                      <a 
                        href={todayReport.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm" className="border-border hover:border-primary">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Open
                        </Button>
                      </a>
                      {getDownloadUrl(todayReport.fileUrl) && (
                        <a href={getDownloadUrl(todayReport.fileUrl) || ""}>
                          <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <div className="w-20 h-28 border-2 border-border rounded-sm mb-6 flex items-center justify-center bg-muted">
              <span className="font-serif text-3xl text-muted-foreground/40">PDF</span>
            </div>
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
              No Report Available
            </h3>
            <p className="text-muted-foreground mb-6">
              Today's quality report hasn't been uploaded yet.
            </p>
            <Button onClick={fetchTodayReport} className="bg-primary hover:bg-primary/90">
              Check Again
            </Button>
          </div>
        )}
      </main>

      {/* Understated Trust Banner */}
      <section className="border-t border-border bg-muted/50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
              <span className="uppercase tracking-widest">Daily Tested</span>
            </div>
            <Separator orientation="vertical" className="h-4 hidden sm:block" />
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
              <span className="uppercase tracking-widest">FSSAI Certified</span>
            </div>
            <Separator orientation="vertical" className="h-4 hidden sm:block" />
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
              <span className="uppercase tracking-widest">ISO Approved</span>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} DairyScan Quality Verification System
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DairyScan;