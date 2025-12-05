export default function Navigation() {
  return (
    <nav className="flex items-center text-slate-300">
      <div className="flex items-center">
        <h1 className="text-2xl mr-12">Hyper<span className="text-rose-500">Movies</span>
        <p className="text-xs text-center text-slate-500 font-light">Film Review</p>
        </h1>
        <ul className="flex gap-6 uppercase" >
          <li>
            <a className="navLink" href="#">Home</a>
          </li>
          <li>
            <a className="navLink" href="#">Movies</a>
          </li>
          <li>
            <a className="navLink" href="#">TV Shows</a>
          </li>
          <li>
            <a className="navLink" href="#">People</a>
          </li>
          <li>
            <a className="navLink" href="#">More</a>
          </li>
        </ul>
      </div>
      <div className="ml-auto uppercase">
        <ul className="flex gap-4">
          <li>
            <a className="navLink" href="#">Login</a>
          </li>
          <li>
            <a href="#" className="bg-rose-500 px-4 py-2 rounded-2xl">Sign up</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
