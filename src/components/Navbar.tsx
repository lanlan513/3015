import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Users, Swords, Landmark, BookOpen, Menu, X, Clock } from "lucide-react";

const navLinks = [
  { to: "/characters", label: "人物", icon: Users },
  { to: "/martial-arts", label: "武功", icon: Swords },
  { to: "/sects", label: "门派", icon: Landmark },
  { to: "/stories", label: "剧情", icon: BookOpen },
  { to: "/chronicle", label: "编年史", icon: Clock },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-ink/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a
          href="/"
          className="font-brush text-2xl text-cinnabar ink-text-glow"
        >
          江湖百科
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `font-song text-sm transition-colors duration-300 flex items-center gap-1.5 pb-1 border-b-2 ${
                  isActive
                    ? "text-cinnabar border-cinnabar"
                    : "text-mist hover:text-cinnabar border-transparent hover:border-cinnabar/50"
                }`
              }
            >
              <Icon size={16} />
              {label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center">
          <div className="w-8 h-8 border-2 border-cinnabar text-cinnabar text-xs font-brush flex items-center justify-center rotate-3">
            金
          </div>
        </div>

        <button
          className="md:hidden text-mist hover:text-cinnabar transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-ink/95 backdrop-blur-md px-4 pb-4">
          {navLinks.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `font-song text-sm transition-colors duration-300 flex items-center gap-2 py-3 border-b border-mist/10 ${
                  isActive
                    ? "text-cinnabar"
                    : "text-mist hover:text-cinnabar"
                }`
              }
            >
              <Icon size={16} />
              {label}
            </NavLink>
          ))}
        </div>
      )}

      <div className="ink-divider" style={{ backgroundImage: "linear-gradient(to right, transparent, rgba(194,54,22,0.3), transparent)" }} />
    </nav>
  );
}
