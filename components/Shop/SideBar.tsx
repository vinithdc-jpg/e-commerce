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
    <aside className="max-w-[280px] h-[91vh] border-r border-zinc-800 bg-zinc-950 px-6 py-8 text-zinc-100">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-100">
          Filters
        </h2>
        {/* Active filter indicator */}
        {(filters.category.length > 0 || filters.size.length > 0) && (
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
        )}
      </div>

      <div className="space-y-8">
        {/* Category Section */}
        <div className="border-b border-zinc-800/80 pb-8">
          <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-500">
            Category
          </h3>

          <div className="space-y-2.5">
            {["Tops", "Dresses", "Pants", "Jackets"].map((item) => {
              const isChecked = filters.category.includes(item);
              return (
                <label
                  key={item}
                  className="group flex cursor-pointer items-center justify-between py-1 text-sm text-zinc-400 transition-colors hover:text-zinc-100"
                >
                  <span
                    className={`transition-all ${isChecked ? "font-semibold text-white" : ""}`}
                  >
                    {item}
                  </span>

                  <div className="relative flex items-center">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleCheckbox("category", item)}
                      className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-zinc-700 bg-zinc-900 transition-all checked:border-white checked:bg-white group-hover:border-zinc-500"
                    />
                    <svg
                      className="pointer-events-none absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 stroke-black opacity-0 transition-opacity peer-checked:opacity-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </label>
              );
            })}
          </div>
        </div>

        {/* Size Section */}
        <div>
          <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-500">
            Size
          </h3>

          <div className="grid grid-cols-5 gap-1.5">
            {["XS", "S", "M", "L", "XL"].map((item) => {
              const selected = filters.size.includes(item);

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => handleCheckbox("size", item)}
                  className={`flex h-10 items-center justify-center rounded border text-xs font-semibold tracking-wider transition-all duration-150 ${
                    selected
                      ? "border-white bg-white text-zinc-950 shadow-sm"
                      : "border-zinc-800 bg-zinc-900/60 text-zinc-300 hover:border-zinc-500 hover:bg-zinc-900 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
}
