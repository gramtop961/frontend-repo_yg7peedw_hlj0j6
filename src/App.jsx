import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import ParallaxShowcase from './components/ParallaxShowcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Benefits />
      <ParallaxShowcase />

      <section id="ritual" className="py-28 bg-white">
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
          <div className="rounded-3xl bg-slate-900 text-white p-10 sm:p-14 overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_100%_0%,rgba(216,180,254,0.15),transparent_60%)]" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Elevate your routine</h2>
              <p className="mt-3 text-white/80 max-w-2xl">Thoughtful formulas that do more with less. Discover balanced care designed for everyday skin.</p>
              <div className="mt-8">
                <a href="#" className="inline-flex rounded-full bg-white px-6 py-3 text-slate-900 text-sm font-medium shadow hover:bg-slate-100 transition">Explore products</a>
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