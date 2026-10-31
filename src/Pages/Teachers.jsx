
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
  BookOpen,
  Award,
  Users,
  Sparkles,
  MessageCircle,
  UserRound,
} from "lucide-react";

// ==========================================
// TEACHERS DATA ARRAY
// Add, remove or update teacher details here.
// ==========================================

const teachers = [
  {
    id: 1,
    name: "Dr. AMARNATH OJHA",
    designation: "Founder & Director",
    degree: "PHD",
    specialization: "Academic Leadership",
    subjects: ["Academic Guidance", "Student Mentoring"],
    experience: "",
    image: "/assets/home/amarsir.png",
    alt: "Dr. Amarnath Ojha - Founder of OM Coaching Classes",
    featured: true,
  },
  {
    id: 2,
    name: "Shrishti Jaiswal ",
    designation: "Senior Faculty",
    degree: "M.Com , B.ED",
    specialization: "Account",
    subjects: ["Account"],
    experience: "",
    image: "/assets/home/t1.jpeg",
    alt: "OM Coaching Classes teacher",
    featured: false,
  },
  {
    id: 3,
    name: "Ajay Singh Chandel",
    designation: "Subject Faculty",
    degree: "Bsc. (CS-Maths-Electronics)",
    specialization: "Mathematics",
    subjects: ["Electronics", "Mathematics"],
    experience: "",
    image: "/assets/home/t2.jpeg",
    alt: "OM Coaching Classes teacher",
    featured: false,
  },
  {
    id: 4,
    name: "Deepika Taywade",
    designation: "Subject Faculty",
    degree: "B.Sc - (Biotechnology), M.Sc in forensic science",
    specialization: "Biology",
    subjects: ["Biology"],
    experience: "",
    image: "/assets/home/t3.jpeg",
    alt: "OM Coaching Classes teacher",
    featured: false,
  },
  {
    id: 5,
    name: "Dipendra Bhadoriya",
    designation: "Subject Faculty",
    degree: "B. Com (computer application), MBA (computer management) ",
    specialization: "Informatics Practices",
    subjects: ["Informatics Practices"],
    experience: "",
    image: "/assets/home/t4.jpeg",
    alt: "OM Coaching Classes teacher",
    featured: false,
  },
  
];

const whatsappLink =
  "https://wa.me/917000920972?text=" +
  encodeURIComponent(
    "Hello OM Coaching Classes, I would like to know more about your faculty and teaching team."
  );

// ==========================================
// TEACHER CARD
// ==========================================

function TeacherCard({ teacher, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-[1.6rem] border border-[#e2eae2] bg-white shadow-[0_8px_30px_rgba(20,60,35,0.04)] transition-all duration-300 hover:border-[#185b35]/25 hover:shadow-[0_20px_50px_rgba(20,60,35,0.10)]"
    >
      {/* IMAGE */}
      <div className="relative aspect-[4/4.2] overflow-hidden bg-[#e9f0e9]">
        <img
          src={teacher.image}
          alt={teacher.alt}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.nextElementSibling.style.display = "flex";
          }}
        />

        {/* Fallback if image is not available */}
        <div className="absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-[#eaf3e9] to-[#cbdcca] text-[#185b35]">
          <UserRound size={75} strokeWidth={1.1} />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#092817]/70 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

        {teacher.featured && (
          <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#123d28]/90 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
            <Award size={13} className="text-[#a9d7a9]" />
            Founder
          </div>
        )}

        <div className="absolute bottom-4 left-5 right-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-green-100">
            {teacher.designation}
          </p>
          <h3 className="mt-1 text-xl font-extrabold text-white sm:text-2xl">
            {teacher.name}
          </h3>
        </div>
      </div>

      {/* DETAILS */}
      <div className="p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#edf5ed] text-[#185b35]">
            <GraduationCap size={20} />
          </div>

          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#73917a]">
              Qualification
            </p>
            <p className="mt-1 break-words text-sm font-bold text-[#193b29]">
              {teacher.degree}
            </p>
          </div>
        </div>

        <div className="mt-5 border-t border-[#edf1ed] pt-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#73917a]">
            Specialization
          </p>
          <p className="mt-1 text-sm font-semibold text-[#193b29]">
            {teacher.specialization}
          </p>
        </div>

        <div className="mt-4">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.15em] text-[#73917a]">
            Subjects & Expertise
          </p>

          <div className="flex flex-wrap gap-2">
            {teacher.subjects.map((subject) => (
              <span
                key={subject}
                className="rounded-lg bg-[#edf5ed] px-3 py-2 text-[11px] font-semibold text-[#28613b]"
              >
                {subject}
              </span>
            ))}
          </div>
        </div>

        {teacher.experience && (
          <div className="mt-5 flex items-center gap-2 border-t border-[#edf1ed] pt-4 text-xs font-semibold text-[#53675a]">
            <Award size={16} className="text-[#398451]" />
            {teacher.experience} Experience
          </div>
        )}
      </div>
    </motion.div>
  );
}

