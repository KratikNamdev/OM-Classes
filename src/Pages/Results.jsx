
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  GraduationCap,
  Medal,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  {
    icon: Award,
    title: "Academic Excellence",
    description:
      "Encouraging students to achieve their academic goals through focused learning.",
  },
  {
    icon: BookOpen,
    title: "Concept-Based Learning",
    description:
      "Building strong subject knowledge with clear concepts and regular practice.",
  },
  {
    icon: GraduationCap,
    title: "Dedicated Guidance",
    description:
      "Supporting every student with the right academic direction and mentorship.",
  },
  {
    icon: Trophy,
    title: "Aiming Higher",
    description:
      "Motivating students to improve continuously and work towards better results.",
  },
];

export default function Results() {
  return (
    <main className="overflow-hidden bg-[#f8faf7]">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#123c28] py-20 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-green-400/10 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-emerald-300/10 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">
              <Trophy size={17} className="text-yellow-300" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-green-100">
                Results & Achievements
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              Every Result Has
              <span className="mt-2 block text-[#a7e6b9]">
                A Story of Hard Work.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-green-100/80 sm:text-base">
              At OM Coaching Classes, every achievement reflects dedication,
              consistent effort and the right academic guidance. We take pride
              in being a part of our students' learning journeys.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#result-showcase"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-[#185b35] transition-all duration-300 hover:-translate-y-1 hover:bg-green-50"
              >
                View Result
                <ArrowRight size={18} />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-white/10"
              >
                Enquire Now
                <ArrowUpRightIcon />
              </Link>
            </div>
          </motion.div>

          {/* Hero bottom decorative elements */}
          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              {
                icon: Users,
                title: "Student Focused",
                subtitle: "Individual learning journey",
              },
              {
                icon: BookOpen,
                title: "Consistent Practice",
                subtitle: "Learning through preparation",
              },
              {
                icon: Medal,
                title: "Academic Growth",
                subtitle: "Progress with every step",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.12 }}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-green-200">
                    <Icon size={23} />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-green-100/65">
                      {item.subtitle}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* RESULT IMAGE SHOWCASE */}
      <section
        id="result-showcase"
        className="relative py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2">
              <Sparkles size={16} className="text-[#237346]" />
              <span className="text-xs font-bold uppercase tracking-[0.17em] text-[#185b35]">
                Our Achievement
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight text-[#173b29] sm:text-4xl lg:text-5xl">
              Celebrating Our
              <span className="mt-2 block text-[#27804b]">
                Students' Success.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              A glimpse of our students' academic achievements and the
              dedication behind every milestone.
            </p>
          </motion.div>

          {/* Main Result Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="group relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-green-100 bg-white p-2 shadow-[0_25px_80px_rgba(21,59,40,0.12)] sm:p-4"
          >
            {/* Top label */}
            <div className="mb-3 flex flex-wrap items-center justify-between gap-3 px-2 py-2 sm:px-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#185b35] text-white">
                  <Trophy size={20} />
                </div>

                <div>
                  <p className="text-sm font-bold text-[#173b29]">
                    OM Coaching Classes
                  </p>
                  <p className="text-xs text-slate-500">
                    Academic Achievement
                  </p>
                </div>
              </div>

              <span className="rounded-full border border-green-100 bg-green-50 px-4 py-2 text-xs font-bold text-[#185b35]">
                Result 2026
              </span>
            </div>

            {/* Image */}
            <div className="overflow-hidden rounded-2xl bg-[#f1f5f1]">
              <img
                src="/assets/home/result26.jpeg"
                alt="OM Coaching Classes student results and academic achievements 2026"
                loading="lazy"
                className="h-auto w-full object-contain transition-transform duration-700 group-hover:scale-[1.015]"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 px-2 py-4 sm:px-4">
              <p className="text-xs font-medium text-slate-500">
                Proud moments. Dedicated efforts. Brighter futures.
              </p>

              <div className="flex items-center gap-2 text-xs font-bold text-[#185b35]">
                <Award size={16} />
                Celebrating Excellence
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ACHIEVEMENT HIGHLIGHTS */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-14 max-w-2xl text-center"
          >
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#27804b]">
              The Journey Behind Success
            </span>

            <h2 className="mt-4 text-3xl font-bold text-[#173b29] sm:text-4xl">
              More Than Just
              <span className="block text-[#27804b]">Academic Results.</span>
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              We believe success is built through strong fundamentals,
              regular assessment, mentorship and continuous improvement.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -7 }}
                  className="rounded-2xl border border-green-100 bg-[#f8faf7] p-6 transition-all duration-300 hover:border-green-200 hover:bg-white hover:shadow-xl hover:shadow-green-950/5"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#185b35] text-white">
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-[#173b29]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#f8faf7] px-5 py-20 sm:px-8 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#123c28] px-6 py-14 text-center sm:px-12 sm:py-16 lg:px-20"
        >
          <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-green-300/10 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-emerald-300/10 blur-[90px]" />

          <div className="relative">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-green-200">
              <GraduationCap size={28} />
            </div>

            <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Your Success Story
              <span className="block text-[#a7e6b9]">
                Starts With The Right Guidance.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-green-100/75 sm:text-base">
              Give your child the right environment to learn, grow and
              achieve their academic goals with OM Coaching Classes.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-[#185b35] transition-all duration-300 hover:-translate-y-1 hover:bg-green-50"
            >
              Start Your Journey
              <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

function ArrowUpRightIcon() {
  return <ArrowUpRight size={18} />;
}
