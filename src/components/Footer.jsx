import { profile } from '../data/content';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-soft bg-navy text-white">
      <div className="section-shell flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-white/65">
          © {year} {profile.name}. Built for professional opportunities.
        </p>
        <a
          href="#home"
          className="text-sm font-medium text-white underline-offset-4 hover:underline"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
};

export default Footer;
