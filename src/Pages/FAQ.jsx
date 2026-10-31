
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ChevronDown,
  MessageCircle,
  GraduationCap,
  BookOpen,
  Wallet,
  ClipboardCheck,
  MapPin,
  Phone,
  ArrowRight,
  HelpCircle,
  X,
  Sparkles,
} from "lucide-react";

const categories = [
  { name: "All Questions", icon: HelpCircle },
  { name: "Courses", icon: BookOpen },
  { name: "Fees", icon: Wallet },
  { name: "Teaching", icon: ClipboardCheck },
  { name: "Admissions", icon: GraduationCap },
];

const faqs = [
  {
    category: "Courses",
    question: "Which classes are available at OM Coaching Classes?",
    answer:
      "We provide coaching for Classes 3rd to 8th (all subjects), Class 9th, Class 10th, and Class 12th. For Class 12th, students can choose PCM, PCB, or Commerce.",
  },
  {
    category: "Courses",
    question: "Do you teach both MP Board and CBSE students?",
    answer:
      "Yes, coaching is available for both MP Board and CBSE students in the applicable classes. Please contact us to discuss the course suitable for your class and board.",
  },
  {
    category: "Courses",
    question: "Which streams are available for Class 12th?",
    answer:
      "Class 12th students can enquire about PCM, PCB, and Commerce. Our annual fees are ₹15,000 for MP Board and ₹20,000 for CBSE.",
  },
  {
    category: "Fees",
    question: "What are the coaching fees for Class 12th?",
    answer:
      "The annual fee for Class 12th MP Board is ₹15,000, while the annual fee for Class 12th CBSE is ₹20,000. These fees apply to PCM, PCB, and Commerce.",
  },
  {
    category: "Fees",
    question: "What are the fees for Class 10th?",
    answer:
      "The annual coaching fee is ₹10,000 for MP Board Class 10th and ₹15,000 for CBSE Class 10th.",
  },
  {
    category: "Fees",
    question: "What are the fees for Classes 3rd to 9th?",
    answer:
      "The annual fee is ₹8,000 for Classes 3rd to 8th (all subjects) and ₹9,000 for Class 9th.",
  },
  {
    category: "Teaching",
    question: "Do you conduct regular tests?",
    answer:
      "Yes, regular weekly tests are part of our learning approach. Students receive performance analysis and feedback to help identify areas that need improvement.",
  },
  {
    category: "Teaching",
    question: "Do you organise activities apart from classroom learning?",
    answer:
      "Yes, student activities include motivational lectures, college visits, annual picnics, cultural programmes, and farewell events.",
  },
  {
    category: "Teaching",
    question: "Since when has OM Coaching Classes been operating?",
    answer:
      "OM Coaching Classes was established in 2016 with a focus on building strong academic foundations and supporting students in their learning journey.",
  },
  {
    category: "Admissions",
    question: "How can I enquire about admission?",
    answer:
      "You can contact us by phone or WhatsApp at 7000920972 or 7697459726. Our team can help you enquire about classes, streams, fees, and admission details.",
  },
  {
    category: "Admissions",
    question: "Where is OM Coaching Classes located?",
    answer:
      "Our address is H.O. 282/A, Avantika Nagar, in front of 51 Mall, Scheme 51, Indore, Madhya Pradesh.",
  },
  {
    category: "Admissions",
    question: "How can I contact OM Coaching Classes?",
    answer:
      "Call us at 7000920972 or message us on WhatsApp at 7000920972 or 7697459726. You can also email Omcoachingclasses51@gmail.com.",
  },
];

const whatsappLink =
  "https://wa.me/917000920972?text=" +
  encodeURIComponent(
    "Hello OM Coaching Classes, I have a question about courses and admission."
  );

