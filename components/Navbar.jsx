import React from "react";

const Navbar = () => {
  return (
    <div className="flexpy-3 flex-wrapjustify-around">
      <h1 className="text-lgfont-semibold">Todo App</h1>
      <ul className="flex-gap-[40px]text-m">
        <li>Hime</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
