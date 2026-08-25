import Archive from "@/components/Archive";
import Collection from "@/components/Collection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Slideshow from "@/components/Slideshow";

const page = () => {
  return (
    <>
      <Hero />
      <h1 className="text-center bg-black/40 pt-7 text-4xl pb-7">
        Curated Collections
      </h1>
      <Slideshow />
      <Collection />
      <Archive />
      <Footer />
    </>
  );
};

export default page;
