
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  MessageCircle,
  GraduationCap,
  ArrowUp,
  BookOpen,
} from "lucide-react";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Courses & Fees", path: "/courses" },
  { name: "Gallery", path: "/gallery" },
  { name: "Results", path: "/results" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact Us", path: "/contact" },
];

const courses = [
  "Class 3rd – 8th",
  "Class 9th",
  "Class 10th – MP Board",
  "Class 10th – CBSE",
  "Class 12th – PCM / PCB",
  "Class 12th – Commerce",
];

const whatsappUrl =
  "https://wa.me/917000920972?text=Hello%20Om%20Coaching%20Classes%2C%20I%20want%20to%20enquire%20about%20admissions.";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Footer() {
  return (
    <footer className="relative mt-16 overflow-hidden bg-[#103923] text-white">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#32734a]/20 blur-[100px]" />
        <div className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-[#5c874c]/15 blur-[100px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "25px 25px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Admission CTA */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="relative -mt-1 overflow-hidden rounded-3xl border border-white/10 bg-[#1b4b30] p-6 shadow-2xl sm:p-9 lg:p-10"
        >
          <div className="pointer-events-none absolute -right-10 -top-24 h-64 w-64 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-2 -top-16 h-48 w-48 rounded-full border border-white/10" />

          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.17em] text-[#d6e8c9]">
                <GraduationCap size={16} />
                Admissions Enquiry
              </span>

              <h2 className="mt-4 text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
                Give your future a
                <span className="text-[#c7dfa9]"> strong foundation.</span>
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                Explore our courses, know the annual fees and connect
                with our team for admission information.
              </p>
            </div>

            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-[#e0edcf] px-6 py-4 text-sm font-bold text-[#153b28] shadow-lg transition-colors hover:bg-white"
            >
              Enquire on WhatsApp
              <ArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </motion.a>
          </div>
        </motion.div>

        {/* Main footer columns */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-16"
        >
          {/* Brand */}
          <motion.div variants={reveal} className="lg:col-span-4">
            <Link to="/" className="group inline-flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl bg-white p-1 shadow-lg transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
                <img
                  src="/assets/home/OM%20logo.jpeg"
                  alt="Om Coaching Classes logo"
                  className="h-full w-full rounded-xl object-contain"
                />
              </div>

              <div>
                <h3 className="text-xl font-extrabold tracking-tight sm:text-2xl">
                  OM <span className="text-[#c7dfa9]">Coaching</span>
                </h3>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.23em] text-white/55">
                  Classes · Indore
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/65">
              Om Coaching Classes, guided by Dr. Amarnath Ojha, helps
              students build strong concepts and work towards their
              academic goals. Serving students since 2016.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <motion.a
                whileHover={{ y: -4, scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Contact on WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#c7dfa9] transition-colors hover:bg-white/15"
              >
                <MessageCircle size={19} />
              </motion.a>

              <motion.a
                whileHover={{ y: -4, scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                href="tel:7000920972"
                aria-label="Call Om Coaching Classes"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#c7dfa9] transition-colors hover:bg-white/15"
              >
                <Phone size={18} />
              </motion.a>

              <motion.a
                whileHover={{ y: -4, scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:Omcoachingclasses51@gmail.com"
                aria-label="Email Om Coaching Classes"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#c7dfa9] transition-colors hover:bg-white/15"
              >
                <Mail size={18} />
              </motion.a>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70">
              <span className="h-2 w-2 rounded-full bg-[#c7dfa9]" />
              MP Board & CBSE Courses
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div variants={reveal} className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-[#d6e8c9]">
              Quick Links
            </h4>

            <div className="mt-6 flex flex-col gap-3.5">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="group flex w-fit items-center gap-2 text-sm text-white/65 transition-colors duration-300 hover:text-white"
                >
                  <ChevronRight
                    size={14}
                    className="text-[#8eae7c] transition-transform duration-300 group-hover:translate-x-1"
                  />
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Courses */}
          <motion.div variants={reveal} className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-[#d6e8c9]">
              Our Courses
            </h4>

            <div className="mt-6 flex flex-col gap-4">
              {courses.map((course) => (
                <Link
                  key={course}
                  to="/courses"
                  className="group flex items-start gap-3 text-sm text-white/65 transition-colors duration-300 hover:text-white"
                >
                  <BookOpen
                    size={15}
                    className="mt-0.5 shrink-0 text-[#8eae7c] transition-transform duration-300 group-hover:scale-110"
                  />
                  <span>{course}</span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div variants={reveal} className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-[#d6e8c9]">
              Get in Touch
            </h4>

            <div className="mt-6 space-y-5">
              <a
                href="https://www.google.com/maps/search/?api=1&query=282%2FA%20Avantika%20Nagar%20Scheme%2051%20Indore%20Madhya%20Pradesh"
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-3"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#c7dfa9] transition-colors group-hover:bg-white/10">
                  <MapPin size={18} />
                </span>

                <span className="text-sm leading-6 text-white/65 transition-colors group-hover:text-white">
                  H.O. 282/A, Avantika Nagar,
                  <br />
                  In front of 51 Mall, Scheme 51,
                  <br />
                  Indore, Madhya Pradesh
                </span>
              </a>

              <a
                href="tel:7000920972"
                className="group flex items-center gap-3"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#c7dfa9] transition-colors group-hover:bg-white/10">
                  <Phone size={17} />
                </span>

                <span className="text-sm text-white/70 transition-colors group-hover:text-white">
                  <span className="mb-1 block text-xs text-white/45">
                    Calling Number
                  </span>
                  7000920972
                </span>
              </a>

              <a
                href="https://wa.me/917697459726"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#c7dfa9] transition-colors group-hover:bg-white/10">
                  <MessageCircle size={17} />
                </span>

                <span className="text-sm text-white/70 transition-colors group-hover:text-white">
                  <span className="mb-1 block text-xs text-white/45">
                    WhatsApp
                  </span>
                  7697459726
                </span>
              </a>

              <a
                href="mailto:Omcoachingclasses51@gmail.com"
                className="group flex items-start gap-3"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#c7dfa9] transition-colors group-hover:bg-white/10">
                  <Mail size={17} />
                </span>

                <span className="break-all pt-2 text-sm text-white/70 transition-colors group-hover:text-white">
                  Omcoachingclasses51@gmail.com
                </span>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
 
{/* Bottom bar */}
<div className="relative flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
  <p className="text-xs leading-6 text-white/50">
    © {new Date().getFullYear()} Om Coaching Classes, Indore.
    All rights reserved.
  </p>

  <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
    <span className="text-xs text-white/50">
      Learn Today. Lead Tomorrow.
    </span>

    <p className="text-xs text-white/60">
      Designed &amp; Developed by{" "}
      <a
        href="https://defaultprops.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-[#c7dfa9] transition-colors duration-300 hover:text-white"
      >
        Default Props
        <ArrowUpRight
          size={12}
          className="ml-1 inline-block transition-transform duration-300 hover:translate-x-0.5 hover:-translate-y-0.5"
        />
      </a>
    </p>

    <motion.button
      type="button"
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.92 }}
      onClick={() =>
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
      aria-label="Back to top"
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#c7dfa9] transition-colors hover:bg-white/15"
    >
      <ArrowUp size={18} />
    </motion.button>
  </div>
</div>

      </div>
    </footer>
  );
}
