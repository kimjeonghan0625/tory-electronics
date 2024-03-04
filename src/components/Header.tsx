import { Link, NavLink, useLocation } from "react-router-dom";
import logoImage from "../assets/Screenshot from 2024-02-19 18-23-02 1101_18.png";
import MenuDrawer from "./MenuDrawer";
import { useScroll } from "@/hooks/useScroll";
import { useEffect, useState } from "react";

const Header = () => {
  const location = useLocation();
  const scrollPosition = useScroll();
  const [headerStyle, setHeaderStyle] = useState(
    location.pathname === "/tory-electronics exact"
      ? {
          backgroundColor: "#f9f9f9",
        }
      : {
          backgroundColor: "#ffffff",
        }
  );

  useEffect(() => {
    if (location.pathname === "/tory-electronics") {
      if (scrollPosition > 30) {
        setHeaderStyle({
          backgroundColor: "#ffffff",
        });
      } else {
        setHeaderStyle({
          backgroundColor: "#f9f9f9",
        });
      }
    }
  }, [scrollPosition, location]);

  return (
    <div className="z-10 fixed left-1/2 transform -translate-x-1/2 w-full flex flex-row items-center justify-center max-w-7xl">
      <div
        className="flex-1 flex flex-row items-center justify-between py-[16px] px-[20px] md:px-[32px] 2xl:px-[44px]"
        style={headerStyle}
      >
        <Link
          className="flex flex-row items-center justify-start gap-[8px]"
          to={""}
        >
          <img
            className="h-[40px] sm:h-[50px] xl:h-[55px] 2xl:h-[60px]"
            src={logoImage}
          ></img>
          <div className="w-[1px] h-8 sm:h-10 sm:w-[2px] xl:h-11 2xl:h-12 shrink-0 bg-[#ddd]"></div>
          <div className="text-[12px] sm:text-[13px] xl:text-[14px] 2xl:text-[15px] font-['Noto_Sans_KR'] font-bold text-[#57585a] whitespace-nowrap">
            국내 최초 <br />
            실내 바닥조명 전문기업
          </div>
        </Link>

        <div className="hidden lg:flex flex-row items-center justify-center gap-[48px]">
          <NavLink
            className="text-[23px] font-['Noto_Sans_KR'] text-[#1074BC] whitespace-nowrap"
            to={"about"}
          >
            About
          </NavLink>
          <NavLink
            className="text-[23px] font-['Noto_Sans_KR'] text-[#1074BC] whitespace-nowrap"
            to={"products"}
          >
            Products
          </NavLink>
          <NavLink
            className="text-[23px] font-['Noto_Sans_KR'] text-[#1074BC] whitespace-nowrap"
            to={"ceo-message"}
          >
            CEO Message
          </NavLink>
          <NavLink
            className="text-[23px] font-['Noto_Sans_KR'] text-[#1074BC] whitespace-nowrap"
            to={"notice"}
          >
            Notice
          </NavLink>
          <NavLink
            className="text-[23px] font-['Noto_Sans_KR'] text-[#1074BC] whitespace-nowrap"
            to={"contact"}
          >
            Contact
          </NavLink>
        </div>
        <MenuDrawer />
      </div>
    </div>
  );
};

export default Header;
