import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/Hero.jpg"
        alt="New Elegance"
        fill
        priority
        className="object-cover object-top"
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-[90vh] items-center justify-center text-center">
        <div className="max-w-4xl">
          <h1 className="text-6xl font-bold text-black md:text-8xl">
            THE NEW ELEGANCE
          </h1>

          <button className="btn btn-primary mt-5">Shop the Collection</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
