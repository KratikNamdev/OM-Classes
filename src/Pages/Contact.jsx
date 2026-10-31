
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  ArrowRight,
  ArrowUpRight,
  Send,
  User,
  BookOpen,
  GraduationCap,
  CheckCircle2,
  Sparkles,
  Navigation,
  Globe,
} from "lucide-react";

const WHATSAPP_NUMBER = "917000920972";

const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.6773086252874!2d75.83438857509523!3d22.740232379372742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd8c8aa72931%3A0xc23eda7f156a9eee!2sOm%20Coaching%20Classes!5e0!3m2!1sen!2sin!4v1793182720276!5m2!1sen!2sin";

const contactDetails = [
  {
    icon: Phone,
    label: "Call Us",
    title: "70009 20972",
    description: "Speak to our team for course enquiries.",
    href: "tel:7000920972",
    action: "Call Now",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    title: "70009 20972",
    description: "Message us about fees and admissions.",
    href: "https://wa.me/917000920972",
    action: "Chat With Us",
  },
  {
    icon: Mail,
    label: "Email Us",
    title: "Send an Enquiry",
    description: "Omcoachingclasses51@gmail.com",
    href: "mailto:Omcoachingclasses51@gmail.com",
    action: "Send Email",
  },
  {
    icon: MapPin,
    label: "Visit Our Institute",
    title: "Scheme 51, Indore",
    description:
      "H.O. 282/A, Avantika Nagar, in front of 51 Mall, Indore (M.P.)",
    href: "https://www.google.com/maps/search/?api=1&query=Om+Coaching+Classes+Scheme+51+Indore",
    action: "Get Directions",
  },
];

const initialForm = {
  name: "",
  phone: "",
  className: "",
  board: "",
  message: "",
};

function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#dce9dd] bg-[#edf5ed] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#185b35]">
      <Sparkles size={14} />
      {children}
    </span>
  );
}

