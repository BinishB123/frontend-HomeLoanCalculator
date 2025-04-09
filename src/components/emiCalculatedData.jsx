import { useLoanContext } from "../context/loanContext";



function EmiCalculatedArea(){
    const { calculatedData,loanData} =
        useLoanContext();
    return (<>
    <div className="w-[35%] h-full  flex items-center ">
            <div className="h-[380px] w-[100%] flex flex-col justify-center space-y-3">
              <div className="w-[100%] h-[100px]  flex flex-col space-y-2">
                <h1 className="text-sm font-semibold text-gray-600">
                  Monthly Home Loan EMI
                </h1>
                <h3 className="text-4xl font-bold ">₹{calculatedData.emi}</h3>
              </div>
              <div className="w-[100%] h-[100px]  flex flex-col space-y-2">
                <h1 className="text-sm font-semibold text-gray-600">
                  Principal Amount
                </h1>
                <h3 className="text-3xl font-bold ">₹{loanData.loanAmount}</h3>
              </div>
              <div className="w-[100%] h-[100px]  flex flex-col space-y-2">
                <h1 className="text-sm font-semibold text-gray-600">
                  Interest Amount
                </h1>
                <h3 className="text-2xl font-bold ">
                  ₹{calculatedData.interestAmount}
                </h3>
              </div>
              <div className="w-[100%] h-[100px]  flex flex-col space-y-2">
                <h1 className="text-sm font-semibold text-gray-600">
                  Total Amount Payable
                </h1>
                <h3 className="text-xl font-bold ">
                  ₹{calculatedData.totalPayable}
                </h3>
              </div>
            </div>
          </div>
    </>)
}


export default EmiCalculatedArea