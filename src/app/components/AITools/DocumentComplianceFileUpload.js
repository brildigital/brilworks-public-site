import { useState, useCallback } from "react";
import { Upload, File, AlertCircle, CheckCircle, Shield } from "lucide-react";

// interface FileUploadProps {
//   onFileUpload: (file: File) => void;
//   isProcessing: boolean;
// }

export default function DocumentComplianceFileUpload({
  onFileUpload,
  isProcessing,
}) {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      handleFileSelect(file);
    }
  }, []);

  const handleFileSelect = (file) => {
    const allowedTypes = [
      "text/plain",
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      alert("Please upload a PDF or Word document.");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      // 10MB limit
      alert("File size must be less than 10MB.");
      return;
    }

    setUploadedFile(file);
    onFileUpload(file);
  };

  const handleFileInputChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelect(e.target.files[0]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Upload Your Contract
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Upload any contract, NDA, or legal document to get instant risk
          analysis, compliance checking, and plain-language summaries.
        </p>
      </div>

      <div
        className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
          dragActive
            ? "border-blue-500 bg-blue-50"
            : "border-gray-300 hover:border-gray-400"
        } ${isProcessing ? "opacity-50 pointer-events-none" : ""}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="bg-blue-50 rounded-full p-3">
              <Upload className="h-8 w-8 text-themeColor" />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              Drop your document here, or browse
            </h3>
            <p className="text-gray-500 mb-4">
              Supports PDF, DOC, and DOCX files text under ~15k for better
              result
            </p>
          </div>

          <input
            type="file"
            accept=".pdf,.doc,.docx,.txt"
            onChange={handleFileInputChange}
            className="hidden"
            id="fileInput"
            disabled={isProcessing}
          />

          <label
            htmlFor="fileInput"
            className="inline-flex items-center px-6 py-3 bg-themeColor text-white font-medium rounded-lg hover:bg-themeColor/90 transition-colors cursor-pointer disabled:opacity-50"
          >
            Choose File
          </label>
        </div>

        {uploadedFile && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <File className="h-5 w-5 text-gray-600" />
                <div>
                  <p className="font-medium text-gray-900">
                    {uploadedFile.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
              {isProcessing ? (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                  <span className="text-sm text-gray-600">Processing...</span>
                </div>
              ) : (
                <CheckCircle className="h-5 w-5 text-green-600" />
              )}
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center p-4">
          <div className="bg-green-50 rounded-full p-3 w-fit mx-auto mb-3">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <h4 className="font-medium text-gray-900 mb-2">Instant Analysis</h4>
          <p className="text-sm text-gray-600">
            Get results in under 30 seconds with AI-powered document parsing
          </p>
        </div>

        <div className="text-center p-4">
          <div className="bg-yellow-50 rounded-full p-3 w-fit mx-auto mb-3">
            <AlertCircle className="h-6 w-6 text-yellow-600" />
          </div>
          <h4 className="font-medium text-gray-900 mb-2">Risk Detection</h4>
          <p className="text-sm text-gray-600">
            Automatically identifies hidden penalties and problematic clauses
          </p>
        </div>

        <div className="text-center p-4">
          <div className="bg-blue-50 rounded-full p-3 w-fit mx-auto mb-3">
            <Shield className="h-6 w-6 text-blue-600" />
          </div>
          <h4 className="font-medium text-gray-900 mb-2">Compliance Check</h4>
          <p className="text-sm text-gray-600">
            Validates against your company policies and industry standards
          </p>
        </div>
      </div>
    </div>
  );
}
