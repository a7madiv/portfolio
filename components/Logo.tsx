import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" className="fixed top-10 left-10 z-[5001]">
      <div className="flex items-center gap-2 cursor-pointer group">
        <Image
          src="/logo.png"
          alt="Ahmad Ibrahim Logo"
          width={48}
          height={48}
          className="rounded-lg"
        />
        <span className="text-white font-semibold text-lg hidden md:block group-hover:text-purple transition-colors">
          Ahmad Ibrahim
        </span>
      </div>
    </Link>
  );
};

export default Logo;
