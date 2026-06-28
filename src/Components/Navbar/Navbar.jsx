import {
  FaGithub,
  FaLinkedin,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiHome } from "react-icons/hi";

export default function Navbar({ isDark, toggleTheme }) {
  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
      <div
        className="
          flex items-center gap-2
          rounded-full
          border border-zinc-300
          bg-white/90
          px-4 py-3
          shadow-xl shadow-zinc-950/10
          backdrop-blur-xl
          transition-all duration-300
          dark:border-zinc-700
          dark:bg-black/90
          dark:shadow-black/30
        "
      >
        <NavItem href="#hero">
          <HiHome size={24} />
        </NavItem>

        <Divider />

        <NavItem href="https://github.com/yourusername" external>
          <FaGithub size={22} />
        </NavItem>

        <NavItem href="https://linkedin.com/in/yourusername" external>
          <FaLinkedin size={22} />
        </NavItem>

        <NavItem href="https://x.com/yourusername" external>
          <FaXTwitter size={22} />
        </NavItem>

        <Divider />

        <button
          onClick={toggleTheme}
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          className="
            rounded-full
            p-3
            text-black
            transition-all duration-300
            hover:scale-110
            hover:bg-zinc-100
            dark:text-white
            dark:hover:bg-zinc-800
          "
        >
          {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div>
    </div>
  );
}

function NavItem({ href, children, external }) {
  return (
    <a
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className="
        rounded-full
        p-3
        text-black
        transition-all duration-300
        hover:scale-110
        hover:bg-zinc-100
        dark:text-white
        dark:hover:bg-zinc-800
      "
    >
      {children}
    </a>
  );
}

function Divider() {
  return (
    <div className="mx-1 h-8 w-px bg-zinc-300 transition-colors duration-300 dark:bg-zinc-700" />
  );
}