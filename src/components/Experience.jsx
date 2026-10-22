import { experience } from '../data/content';
import DownloadCvMenu from './DownloadCvMenu';

const Experience = () => {
  return (
    <section
      id="experience"
      className="section-pad"
      aria-labelledby="experience-heading"
    >
      <div className="section-shell">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">Experience</p>
            <h2 id="experience-heading" className="display-title">
              Professional journey.
            </h2>
          </div>
          <DownloadCvMenu align="right" className="self-start md:self-auto" />
        </div>

        <ol className="space-y-0">
          {experience.map((item, index) => (
            <li
              key={item.company}
              className={`grid gap-4 border-t border-line py-8 md:grid-cols-[220px_1fr] md:gap-10 ${
                index === experience.length - 1 ? 'border-b' : ''
              }`}
            >
              <div>
                <p className="text-sm font-medium text-muted">{item.period}</p>
              </div>
              <div>
                <h3 className="font-display text-2xl text-ink">{item.role}</h3>
                <p className="mt-1 text-sm font-medium text-accent">
                  {item.company}
                </p>
                <ul className="mt-4 space-y-2">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-relaxed text-muted md:text-base"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
