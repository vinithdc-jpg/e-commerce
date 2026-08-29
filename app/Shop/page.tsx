import SideBar from "@/components/Shop/SideBar";
import React from "react";

const page = () => {
  return (
    <div className="flex min-h-screen w-full">
      <SideBar />
      <main className="flex-1 px-6 py-8">
        <h1 className="text-2xl font-semibold text-zinc-100">Shop All</h1>
      </main>
    </div>
  );
};

export default page;
