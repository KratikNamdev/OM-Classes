
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: BookOpen,
    title: "Concept-Based Learning",
    description:
      "We emphasise understanding concepts clearly so students can approach their subjects with confidence.",
  },
  {
    icon: Target,
    title: "Regular Practice",
    description:
      "Weekly tests and revision help students assess their preparation and identify areas for improvement.",
  },
  {
    icon: HeartHandshake,
    title: "Guidance & Motivation",
    description:
      "We encourage discipline, positive thinking and consistent effort throughout a student's academic journey.",
  },
  {
    icon: Lightbulb,
    title: "Learning Beyond Books",
    description:
      "Motivational lectures, college visits and cultural activities make student life more engaging.",
  },
];

const activities = [
  "Regular weekly tests and performance analysis",
  "Motivational lectures",
  "College visits",
  "Annual picnic",
  "Cultural programs and farewell",
];

export default function About() {
  return (
    <main className="overflow-hidden bg-white">
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-[#102e20]">
        <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-green-500/15 blur-[110px]" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-emerald-300/10 blur-[110px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-24">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-green-300" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-100">
                Get to Know Us
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Shaping Minds.
              <span className="mt-2 block text-green-300">
                Building Futures.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-8 text-green-50/75 sm:text-base">
              Welcome to OM Coaching Classes, Indore. Since 2016, our focus
              has been on helping students build strong academic foundations
              through concept-based learning, regular practice and meaningful
              guidance.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/courses"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#153b28] transition-all duration-300 hover:-translate-y-1 hover:bg-green-50"
              >
                Explore Our Courses
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                Get in Touch
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/15 pt-6">
              <div>
                <p className="text-2xl font-bold text-white">2016</p>
                <p className="mt-1 text-xs text-green-100/65">
                  Year Established
                </p>
              </div>

              <div className="h-10 w-px bg-white/15" />

              <div>
                <p className="text-lg font-bold text-white">MP Board</p>
                <p className="mt-1 text-xs text-green-100/65">
                  Academic Coaching
                </p>
              </div>

              <div className="h-10 w-px bg-white/15" />

              <div>
                <p className="text-lg font-bold text-white">CBSE</p>
                <p className="mt-1 text-xs text-green-100/65">
                  Academic Coaching
                </p>
              </div>
            </div>
          </motion.div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, x: 28, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="absolute -inset-3 rounded-[2rem] border border-white/10 sm:-inset-4" />

            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/15 bg-white/10 p-2 shadow-2xl shadow-black/20 sm:rounded-[2rem] sm:p-3">
              <img
                src="assets/home/om2.jpeg"
                alt="Students learning together in an educational environment"
                className="h-[330px] w-full rounded-[1.1rem] object-cover sm:h-[430px] sm:rounded-[1.5rem] lg:h-[480px]"
                fetchPriority="high"
              />

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/30 bg-white/95 p-4 shadow-xl backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-7 sm:p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eaf4ec] text-[#185b35]">
                    <GraduationCap size={25} />
                  </div>
                  <div>
                    <p className="font-bold text-[#173b29]">
                      A Foundation for Success
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-600 sm:text-sm">
                      Learning, practice and continuous improvement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="bg-[#f8faf7] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-3xl bg-green-200/50" />

            <div className="relative overflow-hidden rounded-3xl border border-green-100 bg-white p-2 shadow-xl shadow-green-950/5">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1100&q=85"
                alt="Students participating in a classroom learning session"
                loading="lazy"
                className="h-[340px] w-full rounded-2xl object-cover transition-transform duration-700 hover:scale-[1.03] sm:h-[440px]"
              />
            </div>

            <div className="absolute -right-2 top-7 rounded-2xl bg-[#185b35] px-5 py-4 text-white shadow-xl sm:-right-4 sm:px-6">
              <p className="text-2xl font-bold">Since 2016</p>
              <p className="mt-1 text-xs text-green-100">
                Our Learning Journey
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#27804b]">
              Our Story
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#173b29] sm:text-4xl lg:text-5xl">
              Education That Goes
              <span className="mt-2 block text-[#27804b]">
                Beyond Textbooks.
              </span>
            </h2>

            <p className="mt-6 text-sm leading-8 text-slate-600 sm:text-base">
              Established in 2016, OM Coaching Classes aims to provide students
              with a focused environment for academic learning. We support
              students from Classes 3rd to 12th with coaching options for MP
              Board and CBSE.
            </p>

            <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
              We believe meaningful progress comes from understanding
              concepts, practising consistently and learning from assessments.
              Our academic activities also encourage motivation, exploration
              and participation beyond everyday lessons.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "Coaching for Classes 3rd to 12th",
                "MP Board and CBSE learning options",
                "PCM, PCB and Commerce for Class 12th",
                "Weekly tests and performance analysis",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-[#27804b]"
                  />
                  <p className="text-sm font-medium leading-6 text-[#173b29]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <Link
              to="/courses"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#185b35] transition-colors hover:text-[#27804b]"
            >
              Discover Our Courses
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#27804b]">
              Leadership & Guidance
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#173b29] sm:text-4xl lg:text-5xl">
              Meet Our Founder
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              The person behind the vision of OM Coaching Classes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl border border-green-100 bg-[#f8faf7] shadow-xl shadow-green-950/5 md:grid-cols-[0.8fr_1.2fr]"
          >
            <div className="relative min-h-[300px] overflow-hidden bg-[#eaf4ec] md:min-h-[440px]">
              <img
                src="assets/home/amarsir.png"
                alt="Representative portrait placeholder for the founder"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102e20]/60 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 rounded-xl border border-white/20 bg-[#153b28]/90 px-4 py-3 text-white backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-green-200">
                  Established
                </p>
                <p className="mt-1 text-xl font-bold">2016</p>
              </div>
            </div>

            <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-[#185b35]">
                <GraduationCap size={25} />
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[#27804b]">
                Founder · OM Coaching Classes
              </p>

              <h3 className="mt-3 text-2xl font-bold text-[#173b29] sm:text-3xl">
                Dr. AMARNATH OJHA
              </h3>

              <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
                OM Coaching Classes was established with a focus on academic
                learning and student development. The institute's approach
                centres on building strong concepts, regular practice and
                helping students work towards their educational goals.
              </p>

              <div className="mt-7 border-t border-green-100 pt-6">
                <p className="text-sm font-semibold leading-7 text-[#173b29]">
                  “Strong foundations, consistent effort and the willingness
                  to learn are important steps towards academic growth.”
                </p>
                <p className="mt-3 text-xs text-slate-500">
                  Our educational philosophy
                </p>
              </div>

              <a
                href="https://wa.me/917000920972?text=Hello%20OM%20Coaching%20Classes%2C%20I%20would%20like%20to%20enquire%20about%20admissions."
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-xl bg-[#185b35] px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#237346]"
              >
                Connect With Us
                <ArrowUpRight size={17} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="bg-[#f8faf7] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-14 max-w-3xl text-center"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#27804b]">
              What Guides Us
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#173b29] sm:text-4xl lg:text-5xl">
              Our Approach to Learning
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Every part of the learning journey matters — from understanding
              a topic to practising it and reviewing progress.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -7 }}
                  className="group rounded-2xl border border-green-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-green-300 hover:shadow-xl hover:shadow-green-950/5 sm:p-7"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf4ec] text-[#185b35] transition-all duration-300 group-hover:bg-[#185b35] group-hover:text-white">
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-[#173b29]">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {value.description}
                  </p>

                  <div className="mt-6 h-1 w-10 rounded-full bg-green-200 transition-all duration-300 group-hover:w-16 group-hover:bg-[#27804b]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#27804b]">
              Beyond the Classroom
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#173b29] sm:text-4xl lg:text-5xl">
              Learning Is More Than
              <span className="mt-2 block text-[#27804b]">
                Just Books.
              </span>
            </h2>

            <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
              Academic preparation is important, and so are experiences that
              encourage students to explore, participate and grow. Our
              activities add variety to student life alongside regular studies.
            </p>

            <div className="mt-8 space-y-4">
              {activities.map((activity) => (
                <div key={activity} className="flex items-start gap-3">
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-[#27804b]"
                  />
                  <p className="text-sm font-medium leading-6 text-[#173b29]">
                    {activity}
                  </p>
                </div>
              ))}
            </div>

            <Link
              to="/gallery"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-[#185b35] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#237346]"
            >
              Explore Our Gallery
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3 pt-8 sm:space-y-4 sm:pt-12">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=700&q=85"
                    alt="Students learning in a classroom"
                    loading="lazy"
                    className="h-48 w-full object-cover transition-transform duration-700 hover:scale-110 sm:h-64"
                  />
                </div>
                <div className="rounded-2xl bg-[#185b35] p-5 text-white sm:p-6">
                  <Users size={25} className="text-green-200" />
                  <p className="mt-4 text-lg font-bold">Student Activities</p>
                  <p className="mt-2 text-xs leading-6 text-green-50/75">
                    Learning, participation and shared experiences.
                  </p>
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="rounded-2xl bg-[#eaf4ec] p-5 text-[#173b29] sm:p-6">
                  <Trophy size={25} className="text-[#27804b]" />
                  <p className="mt-4 text-lg font-bold">Consistent Practice</p>
                  <p className="mt-2 text-xs leading-6 text-slate-600">
                    Weekly tests and performance reviews.
                  </p>
                </div>
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=700&q=85"
                    alt="Students collaborating during an educational activity"
                    loading="lazy"
                    className="h-56 w-full object-cover transition-transform duration-700 hover:scale-110 sm:h-72"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#f8faf7] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#153b28] px-6 py-10 text-center sm:px-10 sm:py-14 lg:px-16 lg:py-16"
        >
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-green-400/15 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-emerald-300/10 blur-[80px]" />

          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-200">
              Your Learning Journey Starts Here
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Let's Build a Stronger
              <span className="mt-2 block text-green-300">
                Academic Foundation.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-green-50/75 sm:text-base sm:leading-8">
              Contact OM Coaching Classes to learn more about courses, fees
              and admission enquiries.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/courses"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#153b28] transition-all duration-300 hover:-translate-y-1 hover:bg-green-50"
              >
                View Courses & Fees
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                Contact Us
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
