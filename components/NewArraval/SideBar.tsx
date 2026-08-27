"use client";

import { useState } from "react";

export default function SideBar() {
  const [filters, setFilters] = useState({
    category: [] as string[],
    size: [] as string[],
    color: [] as string[],
    price: [] as string[],
  });

  const handleCheckbox = (
    type: "category" | "size" | "color" | "price",
    value: string,
  ) => {
    setFilters((prev) => {
      const current = prev[type];

      return {
        ...prev,
        [type]: current.includes(value)
          ? current.filter((item) => item !== value)
          : [...current, value],
      };
    });
  };

  return (
    <aside className="w-full max-w-[260px] border-r border-gray-200 pr-6">
      {/* Title */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold tracking-wide">FILTERS</h2>
      </div>

      {/* Category */}
      <div className="border-b border-gray-200 pb-6">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
          Category
        </h3>

        <div className="space-y-3">
          {["Tops", "Dresses", "Pants", "Jackets"].map((item) => (
            <label
              key={item}
              className="flex cursor-pointer items-center gap-3 text-sm text-gray-600"
            >
              <input
                type="checkbox"
                checked={filters.category.includes(item)}
                onChange={() => handleCheckbox("category", item)}
                className="h-4 w-4 accent-black"
              />

              <span>{item}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Size */}
      <div className="border-b border-gray-200 py-6">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">
          Size
        </h3>

        <div className="space-y-3">
          {["XS", "S", "M", "L", "XL"].map((item) => (
            <label
              key={item}
              className="flex cursor-pointer items-center gap-3 text-sm text-gray-600"
            >
              <input
                type="checkbox"
                checked={filters.size.includes(item)}
                onChange={() => handleCheckbox("size", item)}
                className="h-4 w-4 accent-black"
              />

              <span>{item}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}
