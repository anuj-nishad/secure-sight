import Link from "next/link"
import Image from "next/image";
import SideBarRoutes from "./SideBarRoutes";

const SideBar = () => {
  return (<div className="h-full border-r flex flex-col overflow-y-auto shadow-sm bg-black">
     <Link className="flex items-center gap-x-2 m-8" href={"/"}>
      <Image src="/icons/logo.svg" alt="desc" width={35} height={35}/>
      <h1 className="text-xl text-white">SecureSight</h1>
    </Link>
    <div className="flex flex-col w-full">
      <SideBarRoutes/>
    </div>  
  </div>);
}

export default SideBar;