
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Camera,
  GraduationCap,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const experiences = [
  {
    title: "Focused Learning",
    subtitle: "Building strong concepts",
    image:
      "assets/home/om5.jpeg",
    className: "md:col-span-2 md:row-span-2",
    icon: BookOpen,
  },
  {
    title: "Learn Together",
    subtitle: "A positive learning environment",
    image:
      "assets/home/om4.jpeg",
    className: "",
    icon: Users,
  },
  {
    title: "Dream Big",
    subtitle: "Preparing for tomorrow",
    image:
      "assets/home/om3.jpeg",
    className: "",
    icon: GraduationCap,
  },
];

export default function StudentLifeSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8faf7] py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-green-100/60 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2">
              <Camera size={15} className="text-[#237346]" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#185b35]">
                Life at OM
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#173b29] sm:text-4xl lg:text-5xl">
              Every Day Is a Chance
              <span className="mt-2 block text-[#27804b]">
                to Learn Something New.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              From focused classroom learning to shared experiences, discover
              the environment where students work towards their goals.
            </p>
          </div>

          <Link
            to="/gallery"
            className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-xl border border-green-200 bg-white px-5 py-3.5 text-sm font-bold text-[#185b35] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#185b35] hover:bg-[#185b35] hover:text-white"
          >
            Explore Gallery
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>

        {/* Image gallery */}
        <div className="grid auto-rows-[230px] gap-4 sm:auto-rows-[280px] sm:grid-cols-2 lg:auto-rows-[260px] lg:grid-cols-3">
          {experiences.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
                className={`group relative overflow-hidden rounded-2xl bg-[#153b28] shadow-lg shadow-green-950/5 ${item.className}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#102e20]/95 via-[#102e20]/15 to-transparent transition-opacity duration-300 group-hover:from-[#102e20]/95" />

                {/* Top label */}
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-3 py-2 text-xs font-medium text-white backdrop-blur-md sm:left-5 sm:top-5">
                  <Icon size={14} />
                  <span>OM Coaching Classes</span>
                </div>

                {/* Image caption */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-7">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-green-200">
                    {item.subtitle}
                  </p>

                  <h3 className="text-2xl font-bold text-white sm:text-3xl">
                    {item.title}
                  </h3>

                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-white/85">
                    <span>Learning with purpose</span>
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-2"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 flex flex-col gap-4 rounded-2xl border border-green-100 bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
        >
          <div>
            <h3 className="font-bold text-[#173b29]">
              Memories, milestones and meaningful learning.
            </h3>
            <p className="mt-1 text-sm leading-6 text-slate-500">
              Explore our students' activities, celebrations and classroom moments.
            </p>
          </div>

          <Link
            to="/gallery"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#185b35] transition-colors hover:text-[#27804b]"
          >
            View All Photos
            <ArrowRight size={17} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
