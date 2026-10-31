
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  "Classes 3rd to 12th",
  "MP Board & CBSE",
  "PCM, PCB & Commerce",
  "Regular Tests & Performance Analysis",
];

export default function AdmissionCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="relative overflow-hidden rounded-[2rem] bg-[#153b28] shadow-2xl shadow-green-950/10"
        >
          {/* Decorative glow */}
          <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-green-400/15 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-emerald-300/10 blur-[90px]" />

          <div className="relative grid items-center lg:grid-cols-[1.05fr_0.95fr]">
            {/* Content */}
            <div className="px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2">
                <BookOpen size={16} className="text-green-300" />
                <span className="text-xs font-bold uppercase tracking-[0.17em] text-green-100">
                  Admissions Enquiry
                </span>
              </div>

              <h2 className="max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Give Your Child
                <span className="mt-2 block text-green-300">
                  the Right Direction.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-green-50/75 sm:text-base sm:leading-8">
                Strong concepts, consistent practice and the right academic
                guidance can make a meaningful difference in a student's
                learning journey.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-2.5 text-sm text-white/90"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-green-300"
                    />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://wa.me/917000920972?text=Hello%20OM%20Coaching%20Classes%2C%20I%20want%20to%20enquire%20about%20admissions."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#153b28] transition-all duration-300 hover:-translate-y-1 hover:bg-green-50"
                >
                  <MessageCircle size={18} />
                  Enquire on WhatsApp
                  <ArrowUpRight size={17} />
                </a>

                <Link
                  to="/courses"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                >
                  View Courses
                  <ArrowRight size={17} />
                </Link>
              </div>

              <p className="mt-6 text-xs leading-6 text-green-100/60">
                OM Coaching Classes · Scheme 51, Indore
              </p>
            </div>

            {/* Student image */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative min-h-[320px] overflow-hidden sm:min-h-[420px] lg:min-h-[600px]"
            >
              <img
                src="assets/home/omg6.jpg"
                alt="Student studying and preparing for examinations"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#102e20]/80 via-[#102e20]/10 to-transparent lg:bg-gradient-to-r lg:from-[#153b28]/20 lg:via-transparent lg:to-transparent" />

              {/* Floating info card */}
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/95 p-4 shadow-xl backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-8 sm:p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#eaf4ec] text-[#185b35]">
                    <BookOpen size={23} />
                  </div>

                  <div>
                    <p className="font-bold text-[#173b29]">
                      Your Future Starts Here
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-600 sm:text-sm">
                      Connect with us to discuss courses and annual fees.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
