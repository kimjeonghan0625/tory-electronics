import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const ProductCarousel = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 4500,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
        watchDrag: false,
      }}
    >
      <CarouselContent>
        <CarouselItem>
          <Link to="products/single-light">
            <div className="w-full flex flex-col items-start justify-start rounded-[16px] overflow-hidden">
              <div
                className={`bg-[url('/singlelight.jpg')] bg-cover bg-center self-stretch h-[309px] shrink-0`}
              ></div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px] pt-[8px] px-[16px] pb-[24px] bg-[#1074bc]">
                <div className="self-stretch text-[12px] font-['Noto_Sans_KR'] font-medium text-[#fff]">
                  Product 1
                </div>
                <div className="self-stretch text-[20px] font-['Noto_Sans_KR'] font-bold text-[#fff]">
                  Single Light
                </div>
                <div className="self-stretch text-[14px] font-['Noto_Sans_KR'] font-light text-[#fff]">
                  바닥조명의 본질, 브랜드 광고에 온전히 집중한 제품. 높은 출력을
                  제공하므로 많은 사람들의 눈에 확실하게 브랜드를 각인할 수
                  있습니다.
                </div>
              </div>
            </div>
          </Link>
        </CarouselItem>
        <CarouselItem>
          <Link to="products/duo-light">
            <div className="w-full flex flex-col items-start justify-start rounded-[16px] overflow-hidden">
              <div
                className={`bg-[url('/duolight.jpg')] bg-cover bg-center self-stretch h-[309px] shrink-0`}
              ></div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px] pt-[8px] px-[16px] pb-[24px] bg-[#1074bc]">
                <div className="self-stretch text-[12px] font-['Noto_Sans_KR'] font-medium text-[#fff]">
                  Product 2
                </div>
                <div className="self-stretch text-[20px] font-['Noto_Sans_KR'] font-bold text-[#fff]">
                  Duo Light
                </div>
                <div className="self-stretch text-[14px] font-['Noto_Sans_KR'] font-light text-[#fff]">
                  평상시에는 광고용으로, 비상시에는 대피용으로. 비상상황을
                  감지하여 출력 조명이 자동으로 전환되는 스마트한 광고장치 겸
                  안전장치.
                </div>
              </div>
            </div>
          </Link>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default ProductCarousel;
