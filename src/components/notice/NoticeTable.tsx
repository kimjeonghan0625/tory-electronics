import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import useDataFetching from "@/hooks/useDataFetching";
import { NoticeData } from "../home/NoticeCarousel";
import { formatAndSortNoticeData, formatDate } from "@/utility-func/dateFormat";

const NoticeTable = () => {
  const { data, loading, error } = useDataFetching<NoticeData[]>(
    "/tory-electronics/noticeData.json"
  );
  const finalData = data && formatAndSortNoticeData(data);
  return (
    <>
      <Table className="w-[90%] mx-auto">
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead className="text-right">Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading && (
            <TableRow>
              <TableCell>Loading ...</TableCell>
            </TableRow>
          )}
          {finalData &&
            finalData.map((post) => (
              <TableRow key={post.id}>
                <TableCell>
                  <div className="font-medium line-clamp-1">{post.title}</div>
                </TableCell>
                <TableCell className="text-right whitespace-nowrap">
                  {formatDate(post.date)}
                </TableCell>
              </TableRow>
            ))}
          {error && (
            <TableRow>
              <TableCell>Error</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default NoticeTable;
