import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center gap-4 px-6 py-4 bg-white shadow-md">
      <div className="text-2xl font-bold text-gray-800">🏠 LuxStay</div>
      <nav className="flex gap-4 text-sm font-medium">
        <a href="#" className="text-gray-600 hover:text-black">Rooms</a>
        <a href="#" className="text-gray-600 hover:text-black">Mansion</a>
        <a href="#" className="text-gray-600 hover:text-black">Countryside</a>
      </nav>
      <div className="flex gap-3">
        <button className="text-sm text-gray-600 hover:text-black">Sign In</button>
        <button className="bg-black text-white text-sm px-4 py-1 rounded hover:bg-gray-800">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
