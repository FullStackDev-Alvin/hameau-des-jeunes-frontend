import React from 'react';
import image from '/donation.jpg';

const Section3 = () => {
  return (
    <section className="bg-[var(--color-bg)] py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16">

        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-xl font-extrabold text-[var(--color-primary)] border-l-8 border-[var(--color-accent)] pl-4">
            About ETSK Musha
          </h2>

          <p className="text-md leading-relaxed text-[var(--color-text)]">
            <strong>Ecole Technique Saint Kizito Musha (ETSK Musha)</strong> is a vibrant and respected technical and vocational school located in the heart of Rwanda. We are committed to nurturing young minds through practical skills, professional training, and personal development.
          </p>

          <p className="text-md leading-relaxed text-[var(--color-text)]">
            Currently, ETSK Musha proudly houses over <strong>650 students</strong>, offering them access to a variety of technical programs that prepare them for success in today’s competitive world. From construction and electricity to tailoring and computer science, our school provides hands-on education that transforms lives.
          </p>

          <p className="text-md leading-relaxed text-[var(--color-text)]">
            With a dedicated team of educators, modern facilities, and a mission rooted in excellence, ETSK Musha continues to empower the next generation of Rwandan changemakers.
          </p>

          <p className="text-md leading-relaxed text-[var(--color-text)]">
            Want to learn more about our programs, mission, or how to enroll? Explore our official website for detailed information:
          </p>

          <a
            href="https://etskmusha.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-white bg-[var(--color-primary)] hover:bg-[var(--color-accent)] px-6 py-3 rounded-full font-medium transition duration-300"
          >
            Visit etskmusha.org
          </a>
        </div>

        {/* Image */}
        <div className="w-full">
          <div
            className="w-full h-[420px] rounded-3xl shadow-2xl bg-cover bg-center transform hover:scale-105 transition duration-500"
            style={{ backgroundImage: `url(${image})` }}
          />
        </div>
      </div>
    </section>
  );
};

export default Section3;
