
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Camera,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Images,
  Maximize2,
  X,
  Sparkles,
} from "lucide-react";

// ==========================================
// GALLERY IMAGES ARRAY
// Future mein images add, remove ya update
// karne ke liye sirf isi array ko edit karein.
// ==========================================

const galleryImages = [
  {
    id: 1,
    src: "/assets/home/g1.jpeg",
    title: "Gallery Image 01",
    alt: "OM Coaching Classes photograph 1",
    category: "Events",
    featured: true,
  },
  {
    id: 2,
    src: "/assets/home/g2.jpeg",
    title: "Gallery Image 02",
    alt: "OM Coaching Classes photograph 2",
    category: "Events",
    featured: true,
  },
  {
    id: 3,
    src: "/assets/home/g3.jpeg",
    title: "Gallery Image 03",
    alt: "OM Coaching Classes photograph 3",
    category: "Events",
    featured: true,
  },
  {
    id: 4,
    src: "/assets/home/g4.jpeg",
    title: "Gallery Image 04",
    alt: "OM Coaching Classes photograph 4",
    category: "Events",
    featured: true,
  },
  {
    id: 5,
    src: "/assets/home/g5.jpeg",
    title: "Gallery Image 05",
    alt: "OM Coaching Classes photograph 5",
    category: "Classroom",
    featured: false,
  },
  {
    id: 6,
    src: "/assets/home/g6.jpeg",
    title: "Gallery Image 06",
    alt: "OM Coaching Classes photograph 6",
    category: "Events",
    featured: false,
  },
  {
    id: 7,
    src: "/assets/home/g7.jpeg",
    title: "Gallery Image 07",
    alt: "OM Coaching Classes photograph 7",
    category: "Events",
    featured: false,
  },
  {
    id: 8,
    src: "/assets/home/g8.jpeg",
    title: "Gallery Image 08",
    alt: "OM Coaching Classes photograph 8",
    category: "Events",
    featured: false,
  },
  {
    id: 9,
    src: "/assets/home/g9.jpeg",
    title: "Gallery Image 09",
    alt: "OM Coaching Classes photograph 9",
    category: "Events",
    featured: false,
  },
  {
    id: 10,
    src: "/assets/home/g10.jpeg",
    title: "Gallery Image 10",
    alt: "OM Coaching Classes photograph 10",
    category: "Events",
    featured: false,
  },
  {
    id: 11,
    src: "/assets/home/g11.jpeg",
    title: "Gallery Image 11",
    alt: "OM Coaching Classes photograph 11",
    category: "Events",
    featured: false,
  },
  {
    id: 12,
    src: "/assets/home/g12.jpeg",
    title: "Gallery Image 12",
    alt: "OM Coaching Classes photograph 12",
    category: "Events",
    featured: false,
  },
  {
    id: 13,
    src: "/assets/home/g13.jpeg",
    title: "Gallery Image 13",
    alt: "OM Coaching Classes photograph 13",
    category: "Classroom",
    featured: false,
  },
  {
    id: 14,
    src: "/assets/home/g14.jpeg",
    title: "Gallery Image 14",
    alt: "OM Coaching Classes photograph 14",
    category: "Classroom",
    featured: false,
  },
  {
    id: 15,
    src: "/assets/home/g15.jpeg",
    title: "Gallery Image 15",
    alt: "OM Coaching Classes photograph 15",
    category: "Classroom",
    featured: false,
  },
  {
    id: 16,
    src: "/assets/home/g16.jpeg",
    title: "Gallery Image 16",
    alt: "OM Coaching Classes photograph 16",
    category: "Classroom",
    featured: false,
  },
    {
    id: 17,
    src: "/assets/home/om2.jpeg",
    title: "Gallery Image 16",
    alt: "OM Coaching Classes photograph 16",
    category: "Activities",
    featured: false,
  },
     {
    id: 18,
    src: "/assets/home/om5.jpeg",
    title: "Gallery Image 16",
    alt: "OM Coaching Classes photograph 16",
    category: "Activities",
    featured: false,
  },    {
    id: 17,
    src: "/assets/home/om3.jpeg",
    title: "Gallery Image 16",
    alt: "OM Coaching Classes photograph 16",
    category: "Activities",
    featured: false,
  },
];

