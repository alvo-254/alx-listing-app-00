import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-center text-gray-500 py-6 mt-12 text-sm">
      © {new Date().getFullYear()} LuxStay. All rights reserved.
    </footer>
  );
};

export default Footer;
