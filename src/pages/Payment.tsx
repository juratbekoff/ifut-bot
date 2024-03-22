import { PaymentForm } from "@/components/forms";
import { TransactionsTable } from "@/components/tables";
import { useGetUserInfo } from "@/hooks";
import { numberSpacer } from "@/lib/utils";
import { UserType } from "@/types";
import { useState } from "react";
import { LuLoader2 } from "react-icons/lu";

const Payment = () => {
  const [payRequestOpen, setPayRequestOpen] = useState(false);

  const getUserInfoQuery = useGetUserInfo();
  const userData: UserType = getUserInfoQuery.data?.data?.info;

  return (
    <div className="flex flex-col gap-3 mt-4">
      {/* Balance info and payment form */}
      <div className="flex flex-col gap-3 bg-white rounded-sm border border-opacity-5 border-black shadow-sm px-3 py-8">
        <div className="flex flex-col items-center">
          <span className="text-[11px] text-gray-500 leading-[8px]">Hisob</span>
          <h1 className="text-xl font-semibold">
            {numberSpacer(userData?.balance || 0)} so'm
          </h1>
        </div>

        <button
          className="p-2 bg-purple-500 text-white rounded-xl text-xs self-center w-[65%]"
          onClick={() => setPayRequestOpen(true)}
          hidden={payRequestOpen}
        >
          Yechib olish
        </button>

        {payRequestOpen && <PaymentForm />}
      </div>

      {getUserInfoQuery.isLoading ? (
        <div className="flex justify-center mt-5">
          <LuLoader2 className="animate-spin text-3xl text-purple-600" />
        </div>
      ) : userData?.transactions.length === 0 ? (
        <h1 className="text-center mt-5">So'rovlar mavjud emas!</h1>
      ) : (
        <div className="bg-white rounded-sm border border-opacity-5 border-black shadow-sm">
          <TransactionsTable data={userData?.transactions} />
        </div>
      )}
    </div>
  );
};

export default Payment;
