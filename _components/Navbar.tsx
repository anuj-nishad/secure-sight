"use client"

import Image from "next/image";
import { BellDot, CircleUserRound} from "lucide-react"
import NavbarRoutes from "./navbarRoutes";

const Navbar = () => {

  return (
  <div className="h-full p-4 border-b flex items-center justify-around shadow-sm">
    <div className="flex items-center gap-x-2">
      <Image src="/icons/logo.svg" alt="desc" width={35} height={35}/>
      <h1 className="text-xl">SecureSight</h1>
    </div>
    <NavbarRoutes/>
    <div className="flex items-center gap-x-6">
      <BellDot/>
      <CircleUserRound/>
    </div>
  </div> );
}

export default Navbar;