function ContactCard({ item, index }) {
  const Icon = item.icon;

  return (
    <motion.a
      href={item.href}
      target={item.href.startsWith("http") ? "_blank" : undefined}
      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -7 }}
      className="group relative overflow-hidden rounded-2xl border border-[#e2eae2] bg-white p-6 shadow-[0_8px_30px_rgba(20,60,35,0.03)] transition-shadow duration-300 hover:border-[#185b35]/25 hover:shadow-[0_18px_45px_rgba(20,60,35,0.09)] sm:p-7"
    >
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#edf5ed] transition-transform duration-500 group-hover:scale-[1.8]" />

      <div className="relative">
        <div className="flex items-start justify-between gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf5ed] text-[#185b35] transition-all duration-300 group-hover:bg-[#185b35] group-hover:text-white">
            <Icon size={22} />
          </span>

          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e5ece5] text-[#185b35] transition-all duration-300 group-hover:border-[#185b35] group-hover:bg-[#185b35] group-hover:text-white">
            <ArrowUpRight size={17} />
          </span>
        </div>

        <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.18em] text-[#659071]">
          {item.label}
        </p>

        <h3 className="mt-2 break-words text-lg font-extrabold text-[#193b29] sm:text-xl">
          {item.title}
        </h3>

        <p className="mt-3 min-h-[48px] text-sm leading-6 text-[#78847a]">
          {item.description}
        </p>

        <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#185b35] transition-all group-hover:gap-3">
          {item.action} <ArrowRight size={16} />
        </span>
      </div>
    </motion.a>
  );
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [formError, setFormError] = useState("");

  const updateField = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setFormError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.phone.trim() || !form.className) {
      setFormError("Please fill in your name, phone number and class.");
      return;
    }

    const phoneDigits = form.phone.replace(/\D/g, "");

    if (phoneDigits.length < 10 || phoneDigits.length > 13) {
      setFormError("Please enter a valid phone number.");
      return;
    }

    const message = [
      "Hello OM Coaching Classes!",
      "",
      "I would like to enquire about admission.",
      "",
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Class: ${form.className}`,
      `Board: ${form.board || "Not specified"}`,
      `Message: ${form.message.trim() || "Please share course and admission details."}`,
    ].join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="overflow-hidden bg-[#f8faf7] text-[#193b29]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#123d28]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(119,183,121,0.22),transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.07),transparent_45%)]" />

        <div className="absolute -right-28 top-0 -z-10 h-72 w-72 rounded-full border border-white/10 sm:h-[440px] sm:w-[440px]" />
        <div className="absolute -right-12 top-16 -z-10 h-52 w-52 rounded-full border border-white/10 sm:h-[320px] sm:w-[320px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-24">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-xs font-semibold text-green-100">
              <MessageCircle size={15} />
              WE WOULD LOVE TO HEAR FROM YOU
            </div>

            <h1 className="max-w-2xl text-4xl font-black leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Let's Talk About
              <span className="mt-2 block text-[#a9d7a9]">
                Your Bright Future.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-green-50/75 sm:text-base sm:leading-8">
              Have questions about courses, fees or admissions? Connect with
              OM Coaching Classes and take the next step in your academic
              journey.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#enquiry"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#185b35] transition hover:-translate-y-1 hover:bg-[#eaf4e9]"
              >
                Send an Enquiry <ArrowRight size={17} />
              </a>

              <a
                href="https://wa.me/917000920972?text=Hello%20OM%20Coaching%20Classes%2C%20I%20want%20to%20enquire%20about%20admissions."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
              >
                <MessageCircle size={17} /> WhatsApp Us
              </a>
            </div>

            <div className="mt-9 flex items-center gap-3 text-xs text-green-50/70">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#a9d7a9]">
                <GraduationCap size={20} />
              </span>
              <span>
                <strong className="block text-sm text-white">
                  OM Coaching Classes
                </strong>
                Building strong foundations since 2016
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="absolute -inset-3 rounded-[2rem] border border-white/10" />

            <div className="relative rounded-[1.7rem] border border-white/10 bg-white/[0.08] p-6 shadow-2xl backdrop-blur-md sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#a9d7a9] text-[#123d28]">
                  <MapPin size={27} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.17em] text-green-200">
                    Find Our Institute
                  </p>
                  <h2 className="mt-2 text-xl font-extrabold leading-snug text-white sm:text-2xl">
                    Visit Us in Indore
                  </h2>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-green-50/75">
                H.O. 282/A, Avantika Nagar, in front of 51 Mall, Scheme 51,
                Indore, Madhya Pradesh.
              </p>

              <div className="mt-6 flex items-start gap-3 rounded-xl border border-white/10 bg-black/10 p-4">
                <Clock size={19} className="mt-0.5 shrink-0 text-[#a9d7a9]" />
                <div>
                  <p className="text-sm font-bold text-white">
                    Planning a Visit?
                  </p>
                  <p className="mt-1 text-xs leading-5 text-green-50/65">
                    Call us to confirm suitable visiting hours before coming
                    to the institute.
                  </p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Om+Coaching+Classes+Scheme+51+Indore"
                target="_blank"
                rel="noreferrer"
                className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-[#a9d7a9] px-5 py-4 text-sm font-bold text-[#123d28] transition hover:bg-white"
              >
                <Navigation size={17} /> Get Directions
                <ArrowUpRight size={17} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <SectionLabel>Get In Touch</SectionLabel>

            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
              We're Just a <span className="text-[#398451]">Message Away</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#758177] sm:text-base">
              Choose the most convenient way to reach our team. We're happy to
              help you with your questions.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {contactDetails.map((item, index) => (
              <ContactCard key={item.label} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ENQUIRY FORM */}
      <section
        id="enquiry"
        className="scroll-mt-24 px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative isolate overflow-hidden rounded-[2rem] bg-[#123d28] p-7 sm:p-10 lg:p-12"
          >
            <div className="absolute -right-16 -top-16 -z-10 h-64 w-64 rounded-full border border-white/10" />
            <div className="absolute -right-6 -top-6 -z-10 h-44 w-44 rounded-full border border-white/10" />

            <SectionLabel>Admission Enquiry</SectionLabel>

            <h2 className="mt-6 text-3xl font-black leading-tight text-white sm:text-4xl">
              Let's Find the Right Course for You.
            </h2>

            <p className="mt-5 text-sm leading-7 text-green-50/70">
              Tell us a little about yourself and the class you're interested
              in. Your enquiry will open in WhatsApp so you can send it
              directly to our team.
            </p>

            <div className="mt-8 space-y-5">
              {[
                "Classes 3rd to 12th",
                "MP Board and CBSE",
                "PCM, PCB and Commerce",
                "Regular tests and performance analysis",
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#a9d7a9] text-[#123d28]">
                    <CheckCircle2 size={15} />
                  </span>
                  <span className="text-sm font-medium text-white/90">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 border-t border-white/10 pt-7">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-green-200">
                Contact the institute
              </p>

              <a
                href="tel:7000920972"
                className="mt-3 inline-flex items-center gap-3 text-lg font-extrabold text-white transition hover:text-[#a9d7a9]"
              >
                <Phone size={19} /> +91 70009 20972
              </a>

              <p className="mt-2 text-sm text-green-50/65">
                Alternate WhatsApp: 7697459726
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-[#e2eae2] bg-white p-6 shadow-[0_15px_55px_rgba(20,60,35,0.05)] sm:p-9 lg:p-11"
          >
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#659071]">
                Send Us Your Details
              </p>
              <h3 className="mt-3 text-2xl font-black text-[#193b29] sm:text-3xl">
                Request a Callback
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#78847a]">
                Fill in the details below to prepare your WhatsApp enquiry.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-bold text-[#314d39]"
                  >
                    Student / Parent Name *
                  </label>
                  <div className="relative">
                    <User
                      size={17}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#78927d]"
                    />
                    <input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={updateField}
                      placeholder="Enter your name"
                      autoComplete="name"
                      required
                      className="w-full rounded-xl border border-[#e0e8e0] bg-[#fbfcfa] py-3.5 pl-11 pr-4 text-sm text-[#193b29] outline-none transition placeholder:text-gray-400 focus:border-[#398451] focus:bg-white focus:ring-4 focus:ring-[#185b35]/5"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-bold text-[#314d39]"
                  >
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone
                      size={17}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#78927d]"
                    />
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      value={form.phone}
                      onChange={updateField}
                      placeholder="Enter phone number"
                      autoComplete="tel"
                      required
                      className="w-full rounded-xl border border-[#e0e8e0] bg-[#fbfcfa] py-3.5 pl-11 pr-4 text-sm text-[#193b29] outline-none transition placeholder:text-gray-400 focus:border-[#398451] focus:bg-white focus:ring-4 focus:ring-[#185b35]/5"
                    />
                  </div>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="className"
                    className="mb-2 block text-sm font-bold text-[#314d39]"
                  >
                    Interested Class *
                  </label>
                  <div className="relative">
                    <BookOpen
                      size={17}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#78927d]"
                    />
                    <select
                      id="className"
                      name="className"
                      value={form.className}
                      onChange={updateField}
                      required
                      className="w-full appearance-none rounded-xl border border-[#e0e8e0] bg-[#fbfcfa] py-3.5 pl-11 pr-10 text-sm text-[#193b29] outline-none transition focus:border-[#398451] focus:bg-white focus:ring-4 focus:ring-[#185b35]/5"
                    >
                      <option value="">Select class</option>
                      <option value="Class 3rd–8th">Class 3rd–8th</option>
                      <option value="Class 9th">Class 9th</option>
                      <option value="Class 10th">Class 10th</option>
                      <option value="Class 12th PCM">Class 12th PCM</option>
                      <option value="Class 12th PCB">Class 12th PCB</option>
                      <option value="Class 12th Commerce">
                        Class 12th Commerce
                      </option>
                    </select>
                    <ArrowRight
                      size={15}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-[#78927d]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="board"
                    className="mb-2 block text-sm font-bold text-[#314d39]"
                  >
                    Education Board
                  </label>
                  <div className="relative">
                    <GraduationCap
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#78927d]"
                    />
                    <select
                      id="board"
                      name="board"
                      value={form.board}
                      onChange={updateField}
                      className="w-full appearance-none rounded-xl border border-[#e0e8e0] bg-[#fbfcfa] py-3.5 pl-11 pr-10 text-sm text-[#193b29] outline-none transition focus:border-[#398451] focus:bg-white focus:ring-4 focus:ring-[#185b35]/5"
                    >
                      <option value="">Select board</option>
                      <option value="MP Board">MP Board</option>
                      <option value="CBSE">CBSE</option>
                      <option value="Not sure">Not sure yet</option>
                    </select>
                    <ArrowRight
                      size={15}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-[#78927d]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-bold text-[#314d39]"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={updateField}
                  rows={4}
                  placeholder="Tell us what you'd like to know..."
                  className="w-full resize-y rounded-xl border border-[#e0e8e0] bg-[#fbfcfa] px-4 py-3.5 text-sm text-[#193b29] outline-none transition placeholder:text-gray-400 focus:border-[#398451] focus:bg-white focus:ring-4 focus:ring-[#185b35]/5"
                />
              </div>

              {formError && (
                <p
                  role="alert"
                  className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                >
                  {formError}
                </p>
              )}

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#185b35] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-green-950/10 transition duration-300 hover:-translate-y-1 hover:bg-[#123d28] hover:shadow-xl"
              >
                <MessageCircle size={18} />
                Continue to WhatsApp
                <Send
                  size={17}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5"
                />
              </button>

              <p className="text-center text-xs leading-5 text-[#8a958c]">
                WhatsApp will open with your enquiry details ready to send.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* GOOGLE MAP */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
          >
            <div>
              <SectionLabel>
                <MapPin size={14} /> Our Location
              </SectionLabel>

              <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
                Find Us on the <span className="text-[#398451]">Map</span>
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#758177] sm:text-base">
                Visit OM Coaching Classes at Avantika Nagar, Scheme 51,
                Indore. Use the map below to plan your visit.
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Om+Coaching+Classes+Scheme+51+Indore"
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-xl border border-[#dce7dc] bg-white px-5 py-3.5 text-sm font-bold text-[#185b35] transition hover:border-[#185b35] hover:bg-[#edf5ed] sm:self-auto"
            >
              Open Google Maps <ArrowUpRight size={17} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[1.7rem] border border-[#dfe8df] bg-white p-2 shadow-[0_18px_60px_rgba(20,60,35,0.08)] sm:p-3"
          >
            <iframe
              src={mapEmbedUrl}
              title="OM Coaching Classes location in Scheme 51, Indore"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="block min-h-[320px] w-full rounded-[1.2rem] sm:min-h-[450px]"
            />
          </motion.div>

          <div className="mt-5 flex flex-col gap-3 rounded-2xl border border-[#e2eae2] bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#edf5ed] text-[#185b35]">
                <MapPin size={19} />
              </span>

              <div>
                <p className="text-sm font-extrabold text-[#193b29]">
                  OM Coaching Classes
                </p>
                <p className="mt-1 text-sm leading-6 text-[#78847a]">
                  H.O. 282/A, Avantika Nagar, in front of 51 Mall, Scheme 51,
                  Indore (M.P.)
                </p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Om+Coaching+Classes+Scheme+51+Indore"
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#185b35] transition hover:gap-3"
            >
              Get Directions <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 rounded-[2rem] bg-[#eaf3e9] px-6 py-9 sm:px-10 sm:py-12 md:flex-row md:items-center lg:px-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#398451]">
              <Globe size={15} /> LET'S CONNECT
            </div>

            <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-[#193b29] sm:text-4xl">
              Give Your Child the Right Guidance.
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#64776a] sm:text-base">
              Explore our courses and connect with OM Coaching Classes to
              discuss your child's academic goals.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              to="/courses"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#185b35] px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#123d28]"
            >
              Explore Courses <ArrowRight size={17} />
            </Link>

            <a
              href="https://wa.me/917000920972"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#185b35]/20 bg-white px-6 py-4 text-sm font-bold text-[#185b35] transition hover:-translate-y-1 hover:border-[#185b35]/40"
            >
              <MessageCircle size={17} /> Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
