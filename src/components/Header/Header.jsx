import { useState } from "react";
import FollowUs from "./FollowUs";
import HeaderSlider from "./HeaderSlider";
import Navigation from "./Navigation";
import SearchBox from "./SearchBox";

export default function Header() {
  const [bg, setBg] = useState("/cinema.jpg");

  return (
    <header
      className="py-6 md:py-12 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgb(0 0 0 / 70%), rgb(0 0 0 / 50%)), url('${bg}')`,
      }}
    >
      <div className="container">
        <Navigation />
        <SearchBox />
        <FollowUs />
        <HeaderSlider setBg={setBg} />
      </div>
    </header>
  );
}
