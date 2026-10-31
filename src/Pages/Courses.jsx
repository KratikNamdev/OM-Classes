
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Atom,
  BookOpen,
  Calculator,
  CheckCircle2,
  FlaskConical,
  GraduationCap,
  MessageCircle,
  School,
  Sparkles,
  Wallet,
} from "lucide-react";
import { Link } from "react-router-dom";

const whatsappLink =
  "https://wa.me/917000920972?text=Hello%20OM%20Coaching%20Classes%2C%20I%20want%20to%20enquire%20about%20courses%20and%20fees.";

const seniorCourses = [
  {
    name: "PCM",
    fullName: "Physics, Chemistry & Mathematics",
    icon: Calculator,
    accent: "from-emerald-500 to-green-800",
    description:
      "For students focusing on Physics, Chemistry and Mathematics.",
  },
  {
    name: "PCB",
    fullName: "Physics, Chemistry & Biology",
    icon: FlaskConical,
    accent: "from-teal-500 to-emerald-800",
    description:
      "For students focusing on Physics, Chemistry and Biology.",
  },
  {
    name: "Commerce",
    fullName: "Commerce Stream",
    icon: Wallet,
    accent: "from-lime-600 to-green-900",
    description:
      "Academic coaching for students pursuing the Commerce stream.",
  },
];

const schoolCourses = [
  {
    className: "Class 9th",
    subtitle: "All Subjects",
    icon: BookOpen,
    description:
      "Build strong concepts and develop consistent study habits before board classes.",
    fee: "₹9,000",
    details: "Annual coaching fee",
  },
  {
    className: "Classes 3rd–8th",
    subtitle: "All Subjects",
    icon: School,
    description:
      "Strengthen school-level fundamentals with learning support across subjects.",
    fee: "₹8,000",
    details: "Annual coaching fee",
  },
];

const benefits = [
  "Regular weekly tests",
  "Performance analysis",
  "Motivational lectures",
  "College visits",
  "Cultural programs and activities",
];

function SectionBadge({ children }) {
  return (
    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 shadow-sm">
      <span className="h-2 w-2 rounded-full bg-[#27804b]" />
      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#185b35] sm:text-xs">
        {children}
      </span>
    </div>
  );
}

function FeeLine({ board, price }) {
  return (
    <div className="flex items-center justify-between gap-3 border-t border-green-100 py-3.5">
      <span className="text-sm font-medium text-slate-600">{board}</span>
      <span className="whitespace-nowrap text-base font-extrabold text-[#185b35]">
        {price}
      </span>
    </div>
  );
}

function EnquiryLink({ children = "Enquire for Admission" }) {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#185b35] px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#237346] hover:shadow-lg hover:shadow-green-900/15"
    >
      {children}
      <ArrowUpRight
        size={17}
        className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
      />
    </a>
  );
}

