import React from 'react'

const Hero = () => {
  return (
<div
  className="hero min-h-[85vh] bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage:
      "url(https://media.istockphoto.com/id/186543936/photo/fashion-in-new-york-city.jpg?s=612x612&w=0&k=20&c=iuvNG1M5Kgqp7PilQ8FpwgkUS0pr5ok7EdwXu5bCHG0=)",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Content */}
  <div className="hero-content relative z-10 text-center text-white">
    <div className="max-w-3xl">
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.4em]">
        New Collection 2026
      </p>

      <h1 className="mb-6 text-5xl font-bold uppercase leading-tight tracking-wide md:text-7xl">
        The New
        <br />
        Elegance
      </h1>

      <p className="mx-auto mb-8 max-w-xl text-base leading-7 text-white/85 md:text-lg">
        Discover timeless fashion designed for modern confidence.
        Elevate your everyday style with our latest collection.
      </p>

      <div className="flex flex-col justify-center gap-4 sm:flex-row">
        <button className="btn btn-primary px-8">
          Shop Collection
        </button>

        <button className="btn btn-outline border-white px-8 text-white hover:border-white hover:bg-white hover:text-black">
          Explore
        </button>
      </div>
    </div>
  </div>
</div>
  )
}

export default Hero
