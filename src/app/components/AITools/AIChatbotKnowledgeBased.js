"use client";
import React, { useState } from "react";
import { FileText, Loader2 } from "lucide-react";
import ChatInterface from "./ChatInterface";
import PDFUpload from "./PDFUpload";
import { analyzeDocument } from "../lib/pdfKnowldegebasedTool";

const AIChatbotKnowledgeBased = () => {
  const [currentFile, setCurrentFile] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const [documentAnalysis, setDocumentAnalysis] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisError, setAnalysisError] = useState(null);

  const handlePDFUploaded = async (fileName, file) => {
    setCurrentFile(fileName);
    setPdfFile(file);
    setIsAnalyzing(true);
    setAnalysisError(null);
    setDocumentAnalysis("");

    try {
      const analysis = await analyzeDocument(file);
      setDocumentAnalysis(analysis);
    } catch (error) {
      setAnalysisError(
        error instanceof Error ? error.message : "Failed to analyze document"
      );
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleClearFile = () => {
    setCurrentFile(null);
    setPdfFile(null);
    setDocumentAnalysis("");
    setAnalysisError(null);
  };
  return (
    <>
      <div className="min-h-screen bg-navyBlue">
        <div className="container max-w-[1280px] mx-auto main-section-padding">
          <div className="bg-white rounded-xl md:mt-10 mt-20 shadow-lg overflow-hidden">
            <div className="bg-themeColor md:p-6 p-4">
              <div className="flex items-center gap-3">
                <FileText className="w-8 h-8 text-white" />
                <div>
                  <h1 className="text-2xl font-bold text-white">
                    PDF Knowledge Base
                  </h1>
                  <p className="text-blue-100 text-sm">
                    Upload a PDF and ask questions
                  </p>
                </div>
              </div>
            </div>

            <div className={!pdfFile ? "px-6 py-10" : "md:p-6 p-4"}>
              {!pdfFile ? (
                <div className="max-w-2xl mx-auto">
                  <PDFUpload
                    onPDFUploaded={handlePDFUploaded}
                    currentFile={currentFile}
                    onClearFile={handleClearFile}
                  />
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-1">
                    <PDFUpload
                      onPDFUploaded={handlePDFUploaded}
                      currentFile={currentFile}
                      onClearFile={handleClearFile}
                    />

                    <div className="mt-4 p-4 bg-slate-50 rounded-lg">
                      <h3 className="font-semibold text-slate-900 mb-3">
                        Document Analysis
                      </h3>
                      {isAnalyzing ? (
                        <div className="flex items-center gap-2 text-blue-600">
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span className="text-sm">Analyzing document...</span>
                        </div>
                      ) : analysisError ? (
                        <div className="text-sm text-red-600">
                          {analysisError}
                        </div>
                      ) : documentAnalysis ? (
                        <div className="text-sm text-slate-700 whitespace-pre-wrap max-h-96 overflow-y-auto pr-4">
                          {documentAnalysis}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="lg:col-span-2">
                    <div className="bg-slate-50 rounded-lg h-[600px] flex flex-col">
                      {isAnalyzing ? (
                        <div className="flex items-center justify-center h-full">
                          <div className="text-center">
                            <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
                            <p className="text-slate-600">
                              Analyzing your document...
                            </p>
                          </div>
                        </div>
                      ) : (
                        <ChatInterface pdfFile={pdfFile} />
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIChatbotKnowledgeBased;
