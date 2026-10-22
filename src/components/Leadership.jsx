import { leadership } from '../data/content';

const Leadership = () => {
  return (
    <section
      id="leadership"
      className="section-pad bg-white"
      aria-labelledby="leadership-heading"
    >
      <div className="section-shell">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow mb-3">How I work</p>
          <h2 id="leadership-heading" className="display-title">
            Leadership through delivery and collaboration.
          </h2>
          <p className="body-copy mt-4">{leadership.intro}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {leadership.strengths.map((item) => (
            <article key={item.title} className="rounded-2xl border border-line bg-canvas p-6">
              <h3 className="font-display text-xl text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <article className="mt-6 rounded-2xl bg-navy p-6 text-white md:p-8">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-white/60">
            Verified leadership
          </p>
          <h3 className="mt-3 font-display text-2xl md:text-3xl">
            {leadership.civic.title}
          </h3>
          <p className="mt-2 text-sm text-white/70">{leadership.civic.period}</p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/80 md:text-base">
            {leadership.civic.description}
          </p>
        </article>
      </div>
    </section>
  );
};

export default Leadership;
