import React from 'react';
import mainImage from '/imagr.jpg';

const WhoWeAre = () => {
  return (
    <section className="bg-[var(--color-bg)] py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16">
        
        {/* Left: Main Image */}
        <div className="w-full">
          <div
            className="w-full h-[420px]  shadow-2xl bg-cover bg-center transform hover:scale-105 transition duration-500"
            style={{ backgroundImage: `url(${mainImage})` }}
          />
        </div>

        {/* Right: Text Content */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-[var(--color-primary)] border-l-8 border-[var(--color-accent)] pl-4">
            Who We Are
          </h2>

          <p className="text-md leading-relaxed text-[var(--color-text)]">
            <strong>Hameau des Jeunes Saint Kizito Musha</strong> is a beacon of hope for vulnerable children in Rwanda. Founded in 1968 by Father Hermann Schulz, we provide not only shelter—but a real home where love, safety, and growth thrive.
          </p>

          <p className="text-md leading-relaxed text-[var(--color-text)]">
            Currently, we care for over <strong>80 street children</strong>, offering education, food, counseling, and mentorship. This life-changing work is made possible by our devoted team of <strong>22 passionate staff members</strong> who work around the clock to ensure every child is treated with dignity and compassion.
          </p>

          <p className="text-md leading-relaxed text-[var(--color-text)]">
            We proudly collaborate with <strong>Ecole Technique Saint Kizito Musha</strong>, a local technical school that equips our youth with valuable practical skills and education to prepare them for independent, purpose-driven lives.
          </p>

          <p className="text-md leading-relaxed text-[var(--color-text)]">
            At Hameau des Jeunes, every child matters. Every smile, every success, and every second chance is a testament to what love and opportunity can do.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
