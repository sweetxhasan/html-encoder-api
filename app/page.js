'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ApiRequestSection from '../components/ApiRequestSection';
import ApiResponseSection from '../components/ApiResponseSection';
import FeaturesSection from '../components/FeaturesSection';

export default function Home() {
  const handleTestEncode = async () => {
    const input = document.getElementById('testHtmlInput').value;
    const encodedInput = encodeURIComponent(input);
    try {
      const response = await fetch(`/api/encode?html=${encodedInput}`);
      const data = await response.json();
      document.getElementById('testResult').textContent = JSON.stringify(data, null, 2);
    } catch (error) {
      document.getElementById('testResult').textContent = JSON.stringify({
        status: 'error',
        message: 'Failed to encode HTML'
      }, null, 2);
    }
  };

  return (
    <>
      <Header />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Advanced <span className="text-blue-600">HTML Encoder</span> API
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Free public API to encode and protect your HTML code using advanced encryption algorithms.
            Perfect for developers who need to secure their HTML content.
          </p>
          
          <div className="mt-8 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
            <a 
              href="#try-api"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium border border-blue-700 transition-colors"
            >
              Try API Now
            </a>
            <a 
              href="#features"
              className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium border border-gray-300 transition-colors"
            >
              View Features
            </a>
          </div>
        </div>
        
        {/* Try API Section */}
        <div id="try-api" className="mb-12">
          <div className="bg-white border border-gray-300 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Try the API</h2>
            <p className="text-gray-600 mb-6">Enter HTML code to see it encoded:</p>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">HTML Input</label>
              <textarea 
                id="testHtmlInput"
                className="w-full h-32 p-4 border border-gray-300 bg-white font-mono text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter HTML code to test..."
                defaultValue="<div class='test'>Hello World</div>"
              />
            </div>
            
            <button 
              onClick={handleTestEncode}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium border border-blue-700 transition-colors"
            >
              Test Encode
            </button>
            
            <div className="mt-6">
              <label className="block text-gray-700 mb-2">API Response</label>
              <textarea 
                id="testResult"
                readOnly
                className="w-full h-48 p-4 border border-gray-300 bg-gray-900 text-gray-100 font-mono text-sm"
                placeholder="Result will appear here..."
              />
            </div>
          </div>
        </div>
        
        <ApiRequestSection />
        <ApiResponseSection />
        
        <div id="features">
          <FeaturesSection />
        </div>
      </main>
      
      <Footer />
    </>
  );
}
