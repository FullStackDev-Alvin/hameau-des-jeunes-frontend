import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch and select 10 random images
  useEffect(() => {
    fetch("https://hameau-des-jeunes-backend.onrender.com/images/")
      .then(res => res.json())
      .then(data => {
        const shuffled = data.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 5); // only 5 random images
        setImages(selected);
      })
      .catch(err => console.error("Error fetching images:", err));
  }, []);

  // Rotate images every 5 seconds
  useEffect(() => {
    if (images.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images]);

  const currentImage = images[currentIndex];
  console.log(currentImage);

  return (
    <div
      className="relative h-screen max-h-screen w-full bg-cover bg-no-repeat bg-center flex items-center justify-center transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: currentImage
          ? `url(${currentImage.url})`
          : "none",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 transition-opacity duration-1000" />

      {/* Floating Card */}
      <div className="relative z-10 p-6 max-w-[400px] w-fit md:w-[500px] backdrop-blur-md bg-bg border border-black/20 shadow-lg text-black text-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 border-b-4 border-primary w-fit mx-auto">
          HAMEAU DES JEUNES SAINT KIZITO MUSHA
        </h1>
        <p className="mb-6 text-sm md:text-base">
          “Empowering Youth, Building Communities”
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
