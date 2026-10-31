
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  GraduationCap,
  Medal,
  Target,
  TrendingUp,
  Trophy,
} from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  {
    icon: Target,
    title: "Regular Assessment",
    description:
      "Frequent tests help students understand their preparation and identify areas that need more attention.",
  },
  {
    icon: TrendingUp,
    title: "Progress & Improvement",
    description:
      "Review performance over time and focus on strengthening concepts through consistent practice.",
  },
  {
    icon: Award,
    title: "Academic Excellence",
    description:
      "Build strong subject knowledge, exam confidence and disciplined study habits throughout the academic year.",
  },
];

const preparationSteps = [
  {
    number: "01",
    title: "Learn the Concepts",
    description: "Understand topics with focused classroom learning.",
  },
  {
    number: "02",
    title: "Practise Regularly",
    description: "Reinforce learning through revision and weekly tests.",
  },
  {
    number: "03",
    title: "Review & Improve",
    description: "Use test feedback to identify improvement areas.",
  },
];

export default function ResultsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-green-50 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-emerald-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-[#f8faf7] px-4 py-2">
            <Trophy size={16} className="text-[#237346]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#185b35]">
              Results Begin With Preparation
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#173b29] sm:text-4xl lg:text-5xl">
            Every Step Forward
            <span className="mt-2 block text-[#27804b]">
              Is Worth Celebrating.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            At OM Coaching Classes, consistent learning, regular assessments
            and feedback help students work towards their academic goals with
            greater confidence.
          </p>
        </motion.div>

        {/* Main results banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="relative overflow-hidden rounded-[2rem] bg-[#153b28] p-7 text-white sm:p-10 lg:p-14"
        >
          <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-5 -top-10 h-60 w-60 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-green-400/10 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
                <GraduationCap size={29} className="text-green-200" />
              </div>

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-200">
                Your Goals. Your Journey.
              </p>

              <h3 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Prepare Today.
                <span className="mt-2 block text-green-300">
                  Achieve Tomorrow.
                </span>
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-green-50/80 sm:text-base sm:leading-8">
                Whether you're preparing for Class 10th or Class 12th
                examinations, make regular practice and a clear study plan
                part of your academic journey.
              </p>

              <Link
                to="/results"
                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#153b28] transition-all duration-300 hover:-translate-y-1 hover:bg-green-50"
              >
                Explore Results
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Preparation roadmap */}
            <div className="rounded-2xl border border-white/15 bg-white/[0.06] p-5 backdrop-blur-sm sm:p-7">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-300/15 text-green-200">
                  <BookOpen size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-white">
                    The Learning Journey
                  </h4>
                  <p className="mt-1 text-xs text-green-100/65">
                    Small steps. Consistent effort.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {preparationSteps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.12,
                    }}
                    className="group flex gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:border-green-300/40 hover:bg-white/[0.08]"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-300/15 text-sm font-bold text-green-200 transition-colors group-hover:bg-green-300 group-hover:text-[#153b28]">
                      {step.number}
                    </span>

                    <div>
                      <h5 className="font-semibold text-white">
                        {step.title}
                      </h5>
                      <p className="mt-1 text-sm leading-6 text-green-50/70">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Three highlights */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.13 } },
          }}
          className="mt-8 grid gap-5 md:grid-cols-3"
        >
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={{
                  hidden: { opacity: 0, y: 22 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5 },
                  },
                }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-green-100 bg-[#f8faf7] p-6 transition-all duration-300 hover:border-green-300 hover:bg-white hover:shadow-xl hover:shadow-green-900/5 sm:p-7"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#185b35] shadow-sm transition-all duration-300 group-hover:bg-[#185b35] group-hover:text-white">
                  <Icon size={23} />
                </div>

                <h4 className="text-lg font-bold text-[#173b29]">
                  {item.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom link */}
        <div className="mt-10 flex justify-center">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 text-sm font-bold text-[#185b35] transition-colors hover:text-[#27804b]"
          >
            Talk to us about admissions
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
