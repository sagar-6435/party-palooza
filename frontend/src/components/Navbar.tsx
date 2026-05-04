import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { href: "/", label: "Home" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About" },
    { href: "/booking", label: "Book Now", highlight: true },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="container 3xl:max-w-[1800px] 4xl:max-w-[2400px] mx-auto flex items-center justify-between px-4 py-3 3xl:py-6">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2 md:gap-3 shrink-0 transition-opacity hover:opacity-80">
          <img src="/logo.png" alt="Party Palooza" className="h-9 w-9 md:h-10 md:w-10 object-contain rounded-xl" />
          <span
            className="text-base md:text-lg 3xl:text-2xl font-extrabold tracking-tight text-gradient-gold uppercase"
            style={{ fontFamily: "var(--font-brand)" }}
          >
            <span className="hidden sm:inline">Party Palooza</span>
            <span className="sm:hidden">PP</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:gap-4 3xl:gap-10 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`rounded-full px-3 lg:px-5 py-2 text-xs lg:text-sm 3xl:text-xl font-semibold transition-all ${
                link.highlight
                  ? "bg-gradient-gold text-white glow-pink shadow-lg"
                  : location.pathname === link.href
                  ? "text-primary bg-primary/10"
                  : "text-foreground hover:text-primary hover:bg-primary/5"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="ml-2 border-l border-border pl-4">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 text-[10px] lg:text-xs 3xl:text-lg text-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              <Phone className="h-3 w-3 text-primary" />
              <span className="font-semibold opacity-70">Vijayawada:</span>&nbsp;+91 98765 43210
            </a>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground md:hidden p-1"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md px-4 pb-5 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={`block py-3 text-sm font-semibold border-b border-border/40 last:border-0 ${
                link.highlight ? "text-primary" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4 text-primary" />
              <span>
                <span className="font-semibold">Vijayawada:</span> +91 98765 43210
              </span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
