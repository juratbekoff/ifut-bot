/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { numberSpacer } from "@/lib/utils";
import { TransactionType } from "@/types";

interface TransactionProps {
  data?: TransactionType[];
}

const TransactionsTable = ({ data }: TransactionProps) => {
  return (
    <Table className="max-xl:text-xs border-b bg-white">
      <TableHeader className="sticky -top-1 left-0 right-0 bottom-0 bg-white">
        <TableRow>
          <TableHead className="min-w-14">ID</TableHead>
          <TableHead className="min-w-[160px]">Karta nomi</TableHead>
          <TableHead>Karta raqam</TableHead>
          <TableHead className="min-w-[100px]">Miqdor</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {data?.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell>#{transaction.id}</TableCell>
            <TableCell>{transaction.card_name}</TableCell>
            <TableCell>{transaction.card_number}</TableCell>
            <TableCell>{numberSpacer(transaction.amount)} so'm</TableCell>
            <TableCell>
              {transaction.status === "NEW" ? (
                <span className="text-blue-500 font-medium">Kutilmoqda</span>
              ) : transaction.status === "PAID" ? (
                <span className="text-green-500 font-medium">To'langan</span>
              ) : transaction.status === "REJECTED" ? (
                <span className="text-destructive font-medium">
                  Rad etilgan
                </span>
              ) : null}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TransactionsTable;
