import React from "react";
import NavbarItems from "./NavbarItems";

export default function Navbar() {
  return (
    <div className="flex justify-center dark:bg-raisin-black p-4 bg-amber-300 lg:text-lg">
      <NavbarItems title="Trending" params="fetchTrending" />

      <NavbarItems title="Top Rated" params="fetchTopRated" />
    </div>
  );
}
