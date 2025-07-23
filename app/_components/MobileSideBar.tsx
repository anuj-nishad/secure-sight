import { Menu } from "lucide-react";

import {
  Sheet,
  SheetTrigger,
  SheetContent
} from '@/components/ui/sheet'
import SideBar from "./SideBar";

const MobileSideBar = () => {
  return (  
    <Sheet>
      <SheetTrigger className="md:hidden text-white pr-4 hover:opacity-75 transition">
      <Menu/>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-gradient-to-r from-[#101827] to-[#203349] text-white overflow-hidden">
        <SideBar/>
      </SheetContent>
    </Sheet>
   );
}
 
export default MobileSideBar;