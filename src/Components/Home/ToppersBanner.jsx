
import { motion } from "framer-motion";
import { Award, Sparkles } from "lucide-react";

export default function ToppersBanner() {
  return (
    <section className="relative overflow-hidden bg-[#102e20] py-14 sm:py-20 lg:py-24">
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-green-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-emerald-400/10 blur-[110px]" />

      {/* Decorative lines */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-4 sm:px-8 lg:px-12">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="mb-9 text-center sm:mb-12"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-white/[0.06] px-4 py-2 backdrop-blur-sm">
            <Sparkles size={15} className="text-emerald-300" />
            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-emerald-100 sm:text-xs">
              Excellence Worth Celebrating
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Our Pride.
            <span className="mt-2 block bg-gradient-to-r from-emerald-200 via-green-300 to-emerald-100 bg-clip-text text-transparent">
              Our Toppers.
            </span>
          </h2>

          <div className="mx-auto mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-emerald-400/40 sm:w-20" />
            <Award size={21} className="text-emerald-300" />
            <span className="h-px w-12 bg-emerald-400/40 sm:w-20" />
          </div>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-green-50/70 sm:text-base">
            Celebrating the dedication, hard work and achievements of our
            students at OM Coaching Classes.
          </p>
        </motion.div>

        {/* Toppers image frame */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="group relative mx-auto max-w-[1350px]"
        >
          {/* Outer glow */}
          <div className="absolute -inset-1 rounded-[1.5rem] bg-gradient-to-br from-emerald-300/40 via-white/10 to-green-500/30 opacity-60 blur-md transition duration-500 group-hover:opacity-100 sm:rounded-[2rem]" />

          {/* Image container */}
          <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-[#173b29] p-1.5 shadow-2xl shadow-black/30 sm:rounded-[2rem] sm:p-2">
            <div className="overflow-hidden rounded-xl bg-white sm:rounded-[1.5rem]">
              <img
                src="/assets/home/result26.jpeg"
                alt="OM Coaching Classes Toppers 2026"
                loading="lazy"
                className="block h-auto w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.01]"
              />
            </div>
          </div>
        </motion.div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-8 flex items-center justify-center gap-3 text-center sm:mt-10"
        >
          <span className="h-1 w-1 rounded-full bg-emerald-300" />
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-green-100/60 sm:text-xs">
            OM Coaching Classes · Indore
          </p>
          <span className="h-1 w-1 rounded-full bg-emerald-300" />
        </motion.div>
      </div>
    </section>
  );
}
