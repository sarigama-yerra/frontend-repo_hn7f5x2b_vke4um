import Spline from '@splinetool/react-spline'

function Hero({ onGetStarted }) {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/70 to-slate-950 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 py-24 flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/20 backdrop-blur">
          🎨 Comic-style Ad Generator
        </span>
        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
          Create playful, thumb-stopping Facebook ad campaigns
        </h1>
        <p className="mt-4 max-w-2xl text-slate-200">
          Turn your product into a comic-inspired campaign your audience will love. Clear, friendly, and effective.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <button onClick={onGetStarted} className="px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-white font-semibold shadow-lg shadow-sky-500/20 transition">
            Get Started
          </button>
          <a href="#recent" className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold border border-white/20 transition">
            View Recent Campaigns
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
