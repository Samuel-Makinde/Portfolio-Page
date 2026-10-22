import { education } from '../data/content';

const Education = () => {
  return (
    <section
      id="education"
      className="section-pad"
      aria-labelledby="education-heading"
    >
      <div className="section-shell">
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow mb-3">Education and certifications</p>
          <h2 id="education-heading" className="display-title">
            Formal learning that shaped the craft.
          </h2>
        </div>

        <ul className="grid gap-4 md:grid-cols-3">
          {education.map((item) => (
            <li key={item.title} className="surface-card p-6">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                {item.period}
              </p>
              <h3 className="mt-3 font-display text-xl leading-snug text-ink">
                {item.title}
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Education;
