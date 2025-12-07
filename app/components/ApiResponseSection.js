'use client';

import { useState } from 'react';

export default function ApiResponseSection() {
  const [copySuccess, setCopySuccess] = useState(false);
  
  const exampleResponse = {
    "status": "success",
    "message": "HTML encoded successfully",
    "encoded_html": "<script language=javascript>document.write(unescape('%3Cdiv%3EHello%20World%3C/div%3E'))</script>",
    "characters": 74,
    "timestamp": new Date().toISOString()
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(JSON.stringify(exampleResponse, null, 2));
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="bg-white border border-gray-300 mb-6">
      <div className="border-b border-gray-300 p-6">
        <h2 className="text-2xl font-bold text-gray-900">API Response Example</h2>
        <p className="text-gray-600 mt-1">JSON response format for successful encoding</p>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-gray-800">Response Format</h3>
          <button
            onClick={handleCopy}
            className="flex items-center px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-sm font-medium border border-green-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            {copySuccess ? 'Copied!' : 'Copy'}
          </button>
        </div>
        
        <textarea
          readOnly
          value={JSON.stringify(exampleResponse, null, 2)}
          className="w-full h-64 p-4 border border-gray-300 bg-gray-900 text-gray-100 font-mono text-sm focus:outline-none"
          spellCheck="false"
        />
        
        {/* Response Fields Explanation */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-gray-300">
            <h4 className="font-bold text-gray-800 mb-2">status</h4>
            <p className="text-gray-600 text-sm">"success" or "error" indicating the request result</p>
          </div>
          
          <div className="p-4 border border-gray-300">
            <h4 className="font-bold text-gray-800 mb-2">message</h4>
            <p className="text-gray-600 text-sm">Human-readable message about the operation</p>
          </div>
          
          <div className="p-4 border border-gray-300">
            <h4 className="font-bold text-gray-800 mb-2">encoded_html</h4>
            <p className="text-gray-600 text-sm">The encoded HTML output ready for use</p>
          </div>
          
          <div className="p-4 border border-gray-300">
            <h4 className="font-bold text-gray-800 mb-2">characters</h4>
            <p className="text-gray-600 text-sm">Number of characters in the encoded output</p>
          </div>
        </div>
      </div>
    </div>
  );
              }
