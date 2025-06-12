import React from 'react';

const ContactSection = () => {
  return (
<section className="max-w-7xl mx-auto bg-white overflow-hidden flex flex-col md:flex-row min-h-[600px] lg:min-h-[700px]">
  {/* Left side image */}
  <div
    className="md:flex-1 h-72 md:h-auto bg-cover bg-center min-h-[300px] md:min-h-full"
    style={{
      backgroundImage:
        "url('https://images.pexels.com/photos/15103177/pexels-photo-15103177/free-photo-of-hand-in-close-up-photography.jpeg?auto=compress&cs=tinysrgb&w=600')",
    }}
    aria-label="Decorative contact side image"
    role="img"
  ></div>

  {/* Right side container */}
  <div className="md:flex-1 flex flex-col justify-center p-8 lg:p-14 space-y-10 bg-white">
    {/* Rest of your content remains the same */}
        {/* Contact info and map container */}
        <div className="flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0">
          {/* Contact Info */}
          <div className="md:flex-1 space-y-8">
            <h2 className="text-xl font-extrabold text-gray-900 tracking-tight">
              Reach Out To Us
            </h2>
            <p className="text-gray-700 max-w-md font-medium">
                Whether you're a student, parent, or supporter — ETSK Musha, under Hameau des Jeunes, welcomes every chance to connect.
            </p>
            <ul className="space-y-6 text-gray-800">
              <li className="flex items-center space-x-4">
                <svg
                  className="w-6 h-6 text-primary flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M16 12v4a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-4" />
                  <path d="M12 4v4m0 0L8 8m4 0l4-4" />
                </svg>
                <a
                  href="tel:+1234567890"
                  className="hover:text-primary transition font-semibold text-lg"
                >
                  +250 (788) 436 189
                </a>
              </li>

              <li className="flex items-center space-x-4">
                <svg
                  className="w-6 h-6 text-primary flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M4 4h16v16H4z" />
                  <path d="M22 6l-10 7-10-7" />
                </svg>
                <a
                  href="mailto:contact@example.com"
                  className="hover:text-primary transition font-semibold text-lg"
                >
                  contact@example.com
                </a>
              </li>

              <li className="flex items-center space-x-4">
                <svg
                  className="w-6 h-6 text-primary flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                <address className="not-italic font-semibold text-lg max-w-xs">
                  Hameau Des Jeunnes S. Kizito 39J6+M55, Bicumbi
                </address>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="md:flex-1 rounded-lg shadow-lg overflow-hidden">
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5821541754854!2d30.3579061749671!3d-1.9183744980641877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19db4358b1f57167%3A0x53f7b653ac90bf95!2sHameau%20Des%20Jeunes%20S.%20Kizito!5e0!3m2!1sen!2srw!4v1748796811763!5m2!1sen!2srw"
              width="100%"
              height="300"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Bottom full-width button */}
      </div>
    </section>
  );
};

export default ContactSection;

