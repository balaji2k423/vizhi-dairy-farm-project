import { useState, useEffect } from "react";
import { Shield, AlertCircle, RefreshCw, ExternalLink, Download, CheckCircle2, Eye, ImageIcon } from "lucide-react";
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
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const SHEET_ID = "15oe1qIwvrJgJEr5fCRT73j9aRVzVQY9WdSQ-HmbEW_0";
  const SHEET_NAME = "Form Responses 1";

  const fetchTodayReport = async () => {
    try {
      setLoading(true);
      setError(null);
      setImageError(false);
      setImageLoading(true);

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
      console.log("Fetched report with file URL:", report.fileUrl);
    } catch (err) {
      console.error("Error fetching report:", err);
      setError("Unable to load today's report. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodayReport();
    const interval = setInterval(fetchTodayReport, 10 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Extract file ID from various Google Drive URL formats
  const getFileId = (url: string) => {
    if (!url) return null;
    
    const patterns = [
      /\/d\/([a-zA-Z0-9_-]+)/,
      /id=([a-zA-Z0-9_-]+)/,
      /\/file\/d\/([a-zA-Z0-9_-]+)/,
      /^([a-zA-Z0-9_-]{25,})$/
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }
    
    return null;
  };

  // Get direct image URL for display
  const getImageUrl = (url: string) => {
    const fileId = getFileId(url);
    if (!fileId) return null;
    // This URL works for public images
    return `https://drive.google.com/uc?export=view&id=${fileId}`;
  };

  // Get thumbnail URL as fallback
  const getThumbnailUrl = (url: string) => {
    const fileId = getFileId(url);
    if (!fileId) return null;
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=w2000`;
  };

  // Get PDF viewer URL
  const getViewerUrl = (url: string) => {
    const fileId = getFileId(url);
    if (!fileId) return null;
    return `https://drive.google.com/file/d/${fileId}/preview`;
  };

  const getDownloadUrl = (url: string) => {
    const fileId = getFileId(url);
    if (!fileId) return null;
    return `https://drive.google.com/uc?export=download&id=${fileId}`;
  };

  const getDirectViewUrl = (url: string) => {
    const fileId = getFileId(url);
    if (!fileId) return null;
    return `https://drive.google.com/file/d/${fileId}/view`;
  };

  // Determine if the file is an image or PDF
  const isImageFile = (fileName: string) => {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp'];
    return imageExtensions.some(ext => fileName.toLowerCase().endsWith(ext));
  };

  const isPdfFile = (fileName: string) => {
    return fileName.toLowerCase().endsWith('.pdf');
  };

  return (
    <div className="min-h-screen bg-background">
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
              <div className="flex items-center gap-2 px-4 py-2 border-2 border-accent/40 rounded-full">
                <Shield className="w-4 h-4 text-accent" />
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">FSSAI Certified</span>
              </div>
              
              <div className="hidden lg:flex flex-col text-right text-xs text-muted-foreground">
                <span>GST: 33ABCDE1234F1Z5</span>
                <span>CIN: U01100TZ2024PTC012345</span>
              </div>
            </div>
          </div>
        </div>
      </header>

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

        {todayReport?.fileUrl && imageError && (
          <div className="mb-8 bg-emerald-50 border-2 border-emerald-200 rounded-xl p-5">
            <p className="text-sm font-bold text-emerald-900 mb-3 flex items-center gap-2">
              <Eye className="w-4 h-4" />
              How to Make Google Drive File Visible:
            </p>
            <ol className="text-sm text-emerald-800 space-y-2 ml-6 list-decimal">
              <li>Open your file in Google Drive</li>
              <li>Click the <strong>Share</strong> button (top right)</li>
              <li>Change from "Restricted" to <strong>"Anyone with the link"</strong></li>
              <li>Set permission to <strong>"Viewer"</strong></li>
              <li>Click <strong>Done</strong></li>
            </ol>
            <div className="mt-4 p-3 bg-white rounded-lg border border-emerald-200">
              <p className="text-xs text-emerald-700 mb-1 font-semibold">Current File URL:</p>
              <code className="text-xs bg-emerald-100 px-2 py-1 rounded block break-all">{todayReport.fileUrl}</code>
              {getFileId(todayReport.fileUrl) && (
                <>
                  <p className="text-xs text-emerald-700 mb-1 font-semibold mt-2">File ID:</p>
                  <code className="text-xs bg-emerald-100 px-2 py-1 rounded block break-all">{getFileId(todayReport.fileUrl)}</code>
                </>
              )}
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
            <div className="lg:col-span-1 space-y-8">
              <div className="text-center lg:text-left">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Report Date</p>
                <p className="font-serif text-2xl font-semibold text-primary">{todayReport.date}</p>
              </div>

              <Separator />

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

              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Quality Status</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="font-semibold text-sm uppercase tracking-wide">{todayReport.status}</span>
                </div>
              </div>

              <Separator />

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

            <div className="lg:col-span-3">
              <div className="bg-cream rounded-lg border border-border overflow-hidden shadow-lg">
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

                <div className="h-1 bg-accent"></div>
                
                <div className="aspect-[4/5] bg-ivory relative">
                  {todayReport.fileUrl && getFileId(todayReport.fileUrl) ? (
                    <>
                      {/* Try to display as image first */}
                      {isImageFile(todayReport.fileName) || !isPdfFile(todayReport.fileName) ? (
                        <>
                          {imageLoading && (
                            <div className="absolute inset-0 flex items-center justify-center bg-background">
                              <RefreshCw className="w-8 h-8 text-primary animate-spin" />
                            </div>
                          )}
                          <img
                            src={getImageUrl(todayReport.fileUrl) || ""}
                            alt="Lab Report"
                            className={`w-full h-full object-contain ${imageLoading ? 'hidden' : 'block'}`}
                            onLoad={() => {
                              setImageLoading(false);
                              setImageError(false);
                            }}
                            onError={() => {
                              console.error("Image failed to load, trying thumbnail...");
                              // Try thumbnail as fallback
                              const img = document.getElementById('report-img') as HTMLImageElement;
                              if (img && getThumbnailUrl(todayReport.fileUrl)) {
                                img.src = getThumbnailUrl(todayReport.fileUrl) || "";
                              } else {
                                setImageError(true);
                                setImageLoading(false);
                              }
                            }}
                            id="report-img"
                          />
                        </>
                      ) : (
                        /* PDF iframe */
                        !imageError ? (
                          <iframe 
                            src={getViewerUrl(todayReport.fileUrl) || ""}
                            className="w-full h-full border-0"
                            title="Today's Lab Report"
                            allow="autoplay"
                            onLoad={() => setImageLoading(false)}
                            onError={() => {
                              console.error("iframe failed to load");
                              setImageError(true);
                              setImageLoading(false);
                            }}
                          />
                        ) : null
                      )}
                      
                      {/* Fallback if image/PDF fails to load */}
                      {imageError && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-10 bg-background">
                          <div className="w-24 h-32 border-2 border-border rounded-sm mb-6 flex items-center justify-center bg-muted">
                            <ImageIcon className="w-12 h-12 text-muted-foreground/40" />
                          </div>
                          <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                            {todayReport.fileName}
                          </h3>
                          <p className="text-muted-foreground text-center max-w-sm mb-4">
                            Preview unavailable. The file may need public sharing enabled in Google Drive.
                          </p>
                          
                          {getDirectViewUrl(todayReport.fileUrl) && (
                            <a 
                              href={getDirectViewUrl(todayReport.fileUrl) || ""}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button className="bg-primary hover:bg-primary/90">
                                <Eye className="w-4 h-4 mr-2" />
                                Open in Google Drive
                              </Button>
                            </a>
                          )}
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-10">
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

                  {/* Corner decorations */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-accent/50"></div>
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-accent/50"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-accent/50"></div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-accent/50"></div>
                </div>

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
                      {getDirectViewUrl(todayReport.fileUrl) && (
                        <a 
                          href={getDirectViewUrl(todayReport.fileUrl) || ""}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="outline" size="sm" className="border-border hover:border-primary">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Open
                          </Button>
                        </a>
                      )}
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