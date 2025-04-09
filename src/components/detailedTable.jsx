import { useEffect } from "react";
import { useLoanContext } from "../context/loanContext";

function DetailTable() {
  const { tableData } = useLoanContext();

  return (
    <div className="h-[600px] overflow-y-auto border border-gray-400 rounded-md">
      <table className="table-auto border-collapse w-full text-center">
        <thead className="bg-gray-200 sticky top-0 z-10">
          <tr>
            <th className="border border-gray-400 px-4 py-2">Month Number</th>
            <th className="border border-gray-400 px-4 py-2">
              Principal Amount Paid
            </th>
            <th className="border border-gray-400 px-4 py-2">
              Interest Amount Paid
            </th>
            <th className="border border-gray-400 px-4 py-2">
              Remaining Balance
            </th>
            <th className="border border-gray-400 px-4 py-2">
              Total EMI Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => {
            return (
              <tr key={index}>
                <td className="border border-gray-400 px-4 py-2">
                  {data.month}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  ₹{data.principalPaid}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  ₹{data.interestPaid}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  ₹{data.remainingBalance}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  ₹{data.totalEMI}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DetailTable;
