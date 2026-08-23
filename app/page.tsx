import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Slideshow from "@/components/Slideshow";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <h1 className="text-center bg-black/40 pt-7 text-4xl pb-7">Curated Collections</h1>
      <Slideshow />
    </>
  );
};

export default page;
