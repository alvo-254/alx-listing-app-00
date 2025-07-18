// components/common/Pill.tsx
import React from "react";

interface PillProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full border transition 
        ${active ? "bg-black text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}
    >
      {label}
    </button>
  );
};

export default Pill;
