'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiTailwindcss,

  SiGooglecloud,

  SiDocker,
  SiKubernetes,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiGraphql,
  SiExpress,
  SiNestjs,
  SiPython,
  SiDjango,
  SiFastapi,
  SiTerraform,
  SiNginx,
  SiRabbitmq,
  SiElasticsearch,
  SiPrometheus,
  SiGrafana,
  SiSentry,
  SiStripe,
  SiSpringboot,
  SiMysql,
} from 'react-icons/si';

/** Service tiles matching Wix template style */
const SERVICES = [
  {
    title: 'Utilities',
    img: 'https://www.ubwest.com/wp-content/uploads/2016/05/about-us-1.jpg',
  },
  {
    title: 'FinTech',
    img: 'https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1920&auto=format&fit=crop',
  },
  {
    title: 'Infrastructure',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1920&auto=format&fit=crop',
  },
  {
    title: 'Analytics',
    img: 'https://images.unsplash.com/photo-1517148815978-75f6acaaf32c?q=80&w=1920&auto=format&fit=crop',
  },
  {
    title: 'Bankruptcy',
    img: 'https://assets2.cbsnewsstatic.com/hub/i/r/2025/01/24/74456914-9e64-4826-bb5a-0398738a86cd/thumbnail/640x427/33c7226dfa2884e8bc8e376e1bf353ae/gettyimages-1737038066.jpg',
  },
  {
    title: 'Sustainability',
    img: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1920&auto=format&fit=crop',
  },
];

/** Real tech icons to show in the animated strip */
const TECH_ICONS = [
  { Icon: SiReact, label: 'React' },
  { Icon: SiNextdotjs, label: 'Next.js' },
  { Icon: SiNodedotjs, label: 'Node.js' },
  { Icon: SiTypescript, label: 'TypeScript' },
  { Icon: SiTailwindcss, label: 'Tailwind' },

  { Icon: SiSpringboot, label: 'Spring Boot' },

  { Icon: SiExpress, label: 'Express' },
  { Icon: SiNestjs, label: 'NestJS' },

  { Icon: SiPostgresql, label: 'PostgreSQL' },
  { Icon: SiMysql, label: 'MySQL' },
  { Icon: SiMongodb, label: 'MongoDB' },
  { Icon: SiRedis, label: 'Redis' },

  { Icon: SiGraphql, label: 'GraphQL' },
  { Icon: SiDocker, label: 'Docker' },
  { Icon: SiKubernetes, label: 'Kubernetes' },
  { Icon: SiTerraform, label: 'Terraform' },
  { Icon: SiNginx, label: 'NGINX' },
  { Icon: SiElasticsearch, label: 'Elastic' },
  { Icon: SiPrometheus, label: 'Prometheus' },
  { Icon: SiGrafana, label: 'Grafana' },
  { Icon: SiSentry, label: 'Sentry' },
  { Icon: SiStripe, label: 'Stripe' },
  { Icon: SiGooglecloud, label: 'GCP' },
]


