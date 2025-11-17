"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Sidebar from "../sidebar/SideBarComponent";
import Button from "../ui/button/Button";
import Logo from "../ui/logo/Logo";
import LogoBlue from "../../public/logopic/LogoBlue.svg";
import { PhoneIcon, Bars3Icon, UserIcon } from "@heroicons/react/24/outline";


export default function NavBarComponent() {
  const pathname = usePathname();
  const [isShowingSidebar, setIsShowingSidebar] = useState(false);

  const links = [
    { href: "/", label: "صفحه اصلی" },
    { href: "/insurance-homepage", label: "بیمه مسافرتی" },
    { href: "/my-travels", label: "سفرهای من" },
    { href: "/others", label: "سایر موارد" },
  ];

  return (
    <nav className="flex justify-between items-center h-24 whitespace-nowrap">
      <div className="max-xl:hidden flex items-center gap-16">
        <Logo width={148} height={48} variant={LogoBlue} />
        <div className="flex gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                className={`text-body-xl text-gray-7 ${
                  isActive && "active_page"
                }`}
                key={link.href}
                href={link.href}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="max-xl:hidden flex items-center gap-8">
        <span className="flex items-center gap-2 text-body-xl text-gray-7">
          ۴۰۴۵_۰۲۱
          <PhoneIcon className="size-6 text-gray-7" />
        </span>
        <Button
          content="ورود / ثبت‌ نام"
          size="40"
          variant="fill"
          style="rounded-lg"
        />
      </div>

      <Bars3Icon
        className="xl:hidden size-6 text-gray-7 cursor-pointer"
        onClick={() => {
          setIsShowingSidebar(true);
        }}
      />

      <Logo width={96} height={32} variant={LogoBlue} style="min-xl:hidden" />

      <UserIcon className="xl:hidden size-6 text-gray-7" />

      <Sidebar
        setIsShowingSidebar={setIsShowingSidebar}
        isShowingSidebar={isShowingSidebar}
      />
    </nav>
  );
}
