"use client"

import Image from "next/image";
import { Bell, CircleUserRound} from "lucide-react"
import NavbarRoutes from "./navbarRoutes";
import Link from "next/link";
import MobileSideBar from "./MobileSideBar";

const Navbar = () => {
  return (
  <div className="h-full p-4 border-b border-muted-foreground flex items-center justify-around shadow-sm">
    <MobileSideBar/>
    <Link className="flex items-center gap-x-2" href={"/"}>
      <Image src="/icons/logo.svg" alt="desc" width={35} height={35}/>
      <h1 className="text-xl text-white">SecureSight</h1>
    </Link>
    <NavbarRoutes/>
    <div className="flex items-center gap-x-6">
      <Bell/>
      <CircleUserRound/>
    </div>
  </div> );
}

export default Navbar;