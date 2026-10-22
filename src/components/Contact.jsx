import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlinePhone } from 'react-icons/hi';
import { contactHeadline, profile } from '../data/content';

const Contact = () => {
  const details = [
    {
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: HiOutlineMail,
    },
    {
      label: 'Phone',
      value: profile.phone,
      href: profile.phoneHref,
      icon: HiOutlinePhone,
    },
    {
      label: 'Location',
      value: profile.location,
      href: null,
      icon: HiOutlineLocationMarker,
    },
  ];

  return (
    <section
      id="contact"
      className="section-pad bg-navy text-white"
      aria-labelledby="contact-heading"
    >
      <div className="section-shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-white/55">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="font-display text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl"
          >
            {contactHeadline}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            Open to frontend, backend, full-stack, and technical leadership
            conversations. Reach out by email or connect on LinkedIn.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-navy transition-colors hover:bg-accent-soft"
            >
              Email me
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/5"
            >
              <FaLinkedin aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/5"
            >
              <FaGithub aria-hidden="true" />
              GitHub
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-navy-soft p-6 md:p-8">
          <ul className="space-y-6">
            {details.map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <span className="mt-0.5 text-white/55" aria-hidden="true">
                    <Icon size={18} />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.14em] text-white/45">
                      {item.label}
                    </span>
                    <span className="mt-1 block text-base text-white">
                      {item.value}
                    </span>
                  </span>
                </>
              );

              return (
                <li key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="flex gap-3 transition-colors hover:text-accent-soft"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex gap-3">{content}</div>
                  )}
                </li>
              );
            })}
            <li>
              <a
                href={profile.portfolio}
                target="_blank"
                rel="noreferrer"
                className="block border-t border-white/10 pt-6 text-sm text-white/70 transition-colors hover:text-white"
              >
                Portfolio: {profile.portfolio.replace('https://', '')}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
