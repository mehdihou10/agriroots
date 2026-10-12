import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link,useLocation } from "react-router-dom";
import {Logo} from '../components';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
//   const [language, setLanguage] = useState("FR");

  const location = useLocation();
  const pathName = location.pathname;

  const navLinks = [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/about" },
    { label: "Nos Produits", href: "/products" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e8e5da] bg-[#faf9f5]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Logo */}

        <Link to="/"><Logo width="w-[200px]" /></Link>        


        {/* Desktop navigation */}
        <nav
          className="hidden items-center gap-6 lg:flex xl:gap-8"
          aria-label="Navigation principale"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`${link.href === pathName ? 'text-main after:w-full' : ''} relative py-2 text-[13px] font-medium text-[#343d35] transition-colors duration-200 hover:text-main after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-main after:transition-all hover:after:w-full`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden items-center gap-5 lg:flex">
          {/* <div className="relative">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              aria-label="Choisir la langue"
              className="cursor-pointer appearance-none bg-transparent py-2 pr-5 text-xs font-semibold text-[#263d30] outline-none"
            >
              <option value="FR">FR</option>
              <option value="EN">EN</option>
              <option value="AR">AR</option>
            </select>

            <ChevronDown
              size={13}
              className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[#263d30]"
            />
          </div> */}

          <Link
            to="/contact"
            className="rounded-full bg-[#174b35] px-5 py-3 text-xs font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#0f3827] hover:shadow-md"
          >
            Nous contacter
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex h-10 w-10 items-center justify-center rounded-lg text-[#174b35] transition hover:bg-[#e9eee7] lg:hidden"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="border-t border-[#e8e5da] bg-[#faf9f5] px-5 pb-6 pt-3 shadow-lg lg:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col"
            aria-label="Navigation mobile"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`${link.href === pathName ? 'text-main' : ''} border-b border-[#e8e5da] py-4 text-sm font-medium text-[#343d35] transition-colors hover:text-main`}
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-5 flex items-center justify-between">
              {/* <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                aria-label="Choisir la langue"
                className="rounded-lg border border-[#d9dfd5] bg-transparent px-3 py-2 text-sm text-[#174b35] outline-none"
              >
                <option value="FR">Français</option>
                <option value="EN">English</option>
                <option value="AR">العربية</option>
              </select> */}

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-[#174b35] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0f3827]"
              >
                Nous contacter
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;