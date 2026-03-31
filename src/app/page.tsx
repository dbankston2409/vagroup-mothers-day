'use client';

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to CRM/email service
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1A2E] via-[#0F3460] to-[#16213E]">
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center">
          <div className="text-white text-2xl font-bold">The VA Group</div>
          <a
            href="https://ai.thevagroup.com"
            className="text-white/80 hover:text-white transition-colors"
          >
            Learn More
          </a>
        </div>
      </header>

      {/* Main Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-8 shadow-lg">
            🌸 Mother&apos;s Day Special Offer
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Give Mom the Gift of <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Time</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            This Mother&apos;s Day, help the amazing moms in your business reclaim their time.
            Our AI-powered virtual assistants work 24/7 so she doesn&apos;t have to.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-bold text-white mb-2">24/7 Operations</h3>
              <p className="text-white/80">Never miss a lead or customer inquiry, even when you&apos;re spending time with family</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-2">Zero Training Time</h3>
              <p className="text-white/80">AI agents learn your business instantly and start delivering results from day one</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-bold text-white mb-2">Scale Without Stress</h3>
              <p className="text-white/80">One AI agent replaces an entire department at a fraction of the cost</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/20 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              🎁 Claim Your Mother&apos;s Day Special
            </h2>
            <p className="text-white/90 text-lg">
              Book a demo by May 11th and get <span className="font-bold text-pink-400">50% off your first month</span> plus a free custom workflow automation
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-6">✨</div>
              <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
              <p className="text-white/90 text-lg">
                We&apos;ll be in touch within 24 hours to schedule your personalized demo.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-white font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-white font-semibold mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-white font-semibold mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all"
                  placeholder="Your company name"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-4 px-8 rounded-lg text-lg hover:from-pink-600 hover:to-purple-700 transform hover:scale-[1.02] transition-all shadow-lg hover:shadow-xl"
              >
                Schedule My Free Demo 🎯
              </button>

              <p className="text-white/60 text-sm text-center">
                Limited time offer expires May 11, 2026. By submitting, you agree to receive communications from The VA Group.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-8">Why Business Owners Love Us</h3>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">💼</div>
                <div className="text-left">
                  <div className="text-yellow-400 mb-2">★★★★★</div>
                  <p className="text-white/90 italic mb-4">
                    &ldquo;As a working mom and business owner, The VA Group gave me my evenings back.
                    The AI handles everything while I focus on my family.&rdquo;
                  </p>
                  <p className="text-white/70 font-semibold">- Sarah M., E-commerce Owner</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">🏢</div>
                <div className="text-left">
                  <div className="text-yellow-400 mb-2">★★★★★</div>
                  <p className="text-white/90 italic mb-4">
                    &ldquo;We replaced our entire customer service team with one AI agent.
                    Response times dropped from hours to seconds.&rdquo;
                  </p>
                  <p className="text-white/70 font-semibold">- Michael R., SaaS Founder</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-pink-400 mb-2">98%</div>
              <div className="text-white/80">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-white/80">Always Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-400 mb-2">10x</div>
              <div className="text-white/80">ROI Average</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-white/10">
        <div className="text-center">
          <p className="text-white/60 mb-4">
            © 2026 The VA Group. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 text-white/60 text-sm">
            <a href="https://ai.thevagroup.com" className="hover:text-white transition-colors">Website</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
