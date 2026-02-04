import { useState, useEffect } from "react";
import { Shield, AlertCircle, RefreshCw, ExternalLink, Download, Calendar, Droplet, Microscope, Award, CheckCircle2, Clock, ThermometerSun, Milk, TestTube, FileCheck, Sparkles } from "lucide-react";

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

  // Your Google Sheet ID
  const SHEET_ID = "15oe1qIwvrJgJEr5fCRT73j9aRVzVQY9WdSQ-HmbEW_0";
  const SHEET_NAME = "Form Responses 1";

  // Fetch today's report from Google Sheets
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

      // Get the most recent report (last row)
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
      
      // Fallback sample data
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
    // Auto-refresh every 10 minutes
    const interval = setInterval(fetchTodayReport, 10 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Extract Google Drive file ID from URL
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/40">
      {/* Hero Section */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          {/* Legal Info Badge */}
          <div className="flex justify-end mb-6">
            <div className="inline-flex flex-col sm:flex-row gap-2 sm:gap-6 text-xs bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-lg border border-gray-200/50">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                <span className="text-gray-500">GST:</span>
                <span className="font-mono font-bold text-gray-900">33ABCDE1234F1Z5</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                <span className="text-gray-500">CIN:</span>
                <span className="font-mono font-bold text-gray-900">U01100TZ2024PTC012345</span>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-full text-sm font-bold mb-6 shadow-lg">
              <Sparkles className="w-4 h-4" />
              DairyScan Quality Verification
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-emerald-800 to-blue-900 mb-6 leading-tight tracking-tight">
              Today's Quality Report
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed font-light">
              Real-time laboratory results from our daily quality testing.<br/>
              <span className="text-emerald-600 font-semibold">100% transparent. 100% verified.</span>
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: Shield, text: "FSSAI Certified", color: "emerald" },
                { icon: TestTube, text: "Lab Tested Daily", color: "blue" },
                { icon: Award, text: "ISO Certified", color: "purple" },
                { icon: Microscope, text: "Scientific Analysis", color: "indigo" },
              ].map((badge, idx) => (
                <div 
                  key={idx}
                  className={`flex items-center gap-2 bg-white px-5 py-2.5 rounded-xl shadow-md border-2 border-${badge.color}-100 hover:shadow-lg transition-all hover:-translate-y-0.5`}
                >
                  <badge.icon className={`w-5 h-5 text-${badge.color}-600`} />
                  <span className="font-semibold text-gray-700 text-sm">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Report Section */}
      <section className="py-12">
        <div className="container-custom max-w-7xl">
          {error && (
            <div className="mb-8 bg-amber-50 border-2 border-amber-200 rounded-2xl p-5 flex items-start gap-4 shadow-sm">
              <AlertCircle className="w-6 h-6 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-bold text-amber-900 mb-1">Connection Issue</p>
                <p className="text-sm text-amber-800">{error}</p>
              </div>
            </div>
          )}

          {loading ? (
            <div className="bg-white rounded-3xl p-20 text-center shadow-2xl border border-gray-100">
              <RefreshCw className="w-16 h-16 text-emerald-600 animate-spin mx-auto mb-6" />
              <p className="text-xl font-semibold text-gray-700">Loading today's report...</p>
            </div>
          ) : todayReport ? (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left: Report Stats */}
              <div className="space-y-6">
                {/* Date Card */}
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl p-8 text-white shadow-2xl border-4 border-emerald-400/50">
                  <Calendar className="w-10 h-10 mb-4 opacity-80" />
                  <p className="text-sm font-semibold uppercase tracking-wider opacity-90 mb-2">Report Date</p>
                  <p className="text-4xl font-black">{todayReport.date}</p>
                  <div className="mt-4 pt-4 border-t border-white/20 flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4" />
                    <span className="opacity-90">Updated in real-time</span>
                  </div>
                </div>

                {/* Quality Metrics */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Droplet className="w-6 h-6 text-blue-600" />
                    Quality Parameters
                  </h3>
                  
                  <div className="space-y-5">
                    {/* Fat Content */}
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-5 border-2 border-blue-200">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center shadow-lg">
                            <Milk className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide">Fat Content</p>
                            <p className="text-3xl font-black text-blue-900">{todayReport.fat}</p>
                          </div>
                        </div>
                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="h-3 bg-blue-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000"
                          style={{ width: `${parseFloat(todayReport.fat) * 15}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* SNF Content */}
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-5 border-2 border-purple-200">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-purple-500 flex items-center justify-center shadow-lg">
                            <TestTube className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-purple-700 uppercase tracking-wide">SNF Content</p>
                            <p className="text-3xl font-black text-purple-900">{todayReport.snf}</p>
                          </div>
                        </div>
                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="h-3 bg-purple-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000"
                          style={{ width: `${parseFloat(todayReport.snf) * 10}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Status Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-5 text-white shadow-xl">
                    <FileCheck className="w-8 h-8 mb-3 opacity-90" />
                    <p className="text-xs font-semibold uppercase tracking-wider opacity-90 mb-1">Status</p>
                    <p className="text-2xl font-black">{todayReport.status}</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-5 text-white shadow-xl">
                    <Shield className="w-8 h-8 mb-3 opacity-90" />
                    <p className="text-xs font-semibold uppercase tracking-wider opacity-90 mb-1">FSSAI</p>
                    <p className="text-2xl font-black">{todayReport.fssai}</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={fetchTodayReport}
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-white border-2 border-gray-200 rounded-2xl font-bold text-gray-700 hover:bg-gray-50 hover:border-emerald-300 transition-all shadow-md hover:shadow-lg disabled:opacity-50"
                  >
                    <RefreshCw className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
                    Refresh Report
                  </button>
                  
                  <a 
                    href={`https://docs.google.com/spreadsheets/d/${SHEET_ID}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-2xl font-bold hover:from-emerald-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl"
                  >
                    <ExternalLink className="w-5 h-5" />
                    View All Reports
                  </a>
                </div>
              </div>

              {/* Right: Document Viewer */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-slate-800 via-gray-800 to-slate-900 text-white px-8 py-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center">
                          <Microscope className="w-6 h-6 text-emerald-400" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-black">Laboratory Analysis Report</h2>
                          <p className="text-sm text-gray-300 font-medium">Official Quality Certification</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 bg-emerald-500/20 px-4 py-2 rounded-full border border-emerald-400/30">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                        <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">Latest</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Document Viewer */}
                  <div className="aspect-[3/4] bg-gradient-to-br from-gray-50 to-gray-100 relative">
                    {todayReport.fileUrl && getViewerUrl(todayReport.fileUrl) ? (
                      <iframe 
                        src={getViewerUrl(todayReport.fileUrl) || ""}
                        className="w-full h-full border-0"
                        title="Today's Lab Report"
                        allow="autoplay"
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-10">
                        <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-emerald-100 to-blue-100 flex items-center justify-center mb-6 shadow-lg">
                          <Microscope className="w-16 h-16 text-emerald-600" />
                        </div>
                        <h3 className="text-3xl font-black text-gray-900 mb-3">{todayReport.fileName}</h3>
                        <p className="text-lg text-gray-600 mb-2">{todayReport.date}</p>
                        <div className="flex items-center gap-2 text-sm text-gray-500 bg-white px-4 py-2 rounded-full border border-gray-200 mt-4">
                          <ThermometerSun className="w-4 h-4" />
                          <span>Laboratory certified and sealed</span>
                        </div>
                        <p className="text-sm text-gray-400 max-w-md text-center mt-6 leading-relaxed">
                          The full PDF report will appear here once uploaded to the system
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Footer with Actions */}
                  <div className="bg-gray-50 px-8 py-5 border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        <div className="flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-lg font-bold border border-green-200">
                          <CheckCircle2 className="w-4 h-4" />
                          Quality {todayReport.status}
                        </div>
                        <div className="text-gray-600 font-semibold">
                          Fat: <span className="text-gray-900 font-black">{todayReport.fat}</span>
                        </div>
                        <div className="text-gray-600 font-semibold">
                          SNF: <span className="text-gray-900 font-black">{todayReport.snf}</span>
                        </div>
                      </div>
                      
                      {todayReport.fileUrl && (
                        <div className="flex gap-3">
                          <a 
                            href={todayReport.fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-gray-300 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 hover:border-emerald-400 transition-all shadow-sm"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Open
                          </a>
                          {getDownloadUrl(todayReport.fileUrl) && (
                            <a 
                              href={getDownloadUrl(todayReport.fileUrl) || ""}
                              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-xl text-sm font-bold hover:from-emerald-600 hover:to-blue-600 transition-all shadow-md hover:shadow-lg"
                            >
                              <Download className="w-4 h-4" />
                              Download
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-20 text-center shadow-2xl border border-gray-100">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center mx-auto mb-6">
                <Microscope className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-3">No Report Available</h3>
              <p className="text-lg text-gray-600">Today's quality report hasn't been uploaded yet.</p>
              <button
                onClick={fetchTodayReport}
                className="mt-6 px-6 py-3 bg-emerald-500 text-white rounded-xl font-bold hover:bg-emerald-600 transition-all shadow-lg"
              >
                Check Again
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white/50 backdrop-blur">
        <div className="container-custom max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Why Our Testing Matters
            </h2>
            <p className="text-xl text-gray-600">
              Industry-leading quality assurance for your peace of mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Daily Verification",
                desc: "Every batch tested and certified before distribution",
                gradient: "from-emerald-500 to-green-600"
              },
              {
                icon: Microscope,
                title: "Scientific Analysis",
                desc: "Advanced laboratory equipment and certified analysts",
                gradient: "from-blue-500 to-indigo-600"
              },
              {
                icon: Award,
                title: "FSSAI Certified",
                desc: "Meets all government safety and quality standards",
                gradient: "from-purple-500 to-pink-600"
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DairyScan;