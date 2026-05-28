import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="fixed top-10 left-10 z-[5001]">
      <div className="flex items-center gap-2 cursor-pointer group">
        <div className="relative">
          <div className="absolute inset-0 bg-purple blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
          <div className="relative bg-gradient-to-br from-purple to-blue-500 text-black font-bold text-2xl w-12 h-12 rounded-lg flex items-center justify-center shadow-lg">
            AI
          </div>
        </div>
        <span className="text-white font-semibold text-lg hidden md:block group-hover:text-purple transition-colors">
          Ahmad Ibrahim
        </span>
      </div>
    </Link>
  );
};

export default Logo;
