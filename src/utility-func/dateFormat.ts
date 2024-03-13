import { NoticeData } from "@/components/home/NoticeCarousel";

export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const formattedDate = `${date.getFullYear()}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')}`;
    return formattedDate;
}


export function formatAndSortNoticeData(noticeDataArray: NoticeData[]): NoticeData[] {
    const formattedAndSortedData = noticeDataArray.map(data => {
        const date = new Date(data.date);
        return {
            ...data,
            date: `${date.getFullYear()}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')}`
        };
    }).sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime();
    });

    return formattedAndSortedData;
}


