import { useEffect } from "react";

function DetailTable() {
  const arr = new Array(100).fill(null);

  useEffect(() => {
    // Any side effects here
  }, []);

  return (
    <div className="h-[600px] overflow-y-auto border border-gray-400 rounded-md">
      <table className="table-auto border-collapse w-full text-center">
        <thead className="bg-gray-200 sticky top-0 z-10">
          <tr>
            <th className="border border-gray-400 px-4 py-2">Month Number</th>
            <th className="border border-gray-400 px-4 py-2">Principal Amount Paid</th>
            <th className="border border-gray-400 px-4 py-2">Interest Amount Paid</th>
            <th className="border border-gray-400 px-4 py-2">Remaining Balance</th>
            <th className="border border-gray-400 px-4 py-2">Total EMI Amount</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((_, index) => {
            const month = index + 1;
            const principal = 5000 + index * 50;
            const interest = Math.max(1000 - index * 5, 0);
            const balance = Math.max(100000 - principal * month, 0);
            const totalEmi = principal + interest;

            return (
              <tr key={index}>
                <td className="border border-gray-400 px-4 py-2">{month}</td>
                <td className="border border-gray-400 px-4 py-2">₹{principal.toLocaleString()}</td>
                <td className="border border-gray-400 px-4 py-2">₹{interest.toLocaleString()}</td>
                <td className="border border-gray-400 px-4 py-2">₹{balance.toLocaleString()}</td>
                <td className="border border-gray-400 px-4 py-2">₹{totalEmi.toLocaleString()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DetailTable;
