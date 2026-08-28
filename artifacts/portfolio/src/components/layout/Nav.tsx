import { useState, useEffect, useRef } from "react";
const profileImg = "/profile.jpg";

export function Nav() {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      if (menuOpen) {
        setMenuOpen(false);
      }

      const sections = ["hero", "about", "timeline", "usepathly", "stats", "skills", "tools", "certifications", "contact"];

      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 300;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("pointerdown", handleClickOutside);
    }
    return () => document.removeEventListener("pointerdown", handleClickOutside);
  }, [menuOpen]);

  const links = [
    { id: "about", label: "About" },
    { id: "timeline", label: "Timeline" },
    { id: "usepathly", label: "UsePathly" },
    { id: "stats", label: "Stats" },
    { id: "skills", label: "Skills" },
    { id: "tools", label: "Tools" },
    { id: "contact", label: "Contact" }
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav ref={menuRef} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#hero" className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-foreground hover:text-primary transition-colors">
          <img
            src={profileImg}
            alt="RC"
            className="w-7 h-7 rounded-full object-cover object-top ring-1 ring-teal-500/50 grayscale"
          />
          RC.
        </a>

        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-sm font-medium transition-colors ${activeSection === link.id ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 text-foreground"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className={`container mx-auto px-6 pb-4 pt-2 flex flex-col gap-1 ${scrolled ? "" : "bg-background/90 backdrop-blur-md"}`}>
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={handleLinkClick}
              className={`text-sm font-medium py-2.5 border-b border-border/50 last:border-0 transition-colors ${activeSection === link.id ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
