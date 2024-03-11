import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const NoticeHeader = () => {
  return (
    <div className="w-full flex flex-row items-center justify-between p-[20px] bg-[linear-gradient(83.05deg,#00c6fb_0%,#005bea_100%)] md:px-[32px] 2xl:px-[44px]">
      <div className="text-[28px] font-['Noto_Sans_KR'] font-medium text-[#fff] whitespace-nowrap">
        공지사항
      </div>
      <div className="whitespace-nowrap">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="text-slate-300">
              <Link to="..">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-slate-300" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-white">Notice</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default NoticeHeader;
