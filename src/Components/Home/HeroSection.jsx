
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  GraduationCap,
  Sparkles,
  Trophy,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f8faf7]">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#dcebdc]/60 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-[400px] w-[400px] rounded-full bg-[#e9f0e2] blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(#14532d 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="mx-auto grid min-h-[690px] max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-20">
        {/* LEFT CONTENT */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.13 },
            },
          }}
          className="relative z-10"
        >
          <motion.div variants={fadeUp}>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d7e5d5] bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
              <Sparkles size={15} className="text-[#b18a36]" />

              <span className="text-xs font-bold uppercase tracking-[0.17em] text-[#14532d] sm:text-sm">
                Established in 2016
              </span>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-7 max-w-2xl text-4xl font-extrabold leading-[1.13] tracking-tight text-[#153b28] sm:text-5xl md:text-6xl xl:text-[68px]"
          >
            Building
            <span className="relative mx-2 inline-block text-[#36804b]">
              Bright
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 180 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8C43 1 115 1 177 6"
                  stroke="#b18a36"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <br />
            Minds & Better
            <br />
            <span className="text-[#153b28]">Futures.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-xl text-base leading-8 text-gray-600 sm:text-lg"
          >
            Welcome to Om Coaching Classes, where strong concepts,
            personal guidance and consistent practice help students
            move confidently towards their academic goals.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-5 flex flex-wrap items-center gap-2 text-sm font-medium text-[#315e40]"
          >
            <span className="rounded-lg bg-[#e7f0e5] px-3 py-2">
              MP Board
            </span>
            <span className="rounded-lg bg-[#e7f0e5] px-3 py-2">
              CBSE
            </span>
            <span className="rounded-lg bg-[#e7f0e5] px-3 py-2">
              PCM · PCB · Commerce
            </span>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <motion.a
              href="/courses"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#185b35] px-7 py-4 font-semibold text-white shadow-[0_12px_30px_-12px_rgba(24,91,53,0.65)] transition-shadow duration-300 hover:bg-[#104729] hover:shadow-[0_18px_36px_-12px_rgba(24,91,53,0.55)]"
            >
              Explore Courses
              <ArrowRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </motion.a>

            <motion.a
              href="https://wa.me/917000920972?text=Hello%20Om%20Coaching%20Classes%2C%20I%20want%20to%20know%20about%20admissions."
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-3 rounded-xl border border-[#cddccc] bg-white px-7 py-4 font-semibold text-[#185b35] transition-colors duration-300 hover:border-[#185b35] hover:bg-[#edf5eb]"
            >
              Enquire Now
              <ArrowRight size={18} />
            </motion.a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap gap-x-7 gap-y-4 border-t border-[#dce5d9] pt-6"
          >
            <div>
              <p className="text-2xl font-extrabold text-[#185b35]">
                2016
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Foundation Year
              </p>
            </div>

            <div className="h-12 w-px bg-[#dce5d9]" />

            <div>
              <p className="text-2xl font-extrabold text-[#185b35]">
                10th–12th
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Board Preparation
              </p>
            </div>

            <div className="h-12 w-px bg-[#dce5d9]" />

            <div>
              <p className="text-2xl font-extrabold text-[#185b35]">
                3rd–8th
              </p>
              <p className="mt-1 text-xs text-gray-500">
                School Classes
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, x: 45, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto w-full max-w-[530px] lg:ml-auto"
        >
          {/* Outer frame */}
          <div className="absolute -inset-4 rounded-[36px] border border-[#d5e4d2] sm:-inset-5" />

          <div className="absolute -right-3 -top-5 z-10 h-24 w-24 rounded-full bg-[#c7dfb8]/70 blur-2xl sm:-right-8" />

          {/* Main image */}
          <div className="group relative overflow-hidden rounded-[28px] bg-[#17472c] shadow-[0_30px_80px_-25px_rgba(20,60,35,0.38)]">
            <img
              src="assets/home/om1.jpg"
              alt="Students celebrating their academic journey"
              className="h-[390px] w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 sm:h-[500px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0a2b19]/90 via-[#0a2b19]/10 to-transparent" />

            {/* Logo */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-5 top-5 flex items-center gap-3 rounded-2xl border border-white/50 bg-white/95 p-3 shadow-lg backdrop-blur-md sm:left-7 sm:top-7"
            >
              <img
                src="assets/home/OM logo.jpeg"
                alt="Om Coaching Classes logo"
                className="h-12 w-12 rounded-full object-contain"
              />
              <div>
                <p className="text-sm font-extrabold text-[#153b28]">
                  OM Classes
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Learn. Grow. Achieve.
                </p>
              </div>
            </motion.div>

            {/* Image caption */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#c6e6a7]" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                  Your journey starts here
                </span>
              </div>

              <h2 className="max-w-sm text-2xl font-bold leading-snug sm:text-3xl">
                Every great future begins with a strong foundation.
              </h2>

              <p className="mt-3 text-sm text-white/75">
                Guidance, practice and progress — every step of the way.
              </p>
            </div>
          </div>

          {/* Floating achievement card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-3 top-[45%] z-20 hidden items-center gap-3 rounded-2xl border border-white bg-white/95 p-4 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.25)] backdrop-blur-md sm:flex md:-left-12"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e5f1df] text-[#185b35]">
              <BookOpen size={23} />
            </div>
            <div>
              <p className="text-sm font-bold text-[#153b28]">
                Strong Concepts
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Learn with clarity
              </p>
            </div>
          </motion.div>

          {/* Floating guidance card */}
          <motion.div
            animate={{ y: [0, 9, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute -bottom-5 right-3 z-20 flex items-center gap-3 rounded-2xl border border-white bg-white/95 p-4 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.25)] backdrop-blur-md sm:-right-5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f8edcf] text-[#a77b1d]">
              <Trophy size={23} />
            </div>
            <div>
              <p className="text-sm font-bold text-[#153b28]">
                Learn with Purpose
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Prepare for your future
              </p>
            </div>
          </motion.div>

          {/* Decorative circle */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="pointer-events-none absolute -right-5 -top-8 -z-10 hidden h-24 w-24 rounded-full border border-dashed border-[#8cae83] sm:block"
          >
            <div className="absolute right-2 top-2 h-3 w-3 rounded-full bg-[#b18a36]" />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="relative flex justify-center pb-7"
      >
        <a
          href="#about"
          className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#68816b] transition-colors hover:text-[#185b35]"
        >
          Discover more
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={15} />
          </motion.span>
        </a>
      </motion.div>
    </section>
  );
}
