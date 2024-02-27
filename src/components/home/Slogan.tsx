import Typewriter from "typewriter-effect";

const Slogan = () => {
  return (
    <div className="w-full flex flex-col items-start justify-start gap-[8px]">
      <div className="self-stretch flex flex-col items-start justify-start">
        <Typewriter
          options={{
            strings: [
              "음식점에",
              "전시박람회장에",
              "백화점에",
              "공공기관에",
              "병원에",
              "세미나장에",
            ],
            autoStart: true,
            loop: true,
            wrapperClassName:
              "self-stretch text-[28px] font-['IBM_Plex_Sans_KR'] font-bold text-[#57585a] min-[420px]:text-[32px] min-[560px]:text-[36px]",
            cursorClassName:
              "text-[28px] min-[420px]:text-[32px] min-[560px]:text-[36px] blinking-element text-slate-400",
          }}
        ></Typewriter>
        <div className="self-stretch flex flex-row items-center justify-start">
          <div className="text-[28px] min-[420px]:text-[32px] min-[560px]:text-[36px] font-['IBM_Plex_Sans_KR'] font-bold whitespace-nowrap gradient-primary">
            토리전자 바닥조명
          </div>
        </div>
      </div>
      <div className="self-stretch text-[14px] min-[420px]:text-[16px] min-[560px]:text-[18px] font-['Noto_Sans_KR'] text-[#57585a]">
        저전력, 경량화, 개인화된 All-In-One 바닥조명.
        <br />
        당신의 브랜드가 무엇이건 효율적으로 홍보해줍니다.
      </div>
    </div>
  );
};

export default Slogan;
