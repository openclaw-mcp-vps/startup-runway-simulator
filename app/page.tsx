export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Startup Finance Tool
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Model Startup Burn Rate{" "}
          <span className="text-[#58a6ff]">Scenarios</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Simulate cash runway under different hiring plans, revenue projections, and expense changes — powered by Monte Carlo simulations. Know your runway before you run out.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-200"
          >
            Start Modeling — $39/mo
          </a>
          <span className="text-[#8b949e] text-sm">Cancel anytime. No credit card lock-in.</span>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "📊", title: "Hiring Scenario Planner", desc: "Model headcount growth and see exact impact on burn rate month by month." },
            { icon: "🎲", title: "Monte Carlo Engine", desc: "Run thousands of simulations to understand probability distributions of your runway." },
            { icon: "📈", title: "Revenue Projections", desc: "Layer in MRR growth curves and one-time revenue events to stress-test your plan." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center relative">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
            All Inclusive
          </span>
          <div className="text-5xl font-bold text-white mb-1">$39</div>
          <div className="text-[#8b949e] mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited runway scenarios",
              "Monte Carlo simulations (10,000 runs)",
              "Hiring plan modeling",
              "Revenue projection curves",
              "Shareable scenario links",
              "Export to CSV & PDF",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg text-lg transition-colors duration-200"
          >
            Get Started Now
          </a>
          <p className="text-[#8b949e] text-xs mt-4">Secure payment via Lemon Squeezy. Cancel anytime.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the Monte Carlo simulation work?",
              a: "Our engine runs 10,000 randomized simulations using your input ranges for revenue growth, churn, and expenses. It outputs probability distributions showing the likelihood of different runway outcomes — so you see best case, worst case, and everything in between."
            },
            {
              q: "Can I model multiple hiring scenarios side by side?",
              a: "Yes. You can create and compare unlimited named scenarios — for example, 'Aggressive Hiring', 'Conservative Growth', and 'Lean Mode' — all on one dashboard with synchronized charts."
            },
            {
              q: "Is my financial data secure?",
              a: "All calculations run client-side in your browser. Scenario data is encrypted before syncing to our servers. We never sell or share your data, and you can export or delete everything at any time."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#30363d] py-8 text-center text-[#8b949e] text-sm">
        <p>© {new Date().getFullYear()} Startup Runway Simulator. Built for founders who plan ahead.</p>
      </footer>
    </main>
  )
}
