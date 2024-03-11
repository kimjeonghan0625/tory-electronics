import NoticeHeader from "@/components/notice/NoticeHeader";
import NoticeTable from "@/components/notice/NoticeTable";

const Notice = () => {
  return (
    <div className="pt-[72px] sm:pt-[82px] xl:pt-[87px]">
      <NoticeHeader />
      <div className="mt-4"></div>
      <NoticeTable />
      <div className="mt-8"></div>
    </div>
  );
};

export default Notice;
