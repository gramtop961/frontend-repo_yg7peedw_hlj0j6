import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform } from 'framer-motion';

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -120]);
  const rotate = useTransform(scrollY, [0, 800], [0, 12]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0.8]);

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white">
      <div className="absolute inset-0">
        <motion.div style={{ y, rotate, opacity }} className="h-full w-full">
          <Spline style={{ width: '100%', height: '100%' }} scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" />
        </motion.div>
      </div>

      <div className="relative z-10 flex min-h-[100svh] items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs text-slate-700 ring-1 ring-slate-200 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500" />Powered by clean science
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-slate-900">
              Iridescent skincare for luminous, balanced skin
            </h1>
            <p className="mt-5 text-slate-600 text-base sm:text-lg max-w-xl">
              A minimalist ritual designed to strengthen barrier function and restore glow. Dermatologist-tested. Fragrance-free. Results you can feel.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a href="#shop" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-white text-sm font-medium shadow-sm hover:bg-slate-800 transition-colors">Shop the line</a>
              <a href="#science" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-slate-900 text-sm font-medium shadow ring-1 ring-slate-200 hover:bg-slate-50 transition-colors">Learn more</a>
            </div>
          </div>
          <div className="hidden lg:block" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}

export default Hero;