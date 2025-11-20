import { motion, useScroll, useTransform } from 'framer-motion';

function Card({ children, className = '' }) {
  return (
    <div className={`rounded-3xl bg-white/80 backdrop-blur p-6 shadow-sm ring-1 ring-slate-200 ${className}`}>
      {children}
    </div>
  );
}

function ParallaxShowcase() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1200], [0, -120]);
  const y2 = useTransform(scrollY, [0, 1200], [0, -60]);
  const y3 = useTransform(scrollY, [0, 1200], [0, -20]);

  return (
    <section id="science" className="relative py-28 bg-gradient-to-b from-indigo-50/60 via-fuchsia-50/60 to-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Science-led, sensorial by design</h2>
          <p className="mt-3 text-slate-600">Every formula is backed by peer-reviewed actives at clinically studied levels—balanced for daily comfort and lasting results.</p>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-6 items-start">
          <motion.div style={{ y: y1 }}>
            <Card>
              <h3 className="font-semibold text-slate-900">Clinically dosed actives</h3>
              <p className="mt-2 text-sm text-slate-600">Niacinamide 5%, panthenol, and ceramides maintain equilibrium while gently refining tone and texture.</p>
            </Card>
          </motion.div>

          <motion.div style={{ y: y2 }}>
            <Card>
              <h3 className="font-semibold text-slate-900">Derm-tested for all tones</h3>
              <p className="mt-2 text-sm text-slate-600">Non-comedogenic, fragrance-free, and suitable for sensitive skin. Always cruelty-free and vegan.</p>
            </Card>
          </motion.div>

          <motion.div style={{ y: y3 }}>
            <Card>
              <h3 className="font-semibold text-slate-900">Sustainable materials</h3>
              <p className="mt-2 text-sm text-slate-600">Recyclable glass, FSC paper, and thoughtfully minimized packaging to reduce footprint.</p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ParallaxShowcase;