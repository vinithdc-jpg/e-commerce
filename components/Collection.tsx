import Image from "next/image";
import Headline from "./ui/Headline";

const cards = [
  {
    id: 1,
    image: "/next.svg",
    item: "TOP",
    detail: "Structural Silk Blouse",
    rate: "$122",
  },
  {
    id: 2,
    image: "/next.svg",
    item: "BOTTOMS",
    detail: "Tailored Wide-Leg Trouser",
    rate: "$152",
  },
  {
    id: 3,
    image: "/next.svg",
    item: "ACCESSORS",
    detail: "Structured Leather Tote",
    rate: "$766",
  },
  {
    id: 4,
    image: "/next.svg",
    item: "Knitwear",
    detail: "Lightweight Cashmere Knit",
    rate: "$54",
  },
];

const Collection = () => {
  return (
    <div>
      <Headline />

      <div>
        <div className="grid grid-cols-2 gap-6 p-7 bg-black/40 md:grid-cols-3 lg:grid-cols-4">
          {cards.map((product) => (
            <div key={product.id} className="w-full">
              <div className="overflow-hidden rounded-sm border-2 border-violet-500 bg-gray-50">
                <Image
                  src={product.image}
                  alt={product.item}
                  width={400}
                  height={500}
                  className="h-[320px] w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="mt-3 px-1">
                <p className="text-xs font-medium uppercase tracking-widest text-gray-500">
                  {product.item}
                </p>

                <h3 className="mt-1 text-base font-medium text-gray-900">
                  {product.detail}
                </h3>

                <p className="mt-2 text-sm font-medium text-gray-800">
                  ${product.rate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
