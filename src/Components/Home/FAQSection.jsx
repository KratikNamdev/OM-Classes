
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  MessageCircle,
  CircleHelp,
} from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "Which classes are available at OM Coaching Classes?",
    answer:
      "We provide coaching for Classes 3rd to 12th. Students can enquire about the available subjects and batches according to their class.",
  },
  {
    question: "Do you offer both MP Board and CBSE coaching?",
    answer:
      "Yes. Coaching options are available for MP Board and CBSE students. Class 10th and Class 12th fees differ by board.",
  },
  {
    question: "Which streams are available for Class 12th?",
    answer:
      "Class 12th coaching is available for PCM, PCB and Commerce streams for MP Board and CBSE students.",
  },
  {
    question: "What are the annual coaching fees?",
    answer:
      "Classes 3rd–8th: ₹8,000 per year; Class 9th: ₹9,000; Class 10th MP Board: ₹10,000; Class 10th CBSE: ₹15,000; Class 12th MP Board: ₹15,000; and Class 12th CBSE: ₹20,000. Class 12th fees apply to PCM, PCB and Commerce. Please contact us to confirm the details for your class.",
  },
  {
    question: "Are regular tests conducted?",
    answer:
      "Yes. Weekly tests and performance analysis are part of our academic activities to help students practise regularly and identify areas for improvement.",
  },
  {
    question: "Do you organise activities apart from studies?",
    answer:
      "Yes. Activities include motivational lectures, college visits, an annual picnic, cultural programs and farewell celebrations.",
  },
  {
    question: "Where is OM Coaching Classes located?",
    answer:
      "Our address is H.O. 282/A, Avantika Nagar, in front of 51 Mall, Scheme 51, Indore, Madhya Pradesh.",
  },
  {
    question: "How can I enquire about admission?",
    answer:
      "You can contact us by phone or WhatsApp at 7000920972 or 7697459726 to discuss your class, stream, fees and admission details.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-[#f8faf7] py-20 sm:py-24 lg:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-28 top-20 h-72 w-72 rounded-full bg-green-100/60 blur-[100px]" />
      <div className="pointer-events-none absolute -right-28 bottom-10 h-80 w-80 rounded-full bg-emerald-100/60 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 shadow-sm">
              <CircleHelp size={16} className="text-[#237346]" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#185b35]">
                Got Questions?
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#173b29] sm:text-4xl lg:text-5xl">
              Frequently Asked
              <span className="mt-2 block text-[#27804b]">
                Questions.
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              Find answers about our courses, annual fees, boards, weekly tests
              and admissions at OM Coaching Classes, Indore.
            </p>

            {/* Contact card */}
            <div className="mt-8 overflow-hidden rounded-2xl bg-[#153b28] p-6 text-white shadow-xl shadow-green-950/10 sm:p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-green-200">
                <MessageCircle size={24} />
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Still have questions?
              </h3>

              <p className="mt-2 text-sm leading-6 text-green-50/75">
                Talk to our team for course and admission information.
              </p>

              <a
                href="https://wa.me/917000920972?text=Hello%20OM%20Coaching%20Classes%2C%20I%20have%20a%20question%20about%20admissions."
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-[#153b28] transition-all duration-300 hover:-translate-y-1 hover:bg-green-50"
              >
                Ask on WhatsApp
                <ArrowRight size={17} />
              </a>

              <p className="mt-4 text-center text-xs text-green-100/70">
                Call us: 7000920972
              </p>
            </div>

            <Link
              to="/faq"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#185b35] transition-colors hover:text-[#27804b]"
            >
              View All FAQs
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          {/* Right accordion */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3"
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-green-300 bg-white shadow-lg shadow-green-950/5"
                      : "border-green-100 bg-white/80 hover:border-green-200 hover:bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(isOpen ? -1 : index)
                    }
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                  >
                    <span
                      className={`text-sm font-bold leading-6 transition-colors sm:text-base ${
                        isOpen ? "text-[#237346]" : "text-[#173b29]"
                      }`}
                    >
                      <span className="mr-3 text-xs font-bold text-green-300">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 bg-[#185b35] text-white"
                          : "bg-green-50 text-[#185b35]"
                      }`}
                    >
                      <ChevronDown size={19} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.3, ease: "easeInOut" },
                          opacity: { duration: 0.2 },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                          <div className="mb-4 h-px bg-green-100" />
                          <p className="pl-8 text-sm leading-7 text-slate-600">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
