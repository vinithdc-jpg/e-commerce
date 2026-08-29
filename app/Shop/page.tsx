import SideBar from "@/components/Shop/SideBar";
import React from "react";

const page = () => {
  return (
    <div className="flex min-h-fit w-full">
      <SideBar />
      <div className="flex-1 px-6 py-8">
        <h1 className="text-2xl font-semibold text-zinc-100 text-center">Shop All</h1>
      </div>
    </div>
  );
};

export default page;
