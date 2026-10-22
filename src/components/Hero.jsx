import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { heroHighlights, profile } from '../data/content';
import DownloadCvMenu from './DownloadCvMenu';

const Hero = () => {
  return (
    <section id="home" className="section-pad pt-28 md:pt-36" aria-labelledby="hero-heading">
      <div className="section-shell grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <p className="eyebrow mb-4">{profile.name}</p>
          <p className="mb-6 text-sm font-medium text-muted md:text-base">
            {profile.title}
          </p>
          <h1
            id="hero-heading"
            className="font-display text-4xl font-medium leading-[1.15] tracking-tight text-ink sm:text-5xl md:text-6xl"
          >
            {profile.headline}
          </h1>
          <p className="body-copy mt-6 max-w-2xl">{profile.intro}</p>
          <p className="mt-4 text-sm font-medium text-ink">
            {profile.experienceLabel}
            <span className="mx-2 text-line" aria-hidden="true">
              ·
            </span>
            {profile.location}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#work" className="btn-primary">
              View My Work
              <HiArrowNarrowRight aria-hidden="true" />
            </a>
            <DownloadCvMenu />
            <a href="#contact" className="btn-ghost">
              Let&apos;s Talk
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin size={18} aria-hidden="true" />
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
              aria-label="GitHub profile"
            >
              <FaGithub size={18} aria-hidden="true" />
              GitHub
            </a>
          </div>
        </div>

        <aside
          className="surface-card p-6 md:p-8"
          aria-label="Selected products"
        >
          <p className="eyebrow mb-6">Selected products</p>
          <ul className="space-y-5">
            {heroHighlights.map((item, index) => (
              <li
                key={item.name}
                className={`flex items-start justify-between gap-4 ${
                  index < heroHighlights.length - 1
                    ? 'border-b border-line pb-5'
                    : ''
                }`}
              >
                <div>
                  <p className="font-display text-xl text-ink">{item.name}</p>
                  <p className="mt-1 text-sm text-muted">{item.role}</p>
                </div>
                <span
                  className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden="true"
                />
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
};

export default Hero;
