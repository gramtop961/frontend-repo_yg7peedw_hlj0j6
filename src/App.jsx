import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import ParallaxShowcase from './components/ParallaxShowcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-indigo-50/40 via-fuchsia-50/30 to-white text-slate-900">
      <Navbar />
      <Hero />
      <Benefits />
      <ParallaxShowcase />

      <section id="ritual" className="py-28 bg-white/60 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10 items-center">
            <div className="lg:col-span-2">
              <div className="relative rounded-3xl bg-gradient-to-br from-fuchsia-100 via-indigo-100 to-white p-1">
                <div className="rounded-[20px] bg-white p-8 ring-1 ring-slate-200">
                  <h2 className="text-3xl font-semibold tracking-tight">Your two-step ritual</h2>
                  <ol className="mt-6 space-y-4 text-slate-700">
                    <li><span className="font-medium text-slate-900">1. Cleanse:</span> Massage two pumps into damp skin, rinse with cool water.</li>
                    <li><span className="font-medium text-slate-900">2. Treat + seal:</span> Apply 3-4 drops of serum, follow with moisturizer to lock in hydration.</li>
                  </ol>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                <h3 className="font-semibold text-slate-900">Real results</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li>• 92% saw improved hydration in 2 weeks</li>
                  <li>• 87% reported calmer skin</li>
                  <li>• 78% noticed refined texture</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="shop" className="py-24 bg-gradient-to-b from-white to-indigo-50/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl relative overflow-hidden ring-1 ring-slate-200 bg-white p-10 sm:p-14">
            <div className="pointer-events-none absolute -top-10 -right-10 h-72 w-72 rounded-full bg-fuchsia-200/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Elevate your routine</h2>
              <p className="mt-3 text-slate-600 max-w-2xl">Thoughtful formulas that do more with less. Discover balanced care designed for everyday skin.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#" className="inline-flex rounded-full bg-slate-900/90 px-6 py-3 text-white text-sm font-medium shadow-sm hover:bg-slate-900 transition">Explore products</a>
                <a href="#benefits" className="inline-flex rounded-full bg-white/90 px-6 py-3 text-slate-900 text-sm font-medium shadow ring-1 ring-slate-200 hover:bg-white transition">See benefits</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;