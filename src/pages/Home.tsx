import CardArea from "@/components/home/CardArea";
import NoticeCarousel from "@/components/home/NoticeCarousel";
import Slogan from "@/components/home/Slogan";
import { noticeData } from "@/data/noticeData";

export default function Home() {
  return (
    <div className="pt-[50px] w-full mx-auto max-w-[1280px] h-[1885px] flex flex-col items-start justify-start">
      <div className="bg-[#fff] w-full">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-[55px]  pb-[38px] gap-8 px-[20px] md:px-[32px] ">
          <Slogan />
          <CardArea />
          <NoticeCarousel dataArray={noticeData} />
        </div>
      </div>
      <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-[55px]  pb-[38px] px-[20px] md:px-[32px] ">
        <div className="self-stretch flex-1 bg-[#d9d9d9]"></div>
      </div>
      <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-0  pb-[64px] px-[20px] md:px-[32px] ">
        <div className="self-stretch flex-1 bg-[#d9d9d9]"></div>
      </div>
      <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-[55px]  pb-[25px] px-[20px] md:px-[32px] ">
        <div className="self-stretch flex-1 bg-[#d9d9d9]"></div>
      </div>
      <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-[30px]  pb-[40px] px-[20px] md:px-[32px] ">
        <div className="self-stretch flex-1 bg-[#d9d9d9]"></div>
      </div>
    </div>
  );
}
