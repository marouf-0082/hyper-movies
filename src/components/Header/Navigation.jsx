export default function Navigation() {
  return (
    <nav className="flex items-center text-slate-300">
      <div className="flex items-center">
        <h1 className="text-2xl mr-12">
          Hyper<span className="text-rose-500">Movies</span>
          <p className="text-xs text-center text-slate-500 font-light">
            Film Review
          </p>
        </h1>
        <ul className="hidden gap-3 md:flex text-sm lg:gap-6 lg:text-base uppercase">
          <li>
            <a className="navLink" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="navLink" href="#">
              Movies
            </a>
          </li>
          <li>
            <a className="navLink" href="#">
              TV Shows
            </a>
          </li>
          <li>
            <a className="navLink" href="#">
              People
            </a>
          </li>
          <li>
            <a className="navLink" href="#">
              More
            </a>
          </li>
        </ul>
      </div>
      <div className="hidden md:block text-sm lg:text-base ml-auto uppercase ">
        <ul className="flex gap-4">
          <li>
            <a className="navLink" href="#">
              Login
            </a>
          </li>
          <li>
            <a href="#" className="bg-rose-500 px-4 py-2 rounded-2xl">
              Sign up
            </a>
          </li>
        </ul>
      </div>
      <div className="md:hidden ml-auto">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
