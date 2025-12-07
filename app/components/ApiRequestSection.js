'use client';

import { useState } from 'react';

export default function ApiRequestSection() {
  const [activeTab, setActiveTab] = useState('curl');
  const [copySuccess, setCopySuccess] = useState(false);

  const apiUrl = `${typeof window !== 'undefined' ? window.location.origin : ''}/api/encode?html=<div>Hello World</div>`;

  const codeExamples = {
    curl: `curl -X GET '${apiUrl}'`,
    javascript: `fetch('${apiUrl}')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`,
    python: `import requests

response = requests.get('${apiUrl}')
data = response.json()
print(data)`,
    nodejs: `const https = require('https');

https.get('${apiUrl}', (response) => {
  let data = '';
  
  response.on('data', (chunk) => {
    data += chunk;
  });
  
  response.on('end', () => {
    console.log(JSON.parse(data));
  });
}).on('error', (error) => {
  console.error('Error:', error);
});`,
    php: `<?php
$response = file_get_contents('${apiUrl}');
$data = json_decode($response, true);
print_r($data);
?>`
  };

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="bg-white border border-gray-300 mb-6">
      <div className="border-b border-gray-300 p-6">
        <h2 className="text-2xl font-bold text-gray-900">API Request Examples</h2>
        <p className="text-gray-600 mt-1">Make GET requests to encode your HTML</p>
      </div>
      
      <div className="p-6">
        {/* Tab Navigation */}
        <div className="flex space-x-1 mb-4 overflow-x-auto">
          {['curl', 'javascript', 'python', 'nodejs', 'php'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-medium text-sm border transition-colors ${
                activeTab === tab 
                  ? 'bg-blue-600 text-white border-blue-700' 
                  : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Code Display */}
        <div className="relative">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-gray-800">
              {activeTab === 'curl' ? 'CURL Request' : `${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Code`}
            </h3>
            <button
              onClick={() => handleCopy(codeExamples[activeTab])}
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
            value={codeExamples[activeTab]}
            className="w-full h-48 p-4 border border-gray-300 bg-gray-900 text-gray-100 font-mono text-sm focus:outline-none"
            spellCheck="false"
          />
        </div>
        
        {/* API Endpoint */}
        <div className="mt-6 p-4 border border-gray-300 bg-gray-50">
          <h3 className="font-bold text-gray-800 mb-2">API Endpoint</h3>
          <div className="flex items-center">
            <div className="bg-blue-100 px-3 py-1 border border-blue-200">
              <span className="text-blue-600 font-medium">GET</span>
            </div>
            <code className="ml-3 text-gray-700 font-mono text-sm break-all">
              /api/encode?html=YOUR_HTML_CODE
            </code>
          </div>
        </div>
      </div>
    </div>
  );
    }
