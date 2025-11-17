import { useEffect, useRef, useState } from "react";
import Button from "../ui/button/Button";
import {
  UserIcon,
  XMarkIcon,
  HomeModernIcon,
  PaperAirplaneIcon,
  GlobeEuropeAfricaIcon,
  PhoneIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

function Sidebar({
  setIsShowingSidebar,
  isShowingSidebar,
}: {
  setIsShowingSidebar: (value: boolean) => void;
  isShowingSidebar: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isLogin, setIsLogin] = useState(false); // Simulated login state (replace with real auth logic as soon as implemented)

  useEffect(() => {
    if (isShowingSidebar) {
      document.body.style.overflow = "hidden";

      const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          setIsShowingSidebar(false);
        }
      };

      document.addEventListener("click", handleClickOutside);

      return () => {
        document.body.style.overflow = "auto";
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [isShowingSidebar, setIsShowingSidebar]);

  const links = [
    {
      href: "/",
      label: "صفحه اصلی",
      icon: <HomeModernIcon className="size-5 text-gray-7" />,
    },
    {
      href: "/travel-insurance",
      label: "بیمه مسافرتی",
      icon: <PaperAirplaneIcon className="size-5 text-gray-7" />,
    },
    {
      href: "/my-travels",
      label: "سفرهای من",
      icon: <GlobeEuropeAfricaIcon className="size-5 text-gray-7" />,
    },
    {
      href: "/contact-us",
      label: "تماس با ما",
      icon: <PhoneIcon className="size-5 text-gray-7" />,
    },
    {
      href: "/about-us",
      label: "درباره ما",
      icon: <InformationCircleIcon className="size-5 text-gray-7" />,
    },
  ];

  return (
    <div
      ref={ref}
      className={`xl:hidden top-0 right-0 fixed bg-white border-l border-l-gray-5 max-[500px]:w-full w-6/12 h-screen transition-transform duration-300 ease-out
        ${isShowingSidebar ? "translate-x-0" : "translate-x-full"}`}
    >
      <ul className="flex flex-col gap-4 p-6!">
        <XMarkIcon
          className="mb-4! size-5 text-gray-7 cursor-pointer"
          onClick={() => {
            setIsShowingSidebar(false);
          }}
        />
        {links.map((link) => (
          <li
            key={link.href}
            className="flex items-center gap-2 text-body-sm text-gray-8 cursor-pointer"
          >
            {link.icon}
            {link.label}
          </li>
        ))}
        {isLogin && (
          <li className="flex items-center gap-2 text-body-sm text-gray-8 cursor-pointer">
            <UserIcon className="size-5 text-gray-7" />
            حساب کاربری
          </li>
        )}
        <li className="flex items-center gap-2 mt-4! text-body-sm text-gray-8 cursor-pointer">
          <PhoneIcon className="size-5 text-gray-7" />
          پشتیبانی ۴۰۴۵_۰۲۱
        </li>
        {!isLogin && (
          <Button
            content="ورود / ثبت‌ نام"
            variant="fill"
            size="40"
            style="rounded-lg w-full mt-4!"
          />
        )}
      </ul>
    </div>
  );
}

export default Sidebar;
