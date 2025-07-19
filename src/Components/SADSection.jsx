import React from "react";
import Slider from "react-slick";

const sadGallery = [
  "https://sad.barabbas.it/img/chi-siamo-1.jpg",
  "/images/sad2.jpg",
  "/images/sad3.jpg",
  "/images/sad4.jpg",
];

const partnerLogos = [
  {
    name: "Barabba’s Clowns Onlus",
    logo: "barabbas_clowns.jpg",
    description:
      "An Italian nonprofit inspired by Don Bosco, promoting equality, dignity, and hope through education, theater, and international cooperation. Active in Rwanda with Hameau Des Jeunes to support street children. Learn more at spettacolibarabbas.it.",
  },
  {
    name: "Jaunimo Sodyba",
    logo: "/Jaunimo_sodyba.jpg",
    description:
      "A local Rwandan youth organization empowering children and teens through education, creative expression, and sustainable development within their communities.",
  },
  {
    name:"Aktion Pater Leppich - Gute Nachricht e.V.",
    logo:"https://umudugudu.de/wp-content/uploads/2014/10/Umudugudulogoklein51.png",
    description:"A german established organisation that has sponsored this school for more than a decade with foreign aid and other srudent related necesities"

  }
];

export default function SADSection() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="max-w-screen-xl mx-auto py-20 space-y-16 px-4">
      {/* Intro */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-[var(--color-primary)] border-l-8 border-[var(--color-accent)] pl-4">
          Sponsorship Program (SAD.NET)
        </h2>
        <p className="text-gray-600 max-w-3xl">
          SAD.NET (Sostegno A Distanza) is a sponsorship initiative connecting supporters with children and youth in Rwanda — enabling access to education, health care, and a hopeful future.
        </p>
      </div>

      {/* Partners */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-6">Our Partners</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {partnerLogos.map((partner, idx) => (
            <div key={idx} className="flex items-start space-x-4 p-4 rounded-md shadow-md bg-white">
              <img src={partner.logo} alt={partner.name} className="h-20 w-20 object-contain rounded-md shadow-sm" />
              <div>
                <h4 className="text-lg font-bold text-gray-700">{partner.name}</h4>
                <p className="text-gray-600 text-sm">{partner.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How to Donate */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">How to Donate</h3>
        <p className="text-gray-700">
          Sponsoring a child is simple and impactful. Visit the{" "}
          <a
            href="https://sad.barabbas.it"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            SAD.NET platform
          </a>
          , choose a child or program, and start supporting. You'll receive regular updates, letters, and photos to stay connected with your sponsored child.
        </p>
        <p className="text-gray-700">
          You can donate monthly or make a one-time contribution — every bit counts and directly supports a better future.
        </p>
      </div>

      {/* What to Donate */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800">What Your Donations Support</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>School fees, notebooks, pens, and uniforms</li>
          <li>Access to medical care and health insurance</li>
          <li>Nutritious meals and clean drinking water</li>
          <li>Hygiene kits and basic sanitary materials</li>
          <li>Social and educational events and mentorship</li>
          <li>Entrepreneurship programs and vocational tools</li>
        </ul>
      </div>

    </section>
  );
}
