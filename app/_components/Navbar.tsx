"use client"

import Image from "next/image";
import { BellDot, CircleUserRound} from "lucide-react"
import NavbarRoutes from "./navbarRoutes";
import Link from "next/link";

const Navbar = () => {

  return (
  <div className="h-full p-4 border-b flex items-center justify-around shadow-sm">
    <Link className="flex items-center gap-x-2" href={"/"}>
      <Image src="/icons/logo.svg" alt="desc" width={35} height={35}/>
      <h1 className="text-xl">SecureSight</h1>
    </Link>
    <NavbarRoutes/>
    <div className="flex items-center gap-x-6">
      <BellDot/>
      <CircleUserRound/>
    </div>
  </div> );
}

export default Navbar;