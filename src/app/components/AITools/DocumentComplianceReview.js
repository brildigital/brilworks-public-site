"use client";
import { useState } from "react";
import DocumentComplianceFileUpload from "./DocumentComplianceFileUpload";
import DocumentComplianceDashboard from "./DocumentComplianceDashboard";
import {
  analyzeContract,
  extractTextFromFile,
} from "../lib/documentComplianceReview";

function DocumentComplianceReview() {
  const [activeSection, setActiveSection] = useState("upload");
  const [analysisResult, setAnalysisResult] = useState(null);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileUpload = async (file) => {
    setIsProcessing(true);
    setUploadedFileName(file.name);

    try {
      if (file.type === "text/plain") {
        const text = await file.text();
        const result = await analyzeContract(text);
        setAnalysisResult(result);
      } else {
        const result = await extractTextFromFile(file);
        setAnalysisResult(result);
      }

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

  return (
    <div className="min-h-screen bg-gray-50">
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
            setIsActive={(data) => {
              setActiveSection(data);
              setUploadedFileName("");
            }}
          />
        )}
      </main>
    </div>
  );
}

export default DocumentComplianceReview;
