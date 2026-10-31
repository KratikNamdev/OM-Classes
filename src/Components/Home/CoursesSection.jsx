
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Atom,
  BookOpen,
  Calculator,
  FlaskConical,
  GraduationCap,
  School,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const courses = [
  {
    number: "01",
    title: "Classes 3rd – 8th",
    subtitle: "Build Strong Foundations",
    description:
      "School-level learning focused on subject clarity, regular practice and academic development.",
    subjects: ["All Subjects", "Concept Building"],
    fees: "₹8,000",
    period: "/ year",
    icon: BookOpen,
    accent: "from-emerald-50 to-white",
  },
  {
    number: "02",
    title: "Class 9th",
    subtitle: "Prepare for Higher Classes",
    description:
      "Strengthen subject fundamentals and develop consistent study habits for future board preparation.",
    subjects: ["All Subjects", "Regular Tests"],
    fees: "₹9,000",
    period: "/ year",
    icon: School,
    accent: "from-lime-50 to-white",
  },
  {
    number: "03",
    title: "Class 10th",
    subtitle: "Board Exam Preparation",
    description:
      "Structured preparation for MP Board and CBSE students with focused revision and practice.",
    subjects: ["MP Board", "CBSE"],
    fees: "₹10,000",
    period: "/ year",
    icon: GraduationCap,
    accent: "from-teal-50 to-white",
    extraFee: "CBSE: ₹15,000/year",
  },
  {
    number: "04",
    title: "Class 12th PCM",
    subtitle: "Physics · Chemistry · Mathematics",
    description:
      "Focused science coaching to strengthen concepts and prepare for academic examinations.",
    subjects: ["MP Board", "CBSE"],
    fees: "₹15,000",
    period: "/ year",
    icon: Atom,
    accent: "from-emerald-50 to-white",
    extraFee: "CBSE: ₹20,000/year",
  },
  {
    number: "05",
    title: "Class 12th PCB",
    subtitle: "Physics · Chemistry · Biology",
    description:
      "Science learning with subject-focused practice, concept clarity and revision support.",
    subjects: ["MP Board", "CBSE"],
    fees: "₹15,000",
    period: "/ year",
    icon: FlaskConical,
    accent: "from-green-50 to-white",
    extraFee: "CBSE: ₹20,000/year",
  },
  {
    number: "06",
    title: "Class 12th Commerce",
    subtitle: "Commerce Stream",
    description:
      "Commerce-focused learning designed around subject understanding and examination preparation.",
    subjects: ["MP Board", "CBSE"],
    fees: "₹15,000",
    period: "/ year",
    icon: TrendingUp,
    accent: "from-yellow-50 to-white",
    extraFee: "CBSE: ₹20,000/year",
  },
];

function CourseCard({ course, index }) {
  const Icon = course.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      whileHover={{ y: -7 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#e3ebe0] bg-white shadow-[0_8px_35px_-25px_rgba(21,59,40,0.35)] transition-shadow duration-300 hover:border-[#b8d2b0] hover:shadow-[0_24px_50px_-25px_rgba(21,59,40,0.3)]"
    >
      {/* Decorative top accent */}
      <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[#36804b] transition-transform duration-500 group-hover:scale-x-100" />

      <div className={`bg-gradient-to-br ${course.accent} p-6 sm:p-7`}>
        <div className="flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#185b35] text-white shadow-md transition-transform duration-300 group-hover:rotate-[-5deg] group-hover:scale-110">
            <Icon size={23} />
          </div>

          <span className="text-sm font-bold tracking-widest text-[#a5bba0]">
            {course.number}
          </span>
        </div>

        <h3 className="mt-6 text-xl font-extrabold text-[#153b28] sm:text-2xl">
          {course.title}
        </h3>

        <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-[#36804b]">
          {course.subtitle}
        </p>

        <p className="mt-4 text-sm leading-7 text-gray-600">
          {course.description}
        </p>
      </div>

      <div className="flex flex-1 flex-col p-6 pt-0 sm:p-7 sm:pt-0">
        <div className="mt-2 flex flex-wrap gap-2">
          {course.subjects.map((subject) => (
            <span
              key={subject}
              className="rounded-lg border border-[#e1ebde] bg-[#f6f9f4] px-3 py-1.5 text-xs font-semibold text-[#45634b]"
            >
              {subject}
            </span>
          ))}
        </div>

        <div className="mt-6 border-t border-[#e9eee6] pt-5">
          <p className="text-xs text-gray-500">Annual tuition fees</p>

          <div className="mt-2 flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <span className="text-2xl font-extrabold text-[#185b35]">
              {course.fees}
            </span>
            <span className="text-xs text-gray-500">{course.period}</span>
          </div>

          {course.extraFee && (
            <p className="mt-2 text-xs font-semibold text-[#6a8068]">
              {course.extraFee}
            </p>
          )}
        </div>

        <Link
          to="/courses"
          className="group/link mt-6 inline-flex items-center justify-between gap-3 rounded-xl border border-[#dce8d8] px-4 py-3 text-sm font-bold text-[#185b35] transition-all duration-300 hover:border-[#185b35] hover:bg-[#185b35] hover:text-white"
        >
          Explore Course
          <ArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
          />
        </Link>
      </div>
    </motion.article>
  );
}

export default function CoursesSection() {
  return (
    <section
      id="courses"
      className="relative overflow-hidden bg-[#f8faf7] py-20 sm:py-24 lg:py-28"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#e2eddd]/70 blur-[100px]" />
      <div className="pointer-events-none absolute -left-40 bottom-10 h-80 w-80 rounded-full bg-[#e8f1e5] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#dce9d9] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.17em] text-[#185b35] sm:text-sm">
            <GraduationCap size={16} />
            Find Your Course
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-[#153b28] sm:text-4xl lg:text-5xl">
            The Right Guidance for
            <span className="mt-2 block text-[#36804b]">
              Every Stage of Learning.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
            From foundational classes to board exam preparation, explore
            the courses available at Om Coaching Classes, Indore.
          </p>
        </motion.div>

        {/* Course grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {courses.map((course, index) => (
            <CourseCard key={course.number} course={course} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-[#dce8d8] bg-white p-6 shadow-sm sm:flex-row sm:p-8"
        >
          <div>
            <h3 className="text-xl font-extrabold text-[#153b28]">
              Need help choosing a course?
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Contact us to discuss available classes, boards and fees.
            </p>
          </div>

          <a
            href="https://wa.me/917000920972?text=Hello%20Om%20Coaching%20Classes%2C%20please%20help%20me%20choose%20a%20course."
            target="_blank"
            rel="noreferrer"
            className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-[#185b35] px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#104729] hover:shadow-lg"
          >
            Talk to Our Team
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
