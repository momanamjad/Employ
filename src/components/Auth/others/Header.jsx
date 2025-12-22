import React from "react";

const Header = () => {
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">Hello <span className="text-3xl font-semibold">MOMAN</span></h1>
      <button className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm cursor-pointer">Logout</button>
    </div>
  );
};

export default Header;
