export default function FeaturesSection() {
  const features = [
    {
      title: 'Secure Encryption',
      description: 'Protect HTML code with advanced encryption algorithms. Basic encoding method for optimal performance.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      bgColor: 'bg-blue-100',
      borderColor: 'border-blue-200'
    },
    {
      title: 'Public API',
      description: 'Free public API accessible from any programming language. No authentication required.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      bgColor: 'bg-green-100',
      borderColor: 'border-green-200'
    },
    {
      title: 'No CORS Issues',
      description: 'Proper CORS headers enabled for cross-origin requests from any domain.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      bgColor: 'bg-purple-100',
      borderColor: 'border-purple-200'
    },
    {
      title: 'Fast Processing',
      description: 'Process thousands of lines of code in milliseconds with optimized algorithms.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      bgColor: 'bg-orange-100',
      borderColor: 'border-orange-200'
    },
    {
      title: 'Always Online',
      description: 'Hosted on Vercel with 99.9% uptime guarantee and automatic scaling.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      bgColor: 'bg-red-100',
      borderColor: 'border-red-200'
    },
    {
      title: 'Free & Open',
      description: 'Completely free to use with no rate limits for personal and commercial projects.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bgColor: 'bg-indigo-100',
      borderColor: 'border-indigo-200'
    }
  ];

  return (
    <div className="mb-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Features</h2>
        <p className="text-gray-600 mt-2">Everything you need for HTML encryption</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className={`bg-white border ${feature.borderColor} p-5 hover:shadow-md transition-shadow`}
          >
            <div className="flex items-start mb-4">
              <div className={`${feature.bgColor} p-3 mr-4`}>
                {feature.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-lg">{feature.title}</h3>
            </div>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
        }
