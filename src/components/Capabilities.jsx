import { capabilities } from '../data/content';

const Capabilities = () => {
  return (
    <section
      id="capabilities"
      className="section-pad bg-white"
      aria-labelledby="capabilities-heading"
    >
      <div className="section-shell">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow mb-3">What I do</p>
          <h2 id="capabilities-heading" className="display-title">
            How I contribute to product teams.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {capabilities.map((item, index) => (
            <article
              key={item.title}
              className="rounded-2xl border border-line bg-canvas p-6 md:p-8"
            >
              <p className="text-xs font-medium text-accent">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-3 font-display text-2xl text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