function FAQItem({ item, index, isOpen, onToggle }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.35, delay: (index % 4) * 0.04 }}
      className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
        isOpen
          ? "border-[#185b35]/30 bg-white shadow-[0_16px_45px_rgba(24,91,53,0.08)]"
          : "border-[#e4eae4] bg-white hover:border-[#185b35]/25 hover:shadow-lg hover:shadow-green-950/5"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-7 sm:py-6"
      >
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
            isOpen
              ? "bg-[#185b35] text-white"
              : "bg-[#eef5ef] text-[#185b35]"
          }`}
        >
          <HelpCircle size={19} />
        </span>

        <span className="flex-1">
          <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.17em] text-[#568064]">
            {item.category}
          </span>
          <span className="block text-sm font-bold leading-6 text-[#193b29] sm:text-base">
            {item.question}
          </span>
        </span>

        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            isOpen
              ? "rotate-180 bg-[#185b35] text-white"
              : "bg-[#f2f6f2] text-[#185b35]"
          }`}
        >
          <ChevronDown size={18} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="ml-[4.5rem] mr-5 border-t border-[#edf1ed] pb-6 pt-4 sm:ml-[5.75rem] sm:mr-7">
              <p className="text-sm leading-7 text-[#68776d]">
                {item.answer}
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#185b35] transition-all hover:gap-3"
              >
                Ask us on WhatsApp <ArrowRight size={15} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("All Questions");
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState(0);

  const filteredFAQs = useMemo(() => {
    const query = search.trim().toLowerCase();

    return faqs.filter((item) => {
      const matchesCategory =
        activeCategory === "All Questions" ||
        item.category === activeCategory;

      const matchesSearch =
        !query ||
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setOpenIndex(0);
  };

  const handleSearch = (value) => {
    setSearch(value);
    setOpenIndex(0);
  };

  return (
    <div className="overflow-hidden bg-[#f8faf7] text-[#193b29]">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#123d28]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(107,180,117,0.22),transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.07),transparent_40%)]" />

        <div className="absolute -right-24 top-10 -z-10 h-72 w-72 rounded-full border border-white/10 sm:h-96 sm:w-96" />
        <div className="absolute -right-12 top-22 -z-10 h-52 w-52 rounded-full border border-white/10 sm:h-72 sm:w-72" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:py-24">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-xs font-semibold tracking-wide text-green-100">
              <Sparkles size={14} />
              WE ARE HERE TO HELP
            </div>

            <h1 className="max-w-2xl text-4xl font-black leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Got Questions?
              <span className="mt-2 block text-[#a9d7a9]">
                We Have Answers.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-green-50/75 sm:text-base sm:leading-8">
              Find answers about our courses, fees, boards, teaching approach
              and admissions at OM Coaching Classes, Indore.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#faq-list"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#185b35] transition-all hover:-translate-y-1 hover:bg-[#eaf4e9]"
              >
                Explore FAQs <ArrowRight size={17} />
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10"
              >
                <MessageCircle size={17} /> Ask a Question
              </a>
            </div>

            <div className="mt-9 flex items-center gap-3 text-xs text-green-50/70">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                <GraduationCap size={18} />
              </span>
              <span>
                <strong className="block text-sm text-white">
                  Building Bright Futures
                </strong>
                Trusted learning support since 2016
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute -inset-4 rounded-[2rem] border border-white/10" />

            <div className="relative rounded-[1.7rem] border border-white/10 bg-white/[0.08] p-6 shadow-2xl backdrop-blur-md sm:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#a9d7a9] text-[#123d28]">
                <HelpCircle size={29} />
              </div>

              <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-green-200">
                Need assistance?
              </p>

              <h2 className="mt-3 text-2xl font-bold leading-snug text-white sm:text-3xl">
                Your learning journey starts with the right answers.
              </h2>

              <p className="mt-4 text-sm leading-7 text-green-50/70">
                Our team can help you understand available classes, streams,
                fees and admission enquiries.
              </p>

              <div className="mt-7 space-y-3">
                <a
                  href="tel:7000920972"
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/10 p-4 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  <Phone size={18} className="text-[#a9d7a9]" />
                  +91 70009 20972
                  <ArrowRight size={16} className="ml-auto" />
                </a>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl bg-[#a9d7a9] p-4 text-sm font-bold text-[#123d28] transition hover:bg-white"
                >
                  <MessageCircle size={18} />
                  Chat with us on WhatsApp
                  <ArrowRight size={16} className="ml-auto" />
                </a>
              </div>
            </div>

         
          </motion.div>
        </div>
      </section>

      {/* FAQ CONTENT */}
      <section
        id="faq-list"
        className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[#e8f2e8] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#185b35]">
              <HelpCircle size={15} /> Frequently Asked Questions
            </span>

            <h2 className="mt-5 text-3xl font-black tracking-tight text-[#193b29] sm:text-4xl lg:text-5xl">
              Everything You Need to{" "}
              <span className="text-[#398451]">Know</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#758177] sm:text-base">
              Browse by topic or search for a specific answer. We have
              organised the most common enquiries to help you get started.
            </p>
          </motion.div>

          {/* SEARCH */}
          <div className="mx-auto mt-10 max-w-2xl">
            <div className="flex items-center gap-3 rounded-2xl border border-[#e1e9e1] bg-white px-5 py-4 shadow-sm transition focus-within:border-[#398451] focus-within:shadow-lg focus-within:shadow-green-950/5">
              <Search size={21} className="shrink-0 text-[#398451]" />

              <input
                type="text"
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search courses, fees, admissions..."
                aria-label="Search frequently asked questions"
                className="w-full bg-transparent text-sm text-[#193b29] outline-none placeholder:text-gray-400"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => handleSearch("")}
                  aria-label="Clear search"
                  className="rounded-full p-1 text-gray-400 transition hover:bg-gray-100 hover:text-[#185b35]"
                >
                  <X size={17} />
                </button>
              )}
            </div>
          </div>

          {/* CATEGORY FILTERS */}
          <div className="mt-7 flex flex-wrap justify-center gap-2">
            {categories.map((category) => {
              const Icon = category.icon;
              const active = activeCategory === category.name;

              return (
                <button
                  key={category.name}
                  type="button"
                  onClick={() => handleCategoryChange(category.name)}
                  className={`inline-flex items-center gap-2 rounded-xl border px-4 py-3 text-xs font-bold transition-all duration-300 sm:text-sm ${
                    active
                      ? "border-[#185b35] bg-[#185b35] text-white shadow-lg shadow-green-950/15"
                      : "border-[#e1e9e1] bg-white text-[#53675a] hover:-translate-y-0.5 hover:border-[#185b35]/30 hover:text-[#185b35]"
                  }`}
                >
                  <Icon size={16} />
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* QUESTIONS */}
          <div className="mx-auto mt-10 grid max-w-7xl items-start gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
            <div className="space-y-3">
              <div className="mb-5 flex items-center justify-between gap-3">
                <p className="text-sm font-bold text-[#193b29]">
                  {filteredFAQs.length}{" "}
                  {filteredFAQs.length === 1 ? "Question" : "Questions"} Found
                </p>

                {activeCategory !== "All Questions" && (
                  <button
                    type="button"
                    onClick={() => handleCategoryChange("All Questions")}
                    className="text-xs font-bold text-[#398451] hover:underline"
                  >
                    Clear filter
                  </button>
                )}
              </div>

              <AnimatePresence mode="wait">
                {filteredFAQs.length > 0 ? (
                  <motion.div
                    key={`${activeCategory}-${search}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3"
                  >
                    {filteredFAQs.map((item, index) => (
                      <FAQItem
                        key={item.question}
                        item={item}
                        index={index}
                        isOpen={openIndex === index}
                        onToggle={() =>
                          setOpenIndex((current) =>
                            current === index ? -1 : index
                          )
                        }
                      />
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="rounded-3xl border border-dashed border-[#d7e3d7] bg-white px-6 py-16 text-center"
                  >
                    <Search
                      size={34}
                      className="mx-auto text-[#82a78a]"
                    />
                    <h3 className="mt-4 text-lg font-bold text-[#193b29]">
                      No matching questions found
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Try another keyword or clear your filters.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        handleSearch("");
                        handleCategoryChange("All Questions");
                      }}
                      className="mt-5 rounded-xl bg-[#185b35] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#123d28]"
                    >
                      Reset Filters
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* SIDEBAR */}
            <motion.aside
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-5 lg:sticky lg:top-28"
            >
              <div className="overflow-hidden rounded-3xl bg-[#123d28] p-6 text-white sm:p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#a9d7a9]">
                  <MessageCircle size={23} />
                </div>

                <h3 className="mt-5 text-2xl font-extrabold leading-snug">
                  Still Have Questions?
                </h3>

                <p className="mt-3 text-sm leading-7 text-green-50/70">
                  Talk to our team for information about courses, fees and
                  admissions.
                </p>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-[#a9d7a9] px-4 py-3.5 text-sm font-bold text-[#123d28] transition hover:bg-white"
                >
                  Ask on WhatsApp <ArrowRight size={16} />
                </a>
              </div>

              <div className="rounded-3xl border border-[#e1e9e1] bg-white p-6">
                <h3 className="font-extrabold text-[#193b29]">
                  Quick Contact
                </h3>

                <div className="mt-5 space-y-4">
                  <a
                    href="tel:7000920972"
                    className="group flex items-start gap-3"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#edf5ed] text-[#185b35] transition group-hover:bg-[#185b35] group-hover:text-white">
                      <Phone size={18} />
                    </span>
                    <span className="pt-1">
                      <span className="block text-xs text-gray-500">
                        Call Us
                      </span>
                      <span className="mt-1 block text-sm font-bold text-[#193b29]">
                        70009 20972
                      </span>
                    </span>
                  </a>

                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#edf5ed] text-[#185b35]">
                      <MapPin size={18} />
                    </span>
                    <span className="pt-1">
                      <span className="block text-xs text-gray-500">
                        Visit Us
                      </span>
                      <span className="mt-1 block text-sm leading-6 text-[#193b29]">
                        Avantika Nagar, in front of 51 Mall, Scheme 51,
                        Indore (M.P.)
                      </span>
                    </span>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="mt-6 flex items-center justify-between border-t border-[#edf1ed] pt-5 text-sm font-bold text-[#185b35] transition hover:text-[#398451]"
                >
                  Visit Contact Page <ArrowRight size={17} />
                </Link>
              </div>

              <div className="rounded-3xl border border-[#e1e9e1] bg-[#eef5ee] p-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#568064]">
                  Explore More
                </p>

                <Link
                  to="/courses"
                  className="mt-4 flex items-center justify-between gap-3 text-sm font-bold text-[#193b29] transition hover:text-[#398451]"
                >
                  Courses & Fees <ArrowRight size={16} />
                </Link>

                <Link
                  to="/about"
                  className="mt-4 flex items-center justify-between gap-3 text-sm font-bold text-[#193b29] transition hover:text-[#398451]"
                >
                  About Our Institute <ArrowRight size={16} />
                </Link>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#eaf3e9] px-6 py-10 sm:px-10 sm:py-14 lg:px-14"
        >
          <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border border-[#185b35]/10" />
          <div className="absolute -right-6 -top-10 h-44 w-44 rounded-full border border-[#185b35]/10" />

          <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#398451]">
                <Sparkles size={15} /> YOUR NEXT CHAPTER STARTS HERE
              </span>

              <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-[#193b29] sm:text-4xl">
                Ready to Take the Next Step?
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#64776a] sm:text-base">
                Explore our courses or get in touch to discuss the right
                learning option for your child.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Link
                to="/courses"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#185b35] px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#123d28]"
              >
                Explore Courses <ArrowRight size={17} />
              </Link>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#185b35]/20 bg-white px-6 py-4 text-sm font-bold text-[#185b35] transition hover:-translate-y-1 hover:border-[#185b35]/40"
              >
                <MessageCircle size={17} /> Enquire Now
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
