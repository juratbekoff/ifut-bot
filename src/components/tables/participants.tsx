/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ParticipantType } from "@/types";

interface ParticipantProps extends React.HTMLAttributes<HTMLParagraphElement> {
  data: ParticipantType[];
}

const ParticipantsTable = ({ data }: ParticipantProps) => {
  return (
    <Table className="text-sm max-xl:text-xs border-b">
      <TableHeader className="sticky -top-1 left-0 right-0 bottom-0 bg-white">
        <TableRow>
          <TableHead className="w-16">ID</TableHead>
          <TableHead className="max-xl:w-32 w-52 ">Ism</TableHead>
          <TableHead className="w-28">Taxmin</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {data?.map((participant) => {
          return (
            <TableRow key={participant.id}>
              <TableCell
                className={`${
                  participant.isWin && "font-bold text-green-600 text-xs"
                }`}
              >
                #{participant.id}
              </TableCell>
              <TableCell
                className={`${
                  participant.isWin && "font-bold text-green-600 text-xs"
                }`}
              >
                {participant.name}
              </TableCell>
              <TableCell
                className={` font-semibold ${
                  participant.isWin && "font-bold text-green-600 text-xs"
                }`}
              >
                ({participant.homeClubScore} - {participant.awayClubScore})
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default ParticipantsTable;
