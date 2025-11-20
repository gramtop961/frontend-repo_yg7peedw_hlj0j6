import { motion, useScroll, useTransform } from 'framer-motion';
import { Leaf, Droplet, Sparkles } from 'lucide-react';

function Feature({ icon: Icon, title, desc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      className="rounded-2xl bg-white/80 backdrop-blur p-6 shadow-sm ring-1 ring-slate-200">
      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-fuchsia-100 to-indigo-100 flex items-center justify-center text-slate-600">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-600 text-sm">{desc}</p>
    </motion.div>
  );
}

function Benefits() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section id="benefits" className="relative py-24 bg-gradient-to-b from-white to-indigo-50/60">
      <motion.div style={{ y }} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          <Feature icon={Leaf} title="Barrier-first" desc="Ceramide and niacinamide complex supports skin barrier for resilient, calm skin." />
          <Feature icon={Droplet} title="Deep hydration" desc="Multi-weight hyaluronic acid delivers plump, lasting moisture without heaviness." />
          <Feature icon={Sparkles} title="Refined glow" desc="Gentle actives smooth texture and even tone for a subtle, healthy radiance." />
        </div>
      </motion.div>
    </section>
  );
}

export default Benefits;