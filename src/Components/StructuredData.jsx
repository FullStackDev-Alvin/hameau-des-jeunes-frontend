import React from "react";
import { Helmet } from "react-helmet";

const StructuredData = () => (
  <Helmet>
    <script type="application/ld+json">
      {`
      {
        "@context": "https://schema.org",
        "@type": "School",
        "name": "Ecole Technique Saint Kizito Musha (ETSK)",
        "alternateName": "St. Kizito Technical High School",
        "url": "https://etsk.org",
        "logo": "https://etsk.org/path-to-logo.png",
        "image": [
          "https://etsk.org/image1.jpg",
          "https://etsk.org/image2.jpg"
        ],
        "description": "ETSK is a private, certified technical high school located in Musha, Rwanda, offering courses in technical education, English language, and more.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Musha Sector, Kagarama Cell",
          "addressLocality": "Musha",
          "addressRegion": "Rwanda",
          "postalCode": "Your Postal Code",
          "addressCountry": "RW"
        },
        "telephone": "+250788436189",
        "email": "contact@etsk.org",
        "sameAs": [
          "https://www.facebook.com/etskmusha",
          "https://twitter.com/etskmusha",
          "https://www.instagram.com/etskmusha/"
        ]
      }
      `}
    </script>
  </Helmet>
);

export default StructuredData;
