import Image from "next/image";

const ImgUrl =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDl6MvpQusmg4Go576IVXS77IEFXcOrscKTLIcYhqMnRE8Y1HWiulLxh2dhahrb-AxF5fqHa2Qo0O1i2pCtHYdwYk7JOXWRr2Pkkyig9ZHrw6BxLMBZZeiME6Sqwle7OcQpNhvB1y8c5w-9bkiEl4uZkR33duWpus31-Ph5QeVscuYC0XQjh6hlQqQM5_eVZy4HaG4LsgvGE0ijHpfdmsqpnCxOMFKUFlcEh5afNZakXPpqHj-pIB_D";

const Archive = () => {
  return (
    <div className="flex min-h-[500px] items-center justify-center gap-16 bg-black/40 px-10">
      {/* Content */}
      <div className="max-w-lg text-white">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-gray-300">
          Exclusive Collection
        </p>

        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          THE ARCHIVE SALE
        </h1>

        <p className="mt-6 max-w-md text-base leading-7 text-gray-300">
          Discover pieces from our previous collections at exceptional value. A
          curated selection of timeless silhouettes.
        </p>

        <button
          className="mt-8 bg-white px-7 py-3 text-sm font-semibold
                 uppercase tracking-wider text-black
                 transition-all duration-300
                 hover:bg-gray-200 hover:scale-105"
        >
          Enter Archive
        </button>
      </div>

      {/* Image */}
      <div className="relative h-[380px] w-[300px] overflow-hidden">
        <Image
          src={ImgUrl}
          alt="Archive collection"
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Archive;
