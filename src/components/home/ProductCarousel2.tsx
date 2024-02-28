import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import singleLightImage from "../../assets/singlelight11.png";
import duoLightImage from "../../assets/duolight11.png";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

const ProductCarousel2 = () => {
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
            <div className="self-stretch shrink-0 relative rounded-[16px] overflow-hidden">
              <div className="bg-slate-200 hidden sm:block sm:h-[362px] bg-[url('/singlelight.jpg')] bg-cover bg-center"></div>
              <img
                src={singleLightImage}
                alt="singlelight"
                className="w-full h-auto sm:hidden"
              />
              <div className="absolute right-0 bottom-0 flex flex-row items-center justify-center py-[8px] px-[16px] bg-[#1074bc80] rounded-tl-[16px] rounded-tr-0 rounded-br-0">
                <div className="text-[20px] font-['Noto_Sans_KR'] font-light text-[#fff] whitespace-nowrap">
                  Single Light
                </div>
              </div>
            </div>
          </Link>
        </CarouselItem>
        <CarouselItem>
          <Link to="products/duo-light">
            <div className="self-stretch shrink-0 relative rounded-[16px] overflow-hidden">
              <div className="bg-slate-200 hidden sm:block sm:h-[362px] bg-[url('/duolight.jpg')] bg-cover bg-center"></div>
              <img
                src={duoLightImage}
                alt="duolight"
                className="w-full h-auto sm:hidden"
              />
              <div className="absolute right-0 bottom-0 flex flex-row items-center justify-center py-[8px] px-[16px] bg-[#1074bc80] rounded-tl-[16px] rounded-tr-0 rounded-br-0">
                <div className="text-[20px] font-['Noto_Sans_KR'] font-light text-[#fff] whitespace-nowrap">
                  Duo Light
                </div>
              </div>
            </div>
          </Link>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default ProductCarousel2;
