import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ORC Protocol Roadmap',
  description: 'View the 8-week development roadmap for the ORC Protocol on Bitcoin',
};

export default function RoadmapPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">ORC Protocol 8-Week Roadmap</h1>

          <div className="flex flex-col items-center relative">
            {/* Timeline line */}
            <div className="absolute h-full w-[2px] bg-[#3b187a] left-1/2 -translate-x-1/2 z-0 md:block hidden"></div>

            {/* Weeks 1-2 */}
            <div className="relative mb-32 w-full z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              {/* Timeline dot for Weeks 1-2 */}
              <div className="w-8 h-8 bg-[#3b82f6] rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 md:block hidden border-4 border-[#1c103c]"></div>
              
              {/* Weeks 1-2 Box */}
              <div className="md:col-span-1 border border-white/10 rounded-lg overflow-hidden">
                <div 
                  className="h-full w-full relative flex items-center justify-center p-12" 
                  style={{ 
                    background: 'linear-gradient(to bottom, #3b187a 0%, #1c103c 100%)',
                    boxShadow: '0 0 30px rgba(59, 24, 122, 0.3)'
                  }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-white z-10">Weeks 1-2</h2>
                  <div className="absolute inset-0 bg-[#1c103c] opacity-20">
                    <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
                      {Array.from({ length: 144 }).map((_, i) => (
                        <div key={i} className="border border-[#3b187a]/30"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Weeks 1-2 Content */}
              <div className="md:col-span-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white">Foundation</h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                    <p className="text-white/80">Core protocol interfaces and specifications</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                    <p className="text-white/80">ORC20 token implementation</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                    <p className="text-white/80">Bitcoin transaction utilities</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                    <p className="text-white/80">OP_RETURN encoding/decoding</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                    <p className="text-white/80">Database schema design</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                    <p className="text-white/80">Protocol design documentation</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Weeks 3-4 */}
            <div className="relative mb-32 w-full z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              {/* Timeline dot for Weeks 3-4 */}
              <div className="w-8 h-8 bg-[#3b82f6] rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 md:block hidden border-4 border-[#1c103c]"></div>
              
              {/* Weeks 3-4 Box */}
              <div className="md:col-span-1 border border-white/10 rounded-lg overflow-hidden order-1 md:order-2">
                <div 
                  className="h-full w-full relative flex items-center justify-center p-12" 
                  style={{ 
                    background: 'linear-gradient(to bottom, #3b187a 0%, #1c103c 100%)',
                    boxShadow: '0 0 30px rgba(59, 24, 122, 0.3)'
                  }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-white z-10">Weeks 3-4</h2>
                  <div className="absolute inset-0 bg-[#1c103c] opacity-20">
                    <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
                      {Array.from({ length: 144 }).map((_, i) => (
                        <div key={i} className="border border-[#3b187a]/30"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Weeks 3-4 Content */}
              <div className="md:col-span-1 order-2 md:order-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white">Core Implementation</h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                    <p className="text-white/80">ORC721 NFT implementation</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                    <p className="text-white/80">Indexer database implementation</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                    <p className="text-white/80">Basic indexing functionality</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                    <p className="text-white/80">Transaction validation</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                    <p className="text-white/80">Core protocol tests</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                    <p className="text-white/80">Internal testnet deployments</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Weeks 5-6 */}
            <div className="relative mb-32 w-full z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              {/* Timeline dot for Weeks 5-6 */}
              <div className="w-8 h-8 bg-[#3b82f6] rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 md:block hidden border-4 border-[#1c103c]"></div>
              
              {/* Weeks 5-6 Box */}
              <div className="md:col-span-1 border border-white/10 rounded-lg overflow-hidden">
                <div 
                  className="h-full w-full relative flex items-center justify-center p-12" 
                  style={{ 
                    background: 'linear-gradient(to bottom, #3b187a 0%, #1c103c 100%)',
                    boxShadow: '0 0 30px rgba(59, 24, 122, 0.3)'
                  }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-white z-10">Weeks 5-6</h2>
                  <div className="absolute inset-0 bg-[#1c103c] opacity-20">
                    <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
                      {Array.from({ length: 144 }).map((_, i) => (
                        <div key={i} className="border border-[#3b187a]/30"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Weeks 5-6 Content */}
              <div className="md:col-span-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white">Testing & Optimization</h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                    <p className="text-white/80">Performance optimization</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                    <p className="text-white/80">Comprehensive test suite</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                    <p className="text-white/80">Security audit</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                    <p className="text-white/80">Bug fixes and refinements</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                    <p className="text-white/80">Documentation improvements</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                    <p className="text-white/80">Protocol specification finalization</p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Weeks 7-8 */}
            <div className="relative mb-16 w-full z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              {/* Timeline dot for Weeks 7-8 */}
              <div className="w-8 h-8 bg-[#3b82f6] rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 md:block hidden border-4 border-[#1c103c]"></div>
              
              {/* Weeks 7-8 Box */}
              <div className="md:col-span-1 border border-white/10 rounded-lg overflow-hidden order-1 md:order-2">
                <div 
                  className="h-full w-full relative flex items-center justify-center p-12" 
                  style={{ 
                    background: 'linear-gradient(to bottom, #3b187a 0%, #1c103c 100%)',
                    boxShadow: '0 0 30px rgba(59, 24, 122, 0.3)'
                  }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-white z-10">Weeks 7-8</h2>
                  <div className="absolute inset-0 bg-[#1c103c] opacity-20">
                    <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
                      {Array.from({ length: 144 }).map((_, i) => (
                        <div key={i} className="border border-[#3b187a]/30"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Weeks 7-8 Content */}
              <div className="md:col-span-1 order-2 md:order-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white">Integration & Launch</h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                    <p className="text-white/80">API implementation</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                    <p className="text-white/80">Developer documentation</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                    <p className="text-white/80">SDK for ecosystem developers</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                    <p className="text-white/80">Lightning Network integration</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                    <p className="text-white/80">Public testnet deployments</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                    <p className="text-white/80">Production deployments</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-4 mt-1 flex-shrink-0 w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                    <p className="text-white/80">Community onboarding</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 