// ==========================================
// MAIN TEACHERS PAGE
// ==========================================

export default function Teachers() {
  const [search, setSearch] = useState("");

  const filteredTeachers = teachers.filter((teacher) => {
    const query = search.toLowerCase();

    return (
      teacher.name.toLowerCase().includes(query) ||
      teacher.designation.toLowerCase().includes(query) ||
      teacher.subjects.some((subject) =>
        subject.toLowerCase().includes(query)
      )
    );
  });

  return (
    <div className="overflow-hidden bg-[#f8faf7] text-[#193b29]">

      {/* ==========================================
          HERO SECTION
      ========================================== */}

      <section className="relative isolate overflow-hidden bg-[#123d28]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(119,183,121,0.22),transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.07),transparent_45%)]" />

        <div className="absolute -right-24 top-0 -z-10 h-72 w-72 rounded-full border border-white/10 sm:h-[440px] sm:w-[440px]" />

        <div className="absolute -right-12 top-16 -z-10 h-52 w-52 rounded-full border border-white/10 sm:h-[320px] sm:w-[320px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-24">

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-xs font-bold tracking-wider text-green-100">
              <GraduationCap size={15} />
              MEET OUR FACULTY
            </span>

            <h1 className="mt-7 text-4xl font-black leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Meet the Minds
              <span className="mt-2 block text-[#a9d7a9]">
                Behind Your Success.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-green-50/75 sm:text-base sm:leading-8">
              Great education begins with great teachers. Meet the people
              who guide, motivate and support students throughout their
              academic journey at OM Coaching Classes.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#teachers-list"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#185b35] transition hover:-translate-y-1 hover:bg-[#eaf4e9]"
              >
                Meet Our Teachers
                <ArrowRight size={17} />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Contact Us
                <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <Users size={22} className="text-[#a9d7a9]" />
                <div>
                  <p className="text-lg font-extrabold text-white">
                    {teachers.length}+
                  </p>
                  <p className="text-xs text-green-50/65">
                    Faculty Profiles
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <BookOpen size={22} className="text-[#a9d7a9]" />
                <div>
                  <p className="text-lg font-extrabold text-white">
                    Since 2016
                  </p>
                  <p className="text-xs text-green-50/65">
                    Academic Journey
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* HERO IMAGE */}

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-3 shadow-2xl">
              <div className="relative aspect-[4/4.2] overflow-hidden rounded-[1.5rem] bg-[#e9f0e9]">
                <img
                  src={teachers[0].image}
                  alt={teachers[0].alt}
                  className="h-full w-full object-cover object-top"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextElementSibling.style.display = "flex";
                  }}
                />

                <div className="absolute inset-0 hidden items-center justify-center bg-[#dce9dc] text-[#185b35]">
                  <UserRound size={100} strokeWidth={1} />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#092817]/90 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#a9d7a9] px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-[#123d28]">
                    <Award size={13} />
                    Founder & Director
                  </span>

                  <h2 className="mt-4 text-2xl font-black text-white sm:text-3xl">
                    Dr. AMARNATH OJHA
                  </h2>

                  <p className="mt-2 text-sm text-white/70">
                    Leading the academic journey since 2016
                  </p>
                </div>
              </div>
            </div>

          
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          TEACHERS INTRO
      ========================================== */}

      <section className="px-5 pb-10 pt-16 sm:px-8 sm:pt-20 lg:px-10">
        <div className="mx-auto max-w-7xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#e8f2e8] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#185b35]">
            <Users size={15} />
            Our Teaching Team
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-[#193b29] sm:text-4xl lg:text-5xl">
            The People Who Make
            <span className="text-[#398451]"> Learning Better</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#758177] sm:text-base">
            Our faculty members are committed to supporting students with
            guidance, subject knowledge and a positive learning environment.
          </p>
        </div>
      </section>

      {/* ==========================================
          TEACHERS GRID
      ========================================== */}

      <section
        id="teachers-list"
        className="scroll-mt-24 px-5 pb-20 sm:px-8 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">

          {/* SEARCH AND COUNT */}

          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-xl font-extrabold text-[#193b29]">
                Our Faculty Members
              </p>
              <p className="mt-1 text-sm text-[#879188]">
                Explore our teaching team and their qualifications.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search teachers or subjects..."
                className="w-full rounded-xl border border-[#e1e9e1] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#398451] sm:w-64"
              />

              <span className="shrink-0 rounded-xl bg-[#edf5ed] px-4 py-3 text-sm font-bold text-[#185b35]">
                {filteredTeachers.length} Members
              </span>
            </div>
          </div>

          {/* CARDS */}

          {filteredTeachers.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredTeachers.map((teacher, index) => (
                <TeacherCard
                  key={teacher.id}
                  teacher={teacher}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-[#d7e3d7] bg-white px-6 py-16 text-center">
              <UserRound
                size={40}
                className="mx-auto text-[#82a78a]"
              />
              <h3 className="mt-4 text-lg font-bold text-[#193b29]">
                No Teachers Found
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Try searching with another name or subject.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ==========================================
          TEACHING APPROACH
      ========================================== */}

      <section className="bg-[#edf4ed] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#398451]">
                Our Teaching Philosophy
              </span>

              <h2 className="mt-4 text-3xl font-black leading-tight text-[#193b29] sm:text-4xl">
                More Than Teaching.
                <span className="block text-[#398451]">
                  Inspiring Growth.
                </span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#64776a] sm:text-base">
                At OM Coaching Classes, we believe every student has the
                potential to achieve more. Our approach focuses on
                understanding concepts, regular assessment and personal
                academic guidance.
              </p>

              <Link
                to="/about"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#185b35] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#123d28]"
              >
                Know More About Us
                <ArrowRight size={17} />
              </Link>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: BookOpen,
                  title: "Concept-Based Learning",
                  text: "Focus on understanding concepts and building strong fundamentals.",
                },
                {
                  icon: GraduationCap,
                  title: "Academic Guidance",
                  text: "Support and guidance throughout the academic journey.",
                },
                {
                  icon: Award,
                  title: "Regular Assessment",
                  text: "Weekly tests and performance analysis for improvement.",
                },
                {
                  icon: Users,
                  title: "Student Mentoring",
                  text: "Motivation and encouragement to help students grow.",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.07 }}
                    className="rounded-2xl border border-[#dce8dc] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-950/5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#edf5ed] text-[#185b35]">
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-5 text-base font-extrabold text-[#193b29]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#78847a]">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          BOTTOM CTA
      ========================================== */}

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#123d28] px-6 py-10 sm:px-10 sm:py-14 lg:px-14"
        >
          <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border border-white/10" />

          <div className="relative flex flex-col justify-between gap-7 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#a9d7a9]">
                JOIN THE OM LEARNING COMMUNITY
              </span>

              <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">
                Give Your Child the Right Guidance.
              </h2>

              <p className="mt-4 text-sm leading-7 text-green-50/70 sm:text-base">
                Connect with our team to know more about courses, faculty
                and admissions.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/courses"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-bold text-[#185b35] transition hover:-translate-y-1 hover:bg-[#eaf4e9]"
              >
                Explore Courses
                <ArrowRight size={17} />
              </Link>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-white/10"
              >
                <MessageCircle size={17} />
                Enquire Now
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
