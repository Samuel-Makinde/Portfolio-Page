import { HiOutlineExternalLink } from 'react-icons/hi';
import { historicalNote, projects } from '../data/content';

const Projects = () => {
  return (
    <section id="work" className="section-pad bg-white" aria-labelledby="work-heading">
      <div className="section-shell">
        <div className="mb-14 max-w-2xl">
          <p className="eyebrow mb-3">Featured work</p>
          <h2 id="work-heading" className="display-title">
            Products built for real users and operating teams.
          </h2>
          <p className="body-copy mt-4">
            Selected work across education technology, B2B SaaS, hospital
            operations, and consumer-facing frontend delivery.
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => {
            const reverse = index % 2 === 1;
            const hasImage = Boolean(project.image);

            return (
              <article
                key={project.id}
                className={`grid items-center gap-8 lg:gap-12 ${
                  hasImage
                    ? 'lg:grid-cols-2'
                    : 'lg:grid-cols-[1fr_1.1fr]'
                }`}
              >
                {hasImage ? (
                  <div
                    className={`overflow-hidden rounded-2xl border border-line bg-canvas ${
                      reverse ? 'lg:order-2' : ''
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div
                    className={`flex min-h-[280px] flex-col justify-between rounded-2xl bg-navy p-8 text-white md:min-h-[320px] md:p-10 ${
                      reverse ? 'lg:order-2' : ''
                    }`}
                  >
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/60">
                        {project.role}
                      </p>
                      <h3 className="mt-4 font-display text-4xl font-medium tracking-tight md:text-5xl">
                        {project.name}
                      </h3>
                    </div>
                    {project.traction.length > 0 && (
                      <ul className="mt-10 space-y-2 border-t border-white/15 pt-6">
                        {project.traction.map((item) => (
                          <li key={item} className="text-sm text-white/80">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}

                <div className={reverse ? 'lg:order-1' : ''}>
                  {hasImage && (
                    <>
                      <p className="text-sm font-medium text-accent">
                        {project.role}
                      </p>
                      <h3 className="mt-2 font-display text-3xl font-medium tracking-tight text-ink md:text-4xl">
                        {project.name}
                      </h3>
                    </>
                  )}
                  {!hasImage && (
                    <p className="text-sm font-medium text-accent lg:hidden">
                      {project.role}
                    </p>
                  )}

                  <p className="body-copy mt-4">{project.description}</p>

                  <ul className="mt-6 space-y-2">
                    {project.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-relaxed text-muted md:text-base"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {hasImage && project.traction.length > 0 && (
                    <div className="mt-6 rounded-xl border border-line bg-canvas px-4 py-3">
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
                        Product traction
                      </p>
                      <ul className="mt-2 space-y-1">
                        {project.traction.map((item) => (
                          <li key={item} className="text-sm font-medium text-ink">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-4">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-ink underline-offset-4 hover:text-accent hover:underline"
                      >
                        {link.label}
                        <HiOutlineExternalLink aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <aside className="mt-16 rounded-2xl border border-dashed border-line bg-canvas p-6 md:p-8">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
            Historical contribution
          </p>
          <h3 className="mt-2 font-display text-2xl text-ink">
            {historicalNote.name}
          </h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted md:text-base">
            {historicalNote.summary}
          </p>
        </aside>
      </div>
    </section>
  );
};

export default Projects;