export default function Courses() {
  return (
    <main className="overflow-hidden bg-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#102e20]">
        <div className="pointer-events-none absolute -left-32 -top-20 h-96 w-96 rounded-full bg-green-500/15 blur-[110px]" />
        <div className="pointer-events-none absolute -bottom-24 -right-20 h-96 w-96 rounded-full bg-emerald-300/10 blur-[110px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-10 lg:py-24">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2">
              <Sparkles size={15} className="text-green-300" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-green-100">
                Courses & Annual Fees
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Your Goals.
              <span className="mt-2 block text-green-300">
                Our Guidance.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-8 text-green-50/75 sm:text-base">
              Explore coaching for Classes 3rd to 12th at OM Coaching Classes,
              Indore. Find the right class, board and stream with a clear
              annual fee structure.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#class12"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#153b28] transition-all duration-300 hover:-translate-y-1 hover:bg-green-50"
              >
                Explore Class 12th
                <ArrowRight size={18} />
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                <MessageCircle size={17} />
                Ask About Fees
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/15 pt-6 text-sm text-green-50/75">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-300" />
                MP Board
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-300" />
                CBSE
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green-300" />
                Since 2016
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="absolute -inset-3 rounded-[2rem] border border-white/10" />

            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-2 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=85"
                alt="Student studying and preparing for examinations"
                fetchPriority="high"
                className="h-[300px] w-full rounded-2xl object-cover sm:h-[390px] lg:h-[420px]"
              />

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/30 bg-white/95 p-4 shadow-xl backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-7 sm:p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eaf4ec] text-[#185b35]">
                    <GraduationCap size={25} />
                  </div>
                  <div>
                    <p className="font-bold text-[#173b29]">
                      Build a Strong Foundation
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-600 sm:text-sm">
                      Learn, practise and improve consistently.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CLASS 12 - FIRST AND MOST PROMINENT */}
      <section id="class12" className="scroll-mt-24 bg-[#f5f8f4] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
          >
            <div>
              <SectionBadge>Senior Secondary · Board Classes</SectionBadge>

              <h2 className="text-3xl font-extrabold tracking-tight text-[#173b29] sm:text-4xl lg:text-5xl">
                Class 12th
                <span className="mt-2 block text-[#27804b]">
                  Choose Your Stream.
                </span>
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                Explore PCM, PCB and Commerce coaching options for MP Board
                and CBSE students.
              </p>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-xl border border-green-200 bg-white px-4 py-3 text-sm font-semibold text-[#185b35]">
              <GraduationCap size={19} />
              Annual fees displayed below
            </div>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            {seniorCourses.map((course, index) => {
              const Icon = course.icon;

              return (
                <motion.article
                  key={course.name}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  whileHover={{ y: -8 }}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-green-100 bg-white shadow-[0_10px_35px_rgba(21,59,40,0.05)] transition-all duration-300 hover:border-green-300 hover:shadow-2xl hover:shadow-green-950/10"
                >
                  <div className={`h-2 bg-gradient-to-r ${course.accent}`} />

                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#eaf4ec] text-[#185b35] transition-all duration-300 group-hover:bg-[#185b35] group-hover:text-white">
                        <Icon size={30} strokeWidth={1.8} />
                      </div>

                      <span className="rounded-full bg-green-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#237346]">
                        Class 12th
                      </span>
                    </div>

                    <h3 className="mt-6 text-3xl font-extrabold text-[#173b29]">
                      {course.name}
                    </h3>

                    <p className="mt-2 text-sm font-semibold text-[#27804b]">
                      {course.fullName}
                    </p>

                    <p className="mt-3 min-h-[48px] text-sm leading-7 text-slate-600">
                      {course.description}
                    </p>

                    <div className="mt-6 rounded-2xl border border-green-100 bg-[#f8faf7] px-4">
                      <div className="flex items-center justify-between py-4">
                        <span className="text-xs font-semibold text-slate-500">
                          MP Board
                        </span>
                        <span className="text-xl font-extrabold text-[#185b35]">
                          ₹15,000
                        </span>
                      </div>

                      <div className="flex items-center justify-between border-t border-green-100 py-4">
                        <span className="text-xs font-semibold text-slate-500">
                          CBSE
                        </span>
                        <span className="text-xl font-extrabold text-[#185b35]">
                          ₹20,000
                        </span>
                      </div>

                      <p className="border-t border-green-100 py-3 text-center text-[11px] font-medium text-slate-500">
                        Annual coaching fee
                      </p>
                    </div>

                    <div className="mt-auto pt-6">
                      <EnquiryLink>Enquire for {course.name}</EnquiryLink>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLASS 10 - SECOND */}
      <section id="class10" className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid items-start gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-14">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <SectionBadge>Board Examination Preparation</SectionBadge>

              <h2 className="text-3xl font-extrabold tracking-tight text-[#173b29] sm:text-4xl lg:text-5xl">
                Class 10th
                <span className="mt-2 block text-[#27804b]">
                  Your Next Big Step.
                </span>
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
                Build confidence for board examinations through concept
                learning, regular practice and revision.
              </p>

              <div className="mt-7 flex items-center gap-3 rounded-2xl border border-green-100 bg-[#f5f8f4] p-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#185b35] shadow-sm">
                  <BookOpen size={23} />
                </div>
                <div>
                  <p className="font-bold text-[#173b29]">
                    Choose Your Board
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    MP Board or CBSE
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  board: "MP Board",
                  fee: "₹10,000",
                  subtitle: "Class 10th",
                  number: "01",
                },
                {
                  board: "CBSE",
                  fee: "₹15,000",
                  subtitle: "Class 10th",
                  number: "02",
                },
              ].map((item, index) => (
                <motion.article
                  key={item.board}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  whileHover={{ y: -7 }}
                  className="group overflow-hidden rounded-3xl border border-green-100 bg-white shadow-[0_10px_35px_rgba(21,59,40,0.05)] transition-all duration-300 hover:border-green-300 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between bg-[#153b28] px-6 py-5 text-white">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-green-200">
                        {item.subtitle}
                      </p>
                      <h3 className="mt-1 text-2xl font-extrabold">
                        {item.board}
                      </h3>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-green-200">
                      <GraduationCap size={25} />
                    </div>
                  </div>

                  <div className="p-6 sm:p-7">
                    <p className="text-sm text-slate-500">
                      Annual coaching fee
                    </p>

                    <p className="mt-2 text-4xl font-extrabold tracking-tight text-[#185b35]">
                      {item.fee}
                    </p>

                    <div className="my-6 h-px bg-green-100" />

                    <div className="space-y-3">
                      {[
                        "Concept-focused learning",
                        "Regular weekly tests",
                        "Performance analysis",
                      ].map((feature) => (
                        <div key={feature} className="flex items-center gap-2.5">
                          <CheckCircle2
                            size={17}
                            className="shrink-0 text-[#27804b]"
                          />
                          <span className="text-sm text-slate-600">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-7">
                      <EnquiryLink>Enquire for {item.board}</EnquiryLink>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLASS 9 AND CLASSES 3-8 */}
      <section className="bg-[#f5f8f4] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <SectionBadge>Build Your Foundation</SectionBadge>

            <h2 className="text-3xl font-extrabold text-[#173b29] sm:text-4xl lg:text-5xl">
              Strong Basics.
              <span className="mt-2 block text-[#27804b]">
                Better Learning.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Explore coaching options for middle and secondary school classes.
            </p>
          </motion.div>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {schoolCourses.map((course, index) => {
              const Icon = course.icon;

              return (
                <motion.article
                  key={course.className}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  whileHover={{ y: -7 }}
                  className="group overflow-hidden rounded-3xl border border-green-100 bg-white shadow-sm transition-all duration-300 hover:border-green-300 hover:shadow-xl hover:shadow-green-950/5"
                >
                  <div className="flex items-center justify-between bg-gradient-to-r from-[#153b28] to-[#237346] p-6 text-white sm:p-7">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-green-200">
                        {course.subtitle}
                      </p>
                      <h3 className="mt-2 text-2xl font-extrabold sm:text-3xl">
                        {course.className}
                      </h3>
                    </div>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-green-200 transition-transform duration-300 group-hover:rotate-6">
                      <Icon size={27} />
                    </div>
                  </div>

                  <div className="p-6 sm:p-7">
                    <p className="min-h-[56px] text-sm leading-7 text-slate-600">
                      {course.description}
                    </p>

                    <div className="my-6 flex items-end justify-between gap-3 border-t border-green-100 pt-5">
                      <div>
                        <p className="text-xs text-slate-500">
                          {course.details}
                        </p>
                        <p className="mt-1 text-3xl font-extrabold text-[#185b35]">
                          {course.fee}
                        </p>
                      </div>

                      <span className="pb-1 text-xs font-medium text-slate-400">
                        Per year
                      </span>
                    </div>

                    <EnquiryLink />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* LEARNING EXPERIENCE */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded-3xl bg-green-100/70" />

            <div className="relative overflow-hidden rounded-3xl border border-green-100 bg-white p-2 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1100&q=85"
                alt="Students learning together in a classroom"
                loading="lazy"
                className="h-[320px] w-full rounded-2xl object-cover transition-transform duration-700 hover:scale-[1.03] sm:h-[430px]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <SectionBadge>More Than Classroom Learning</SectionBadge>

            <h2 className="text-3xl font-extrabold leading-tight text-[#173b29] sm:text-4xl lg:text-5xl">
              A Learning Journey
              <span className="mt-2 block text-[#27804b]">
                That Keeps Growing.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
              Along with regular academic learning, OM Coaching Classes
              includes activities designed to encourage practice, motivation
              and student participation.
            </p>

            <div className="mt-7 space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-[#27804b]"
                  />
                  <span className="text-sm font-medium leading-6 text-[#173b29]">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#185b35] transition-colors hover:text-[#27804b]"
            >
              Know More About Us
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#f5f8f4] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#153b28] px-6 py-12 text-center shadow-2xl shadow-green-950/10 sm:px-10 sm:py-16 lg:px-16"
        >
          <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-green-400/15 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-28 -left-16 h-64 w-64 rounded-full bg-emerald-300/10 blur-[80px]" />

          <div className="relative">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-green-200">
              <GraduationCap size={29} />
            </div>

            <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              Let's Find the Right
              <span className="mt-2 block text-green-300">
                Course for You.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-green-50/75 sm:text-base sm:leading-8">
              Have questions about a class, stream or annual fee? Connect
              with OM Coaching Classes to discuss admission details.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#153b28] transition-all duration-300 hover:-translate-y-1 hover:bg-green-50"
              >
                <MessageCircle size={18} />
                Enquire on WhatsApp
                <ArrowUpRight size={17} />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                Contact Us
                <ArrowRight size={18} />
              </Link>
            </div>

            <p className="mt-6 text-xs text-green-100/60">
              OM Coaching Classes · Scheme 51, Indore · Established 2016
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
