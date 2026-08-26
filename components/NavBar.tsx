import Link from "next/link"

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><Link href='/NewArraval'>New Arraval</Link></li>
            <li><Link href='/Shop'>Shop</Link></li>
            <li>
              <a>Collection</a>
              <ul className="p-2">
                <li><Link href='/Collection'>Fassion</Link></li>
                <li><Link href='/Collection'>Classic</Link></li>
                <li><Link href='/Collection'>Ols class</Link></li>
                
              </ul>
            </li>
            <li><Link href='/About'>About</Link></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">LUMIÈRE</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>New arraval</a></li>
          <li><a>Shop</a></li>
          <li>
            <details>
              <summary>Collection</summary>
              <ul className="p-2 bg-base-100 w-40 z-1">
                <li><a>Fassion</a></li>
                <li><a>Classic</a></li>
                <li><a>Ladise</a></li>
              </ul>
            </details>
          </li>
          <li><a>about</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href='/login'><button className="btn btn-soft btn-secondary">Login</button>
        </Link>
      </div>
    </div>
  )
}

export default NavBar
