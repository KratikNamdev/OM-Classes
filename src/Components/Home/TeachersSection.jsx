
import { useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  GraduationCap,
  Users,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

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
    name: "Shrishti Jaiswal",
    designation: "Senior Faculty",
    degree: "M.Com, B.Ed",
    specialization: "Account",
    subjects: ["Account"],
    experience: "",
    image: "/assets/home/t1.jpeg",
    alt: "Shrishti Jaiswal - Account Faculty",
    featured: false,
  },
  {
    id: 3,
    name: "Ajay Singh Chandel",
    designation: "Subject Faculty",
    degree: "B.Sc. (CS-Maths-Electronics)",
    specialization: "Mathematics",
    subjects: ["Electronics", "Mathematics"],
    experience: "",
    image: "/assets/home/t2.jpeg",
    alt: "Ajay Singh Chandel - Mathematics Faculty",
    featured: false,
  },
  {
    id: 4,
    name: "Deepika Taywade",
    designation: "Subject Faculty",
    degree: "B.Sc. Biotechnology, M.Sc. Forensic Science",
    specialization: "Biology",
    subjects: ["Biology"],
    experience: "",
    image: "/assets/home/t3.jpeg",
    alt: "Deepika Taywade - Biology Faculty",
    featured: false,
  },
  {
    id: 5,
    name: "Dipendra Bhadoriya",
    designation: "Subject Faculty",
    degree: "B.Com (Computer Application), MBA (Computer Management)",
    specialization: "Informatics Practices",
    subjects: ["Informatics Practices"],
    experience: "",
    image: "/assets/home/t4.jpeg",
    alt: "Dipendra Bhadoriya - Informatics Practices Faculty",
    featured: false,
  },
];

export default function TeachersSection() {
  const sliderRef = useRef(null);

  const scrollSlider = (direction) => {
    if (!sliderRef.current) return;

    const container = sliderRef.current;
    const card = container.querySelector(".teacher-slide");

    if (!card) return;

    const cardWidth = card.getBoundingClientRect().width;
    const gap = 24;

    container.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden bg-[#f8faf7] py-20 sm:py-24 lg:py-28">
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-green-100/60 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-emerald-100/60 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col gap-7 md:mb-14 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2">
              <GraduationCap size={17} className="text-[#237346]" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#185b35]">
                Meet Our Educators
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#173b29] sm:text-4xl lg:text-5xl">
              Meet The Minds
              <span className="mt-2 block text-[#27804b]">
                Behind Your Success.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Experienced educators, dedicated mentors and subject experts
              who guide students towards better understanding, confidence
              and academic excellence.
            </p>
          </div>

          {/* Slider Controls */}
          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              onClick={() => scrollSlider(-1)}
              aria-label="Previous teachers"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-green-200 bg-white text-[#185b35] transition-all duration-300 hover:border-[#185b35] hover:bg-[#185b35] hover:text-white"
            >
              <ArrowLeft size={20} />
            </button>

            <button
              type="button"
              onClick={() => scrollSlider(1)}
              aria-label="Next teachers"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#185b35] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#237346]"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>

        {/* Horizontal Teacher Slider */}
        <div
          ref={sliderRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-6"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {teachers.map((teacher, index) => (
            <motion.article
              key={teacher.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="teacher-slide group w-[85%] flex-none snap-start overflow-hidden rounded-3xl border border-green-100 bg-white shadow-[0_10px_35px_rgba(21,59,40,0.05)] transition-shadow duration-300 hover:border-green-200 hover:shadow-xl hover:shadow-green-950/10 sm:w-[47%] lg:w-[calc((100%-48px)/3)]"
            >
              {/* Teacher Image */}
              <div className="relative h-[300px] overflow-hidden bg-[#eaf4ec] sm:h-[320px]">
                <img
                  src={teacher.image}
                  alt={teacher.alt}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#102e20]/90 via-[#102e20]/10 to-transparent" />

                {/* Featured Badge */}
                {teacher.featured && (
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-yellow-200/30 bg-[#173b29]/90 px-3 py-2 text-xs font-bold text-yellow-100 backdrop-blur-md">
                    <Award size={14} />
                    Founder & Director
                  </div>
                )}

                {!teacher.featured && (
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-[#153b28]/80 px-3 py-2 text-xs font-semibold text-white backdrop-blur-md">
                    <BookOpen size={14} className="text-green-200" />
                    {teacher.specialization}
                  </div>
                )}

                {/* Name on Image */}
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-green-200">
                    {teacher.designation}
                  </p>

                  <h3 className="mt-2 text-xl font-bold leading-tight text-white sm:text-2xl">
                    {teacher.name}
                  </h3>
                </div>
              </div>

              {/* Teacher Details */}
              <div className="p-5 sm:p-6">
                {/* Qualification */}
                <div className="flex items-start gap-3 rounded-xl bg-[#f3f8f3] p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#237346] shadow-sm">
                    <GraduationCap size={21} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                      Qualification
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-6 text-[#173b29]">
                      {teacher.degree}
                    </p>
                  </div>
                </div>

                {/* Specialization */}
                <div className="mt-5">
                  <p className="text-xs font-bold uppercase tracking-[0.13em] text-slate-400">
                    Specialization
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#185b35]">
                    {teacher.specialization}
                  </p>
                </div>

                {/* Subjects */}
                <div className="mt-5">
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.13em] text-slate-400">
                    Subjects & Guidance
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {teacher.subjects.map((subject) => (
                      <span
                        key={subject}
                        className="rounded-full border border-green-100 bg-white px-3 py-2 text-xs font-semibold text-[#276341]"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom */}
                <div className="mt-6 flex items-center justify-between border-t border-green-100 pt-5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#185b35]">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-50">
                      <BookOpen size={17} />
                    </span>
                    OM Coaching Classes
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="text-[#27804b] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Slider Hint */}
        <div className="mt-2 flex items-center justify-center gap-3 text-xs font-medium text-slate-400">
          <span className="h-px w-10 bg-green-200" />
          Swipe or use arrows to explore our faculty
          <span className="h-px w-10 bg-green-200" />
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 flex flex-col gap-5 rounded-3xl border border-green-100 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#185b35] text-white">
              <Users size={23} />
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#173b29] sm:text-xl">
                Looking for the right guidance for your child?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Connect with our team to discuss classes, subjects and admissions.
              </p>
            </div>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#185b35] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#237346]"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>

      {/* Hide Scrollbar */}
      <style>{`
        .teacher-slide {
          scroll-snap-align: start;
        }

        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
