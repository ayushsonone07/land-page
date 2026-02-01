import React from 'react';
import phoneImage from '../assets/mobile.svg'; // Replace with your actual phone image
import { FaWhatsapp } from "react-icons/fa";

export default function TeamOfAgentsHero(){
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 rounded-3xl mx-4 md:mx-8 md:my-12 h-[550px]">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-white space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Team of AI Agents that work for your Business Growth
            </h1>
            
            <button className="inline-flex justify-center items-center gap-3 bg-white text-gray-900 px-6 py-3 md:px-8 md:py-4 rounded-md font-semibold text-base md:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <span className="flex gap-2 text-md text-black"><FaWhatsapp size={23} /> Book Free Demo</span>
            </button>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-md">
              {/* Glow effect behind phone */}
              <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full scale-90"></div>
              
              {/* Phone Image */}
              <div className="relative z-10">
                <img 
                  src={phoneImage} 
                  alt="Analytics Dashboard on Phone"
                  className="w-full h-auto drop-shadow-2xl"
                />
              </div>

              {/* Optional: If you want to create the mockup without an image */}
              {/* Uncomment below if you don't have a phone image */}
              {/* <PhoneMockup /> */}
            </div>
          </div>

        </div>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-400/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
    </section>
  );
};

// Optional: Phone Mockup Component (use this if you don't have an image)
// const PhoneMockup = () => {
//   return (
//     <div className="relative w-full max-w-[280px] mx-auto">
//       {/* Phone Frame */}
//       <div className="relative bg-black rounded-[3rem] p-3 shadow-2xl">
//         {/* Notch */}
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl z-10"></div>
        
//         {/* Screen */}
//         <div className="bg-white rounded-[2.5rem] overflow-hidden">
//           {/* Status Bar */}
//           <div className="bg-white px-6 py-2 flex justify-between items-center text-xs">
//             <span className="font-semibold">10:30</span>
//             <div className="flex gap-1 items-center">
//               <div className="w-4 h-3 border border-gray-800 rounded-sm relative">
//                 <div className="absolute inset-0.5 bg-gray-800 rounded-sm"></div>
//               </div>
//             </div>
//           </div>

//           {/* Content */}
//           <div className="p-6 bg-gray-50">
//             {/* Header */}
//             <div className="mb-6">
//               <div className="flex items-center gap-2 mb-1">
//                 <div className="w-10 h-10 bg-gray-300 rounded-lg"></div>
//                 <div>
//                   <h3 className="font-bold text-lg">Analytics</h3>
//                   <p className="text-xs text-blue-600">Vashi, Navi Mumbai ▼</p>
//                 </div>
//               </div>
//             </div>

//             {/* Revenue Card */}
//             <div className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
//               <p className="text-xs text-gray-600 mb-1">Your Business</p>
//               <p className="text-sm text-gray-600 mb-2">Revenue</p>
//               <div className="flex items-baseline gap-2">
//                 <span className="text-2xl font-bold">₹2,26,345</span>
//                 <span className="text-xs text-green-600 font-semibold">▲ ₹24,600 last month</span>
//               </div>
//             </div>

//             {/* Stats Grid */}
//             <div className="grid grid-cols-2 gap-4">
//               {/* Total Sales */}
//               <div>
//                 <p className="text-xs text-gray-600 mb-1">Total Sales</p>
//                 <div className="flex items-baseline gap-2">
//                   <span className="text-xl font-bold">310</span>
//                   <span className="text-xs text-green-600">▲ 145</span>
//                 </div>
//               </div>

//               {/* Leads Added */}
//               <div>
//                 <p className="text-xs text-gray-600 mb-1">Leads Added</p>
//                 <div className="flex items-baseline gap-2">
//                   <span className="text-xl font-bold">549</span>
//                   <span className="text-xs text-green-600">▲ 240</span>
//                 </div>
//               </div>

//               {/* New Customers */}
//               <div>
//                 <p className="text-xs text-gray-600 mb-1">New Customers</p>
//                 <div className="flex items-baseline gap-2">
//                   <span className="text-xl font-bold">176</span>
//                   <span className="text-xs text-green-600">▲ 45</span>
//                 </div>
//               </div>

