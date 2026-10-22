import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navLinks, profile } from '../data/content';
import DownloadCvMenu from './DownloadCvMenu';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open
          ? 'border-b border-line bg-canvas/95 backdrop-blur'
          : 'bg-transparent'
      }`}
    >
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:text-ink"
      >
        Skip to content
      </a>

      <nav
        className="section-shell flex h-16 items-center justify-between"
        aria-label="Primary"
      >
        <a
          href="#home"
          className="font-display text-lg font-medium tracking-tight text-ink"
          onClick={closeMenu}
        >
          {profile.shortName}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-sm font-medium text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <DownloadCvMenu variant="primary" align="right" />
          </li>
        </ul>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`border-t border-line bg-canvas md:hidden ${
          open ? 'block' : 'hidden'
        }`}
      >
        <ul className="section-shell flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="block rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-white"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="px-3 pt-2">
            <DownloadCvMenu variant="primary" fullWidth />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
