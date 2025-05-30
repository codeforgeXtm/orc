import Link from 'next/link';
import Logo from './components/Logo';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <nav className="w-full max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Logo />
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
          {/* All navigation links removed */}
        </div>
        
        <div className="flex items-center gap-4">
          {/* Social media icons in top right */}
          <Link href="https://github.com/mattdev071/ORC-assets" target="_blank" className="w-8 h-8 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="currentColor"/>
            </svg>
          </Link>
          <Link href="#" target="_blank" className="w-8 h-8 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" fill="currentColor"/>
            </svg>
          </Link>
        </div>
      </nav>
      
      <div className="w-full max-w-6xl mx-auto px-6 flex flex-col items-center justify-center relative py-12 md:py-16">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#3b187a] opacity-20 blur-[120px]"></div>
        </div>
        
        <div className="text-center relative z-10 mb-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-3 tracking-wide">
            Scale Bitcoin,<br />
            Simple OP_RETURN Contract,<br />
            Turing Complete L2 Compatible
          </h1>
          <p className="text-white/70 text-base md:text-lg mb-8">
            Elevating Bitcoin&apos;s Network with Layer 2 Decentralization
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/whitepaper" className="button button-secondary flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13z" fill="currentColor"/>
              </svg>
              Whitepaper
            </Link>
          </div>
        </div>
      </div>
      
      {/* Roadmap Section */}
      <div className="w-full py-16 md:py-24 bg-[#0a061a]/60">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">ORC Protocol 8-Week Roadmap</h2>

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
      </div>
      
      <footer className="w-full py-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center text-white/50 text-sm">
            © {new Date().getFullYear()} ORC Protocol. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
} 