//               {/* Repeat Customers */}
//               <div>
//                 <p className="text-xs text-gray-600 mb-1">Repeat Customers</p>
//                 <div className="flex items-baseline gap-2">
//                   <span className="text-xl font-bold">89</span>
//                   <span className="text-xs text-green-600">▲ 47</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export function HeroCTA() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-400 p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Left Content */}
            <div className="z-10 relative">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Marketing that actually delivers revenue.
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-8 font-medium">
                No stress. No guesswork. Just real growth!
              </p>
              <button className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                Book Free Demo
              </button>
            </div>

            {/* Right Phone Mockup */}
            <div className="relative z-10 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[320px]">
                {/* Phone Frame */}
                <div className="relative bg-black rounded-[40px] p-3 shadow-2xl">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-20"></div>
                  
                  {/* Screen */}
                  <div className="bg-white rounded-[32px] overflow-hidden">
                    {/* Status Bar */}
                    <div className="bg-white px-6 py-3 flex justify-between items-center">
                      <span className="text-xs font-semibold text-gray-900">10:30</span>
                      <div className="flex gap-1 items-center">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
                        </svg>
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/>
                        </svg>
                      </div>
                    </div>

                    {/* Google Business Profile Header */}
                    <div className="px-4 py-3 border-b border-gray-200">
                      <div className="flex justify-between items-center mb-3">
                        <div>
                          <h3 className="font-semibold text-gray-900 text-sm">Google Business Profile</h3>
                          <p className="text-xs text-gray-500">Vashi, Navi Mumbai</p>
                        </div>
                        <button className="p-1">
                          <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                          </svg>
                        </button>
                      </div>
                      
                      {/* Tabs */}
                      <div className="flex gap-4 text-xs">
                        <button className="pb-2 border-b-2 border-blue-600 text-blue-600 font-medium">Overview</button>
                        <button className="pb-2 text-gray-500">Performance</button>
                        <button className="pb-2 text-gray-500">Posts</button>
                        <button className="pb-2 text-gray-500">Reviews</button>
                      </div>
                    </div>

                    {/* Impact Card */}
                    <div className="p-4">
                      <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-4 border border-green-200">
                        <div className="flex items-center gap-2 mb-3">
                          <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                          <span className="text-xs font-semibold text-gray-900">GBP - Grexa AI Impact</span>
                        </div>
                        
                        <div className="flex items-baseline gap-1 mb-3">
                          <span className="text-3xl font-bold text-green-600">43%</span>
                          <span className="text-xs text-gray-600">increase in monthly GBP interaction</span>
                        </div>

                        {/* Stats Bars */}
                        <div className="grid grid-cols-3 gap-3">
                          {/* Views */}
                          <div>
                            <div className="text-xs text-gray-600 mb-1">Views</div>
                            <div className="text-green-600 text-xs font-semibold mb-2">+ 74%</div>
                            <div className="space-y-1">
                              <div className="bg-orange-400 h-16 rounded-t" style={{height: '50px'}}></div>
                              <div className="bg-blue-400 h-20 rounded-t" style={{height: '80px'}}></div>
                            </div>
                            <div className="text-xs text-gray-500 mt-1 text-center">
                              <div>417</div>
                              <div className="text-orange-600">Aug/Sept</div>
                              <div className="mt-1">725</div>
                              <div className="text-blue-600">Sept/Oct</div>
                            </div>
                          </div>

                          {/* Calls */}
                          <div>
                            <div className="text-xs text-gray-600 mb-1">Calls</div>
                            <div className="text-green-600 text-xs font-semibold mb-2">+ 52%</div>
                            <div className="space-y-1">
                              <div className="bg-orange-400 h-16 rounded-t" style={{height: '55px'}}></div>
                              <div className="bg-blue-400 h-20 rounded-t" style={{height: '85px'}}></div>
                            </div>
                            <div className="text-xs text-gray-500 mt-1 text-center">
                              <div>236</div>
                              <div className="text-orange-600">Aug/Sept</div>
                              <div className="mt-1">381</div>
                              <div className="text-blue-600">Sept/Oct</div>
                            </div>
                          </div>

                          {/* Directions */}
                          <div>
                            <div className="text-xs text-gray-600 mb-1">Directions</div>
                            <div className="text-green-600 text-xs font-semibold mb-2">+ 120%</div>
                            <div className="space-y-1">
                              <div className="bg-orange-400 h-16 rounded-t" style={{height: '40px'}}></div>
                              <div className="bg-blue-400 h-20 rounded-t" style={{height: '90px'}}></div>
                            </div>
                            <div className="text-xs text-gray-500 mt-1 text-center">
                              <div>87</div>
                              <div className="text-orange-600">Aug/Sept</div>
                              <div className="mt-1">191</div>
                              <div className="text-blue-600">Sept/Oct</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone Shadow */}
                <div className="absolute inset-0 bg-black/20 blur-2xl -z-10 scale-95"></div>
              </div>
            </div>
          </div>

          {/* Background Decoration Circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-0"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl -z-0"></div>
        </div>
      </div>
    </section>
  );
}