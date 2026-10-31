
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  ArrowUpRight,
  Phone,
  ChevronRight,
} from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Courses & Fees", path: "/courses" },
  { name: "Campus Life", path: "/gallery" },
  { name: "Achievements", path: "/results" },
  { name: "Our Faculty", path: "/teacher" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e6eee5] bg-white/95 backdrop-blur-xl">

      {/* Top Information Strip */}
      <div className="hidden bg-[#153b28] text-white sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs lg:px-10">
          <p className="tracking-wide text-white/85">
            Building strong foundations since 2016
          </p>

          <a
            href="tel:7000920972"
            className="inline-flex items-center gap-2 transition-colors hover:text-[#cce5bd]"
          >
            <Phone size={13} />
            <span>7000920972</span>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-10">

        {/* Logo and Brand */}
        <Link
          to="/"
          onClick={closeMenu}
          className="group flex min-w-0 shrink-0 items-center gap-3"
        >
          <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#dce9d9] bg-white shadow-sm transition duration-300 group-hover:scale-105 group-hover:shadow-md sm:h-14 sm:w-14">
            <img
              src="/assets/home/OM%20logo.jpeg"
              alt="Om Coaching Classes logo"
              className="h-full w-full object-contain p-0.5"
            />
          </div>

          <div className="min-w-0">
            <h2 className="whitespace-nowrap text-base font-extrabold leading-tight tracking-tight text-[#153b28] sm:text-xl">
              OM <span className="text-[#36804b]">Coaching</span>
            </h2>

            <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-gray-500 sm:text-[10px]">
              Classes · Indore
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `group relative rounded-lg px-3 py-3 text-[13px] font-semibold transition-colors duration-300 ${
                  isActive
                    ? "text-[#185b35]"
                    : "text-[#526157] hover:text-[#185b35]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  <span
                    className={`absolute bottom-1.5 left-3 right-3 h-[2px] origin-left rounded-full bg-[#36804b] transition-transform duration-300 ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile / Tablet Menu Button */}
        <div className="ml-auto flex shrink-0 items-center xl:hidden">
          <motion.button
            type="button"
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#dce9d9] bg-[#f8faf7] text-[#185b35] transition-colors hover:bg-[#eaf3e8]"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={menuOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
                transition={{ duration: 0.15 }}
                className="flex"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden border-t border-[#e6eee5] bg-white xl:hidden"
          >
            <div className="mx-auto max-w-7xl px-4 pb-5 pt-3 sm:px-6">

              <div className="flex flex-col">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.035 }}
                  >
                    <NavLink
                      to={link.path}
                      end={link.path === "/"}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `group flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold transition-all duration-200 ${
                          isActive
                            ? "bg-[#eaf3e8] text-[#185b35]"
                            : "text-gray-600 hover:bg-[#f4f8f2] hover:text-[#185b35]"
                        }`
                      }
                    >
                      {link.name}

                      <ChevronRight
                        size={17}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Contact Details */}
              <div className="mt-4 flex items-center justify-center gap-2 border-t border-green-100 pt-4 text-xs text-gray-500">
                <Phone size={14} className="text-[#36804b]" />

                <a
                  href="tel:7000920972"
                  className="transition-colors hover:text-[#185b35]"
                >
                  7000920972
                </a>

                <span>·</span>
                <span>Indore, Madhya Pradesh</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
