import { Menu, Sidebar } from "lucide-react";
// import SideBar from "./SideBar";
import {
  Sheet,
  SheetTrigger,
  SheetContent
} from '@/components/ui/sheet'
import Navbar from "./Navbar";
import SideBar from "./SideBar";

const MobileSideBar = () => {
  return (  
    <Sheet>
      <SheetTrigger className="md:hidden text-white pr-4 hover:opacity-75 transition">
      <Menu/>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-black text-white overflow-hidden">
        <SideBar/>
      </SheetContent>
    </Sheet>
   );
}
 
export default MobileSideBar;