// Categories automatically array se generate hongi
const categories = [
  "All Moments",
  ...new Set(galleryImages.map((image) => image.category)),
];

// ==========================================
// MAIN GALLERY COMPONENT
// ==========================================

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All Moments");
  const [selectedImage, setSelectedImage] = useState(null);

  // Category filtering
  const filteredImages =
    activeCategory === "All Moments"
      ? galleryImages
      : galleryImages.filter(
          (image) => image.category === activeCategory
        );

  // Current lightbox image index
  const currentIndex = filteredImages.findIndex(
    (image) => image.id === selectedImage?.id
  );

  // Next image
  const showNext = () => {
    if (currentIndex === -1 || filteredImages.length === 0) return;

    setSelectedImage(
      filteredImages[(currentIndex + 1) % filteredImages.length]
    );
  };

  // Previous image
  const showPrevious = () => {
    if (currentIndex === -1 || filteredImages.length === 0) return;

    setSelectedImage(
      filteredImages[
        (currentIndex - 1 + filteredImages.length) %
          filteredImages.length
      ]
    );
  };

  // Keyboard navigation and body scroll lock
  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedImage(null);
      if (event.key === "ArrowRight") showNext();
      if (event.key === "ArrowLeft") showPrevious();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage, currentIndex]);

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

          {/* HERO CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-xs font-bold tracking-wider text-green-100">
              <Camera size={15} />
              MOMENTS THAT MATTER
            </span>

            <h1 className="mt-7 text-4xl font-black leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Every Picture
              <span className="mt-2 block text-[#a9d7a9]">
                Tells a Story.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-green-50/75 sm:text-base sm:leading-8">
              Explore the moments, memories and experiences that make life
              at OM Coaching Classes special. Every photograph captures a
              part of our learning journey.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#gallery-grid"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#185b35] transition hover:-translate-y-1 hover:bg-[#eaf4e9]"
              >
                Explore Gallery
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

            <div className="mt-9 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-[#a9d7a9]">
                <Images size={21} />
              </div>

              <div>
                <p className="text-lg font-extrabold text-white">
                  {galleryImages.length}+
                </p>
                <p className="text-xs text-green-50/65">
                  Captured Moments
                </p>
              </div>
            </div>
          </motion.div>

          {/* HERO IMAGE COLLAGE - ARRAY BASED */}

          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="grid grid-cols-5 grid-rows-5 gap-3">
              {galleryImages
                .filter((image) => image.featured)
                .slice(0, 4)
                .map((image, index) => (
                  <button
                    type="button"
                    key={image.id}
                    onClick={() => setSelectedImage(image)}
                    className={`group overflow-hidden rounded-[1.5rem] border border-white/20 shadow-2xl ${
                      index === 0
                        ? "col-span-3 row-span-3"
                        : index === 3
                          ? "col-span-3 row-span-2"
                          : "col-span-2 row-span-2"
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full min-h-[120px] w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                  </button>
                ))}
            </div>

           
          </motion.div>
        </div>
      </section>

      {/* ==========================================
          GALLERY SECTION
      ========================================== */}

      <section
        id="gallery-grid"
        className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">

          {/* SECTION HEADING */}

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
          >
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#e8f2e8] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#185b35]">
                <Sparkles size={14} />
                Our Gallery
              </span>

              <h2 className="mt-5 text-3xl font-black tracking-tight text-[#193b29] sm:text-4xl lg:text-5xl">
                A Collection of
                <span className="text-[#398451]">
                  {" "}Beautiful Memories
                </span>
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#758177] sm:text-base">
                From classroom experiences to special celebrations, take a
                look at the moments that bring our institute together.
              </p>
            </div>

           
          </motion.div>

          {/* CATEGORY FILTERS */}

          <div className="mt-9 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-xl border px-5 py-3 text-xs font-bold transition-all sm:text-sm ${
                  activeCategory === category
                    ? "border-[#185b35] bg-[#185b35] text-white shadow-lg shadow-green-950/10"
                    : "border-[#e1e9e1] bg-white text-[#53675a] hover:border-[#185b35]/30 hover:text-[#185b35]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* RESPONSIVE MASONRY GRID */}

          <motion.div
            layout
            className="mt-8 grid auto-rows-[170px] grid-cols-2 gap-3 sm:auto-rows-[210px] sm:grid-cols-3 sm:gap-4 lg:auto-rows-[230px] lg:grid-cols-4"
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => {
                const large = index % 7 === 0;
                const tall = index % 5 === 2;

                return (
                  <motion.button
                    layout
                    key={image.id}
                    type="button"
                    onClick={() => setSelectedImage(image)}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{
                      duration: 0.4,
                      delay: (index % 4) * 0.06,
                    }}
                    whileHover={{ y: -5 }}
                    className={`group relative overflow-hidden rounded-2xl bg-[#e5ede5] text-left shadow-sm ${
                      large ? "col-span-2 row-span-2" : ""
                    } ${tall ? "row-span-2" : ""}`}
                    aria-label={`View ${image.title}`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#092817]/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="absolute inset-x-0 bottom-0 flex translate-y-3 items-end justify-between p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-white/70">
                          {image.category}
                        </p>

                        {/* <p className="mt-1 text-sm font-extrabold text-white">
                          {image.title}
                        </p> */}
                      </div>

                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#185b35]">
                        <Maximize2 size={17} />
                      </span>
                    </div>

                    <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white opacity-0 backdrop-blur-md transition-all group-hover:opacity-100">
                      <ArrowUpRight size={17} />
                    </span>
                  </motion.button>
                );
              })}
            </AnimatePresence>
          </motion.div>

          <div className="mt-10 text-center">
            <p className="text-sm text-[#879188]">
              Capturing memories, celebrating achievements and growing
              together.
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================
          IMAGE LIGHTBOX
      ========================================== */}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#061b10]/95 p-4 backdrop-blur-md sm:p-8"
          >
            {/* CLOSE BUTTON */}

            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image"
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white hover:text-[#185b35] sm:right-8 sm:top-8"
            >
              <X size={22} />
            </button>

            {/* PREVIOUS BUTTON */}

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showPrevious();
              }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white hover:text-[#185b35] sm:left-8 sm:h-12 sm:w-12"
            >
              <ChevronLeft size={25} />
            </button>

            {/* SELECTED IMAGE */}

            <motion.div
              key={selectedImage.id}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="flex max-h-[88vh] w-full max-w-5xl flex-col items-center"
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-h-[76vh] w-full rounded-xl object-contain"
              />

              <div className="mt-5 flex w-full items-center justify-between gap-4 text-white">
                <div>
                  <p className="text-sm font-bold">
                    {selectedImage.title}
                  </p>

                  <p className="mt-1 text-xs text-white/60">
                    {selectedImage.category}
                  </p>
                </div>

                <span className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white/80">
                  {currentIndex + 1} / {filteredImages.length}
                </span>
              </div>
            </motion.div>

            {/* NEXT BUTTON */}

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
              className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white hover:text-[#185b35] sm:right-8 sm:h-12 sm:w-12"
            >
              <ChevronRight size={25} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ==========================================
          BOTTOM CTA
      ========================================== */}

      <section className="px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#eaf3e9] px-6 py-10 sm:px-10 sm:py-14 lg:px-14"
        >
          <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border border-[#185b35]/10" />

          <div className="relative flex flex-col justify-between gap-7 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#398451]">
                YOUR JOURNEY STARTS HERE
              </span>

              <h2 className="mt-4 text-3xl font-black leading-tight text-[#193b29] sm:text-4xl">
                Become a Part of Our Story.
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#64776a] sm:text-base">
                Join OM Coaching Classes and make your own memorable
                learning journey with us.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/courses"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#185b35] px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#123d28]"
              >
                Explore Courses
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#185b35]/20 bg-white px-6 py-4 text-sm font-bold text-[#185b35] transition hover:-translate-y-1 hover:border-[#185b35]/40"
              >
                Contact Us
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
