import { useState, useEffect } from "react";
import SectionHeading from "@/components/SectionHeading";
import { Scan, CheckCircle, Shield, Zap, FileText, ExternalLink, Clock, Building2, FileSpreadsheet, Download, RefreshCw, AlertCircle } from "lucide-react";

const features = [
  {
    icon: Scan,
    title: "Instant Quality Check",
    description: "Scan your milk instantly to verify its quality and purity levels.",
  },
  {
    icon: Shield,
    title: "Safety Verification",
    description: "Ensure your dairy products meet all safety and hygiene standards.",
  },
  {
    icon: CheckCircle,
    title: "Authenticity Guarantee",
    description: "Verify that you're getting genuine Vizhis Dairy Farm products.",
  },
  {
    icon: Zap,
    title: "Real-Time Results",
    description: "Get instant feedback on your dairy product's quality parameters.",
  },
];

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
  const [reports, setReports] = useState<LabReport[]>([]);
  const [selectedReport, setSelectedReport] = useState<LabReport | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Your Google Sheet ID - Get this from your Google Sheet URL
  // URL looks like: https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit
  const SHEET_ID = "1jwt5czqhBlrovP3B5X46ZPcsPO4kylQMZf1xQeBSdvs";
  
  // The name of your sheet tab (usually "Sheet1" or "Form Responses 1")
  const SHEET_NAME = "Form Responses 1";

  // Fetch reports from Google Sheets
  const fetchReports = async () => {
    try {
      setLoading(true);
      setError(null);

      // Google Sheets API endpoint (no API key needed for public sheets)
      const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${SHEET_NAME}`;
      
      const response = await fetch(url);
      const text = await response.text();
      
      // Google returns JSONP, so we need to extract the JSON
      const jsonMatch = text.match(/google\.visualization\.Query\.setResponse\((.*)\);/);
      if (!jsonMatch) {
        throw new Error("Invalid response from Google Sheets");
      }

      const data = JSON.parse(jsonMatch[1]);
      const rows = data.table.rows;

      // Parse the data (adjust column indices based on your form structure)
      const parsedReports: LabReport[] = rows.slice(1).map((row: any) => {
        const cells = row.c;
        return {
          timestamp: cells[0]?.v || "",
          date: cells[1]?.v || "",
          fat: cells[2]?.v || "",
          snf: cells[3]?.v || "",
          status: cells[4]?.v || "Pass",
          fssai: cells[5]?.v || "Approved",
          fileUrl: cells[6]?.v || "",
          fileName: cells[7]?.v || "Lab Report",
        };
      }).reverse(); // Most recent first

      setReports(parsedReports);
      if (parsedReports.length > 0) {
        setSelectedReport(parsedReports[0]);
      }
    } catch (err) {
      console.error("Error fetching reports:", err);
      setError("Failed to load reports. Please try again.");
      // Fallback to sample data
      const fallbackReports: LabReport[] = [
        {
          date: "02 Feb 2026",
          fat: "4.2%",
          snf: "8.5%",
          status: "Pass",
          fssai: "Approved",
          fileUrl: "",
          fileName: "Lab_Report_Sample.pdf",
          timestamp: new Date().toISOString(),
        },
      ];
      setReports(fallbackReports);
      setSelectedReport(fallbackReports[0]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReports();
    // Auto-refresh every 5 minutes to get latest reports
    const interval = setInterval(fetchReports, 5 * 60 * 1000);
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
    <>
      {/* Hero Section with GST/CIN */}
      <section className="pt-28 pb-12 bg-gradient-to-br from-emerald-50 via-white to-green-50">
        <div className="container-custom">
          {/* Legal Numbers - Top Right */}
          <div className="flex justify-end mb-4">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-xs bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm">
              <div className="flex items-center gap-1.5">
                <span className="text-gray-600">GST:</span>
                <span className="font-mono font-semibold text-gray-900">33ABCDE1234F1Z5</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-gray-600">CIN:</span>
                <span className="font-mono font-semibold text-gray-900">U01100TZ2024PTC012345</span>
              </div>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold mb-4">
              <FileText className="w-4 h-4" />
              DairyScan
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Verify Quality <span className="text-emerald-600">Instantly</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Use DairyScan to verify the quality and authenticity of your Vizhis Dairy products. 
              Our advanced testing ensures you always get the best.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
                <Shield className="w-4 h-4 text-emerald-600" />
                <span className="font-medium text-gray-700">FSSAI Certified</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span className="font-medium text-gray-700">Daily Lab Tested</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
                <Building2 className="w-4 h-4 text-emerald-600" />
                <span className="font-medium text-gray-700">Govt. Registered</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionHeading
            badge="How It Works"
            title="Smart Quality Verification"
            subtitle="DairyScan provides instant quality verification for all our dairy products."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-100 to-green-100 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Lab Reports Display */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold mb-4">
              <FileSpreadsheet className="w-4 h-4" />
              Lab Reports
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Daily Quality Reports
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
              View our daily laboratory test results and quality assurance reports.
            </p>
            
            {/* Refresh Button */}
            <button
              onClick={fetchReports}
              disabled={loading}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              Refresh Reports
            </button>
          </div>

          {error && (
            <div className="max-w-2xl mx-auto mb-8 bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
              <div>
                <p className="font-semibold text-yellow-900 mb-1">Connection Issue</p>
                <p className="text-sm text-yellow-800">{error}</p>
              </div>
            </div>
          )}

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left: Report Display */}
            <div className="flex-1 w-full">
              {loading && reports.length === 0 ? (
                <div className="bg-white rounded-2xl p-16 text-center shadow-lg border border-gray-200">
                  <RefreshCw className="w-12 h-12 text-emerald-600 animate-spin mx-auto mb-4" />
                  <p className="text-gray-600">Loading reports...</p>
                </div>
              ) : selectedReport ? (
                <>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                    <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-6 py-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5" />
                        <div>
                          <span className="font-bold text-base block">Daily Lab Report</span>
                          <span className="text-xs text-white/80">{selectedReport.date}</span>
                        </div>
                      </div>
                      <span className="text-xs bg-white/20 px-3 py-1 rounded-full font-medium">Latest</span>
                    </div>
                    
                    {/* Document Viewer Area */}
                    <div className="aspect-[4/3] bg-gray-100 relative">
                      {selectedReport.fileUrl && getViewerUrl(selectedReport.fileUrl) ? (
                        <iframe 
                          src={getViewerUrl(selectedReport.fileUrl) || ""}
                          className="w-full h-full border-0"
                          title="Daily Lab Report"
                          allow="autoplay"
                        />
                      ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500">
                          <FileSpreadsheet className="w-20 h-20 mb-4 text-emerald-400" />
                          <p className="text-base font-semibold text-gray-900">{selectedReport.fileName || "Lab Report"}</p>
                          <p className="text-sm mt-2 text-gray-600">{selectedReport.date}</p>
                          <p className="text-xs mt-4 text-gray-500 max-w-xs text-center px-4">
                            Document preview will appear here once file is uploaded
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="p-5 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        <span className="flex items-center gap-2 text-green-600 font-semibold">
                          <CheckCircle className="w-4 h-4" />
                          {selectedReport.status}
                        </span>
                        <span className="text-gray-600">
                          Fat: <strong className="text-gray-900">{selectedReport.fat}</strong>
                        </span>
                        <span className="text-gray-600">
                          SNF: <strong className="text-gray-900">{selectedReport.snf}</strong>
                        </span>
                      </div>
                      
                      {selectedReport.fileUrl && (
                        <div className="flex gap-3">
                          <a 
                            href={selectedReport.fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Open
                          </a>
                          {getDownloadUrl(selectedReport.fileUrl) && (
                            <a 
                              href={getDownloadUrl(selectedReport.fileUrl) || ""}
                              className="text-sm flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium"
                            >
                              <Download className="w-4 h-4" />
                              Download
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Upload Form Link */}
                  <div className="mt-6 bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-emerald-600 mt-0.5" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">Daily Report Upload</h4>
                        <p className="text-sm text-gray-600 mb-3">
                          Lab staff can upload daily reports using our secure form. Reports appear here automatically.
                        </p>
                        <a 
                          href="https://docs.google.com/forms/d/e/1FAIpQLSdwkBcmRq2UwFqCyUPBMFvrtRSFBWqBVeh_dyAYh7OrGres4Q/viewform"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Upload Today's Report
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="bg-white rounded-2xl p-16 text-center shadow-lg border border-gray-200">
                  <FileSpreadsheet className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600">No reports available yet</p>
                </div>
              )}
            </div>

            {/* Right: Recent Reports List */}
            <div className="w-full lg:w-96 space-y-4">
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2 text-gray-900">
                <Clock className="w-5 h-5 text-emerald-600" />
                Recent Reports ({reports.length})
              </h3>
              
              {reports.length > 0 ? (
                <>
                  {reports.slice(0, 10).map((report, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedReport(report)}
                      className={`w-full text-left bg-white p-4 rounded-xl shadow-sm border-2 transition-all duration-300 ${
                        selectedReport?.date === report.date
                          ? 'border-emerald-500 shadow-md'
                          : 'border-gray-200 hover:border-emerald-200'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-semibold text-gray-900">{report.date}</span>
                        <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                          report.status.toLowerCase() === 'pass' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {report.status}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-sm mb-3">
                        <div>
                          <span className="text-gray-500 text-xs block">Fat Content</span>
                          <span className="text-gray-900 font-semibold">{report.fat}</span>
                        </div>
                        <div>
                          <span className="text-gray-500 text-xs block">SNF</span>
                          <span className="text-gray-900 font-semibold">{report.snf}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-emerald-600 font-medium">
                        <FileText className="w-3 h-3" />
                        View Document
                      </div>
                    </button>
                  ))}

                  <a 
                    href={`https://docs.google.com/spreadsheets/d/${SHEET_ID}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 text-center text-sm font-semibold text-emerald-700 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors border-2 border-emerald-200 hover:border-emerald-300"
                  >
                    View All Reports in Spreadsheet
                  </a>
                </>
              ) : (
                <div className="bg-white p-8 rounded-xl text-center border-2 border-dashed border-gray-300">
                  <FileSpreadsheet className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-sm text-gray-500">No reports uploaded yet</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Scan Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-10 shadow-lg text-center border border-emerald-100">
              <div className="w-20 h-20 rounded-2xl bg-white shadow-md flex items-center justify-center mx-auto mb-6">
                <Scan className="w-10 h-10 text-emerald-600" />
              </div>
              
              <h2 className="text-3xl font-bold mb-3 text-gray-900">
                DairyScan Coming Soon
              </h2>
              
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Advanced scanning system for instant quality verification via mobile app. 
                Scan QR codes on products to access detailed quality reports.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold shadow-lg hover:bg-emerald-700 hover:shadow-xl transition-all"
                >
                  Get Notified
                </a>
                <button className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-gray-300 font-semibold hover:bg-white transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-7 h-7 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-gray-900">Quality Assurance</h3>
                <p className="text-sm text-gray-600">Strict laboratory testing performed daily on every batch</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Shield className="w-7 h-7 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-gray-900">Safety First</h3>
                <p className="text-sm text-gray-600">Zero contamination risk with sealed processing</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                <Zap className="w-7 h-7 text-purple-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1 text-gray-900">Instant Results</h3>
                <p className="text-sm text-gray-600">Real-time verification and transparent reporting</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DairyScan;