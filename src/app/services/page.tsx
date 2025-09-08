'use client';
import Link from "next/link";

function ParallaxHeader({
  title,
  subtitle,
  image,
  gradient = "from-gray-900/70 to-gray-700/30", // default grey gradient
  fullScreen = false,
  variant = "default", // 'default' (small) or 'hero' (large for "Our Services")
}: {
  title: string;
  subtitle?: string;
  image: string;
  gradient?: string;
  fullScreen?: boolean;
  variant?: "default" | "hero";
}) {
  return (
    <div
      className={`relative ${fullScreen ? "h-screen" : "h-[38vh] min-h-[280px]"} w-full bg-fixed bg-cover bg-center`}
      style={{ backgroundImage: `url('${image}')` }}
    >
      {/* overlay */}
      <div className={`absolute inset-0 bg-gradient-to-r ${gradient}`} />
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center text-white">
        {variant === "hero" ? (
          <>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
            {subtitle ? (
              <p className="text-lg md:text-2xl mb-10 max-w-3xl mx-auto text-blue-50">
                {subtitle}
              </p>
            ) : null}
          </>
        ) : (
          <>
            <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
            {subtitle ? (
              <p className="text-base md:text-lg mt-3 max-w-3xl text-white/90">
                {subtitle}
              </p>
            ) : null}
          </>
        )}
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <div className="bg-white">
      {/* HERO — Parallax (now full screen + grey gradient) */}
      <ParallaxHeader
        fullScreen
        variant="hero" // 👈 only the hero gets the large sizes
        title="Our Services"
        subtitle="Comprehensive solutions for utility management, financial technology, and business analytics."
        image="https://billion10.com/wp-content/uploads/2022/01/modernisation-of-legacy-it-service-management_featured.jpg"
      />

      {/* Utilities Account Management */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <ParallaxHeader
              title="Utilities Account Management"
              subtitle="Streamline operations and reduce costs with end-to-end utility management."
              image="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?cs=srgb&dl=pexels-fauxels-3183150.jpg&fm=jpg"
            />
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Bill Analysis & Insights
                  </h3>
                  <p className="text-gray-600">
                    Receive and analyze utility bills for usage trends and
                    efficiency-enhancing insights.
                  </p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Consolidation & Reporting
                  </h3>
                  <p className="text-gray-600">
                    Consolidate and create periodical totals for outstanding
                    bills with detailed reporting.
                  </p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Payment Management
                  </h3>
                  <p className="text-gray-600">
                    Pay utility bills on behalf of clients with secure and
                    timely processing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Information Technology */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <ParallaxHeader
              title="Financial Information Technology"
              subtitle="Advanced financial analysis and business intelligence solutions."
              image="https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop"
            />
            <div className="p-8">
              {/* Match badge (span) style with other sections */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {[
                  "Financial Analysis Support",
                  "Business Update Reporting",
                  "Accounts Payable Support",
                  "Vendor Database Maintenance",
                  "Trend Analysis",
                ].map((h, i) => (
                  <div key={h} className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 font-bold text-xl">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {h}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {h === "Financial Analysis Support" &&
                        "Comprehensive financial data analysis and reporting"}
                      {h === "Business Update Reporting" &&
                        "Regular business performance updates and insights"}
                      {h === "Accounts Payable Support" &&
                        "Streamlined accounts payable management and analysis"}
                      {h === "Vendor Database Maintenance" &&
                        "Complete vendor information management system"}
                      {h === "Trend Analysis" &&
                        "Advanced trend analysis for strategic planning"}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Support */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <ParallaxHeader
              title="Infrastructure Support"
              subtitle="Comprehensive IT infrastructure support and maintenance services."
              image="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
            />
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  ["Data & Network Monitoring", "24/7 monitoring of data systems and network infrastructure"],
                  ["Programming Support", "Custom programming solutions and development support"],
                  ["System Support", "Complete system administration and technical support"],
                  ["Shadow Team Maintenance", "Dedicated shadow team for ongoing system maintenance"],
                ].map(([h, p], i) => (
                  <div key={h} className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 font-bold text-xl">{i + 1}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {h}
                    </h3>
                    <p className="text-gray-600">{p}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bankruptcy Utility Management */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <ParallaxHeader
              title="Bankruptcy Utility Management"
              subtitle="Specialized utility management during bankruptcy proceedings."
              image="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070&auto=format&fit=crop"
            />
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  ["Vendor Interaction Management", "Manage client interaction with utility vendors upon bankruptcy filing"],
                  ["Account Management", "Open and close accounts on behalf of clients as needed during proceedings"],
                  ["Debt Evaluation & Negotiation", "Evaluate and negotiate amounts owed by clients to utility vendors"],
                ].map(([h, p], i) => (
                  <div key={h} className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 font-bold text-xl">{i + 1}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {h}
                    </h3>
                    <p className="text-gray-600">{p}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Self-Service Analytics */}
      <section className="pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <ParallaxHeader
              title="Self-Service Analytics"
              subtitle="Powerful subscription-based analytics with comprehensive reporting."
              image="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop"
            />
            <div className="p-8">
              {/* Match badge (span) style with other sections */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  ["Full Platform Access", "Complete access to our subscription-based data analytics platform"],
                  ["Dynamic Reporting", "Real-time, actionable reporting with customizable dashboards"],
                  ["Advanced Analytics", "Descriptive and diagnostic analytics for deep insights"],
                  ["Cloud Infrastructure", "Cloud-based infrastructure with monitoring and management"],
                ].map(([h, p], i) => (
                  <div key={h} className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 font-bold text-xl">{i + 1}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {h}
                    </h3>
                    <p className="text-gray-600">{p}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carbon Footprint Reduction */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <ParallaxHeader
              title="Carbon Footprint Reduction"
              subtitle="Sustainable solutions for environmental responsibility and energy efficiency."
              image="https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?q=80&w=2070&auto=format&fit=crop"
            />
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  ["Energy Consumption Reduction", "Strategies and solutions for reducing overall energy consumption"],
                  ["Fossil Fuel Alternatives", "Avoiding fossil fuels significantly through renewable solutions"],
                  ["Sustainability Strategy", "Effective strategy development for long-term sustainability goals"],
                ].map(([h, p], i) => (
                  <div key={h} className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-blue-600 font-bold text-xl">{i + 1}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {h}
                    </h3>
                    <p className="text-gray-600">{p}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — Parallax (grey gradient by default) */}
      <section className="relative py-24 bg-gradient-to-b from-transparent via-gray-800 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4 animate-bounce">
            Ready to Optimize Your Operations?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-pulse">
            Let our expert team help you implement the right solutions for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-black px-10 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-100 transition-colors"
            >
              Get Started Today
            </Link>
            <Link
              href="/about"
              className="border-2 border-gray-300 text-gray-200 px-10 py-3 rounded-lg text-lg font-semibold hover:bg-gray-200 hover:text-gray-900 transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
