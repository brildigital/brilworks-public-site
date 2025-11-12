"use client";
import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Loader2,
  MessageSquare,
  Search,
  Shield,
  Upload,
  Zap,
} from "lucide-react";
import ChatInterface from "./ChatInterface";
import PDFUpload from "./PDFUpload";
import { analyzeDocument } from "../lib/pdfKnowldegebasedTool";
import Link from "next/link";
import Heading from "../HTMLComponents/Heading";
import { scrollToSection } from "../lib/commonFunction";
import Cal from "@calcom/embed-react";

function FeatureCard({ icon, title, description, color }) {
  const colorClasses = {
    blue: "bg-blue-50 text-blue-600",
    green: "bg-green-50 text-green-600",
    orange: "bg-orange-50 text-orange-600",
    yellow: "bg-yellow-50 text-yellow-600",
    red: "bg-red-50 text-red-600",
    teal: "bg-teal-50 text-teal-600",
  }[color];

  return (
    <div className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition-shadow border border-slate-200">
      <div
        className={`w-14 h-14 ${colorClasses} rounded-lg flex items-center justify-center mb-4`}
      >
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}

function StepCard({ number, title, description }) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
        {number}
      </div>
      <h3 className="text-2xl font-semibold text-slate-900 mb-4">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}

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
        <div className="container max-w-[1280px] main-section-padding mx-auto">
          <div className="flex flex-col items-center gap-6 mt-20">
            <div className="flex items-center w-fit gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 text-sm font-medium text-blue-400 md:mb-6 mb-3 sm:mx-auto mr-auto">
              <Zap className="w-4 h-4" />
              <span>AI-Powered Document Intelligence</span>
            </div>
            <div>
              <Heading
                type="h1"
                className="!text-white sm:text-center text-left"
                text={
                  <>
                    Transform Your PDFs into&nbsp;
                    <br />
                    <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-themeColor to-themeSecondary">
                      {" "}
                      Interactive Knowledge
                    </span>
                  </>
                }
              />
            </div>
            <p className="text-gray-300 lg:text-xl md:text-lg text-base sm:text-center text-left md:pr-10 pr-0 w-full max-w-4xl">
              Upload your documents and chat with them instantly. Our AI-powered
              chatbot understands context, extracts insights, and answers
              questions from your PDF knowledge base in seconds.
            </p>

            <div className="w-full flex flex-col sm:flex-row gap-4 justify-center my-8">
              <Link
                href="/contact-us/"
                className="sm:w-fit w-full flex items-center justify-center px-8 py-4 bg-themeColor text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Contact Us
              </Link>
              <Link
                href="#pdf-tool"
                className="sm:w-fit w-full flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 transition-all duration-200"
                onClick={(e) => scrollToSection(e, "pdf-tool")}
              >
                Try Now{" "}
                <ArrowRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="flex items-center justify-center gap-8 text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                14-day free trial
              </div>
            </div>
          </div>
        </div>
        <section id="features" className="bg-white">
          <div className="max-w-7xl main-section-padding mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Powerful Features
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Everything you need to unlock the full potential of your
                document library
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Upload className="w-8 h-8" />}
                title="Easy Upload"
                description="Drag and drop PDFs or upload entire folders. Support for documents up to 100MB."
                color="blue"
              />
              <FeatureCard
                icon={<MessageSquare className="w-8 h-8" />}
                title="Natural Conversations"
                description="Chat with your documents using natural language. Get instant, accurate answers."
                color="green"
              />
              <FeatureCard
                icon={<Search className="w-8 h-8" />}
                title="Smart Search"
                description="Semantic search that understands context and meaning, not just keywords."
                color="orange"
              />
              <FeatureCard
                icon={<Zap className="w-8 h-8" />}
                title="Lightning Fast"
                description="Get answers in seconds. Our AI processes and understands documents instantly."
                color="yellow"
              />
              <FeatureCard
                icon={<Shield className="w-8 h-8" />}
                title="Enterprise Security"
                description="Bank-level encryption. Your documents are secure and private, always."
                color="red"
              />
              <FeatureCard
                icon={<FileText className="w-8 h-8" />}
                title="Multi-Format Support"
                description="Works with PDFs, Word docs, presentations, and more. One platform for all."
                color="teal"
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="bg-slate-50">
          <div className="max-w-7xl main-section-padding mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                How It Works
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Get started in three simple steps
              </p>
            </div>
            <div className="grid md:grid-cols-3 md:gap-7">
              <StepCard
                number="1"
                title="Upload Documents"
                description="Simply drag and drop your PDF files into the platform. We'll process them instantly."
              />
              <StepCard
                number="2"
                title="AI Processing"
                description="Our advanced AI analyzes and indexes your documents, understanding context and relationships."
              />
              <StepCard
                number="3"
                title="Ask Questions"
                description="Start chatting with your knowledge base. Get precise answers with source citations."
              />
            </div>
          </div>
        </section>

        <div
          id="pdf-tool"
          className="container max-w-[1280px] mx-auto main-section-padding"
        >
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
        <div className="bg-white">
          <div className="max-w-6xl mx-auto main-section-padding">
            <div className="text-center" id="CTA">
              <div className="bg-blue-50 rounded-2xl pt-8 px-4 md:pb-0 pb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Still have questions?
                </h3>
                <p className="text-gray-600 !mb-6">
                  Can't find the answer you're looking for? Please get in touch
                  with our team.
                </p>
                <div className="w-full">
                  <Cal
                    calLink="vikas-singh-bril/free-consultation"
                    config={{ theme: "light" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIChatbotKnowledgeBased;
