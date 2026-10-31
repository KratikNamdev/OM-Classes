
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  ChartNoAxesCombined,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  PartyPopper,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const activities = [
  {
    number: "01",
    icon: BookOpen,
    title: "Regular Weekly Tests",
    description:
      "Regular tests help students revise concepts, practise questions and prepare confidently for examinations.",
    tag: "Learn & Practise",
  },
  {
    number: "02",
    icon: ChartNoAxesCombined,
    title: "Performance Analysis",
    description:
      "Understand academic progress through test reviews, identify improvement areas and focus on better results.",
    tag: "Track Progress",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "Motivational Lectures",
    description:
      "Inspiring sessions that encourage positive thinking, self-confidence, discipline and a growth mindset.",
    tag: "Stay Inspired",
  },
  {
    number: "04",
    icon: GraduationCap,
    title: "College Visits",
    description:
      "Explore college environments and gain exposure that can help students think about their future pathways.",
    tag: "Explore Futures",
  },
  {
    number: "05",
    icon: Users,
    title: "Annual Picnic",
    description:
      "Enjoy memorable moments with classmates, build friendships and take a refreshing break from routine.",
    tag: "Fun Together",
  },
  {
    number: "06",
    icon: PartyPopper,
    title: "Cultural Programs & Farewell",
    description:
      "Celebrate talent, creativity, friendships and important milestones through cultural events and farewell programs.",
    tag: "Create Memories",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function WhyChooseSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8faf7] py-20 sm:py-24 lg:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-32 h-72 w-72 rounded-full bg-green-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-emerald-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#237346]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#185b35]">
              The OM Difference
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#173b29] sm:text-4xl lg:text-5xl">
            More Than Studies.
            <span className="mt-2 block text-[#27804b]">
              An Experience That Matters.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            At OM Coaching Classes, learning goes beyond textbooks. We focus on
            regular practice, academic progress, motivation and experiences
            that make student life more meaningful.
          </p>
        </motion.div>

        {/* Activity cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {activities.map((activity) => {
            const Icon = activity.icon;

            return (
              <motion.div
                key={activity.number}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl border border-green-100 bg-white p-6 shadow-[0_8px_30px_rgba(18,65,39,0.04)] transition-all duration-300 hover:border-green-300 hover:shadow-[0_20px_45px_rgba(18,65,39,0.12)] sm:p-7"
              >
                {/* Hover background */}
                <div className="absolute right-0 top-0 h-28 w-28 translate-x-10 -translate-y-10 rounded-full bg-green-50 transition-transform duration-500 group-hover:scale-[2.2]" />

                <div className="relative">
                  <div className="mb-7 flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf4ec] text-[#185b35] transition-all duration-300 group-hover:bg-[#185b35] group-hover:text-white group-hover:shadow-lg group-hover:shadow-green-900/20">
                      <Icon size={26} strokeWidth={1.8} />
                    </div>

                    <span className="text-sm font-bold tracking-wider text-green-200 transition-colors group-hover:text-[#27804b]">
                      {activity.number}
                    </span>
                  </div>

                  <span className="inline-flex rounded-full bg-green-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#237346]">
                    {activity.tag}
                  </span>

                  <h3 className="mt-4 text-xl font-bold text-[#173b29] transition-colors group-hover:text-[#27804b]">
                    {activity.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {activity.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#185b35]">
                    <span>Growing Together</span>
                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative mt-12 overflow-hidden rounded-3xl bg-[#153b28] p-7 text-white sm:mt-16 sm:p-10 lg:p-12"
        >
          <div className="pointer-events-none absolute -right-12 -top-24 h-64 w-64 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-2 -top-16 h-48 w-48 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-20 left-1/3 h-52 w-52 rounded-full bg-green-400/10 blur-3xl" />

          <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-green-200">
                <Target size={18} />
                <span>Start Your Learning Journey</span>
              </div>

              <h3 className="text-2xl font-bold leading-snug sm:text-3xl lg:text-4xl">
                Every Student Has Potential.
                <span className="block text-green-300">
                  Let's Bring Yours Forward.
                </span>
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-green-50/75 sm:text-base">
                Explore our courses and connect with OM Coaching Classes to
                discuss the right learning path for your child.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
              <Link
                to="/courses"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#153b28] transition-all duration-300 hover:-translate-y-1 hover:bg-green-50"
              >
                Explore Courses
                <ArrowRight size={18} />
              </Link>

              <a
                href="https://wa.me/917000920972?text=Hello%20OM%20Coaching%20Classes%2C%20I%20want%20to%20know%20about%20admissions."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                Enquire Now
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
