const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-black/40 px-8 py-16 md:px-14 lg:px-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
        {/* Brand */}
        <div>
          <h2 className="font-serif text-2xl font-semibold tracking-tight text-white">
            LUMIÈRE
          </h2>
          <p className="mt-6 max-w-xs text-sm leading-6 text-white/55">
            Defining the new standard of premium minimalist fashion.
          </p>
        </div>

        {/* Client Care */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-white/55">
            Client Care
          </h3>

          <div className="mt-5 space-y-4">
            <a
              href="#"
              className="block w-fit text-sm text-white/30 underline-offset-4 hover:text-white/50 hover:underline"
            >
              Shipping & Returns
            </a>

            <a
              href="#"
              className="block w-fit text-sm text-white/30 underline-offset-4 hover:text-gray-900 hover:underline"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-900">
            Legal & Info
          </h3>

          <div className="mt-5 space-y-4">
            <a
              href="#"
              className="block w-fit text-sm text-white/30 underline-offset-4 hover:text-gray-900 hover:underline"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="block w-fit text-sm text-white/30 underline-offset-4 hover:text-gray-900 hover:underline"
            >
              Terms of Service
            </a>

            <a
              href="#"
              className="block w-fit text-sm text-white/30 underline-offset-4 hover:text-gray-900 hover:underline"
            >
              Sustainability
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-900">
            Newsletter
          </h3>

          <p className="mt-6 max-w-xs text-sm leading-6 text-white/30">
            Subscribe to receive updates on new arrivals and exclusive
            collections.
          </p>

          <div className="mt-7 flex items-center border-b border-gray-300 pb-3">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent text-sm text-white/30 outline-none placeholder:text-black/20"
            />

            <button
              type="button"
              className="ml-3 text-2xl text-white/30 transition-transform duration-300 hover:translate-x-1"
              aria-label="Subscribe"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
