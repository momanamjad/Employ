import React from "react";
import { setLocalStorage } from "../../../utils/LocalStorage";

const Header = ({ changeUser, data }) => {
  const userName = data ? data.firstName : "Admin";
  const logoutUser = () => {
    localStorage.setItem('loggedInUser', '');
    changeUser("");
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">Hello <span className="text-3xl font-semibold">{userName}</span></h1>
      <button onClick={logoutUser} className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm cursor-pointer">Logout</button>
    </div>
  );
};

export default Header;