import CardArea from "@/components/home/CardArea";
import Slogan from "@/components/home/Slogan";

export default function Home() {
  return (
    <div className="pt-[50px] px-[20px] md:px-[32px] w-full mx-auto h-[1885px] flex flex-col items-start justify-start">
      <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-[55px]  pb-[38px] gap-8">
        <Slogan />
        <CardArea />
      </div>
      <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-[55px]  pb-[38px]">
        <div className="self-stretch flex-1 bg-[#d9d9d9]"></div>
      </div>
      <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-0  pb-[64px]">
        <div className="self-stretch flex-1 bg-[#d9d9d9]"></div>
      </div>
      <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-[55px]  pb-[25px]">
        <div className="self-stretch flex-1 bg-[#d9d9d9]"></div>
      </div>
      <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-[30px]  pb-[40px]">
        <div className="self-stretch flex-1 bg-[#d9d9d9]"></div>
      </div>
    </div>
  );
}
