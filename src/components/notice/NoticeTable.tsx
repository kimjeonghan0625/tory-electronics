import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { noticeData } from "@/data/noticeData";

const NoticeTable = () => {
  return (
    <Table className="w-[90%] mx-auto">
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead className="text-right">Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {noticeData.map((post) => (
          <TableRow key={post.id}>
            <TableCell>
              <div className="font-medium line-clamp-1">{post.title}</div>
            </TableCell>
            <TableCell className="text-right">{post.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default NoticeTable;
