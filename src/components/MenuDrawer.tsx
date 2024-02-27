import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Link } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";

const MenuDrawer = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className="w-[40px] shrink-0 flex flex-row items-center justify-start lg:hidden">
          <IoMenuSharp
            style={{
              cursor: "pointer",
            }}
            className="w-[40px] h-auto"
            color="#1074BC"
          ></IoMenuSharp>
        </div>
      </DrawerTrigger>
      <DrawerContent className="w-full flex flex-col items-start justify-start rounded-tl-[24px] rounded-tr-[24px] rounded-br-0 rounded-bl-0 overflow-hidden">
        <div className="self-stretch flex flex-col items-start justify-start bg-[#fff]">
          <div className="self-stretch flex flex-col items-start justify-start">
            <Link
              className="self-stretch flex flex-row items-center justify-center py-[16px] px-[20px]"
              to={"about"}
            >
              <DrawerClose
                className="flex-1 flex flex-row items-center justify-center"
                asChild
              >
                <div className="flex-1 text-[20px] font-['Noto_Sans_KR'] font-medium text-[#1074bc] text-center">
                  About
                </div>
              </DrawerClose>
            </Link>
            <Link
              className="self-stretch flex flex-row items-center justify-center py-[16px] px-[20px]"
              to={"products"}
            >
              <DrawerClose
                className="flex-1 flex flex-row items-center justify-center"
                asChild
              >
                <div className="flex-1 text-[20px] font-['Noto_Sans_KR'] font-medium text-[#1074bc] text-center">
                  Products
                </div>
              </DrawerClose>
            </Link>
            <Link
              className="self-stretch flex flex-row items-center justify-center py-[16px] px-[20px]"
              to={"ceo-message"}
            >
              <DrawerClose
                className="flex-1 flex flex-row items-center justify-center"
                asChild
              >
                <div className="flex-1 text-[20px] font-['Noto_Sans_KR'] font-medium text-[#1074bc] text-center">
                  CEO Message
                </div>
              </DrawerClose>
            </Link>
            <Link
              className="self-stretch flex flex-row items-center justify-center py-[16px] px-[20px]"
              to={"notice"}
            >
              <DrawerClose
                className="flex-1 flex flex-row items-center justify-center"
                asChild
              >
                <div className="flex-1 text-[20px] font-['Noto_Sans_KR'] font-medium text-[#1074bc] text-center">
                  Notice
                </div>
              </DrawerClose>
            </Link>
            <Link
              className="self-stretch flex flex-row items-center justify-center py-[16px] px-[20px]"
              to={"contact"}
            >
              <DrawerClose
                className="flex-1 flex flex-row items-center justify-center"
                asChild
              >
                <div className="flex-1 text-[20px] font-['Noto_Sans_KR'] font-medium text-[#1074bc] text-center">
                  Contact
                </div>
              </DrawerClose>
            </Link>
          </div>
          <DrawerFooter className="self-stretch flex flex-col items-start justify-start pt-[32px] px-[20px] pb-[36px]">
            <DrawerClose
              className="self-stretch flex flex-col items-start justify-start"
              asChild
            >
              <button className="self-stretch flex flex-row items-center justify-center py-[8px] px-[16px] bg-[#1074bc] rounded-[16px]">
                <div className="flex-1 text-[20px] font-['Noto_Sans_KR'] font-medium text-[#fff] text-center">
                  닫기
                </div>
              </button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MenuDrawer;
