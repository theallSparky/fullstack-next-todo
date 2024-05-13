import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex py-3 flex-wrap justify-around">
      <h1 className="text-lg font-semibold">Todo App</h1>
      <ul className="flex gap-[40px] text-m">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="">
          <li>Products</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="">
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
