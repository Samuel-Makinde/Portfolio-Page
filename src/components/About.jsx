import { profile } from '../data/content';

const About = () => {
  return (
    <section id="about" className="section-pad" aria-labelledby="about-heading">
      <div className="section-shell grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
        <div>
          <p className="eyebrow mb-3">About</p>
          <h2 id="about-heading" className="display-title">
            Software engineering with product ownership.
          </h2>
        </div>
        <div className="space-y-5">
          {profile.about.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="body-copy">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
