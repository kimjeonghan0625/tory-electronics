import calenderImage from "../../assets/calender-dynamic-premium.png";
import docsImage from "../../assets/copy-dynamic-premium.png";
import ProductCarousel2 from "./ProductCarousel2";

const CardArea = () => {
  return (
    <div className="sm:flex-row lg:flex-[2.5_1_0%] w-full flex flex-col items-start justify-center gap-[16px]">
      <div className="sm:flex-[1.4_1_0%] lg:flex-1">
        <ProductCarousel2 />
      </div>
      <div className="sm:flex-1 lg:flex-row self-stretch h-[362px] shrink-0 flex flex-col items-end justify-start gap-[16px]">
        <div className="self-stretch flex-1 flex flex-row items-start justify-start p-[16px] bg-[#6abdf9] rounded-[16px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
            <div className="self-stretch text-[20px] lg:text-[24px] font-['Noto_Sans_KR'] font-bold text-[#fff]">
              보유 특허
            </div>
            <div className="self-stretch text-[12px] lg:text-[14px] font-['Noto_Sans_KR'] font-medium text-[#fff]">
              대피 경로 안내를 위한 안내 조명 출력 장치 및 이를 포함하는 대피
              경로 안내 시스템
            </div>
          </div>
          <div className="relative flex-1 self-stretch">
            <img
              className="absolute right-[0px] bottom-0"
              width="110"
              height="110"
              src={docsImage}
            ></img>
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-row items-start justify-start p-[16px] bg-[#1074bc] rounded-[16px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
            <div className="self-stretch text-[20px] lg:text-[24px] font-['Noto_Sans_KR'] font-bold text-[#fff]">
              히스토리
            </div>
            <div className="self-stretch text-[12px] lg:text-[14px] font-['Noto_Sans_KR'] font-medium text-[#fff]">
              SONY 전자 출신 개발자들이 토리전자를 만들어가는 이야기
            </div>
          </div>
          <div className="relative flex-1 self-stretch">
            <img
              className="absolute right-[0px] bottom-0"
              width="97"
              height="97"
              src={calenderImage}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardArea;