export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white">
      {/* ────────────────────── WIX-STYLE HERO STRIP ────────────────────── */}
      <section className="relative h-screen overflow-hidden">
        {/* Fixed background image - Wix signature style */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage:
              "url('https://static.vecteezy.com/system/resources/previews/011/547/502/large_2x/businesswoman-handshake-for-teamwork-of-business-merger-and-acquisition-successful-negotiate-hand-shake-two-business-woman-shake-hand-with-partner-to-celebration-partnership-and-business-deal-concept-free-photo.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat',
          }}
        />
        
        {/* Wix-style overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content strip - moves normally with scroll */}
        <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white text-center w-full">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              STABDHA UTILITY INSIGHTS
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 text-blue-100">
              Data-Driven Solutions for Modern Business
            </h2>
            <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-blue-50">
              Certified startup with agile workforce providing modulation and analytics
              with a business-to-business approach
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Our Services
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────── WIX-STYLE PARALLAX STRIP ────────────────────── */}
      <section className="relative h-[80vh] overflow-hidden" style={{ minHeight: '600px' }}>
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1974&auto=format&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        
        {/* Centered content that scrolls normally */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Experience Innovation
            </h2>
            <p className="text-lg md:text-xl text-white/90">
              Transforming business operations through cutting-edge technology solutions
            </p>
          </div>
        </div>
      </section>

    {/* ────────────────────── WIX-STYLE SERVICE GRID WITH FIXED BACKGROUNDS ────────────────────── */}
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
  {SERVICES.map((service, i) => (
    <div key={i} className="relative h-[50vh] min-h-[400px] overflow-hidden group">
      {/* Blurred background - shows default background image with blur */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1974&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(10px)',
        }}
      />

      {/* Service image - only visible on hover */}
      <div
        className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
        style={{
          backgroundImage: `url('${service.img}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all duration-500" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
        {/* SVG ICON CENTERED (big, white) */}
        {service.title === 'Utilities' && (
          <svg className="w-16 h-16 mb-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        )}

        {service.title.toLowerCase() === 'fintech' && (
  <svg className="w-16 h-16 mb-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
  </svg>
)}

        {service.title === 'Infrastructure' && (
          <svg className="w-16 h-16 mb-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        )}

        {(service.title === 'Bankcrupcy' || service.title === 'Bankruptcy') && (
          <svg className="w-16 h-16 mb-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )}

        {service.title === 'Analytics' && (
          <svg className="w-16 h-16 mb-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        )}

        {service.title === 'Sustainability' && (
          <svg className="w-16 h-16 mb-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
          </svg>
        )}

        {/* Title & underline (unchanged) */}
        <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
        <div className="w-12 h-1 bg-white opacity-70 group-hover:opacity-100 group-hover:w-16 transition-all duration-300" />
      </div>
    </div>
  ))}
</section>

         {/* ────────────────────── REAL-ICON TECHNOLOGY STRIP (Hyscaler style) ────────────────────── */}
      <section className="relative py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Technologies We Work With
            </h2>
            <p className="text-gray-600">
              Modern, production-ready stacks that we use to design, build, deploy, and scale.
            </p>
          </div>

          {/* Marquee container */}
          <div className="relative overflow-hidden">
            {/* Row 1 */}
            <div className="flex items-center gap-10 py-6 animate-[marquee_28s_linear_infinite] will-change-transform">
              {[...TECH_ICONS, ...TECH_ICONS].map(({ Icon, label }, idx) => (
                <div key={`r1-${idx}`} className="flex flex-col items-center shrink-0">
                  <Icon
                    title={label}
                    className="text-5xl md:text-6xl text-gray-700 hover:text-blue-600 transition-colors"
                  />
                  <span className="mt-2 text-xs md:text-sm text-gray-600">{label}</span>
                </div>
              ))}
            </div>

            {/* Row 2 (opposite direction) */}
            <div className="flex items-center gap-10 py-6 animate-[marqueeReverse_32s_linear_infinite] will-change-transform">
              {[...TECH_ICONS.slice().reverse(), ...TECH_ICONS.slice().reverse()].map(
                ({ Icon, label }, idx) => (
                  <div key={`r2-${idx}`} className="flex flex-col items-center shrink-0">
                    <Icon
                      title={label}
                      className="text-5xl md:text-6xl text-gray-700 hover:text-emerald-600 transition-colors"
                    />
                    <span className="mt-2 text-xs md:text-sm text-gray-600">{label}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* keyframes (scoped) */}
        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          @keyframes marqueeReverse {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }
        `}</style>
      </section>
      {/* Why Choose Us */}
      <section className="py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose SUIPL?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Certified Startup</h3>
                    <p className="text-gray-600">Officially recognized startup with proven track record and innovative approach.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Data-Driven Approach</h3>
                    <p className="text-gray-600">Advanced analytics and insights to drive informed business decisions.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Agile Workforce</h3>
                    <p className="text-gray-600">Flexible and responsive team adapting quickly to changing business needs.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray to-gray-900 p-8 rounded-2xl">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
                <p className="text-white mb-6">Let us help you optimize your utility management and business analytics.</p>
                <Link 
                  href="/contact" 
                  className="inline-block bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  Contact Us Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* ────────────────────── FINAL CONTENT STRIP WITH ANIMATIONS ────────────────────── */}
<section className="py-60 bg-gradient-to-b from-white via-gray-800 to-black">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl font-bold text-gray-100 mb-4 animate-bounce">
      Transform Your Business Today
    </h2>
    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-pulse">
      Join the growing number of companies leveraging our innovative solutions for sustainable growth.
    </p>
    <Link
      href="/contact"
      className="bg-white text-black px-12 py-4 rounded-lg text-lg font-semibold hover:bg-gray-200 transition-colors inline-block animate-pulse"
    >
      Get Started Now
    </Link>
  </div>
</section>
</div>
  );
}

/* ────────────────────── Small helper component ────────────────────── */

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex items-start">
      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-4 mt-1">
        <svg className="w-3 h-3 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-white/80">{desc}</p>
      </div>
    </div>
  );
}
