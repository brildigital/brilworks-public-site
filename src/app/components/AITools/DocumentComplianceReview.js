"use client";
import { useState } from "react";
// import FileUpload from "./components/FileUpload";
// import AnalysisDashboard from "./components/AnalysisDashboard";
// import { analyzeContract, extractTextFromFile } from "./services/geminiService";
import { FileText, Menu, Shield, X } from "lucide-react";
import DocumentComplianceFileUpload from "./DocumentComplianceFileUpload";
import DocumentComplianceDashboard from "./DocumentComplianceDashboard";
import {
  analyzeContract,
  extractTextFromFile,
} from "../lib/documentComplianceReview";

// interface AnalysisResult {
//   summary: string;
//   keyPoints: string[];
//   riskItems: Array<{
//     id: string,
//     type: "high" | "medium" | "low",
//     title: string,
//     description: string,
//     clause: string,
//     recommendation: string,
//   }>;
//   clauseBreakdown: Array<{
//     category: string,
//     status: "compliant" | "warning" | "risk",
//     details: string,
//     recommendation?: string,
//   }>;
//   complianceScore: number;
// }

function DocumentComplianceReview() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "upload", label: "Upload", icon: FileText },
    { id: "dashboard", label: "Dashboard", icon: Shield },
  ];
  const [activeSection, setActiveSection] = useState("upload");
  const [analysisResult, setAnalysisResult] = useState(null);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileUpload = async (file) => {
    setIsProcessing(true);
    setUploadedFileName(file.name);

    try {
      // Extract text from the uploaded file
      const documentText = await extractTextFromFile(file);

      // Analyze the document with Gemini API
      const result = await analyzeContract(documentText);

      setAnalysisResult(result);
      setActiveSection("dashboard");
    } catch (error) {
      console.error("Error processing document:", error);
      alert(
        "Error processing document. Please try again or check your API key configuration."
      );
    } finally {
      setIsProcessing(false);
    }
  };

  const handleNavigate = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/*
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 rounded-lg p-2">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">ContractAI</h1>
                <p className="text-xs text-gray-500">Compliance Checker</p>
              </div>
            </div>

            
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigate(item.id)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="space-y-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        handleNavigate(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`flex items-center space-x-2 w-full px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        activeSection === item.id
                          ? "bg-blue-50 text-blue-700"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </header>*/}

      {/* Main View */}
      <main className="py-8 px-4 sm:px-6 lg:px-8 sxl:mt-20 mt-14">
        {activeSection === "upload" && (
          <DocumentComplianceFileUpload
            onFileUpload={handleFileUpload}
            isProcessing={isProcessing}
          />
        )}

        {activeSection === "dashboard" && (
          <DocumentComplianceDashboard
            analysisResult={analysisResult}
            fileName={uploadedFileName}
          />
        )}
      </main>
    </div>
  );
}

export default DocumentComplianceReview;
