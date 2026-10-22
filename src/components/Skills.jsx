import { aiNote, skillGroups } from '../data/content';

const Skills = () => {
  return (
    <section
      id="skills"
      className="section-pad"
      aria-labelledby="skills-heading"
    >
      <div className="section-shell">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow mb-3">Technical expertise</p>
          <h2 id="skills-heading" className="display-title">
            Capabilities grouped by how I use them.
          </h2>
          <p className="body-copy mt-4">
            Practical experience across frontend, backend, and full-stack
            delivery. This is a working toolkit, not a claim of equal depth in
            every tool.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.title} className="surface-card p-6">
              <h3 className="font-display text-xl text-ink">{group.title}</h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-line bg-navy p-6 text-white md:p-8">
          <h3 className="font-display text-xl">AI-assisted development</h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/75 md:text-base">
            {aiNote}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
