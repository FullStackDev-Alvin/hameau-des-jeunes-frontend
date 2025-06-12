import React from 'react';

const MissionAndVision = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 md:px-20 text-gray-800">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-xl font-bold text-[var(--color-primary)] border-l-8 border-[var(--color-accent)] pl-4 my-2">Our Mission & Vision</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Mission */}
          <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 duration-300">
            <h3 className="text-lg font-semibold mb-4 text-primary">Our Mission</h3>
            <p className="leading-relaxed text-gray-700">
              To offer vulnerable children and youth a safe, nurturing space where they can grow,
              learn, and build a future through access to shelter, education, and life skills. We are
              committed to developing responsible and self-reliant individuals who contribute
              positively to their communities.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 duration-300">
            <h3 className="text-lg font-semibold mb-4 text-primary">Our Vision</h3>
            <p className="leading-relaxed text-gray-700">
              To become a model center of transformation, where every child, regardless of their background,
              has the opportunity to thrive and lead a dignified, independent life. We envision a future
              where youth are empowered with knowledge, values, and skills to shape a better world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionAndVision;
