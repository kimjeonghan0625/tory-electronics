import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel_notice";
import Autoplay from "embla-carousel-autoplay";
import { IoAdd } from "react-icons/io5";
import { Link } from "react-router-dom";

export interface NoticeData {
  id: string;
  title: string;
  content: string;
  date: string;
}

interface Props {
  dataArray: NoticeData[];
}

const NoticeCarousel = ({ dataArray }: Props) => {
  return (
    <Carousel
      orientation="vertical"
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3500,
        }),
      ]}
      className="w-full lg:flex-1 flex flex-col items-start justify-start gap-[16px]"
    >
      {/* 캐러셀 헤더 */}
      <div className="self-stretch flex flex-row items-center justify-between">
        <div className="text-[16px] font-['Noto_Sans_KR'] font-bold gradient-primary whitespace-nowrap">
          NOTICE
        </div>
        {/* 버튼 래퍼 */}
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <div className="flex flex-row items-center justify-start gap-[8px]">
            <CarouselPrevious />
            <div className="w-[1px] h-[12px] shrink-0 bg-[#ddd] rounded-[16px]"></div>
            <CarouselNext />
          </div>
          <Link to="notice">
            <IoAdd className="h-4 w-4" />
          </Link>
        </div>
      </div>
      {/* 캐러셀 콘텐츠 */}
      <CarouselContent className="h-[93px] lg:h-[40px]">
        {dataArray.map((data) => {
          return (
            <CarouselItem key={data.id}>
              <div className="self-stretch max-lg:h-[77px] lg:flex-row  shrink-0 flex flex-col items-start justify-between">
                <div className="self-stretch text-[16px] font-['Noto_Sans_KR'] font-medium text-[#000] line-clamp-2 lg:line-clamp-1">
                  {data.title}
                </div>

                <div className="flex items-start justify-start lg:pl-2">
                  <div className="text-[16px] font-['Noto_Sans_KR'] text-[#57585a] whitespace-nowrap">
                    {data.date}
                  </div>
                </div>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
};

export default NoticeCarousel;
