import Link from "next/link";

const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md">
      <div className="navbar mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Left - Mobile Menu + Logo */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-ghost btn-circle lg:hidden"
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <ul
              tabIndex={-1}
              className="menu dropdown-content z-50 mt-3 w-64 rounded-xl border border-gray-100 bg-white p-3 shadow-xl"
            >
              <li>
                <Link href="/NewArrival">New Arrival</Link>
              </li>

              <li>
                <Link href="/Shop">Shop</Link>
              </li>

              <li>
                <details>
                  <summary>Collection</summary>

                  <ul className="mt-1 border-l border-gray-200">
                    <li>
                      <Link href="/Collection?category=fashion">Fashion</Link>
                    </li>

                    <li>
                      <Link href="/Collection?category=classic">Classic</Link>
                    </li>

                    <li>
                      <Link href="/Collection?category=old-class">
                        Old Class
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>

              <li>
                <Link href="/About">About</Link>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <Link
            href="/"
            className="ml-1 text-xl font-semibold tracking-[0.25em] text-gray-900 sm:text-2xl"
          >
            LUMIÈRE
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-8">
            <li>
              <Link
                href="/NewArrival"
                className="text-sm font-medium tracking-wide text-gray-700 transition hover:text-black"
              >
                New Arrival
              </Link>
            </li>

            <li>
              <Link
                href="/Shop"
                className="text-sm font-medium tracking-wide text-gray-700 transition hover:text-black"
              >
                Shop
              </Link>
            </li>

            {/* Collection */}
            <li className="dropdown dropdown-hover">
              <div
                tabIndex={0}
                role="button"
                className="flex cursor-pointer items-center gap-1 text-sm font-medium tracking-wide text-gray-700 transition hover:text-black"
              >
                Collection
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </div>

              <ul
                tabIndex={0}
                className="dropdown-content z-50 mt-4 w-48 rounded-xl border border-gray-100 bg-white p-2 shadow-xl"
              >
                <li>
                  <Link
                    href="/Collection?category=fashion"
                    className="rounded-lg px-4 py-2.5 hover:bg-gray-100"
                  >
                    Fashion
                  </Link>
                </li>

                <li>
                  <Link
                    href="/Collection?category=classic"
                    className="rounded-lg px-4 py-2.5 hover:bg-gray-100"
                  >
                    Classic
                  </Link>
                </li>

                <li>
                  <Link
                    href="/Collection?category=old-class"
                    className="rounded-lg px-4 py-2.5 hover:bg-gray-100"
                  >
                    Old Class
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                href="/About"
                className="text-sm font-medium tracking-wide text-gray-700 transition hover:text-black"
              >
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Actions */}
        <div className="navbar-end gap-1 sm:gap-2">
          {/* Search */}
          <button
            className="btn btn-ghost btn-circle hidden sm:flex"
            aria-label="Search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="7" strokeWidth="1.5" />
              <path strokeWidth="1.5" d="m20 20-4-4" />
            </svg>
          </button>

          {/* Wishlist */}
          <button
            className="btn btn-ghost btn-circle hidden sm:flex"
            aria-label="Wishlist"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"
              />
            </svg>
          </button>

          {/* Cart */}
          <Link
            href="/cart"
            className="btn btn-ghost btn-circle"
            aria-label="Shopping cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l2.4 11.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 2-1.6L21 7H6"
              />
              <circle cx="10" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
            </svg>
          </Link>

          {/* Login */}
          <Link
            href="/login"
            className="ml-1 hidden rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800 sm:block"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
