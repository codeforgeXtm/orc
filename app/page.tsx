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
        
        <div className="flex items-center gap-3">
          {/* Social media icons removed from nav */}
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
         
          {/* Social media icons added to footer */}
          <div className="flex justify-center gap-4 mt-6">
            <Link href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" fill="currentColor"/>
              </svg>
            </Link>
            <Link href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.05 1.577c-.393-.016-.784.08-1.117.235-.484.186-4.92 1.902-9.41 3.64-2.26.873-4.518 1.746-6.256 2.415-1.737.67-3.045 1.168-3.114 1.192-.46.16-1.082.362-1.61.984-.133.155-.267.354-.335.628s-.038.622.095.895c.265.547.714.773 1.244.976.53.204 1.525.573 2.021.76.496.187 1.091.413 1.776.413.281 0 .586-.057.91-.152.32-.095 3.9-1.716 4.075-1.798.497-.237.953-.477 1.266-.293.313.184.326.661.183.968-.144.308-1.96 2.046-2.99 3.054-.105.105-.214.192-.313.26-.428.297-.863.472-.915 1.123-.033.432.28.895.625 1.134l.199.13c.416.276.85.563 1.265.796.433.231.862.418 1.233.56.376.14.71.245.947.31.428.12.896.19 1.371.19.475 0 .941-.057 1.335-.157.394-.1.706-.236.891-.387.186-.15.35-.323.48-.508.138-.19.249-.393.321-.604.075-.217.142-.475.147-.745.005-.272-.027-.557-.147-.836-.12-.28-.322-.56-.598-.779-.276-.219-.705-.378-1.128-.51-.424-.133-2.377-.661-2.95-.823-.572-.163-1.34-.385-1.984-.602-.644-.217-1.242-.425-1.621-.58-.378-.155-.573-.266-.697-.359-.124-.093-.187-.188-.25-.295-.062-.107-.105-.223-.108-.342-.002-.12.04-.293.21-.425.171-.132.459-.238.789-.327.332-.09 8.093-3.154 8.712-3.413.62-.26 1.39-.568 1.845-.658.456-.09.659-.103.953.062.293.165.402.386.532.63.13.245.225.492.286.74.06.246.082.494.082.75 0 .26.005.538.41.81.405.271 1.13.335 1.43.37.297.035 1.569.122 3.34-.966 1.771-1.09 1.985-2.609 2.119-3.373.133-.765.073-1.538.027-1.938-.047-.4-.303-.877-.661-1.188-.359-.31-.794-.463-1.228-.485zM18.87 6.426c-.84.417-1.897.478-2.417.498-.52.02-.798-.033-.926-.113-.128-.08-.264-.214-.396-.41-.133-.198-.229-.464-.304-.755-.073-.293-.48-.648-.48-.922 0-.274.012-.428-.058-.678-.07-.25-.166-.513-.334-.81-.168-.299-.354-.554-.659-.776-.303-.222-.78-.319-1.308-.24-.528.081-1.023.215-1.685.506-.66.29-8.27 3.306-8.747 3.485-.477.179-.825.237-1.276.415-.452.177-1.069.506-1.192.708-.123.202-.262.531-.085.934.176.403.523.743 1.08.967.555.223 1.264.51 2.007.805.743.295 3.075.94 4.674 1.425 1.603.487 3.235.973 4.149 1.258.915.285 1.55.49 2.114.441.564-.49.983-.266 1.228-.382.244-.115.44-.214.623-.296.181-.084.374-.167.531-.204.158-.037.371-.065.442.175.07.24-.017.533-.07.87-.053.336-.217.703-.585 1.135-.368.433-.774.793-1.17 1.137-.396.344-3.61 3.431-4.157 3.946-.548.515-1.17 1.082-1.31 1.612-.14.53-.127.864.147 1.184.274.32.697.504 1.24.65.545.146 1.987.532 2.023.54.037.006 2.132.446 3.398.704 1.266.258 2.103.388 2.772.448.67.06 1.162.049 1.562-.099.4-.146.713-.38.938-.63.225-.246.367-.517.437-.8.07-.281.067-.55.038-.806-.03-.256-.088-.499-.193-.713-.104-.215-.385-.515-.687-.778-.303-.26-.615-.484-.947-.683-.33-.199-3.06-1.804-3.74-2.204-.68-.4-1.32-.779-1.892-1.172-.572-.392-1.078-.8-1.416-1.234-.337-.436-.467-.88-.386-1.393.08-.516.307-.792.643-1.044.337-.25.73-.43 1.126-.607.394-.176 3.488-1.532 4.884-2.14 1.394-.607 2.699-1.17 3.687-1.61.988-.439 1.657-.726 1.828-.826.173-.099.363-.226.43-.414.065-.187.027-.381-.063-.564-.089-.183-.268-.364-.451-.487-.183-.123-.363-.183-.58-.226-.217-.043-.476-.061-.718-.02-.24.038-.434.098-.63.153-.195.055-7.225 3.153-8.065 3.57z" fill="currentColor"/>
              </svg>
            </Link>
            <Link href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill="currentColor"/>
              </svg>
            </Link>
            <Link href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="currentColor"/>
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
} 