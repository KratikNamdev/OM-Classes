
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Lightbulb,
  Target,
  Trophy,
} from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  {
    icon: BookOpen,
    title: "Concept-Based Learning",
    description:
      "Focus on understanding subjects clearly and building strong fundamentals.",
  },
  {
    icon: Target,
    title: "Regular Tests & Analysis",
    description:
      "Weekly tests with detailed performance feedback to track student progress.",
  },
  {
    icon: Lightbulb,
    title: "Motivation & Guidance",
    description:
      "Motivational lectures, college visits and activities that encourage growth.",
  },
  {
    icon: Trophy,
    title: "Beyond the Classroom",
    description:
      "Annual picnics, cultural programmes and farewell celebrations for students.",
  },
];

const activities = [
  "Weekly tests and performance feedback",
  "Motivational lectures and goal-setting",
  "College visits for future planning",
  "Cultural programmes and annual picnics",
];

function AnimatedNumber({ value, suffix = "" }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {value}
      {suffix}
    </motion.span>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#e8f1e5]/70 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-[#edf4e8] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-3xl text-center lg:mb-20"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#dce9d9] bg-[#f5f9f3] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#185b35] sm:text-sm">
            <GraduationCap size={16} />
            Get to Know Us
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-[#153b28] sm:text-4xl lg:text-5xl">
            More Than Coaching.
            <span className="mt-2 block text-[#36804b]">
              A Foundation for Life.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
            At Om Coaching Classes, we believe that meaningful learning
            starts with strong concepts, consistent practice and the
            right guidance for every stage of a student's journey.
          </p>
        </motion.div>

        {/* Main two-column layout */}
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left: Image composition */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[540px]"
          >
            <div className="absolute -left-4 -top-4 h-28 w-28 rounded-tl-[35px] border-l-2 border-t-2 border-[#a8c79a] sm:-left-6 sm:-top-6" />

            <div className="group relative overflow-hidden rounded-[28px] bg-[#e9f0e6] shadow-[0_25px_65px_-25px_rgba(21,59,40,0.25)]">
              <img
                src="assets/home/om2.jpeg"
                alt="Students learning and collaborating"
                loading="lazy"
                className="h-[340px] w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 sm:h-[440px] lg:h-[490px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#103923]/65 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">
                  Our Philosophy
                </p>
                <h3 className="mt-3 max-w-sm text-2xl font-bold leading-snug text-white sm:text-3xl">
                  Learn with clarity. Grow with confidence.
                </h3>
              </div>
            </div>

            {/* Floating foundation card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-2 top-7 flex items-center gap-3 rounded-2xl border border-white bg-white/95 p-4 shadow-xl backdrop-blur-md sm:-right-5 sm:top-10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8f1e5] text-[#185b35]">
                <GraduationCap size={24} />
              </div>

              <div>
                <p className="text-lg font-extrabold text-[#153b28]">
                  Since 2016
                </p>
                <p className="text-xs text-gray-500">
                  Learning & guidance
                </p>
              </div>
            </motion.div>

            {/* Bottom floating badge */}
         

            <div className="absolute -bottom-5 -right-3 -z-10 h-28 w-28 rounded-full bg-[#dcebd5] blur-2xl" />
          </motion.div>

          {/* Right: About content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.12 },
              },
            }}
          >
            <motion.div variants={fadeUp}>
              <span className="text-sm font-bold uppercase tracking-[0.17em] text-[#36804b]">
                About Om Coaching Classes
              </span>

              <h3 className="mt-4 text-3xl font-extrabold leading-tight text-[#153b28] sm:text-4xl">
                Helping Students Build a
                <span className="text-[#36804b]"> Brighter Tomorrow.</span>
              </h3>

              <p className="mt-5 text-sm leading-8 text-gray-600 sm:text-base">
                Led by Dr. Amarnath Ojha, Om Coaching Classes has been
                guiding students since 2016. We provide coaching for
                school students and board preparation, with courses
                across MP Board and CBSE curricula.
              </p>

              <p className="mt-4 text-sm leading-8 text-gray-600 sm:text-base">
                Our approach combines academic learning with regular
                assessments, motivational sessions and activities that
                help students develop confidence beyond the classroom.
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div
              variants={fadeUp}
              className="mt-7 grid gap-3 sm:grid-cols-2"
            >
              {activities.map((activity) => (
                <div key={activity} className="flex items-start gap-2.5">
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-[#36804b]"
                  />
                  <span className="text-sm leading-6 text-gray-700">
                    {activity}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              className="mt-9 grid grid-cols-3 divide-x divide-[#dce9d9] rounded-2xl border border-[#e3ece0] bg-[#f7faf5] py-5"
            >
              <div className="px-2 text-center sm:px-4">
                <p className="text-xl font-extrabold text-[#185b35] sm:text-2xl">
                  <AnimatedNumber value="2016" />
                </p>
                <p className="mt-2 text-[10px] leading-4 text-gray-500 sm:text-xs">
                  Foundation Year
                </p>
              </div>

              <div className="px-2 text-center sm:px-4">
                <p className="text-xl font-extrabold text-[#185b35] sm:text-2xl">
                  3rd–12th
                </p>
                <p className="mt-2 text-[10px] leading-4 text-gray-500 sm:text-xs">
                  Classes Covered
                </p>
              </div>

              <div className="px-2 text-center sm:px-4">
                <p className="text-xl font-extrabold text-[#185b35] sm:text-2xl">
                  MP + CBSE
                </p>
                <p className="mt-2 text-[10px] leading-4 text-gray-500 sm:text-xs">
                  Board Options
                </p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-5"
            >
              <Link
                to="/about"
                className="group inline-flex items-center gap-3 rounded-xl bg-[#185b35] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-[#185b35]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#104729] hover:shadow-xl"
              >
                Discover Our Story
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/courses"
                className="group inline-flex items-center gap-2 text-sm font-bold text-[#185b35] transition-colors hover:text-[#36804b]"
              >
                Explore Courses
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Four feature cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="mt-24 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="group rounded-2xl border border-[#e4ece1] bg-white p-6 shadow-[0_8px_30px_-22px_rgba(21,59,40,0.35)] transition-all duration-300 hover:border-[#bdd5b5] hover:shadow-[0_20px_45px_-25px_rgba(21,59,40,0.35)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eaf3e7] text-[#185b35] transition-all duration-300 group-hover:bg-[#185b35] group-hover:text-white">
                  <Icon size={23} />
                </div>

                <h4 className="mt-5 text-lg font-bold text-[#153b28]">
                  {item.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {item.description}
                </p>

                <div className="mt-5 h-1 w-10 rounded-full bg-[#b9d4ae] transition-all duration-300 group-hover:w-16 group-hover:bg-[#36804b]" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};
