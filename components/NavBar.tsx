import { Moon } from "lucide-react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className='p-4 flex items-center justify-between'>
      {/* LEFT */}
      collapseButton
      {/* RIGHT */}
      <div className='flex items-center gap-4'>
        <Link href='/'>Dashboard</Link>
        <Moon />
      </div>
    </nav>
  );
};

export default NavBar;
