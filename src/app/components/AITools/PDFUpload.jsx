import { useState } from "react";
import { Upload, FileText, X } from "lucide-react";

export default function PDFUpload({ onPDFUploaded, currentFile, onClearFile }) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      setError("Please upload a PDF file");
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      onPDFUploaded(file.name, file);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to process PDF");
    } finally {
      setIsProcessing(false);
      e.target.value = "";
    }
  };

  return (
    <div className="w-full">
      {!currentFile ? (
        <label className="flex flex-col items-center justify-center w-full h-60 border-2 border-dashed border-slate-300 rounded-lg cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <Upload className="w-12 h-12 mb-3 text-slate-400" />
            <p className="mb-2 text-sm text-slate-600">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-slate-500">PDF files only</p>
          </div>
          <input
            type="file"
            className="hidden"
            accept=".pdf"
            onChange={handleFileChange}
            disabled={isProcessing}
          />
        </label>
      ) : (
        <div className="flex items-center justify-between p-4 bg-slate-100 rounded-lg">
          <div className="flex items-center gap-3">
            <FileText className="w-8 h-8 text-blue-600" />
            <div>
              <p className="font-medium text-slate-900">{currentFile}</p>
              <p className="text-sm text-slate-600">Document loaded</p>
            </div>
          </div>
          <button
            onClick={onClearFile}
            className="p-2 text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      {isProcessing && (
        <div className="mt-4 p-3 bg-blue-50 text-blue-700 rounded-lg text-sm">
          Processing PDF...
        </div>
      )}

      {error && (
        <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-lg text-sm">
          {error}
        </div>
      )}
    </div>
  );
}
