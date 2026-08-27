import Link from "next/link";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* Left / Logo + Mobile Menu */}
      <div className="navbar-start">
        <div className="dropdown">
          {/* Mobile Menu Button */}
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
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
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>

          {/* Mobile Dropdown */}
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content z-10 mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
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

                <ul className="p-2">
                  <li>
                    <Link href="/Collection?category=fashion">Fashion</Link>
                  </li>

                  <li>
                    <Link href="/Collection?category=classic">Classic</Link>
                  </li>

                  <li>
                    <Link href="/Collection?category=old-class">Old Class</Link>
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
        <Link href="/" className="btn btn-ghost text-xl">
          LUMIÈRE
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/NewArrival">New Arrival</Link>
          </li>

          <li>
            <Link href="/Shop">Shop</Link>
          </li>

          <li>
            <details>
              <summary>Collection</summary>

              <ul className="z-10 w-40 bg-base-100 p-2 shadow">
                <li>
                  <Link href="/Collection?category=fashion">Fashion</Link>
                </li>

                <li>
                  <Link href="/Collection?category=classic">Classic</Link>
                </li>

                <li>
                  <Link href="/Collection?category=old-class">Old Class</Link>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <Link href="/About">About</Link>
          </li>
        </ul>
      </div>

      {/* Login */}
      <div className="navbar-end">
        <Link href="/login" className="btn btn-soft btn-secondary">
          Login
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
