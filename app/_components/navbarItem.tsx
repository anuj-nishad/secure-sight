"use client"

import { cn } from "@/lib/utils/cn";
import { LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

interface NavBarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}
const NavBarItem = ({
  icon: Icon,
  label,
  href
}: NavBarItemProps) => {

  const pathName = usePathname();
  const router = useRouter();

  const isActive =
    (pathName === "/" && href === "/") ||
    pathName === href ||
    pathName?.startsWith(`${href}/`)


  const onClick = () => {
    router.push(href)
  }
  return (<button onClick={onClick} type="button" className={cn(
    "text-white cursor-pointer font-medium text-sm transition-all hover:text-gray-200",

    isActive && "text-orange-300 hover:text-orange-300"
  )}>
    <div className="flex items-center gap-x-2 py-4">
      <Icon 
        size={22}
        className={cn(
          "text-white",
          isActive && "text-orange-300"
        )}
      />
      {label}
    </div>
  </button>);
}

export default NavBarItem;