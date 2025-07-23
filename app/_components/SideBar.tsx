import Link from "next/link"
import Image from "next/image";
import SideBarRoutes from "./SideBarRoutes";


const SideBar = () => {
  return (<div className="h-full font-medium border-r flex flex-col overflow-y-auto shadow-sm">
     <Link className="flex items-center gap-x-2 p-8 border-b" href={"/"}>
      <Image src="/icons/logo.svg" alt="desc" width={35} height={35}/>
      <h1 className="text-xl text-white">SecureSight</h1>
    </Link>
    <div className="flex flex-col w-full my-4">
      <SideBarRoutes/>
    </div>  
  </div>);
}

export default SideBar;