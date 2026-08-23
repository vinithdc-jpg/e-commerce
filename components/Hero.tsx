import React from "react";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/011/911/023/small/full-street-fashion-slender-figure-beautiful-face-graceful-girl-sitting-on-isolated-white-background-portrait-of-female-model-in-studio-plastic-surgery-and-aesthetic-cosmetology-free-photo.jpg')",
      }}
    >
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-8xl font-bold">THE NEW ELEGANCE</h1>
          <button className="btn btn-primary mt-5">Shop the Collection</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
