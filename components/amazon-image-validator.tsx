"use client";

import React, { useState, useRef } from "react";
import { Upload, X, Check, AlertTriangle, FileImage, Image as ImageIcon } from "lucide-react";

export function AmazonImageValidator() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const GUIDELINES = {
    main: {
      minWidth: 1000,
      maxWidth: 10000,
      aspectRatio: 1, // 1:1
      format: ["image/jpeg", "image/png", "image/gif", "image/tiff"],
      background: "white",
    },
    secondary: {
      minWidth: 1000,
      format: ["image/jpeg", "image/png", "image/gif", "image/tiff"],
    },
    store: {
      width: 3000,
      height: 600,
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
      analyzeImage(file);
    }
  };

  const analyzeImage = (file: File) => {
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      const width = img.width;
      const height = img.height;
      const aspectRatio = width / height;
      
      const checks = [
        {
          name: "Resolution (Zoom)",
          passed: width >= 1000 && height >= 1000,
          message: width >= 1000 ? "Zoomable (1000px+)" : "Too small for Zoom",
          type: width >= 1000 ? "success" : "error"
        },
        {
          name: "Main Image Ratio",
          passed: aspectRatio >= 0.9 && aspectRatio <= 1.1, // Approx 1:1 tolerance
          message: (aspectRatio >= 0.9 && aspectRatio <= 1.1) ? "Perfect Square (1:1)" : `Ratio is ${aspectRatio.toFixed(2)}:1 (Main Image needs 1:1)`,
          type: (aspectRatio >= 0.9 && aspectRatio <= 1.1) ? "success" : "warning"
        },
        {
          name: "File Format",
          passed: ["image/jpeg", "image/jpg"].includes(file.type),
          message: file.type.split('/')[1].toUpperCase(),
          type: ["image/jpeg", "image/jpg"].includes(file.type) ? "success" : "warning" // PNG allowed but JPEG preferred
        }
      ];

      setAnalysis({ width, height, checks });
    };
  };

  const reset = () => {
    setSelectedFile(null);
    setPreview(null);
    setAnalysis(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-12">
      {/* Visual Guide Section */}
      <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000000] p-6 md:p-10">
        <h3 className="text-3xl font-heading uppercase tracking-tight text-black mb-8 border-b-4 border-black pb-4">
          Amazon.in Asset Cheat Sheet (2025)
        </h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-zinc-50 border-2 border-black p-4 relative overflow-hidden group hover:shadow-[4px_4px_0px_0px_#FFE500] transition-all">
              <div className="absolute top-2 right-2 bg-black text-white text-xs font-bold px-2 py-1 uppercase">Main Image</div>
              <div className="aspect-square bg-white border-2 border-dashed border-zinc-300 flex items-center justify-center mb-3">
                <ImageIcon className="w-12 h-12 text-zinc-300" />
              </div>
              <h4 className="font-bold text-lg">Main Listing Image</h4>
              <ul className="text-sm space-y-1 mt-2 text-zinc-600">
                <li>• <strong className="text-black">Ratio:</strong> 1:1 (Square)</li>
                <li>• <strong className="text-black">Min Size:</strong> 1000x1000px (Zoom)</li>
                <li>• <strong className="text-black">Recommended:</strong> 2000x2000px</li>
                <li>• <strong className="text-black">Background:</strong> Pure White (RGB 255,255,255)</li>
              </ul>
            </div>

            <div className="bg-zinc-50 border-2 border-black p-4 relative overflow-hidden group hover:shadow-[4px_4px_0px_0px_#FFE500] transition-all">
              <div className="absolute top-2 right-2 bg-black text-white text-xs font-bold px-2 py-1 uppercase">Store</div>
              <div className="w-full h-24 bg-zinc-200 border-2 border-dashed border-zinc-300 flex items-center justify-center mb-3">
                <span className="text-xs font-mono text-zinc-500">3000 x 600 px</span>
              </div>
              <h4 className="font-bold text-lg">Store Header Banner</h4>
              <ul className="text-sm space-y-1 mt-2 text-zinc-600">
                <li>• <strong className="text-black">Size:</strong> 3000w x 600h px</li>
                <li>• <strong className="text-black">Safe Zone:</strong> Center content</li>
                <li>• <strong className="text-black">Format:</strong> JPEG/PNG (Max 5MB)</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
             <div className="bg-zinc-50 border-2 border-black p-4 relative overflow-hidden group hover:shadow-[4px_4px_0px_0px_#FFE500] transition-all">
              <div className="absolute top-2 right-2 bg-black text-white text-xs font-bold px-2 py-1 uppercase">A+ Content</div>
              <div className="space-y-2 mb-3">
                <div className="w-full h-16 bg-zinc-200 border-2 border-dashed border-zinc-300 flex items-center justify-center">
                   <span className="text-[10px] font-mono text-zinc-500">Standard Header (970 x 600)</span>
                </div>
                <div className="grid grid-cols-3 gap-1">
                   <div className="h-12 bg-zinc-200 border-2 border-dashed border-zinc-300"></div>
                   <div className="h-12 bg-zinc-200 border-2 border-dashed border-zinc-300"></div>
                   <div className="h-12 bg-zinc-200 border-2 border-dashed border-zinc-300"></div>
                </div>
              </div>
              <h4 className="font-bold text-lg">A+ (EBC) Modules</h4>
              <ul className="text-sm space-y-1 mt-2 text-zinc-600">
                <li>• <strong className="text-black">Std Header:</strong> 970w x 600h px</li>
                <li>• <strong className="text-black">Std Image:</strong> 300w x 300h px</li>
                <li>• <strong className="text-black">Comparison Chart:</strong> 150w x 300h px</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Validator Tool */}
      <div className="bg-black text-white border-4 border-black shadow-[8px_8px_0px_0px_#FFE500] p-6 md:p-10 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFE500] blur-[100px] opacity-10 pointer-events-none"></div>
         
         <div className="relative z-10">
            <h3 className="text-2xl font-heading uppercase tracking-widest text-[#FFE500] mb-6 flex items-center gap-2">
              <Upload className="w-6 h-6" /> Image Validator
            </h3>

            {!selectedFile ? (
              <div 
                className="border-4 border-dashed border-zinc-700 bg-zinc-900/50 rounded-none p-12 text-center hover:bg-zinc-900 hover:border-[#FFE500] transition-all cursor-pointer group"
                onClick={() => fileInputRef.current?.click()}
              >
                <div className="w-16 h-16 bg-black border-2 border-zinc-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:border-[#FFE500] group-hover:scale-110 transition-all">
                  <Upload className="w-8 h-8 text-zinc-400 group-hover:text-[#FFE500]" />
                </div>
                <h4 className="text-xl font-bold mb-2">Drop your image here</h4>
                <p className="text-zinc-500">or click to browse (Max 10MB)</p>
                <input 
                  type="file" 
                  ref={fileInputRef}
                  onChange={handleFileSelect} 
                  className="hidden" 
                  accept="image/*"
                />
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-zinc-900 border-2 border-zinc-800 p-4 flex items-center justify-center relative">
                  <img src={preview!} alt="Preview" className="max-h-64 object-contain" />
                  <button 
                    onClick={reset}
                    className="absolute top-2 right-2 bg-black border border-zinc-700 p-1 hover:bg-red-600 hover:border-red-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold mb-1">{selectedFile.name}</h4>
                    <p className="text-zinc-400 font-mono text-sm">
                      {analysis?.width} x {analysis?.height} px • {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>

                  <div className="space-y-3">
                    {analysis?.checks.map((check: any, i: number) => (
                      <div key={i} className={`flex items-center justify-between p-3 border-l-4 ${check.type === 'success' ? 'bg-green-900/20 border-green-500' : check.type === 'warning' ? 'bg-yellow-900/20 border-yellow-500' : 'bg-red-900/20 border-red-500'}`}>
                        <div className="flex items-center gap-3">
                          {check.type === 'success' ? <Check className="w-5 h-5 text-green-500" /> : <AlertTriangle className="w-5 h-5 text-yellow-500" />}
                          <span className="font-medium">{check.name}</span>
                        </div>
                        <span className={`text-sm font-bold ${check.type === 'success' ? 'text-green-400' : check.type === 'warning' ? 'text-yellow-400' : 'text-red-400'}`}>
                          {check.message}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <button onClick={reset} className="w-full bg-[#FFE500] text-black font-bold py-3 uppercase tracking-widest hover:bg-white transition-colors">
                    Check Another
                  </button>
                </div>
              </div>
            )}
         </div>
      </div>
    </div>
  );
}
