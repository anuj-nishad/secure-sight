"use client";

import { Aperture, Cctv, LayoutDashboard,ShieldAlert, Users } from "lucide-react";
import NavBarItem from "./navbarItem";

const routes = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Cctv,
    label: "Cameras",
    href: "/cameras",
  },
  {
    icon: Aperture,
    label: "Scenes",
    href: "/scenes",
  },
  {
    icon: ShieldAlert,
    label: "Incidents",
    href: "/incidents",
  },
  {
    icon: Users,
    label: "Users",
    href: "/users",
  }
]


const SideBarRoutes = () => {

  return (
    <div className="flex flex-col w-full pl-12">
      {routes.map((route)=>(
        <NavBarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>);
}

export default SideBarRoutes;