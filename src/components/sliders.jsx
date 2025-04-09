import { useLoanContext } from "../context/loanContext";




function Sliders(){
      const { calculatedData, setCalculatedData, loanData, setLoanData ,enableSave,setSaveEnable } =
        useLoanContext();
    return (<>
    <div className="w-[100%] h-[100px]  flex flex-col space-y-3">
            <div className="w-[100%] h-[35px]  flex justify-between items-center">
              <div className="W-[40%] h-full text-lg font-medium">
                <h2 className="text-xl font-normal text-black">Loan Amount</h2>
              </div>
              <div className="w-[30%]  border-2 h-[35px]  rounded-sm border-gray-400 flex justify-center items-center">
                <h1 className="text-md font-medium text-gray-500">
                  ₹ {loanData.loanAmount}{" "}
                </h1>
              </div>
            </div>

            <div className="w-[100%] h-[40px]  flex justify-center items-center">
              <input
                type="range"
                min="100000"
                max="100000000"
                value={loanData.loanAmount}
                class="slider"
                id="myRange"
                className="w-[100%]"
                onChange={(e) => {
                  setLoanData((prev) => {
                    return { ...prev, loanAmount: e.target.value };
                  });
                  setSaveEnable(true)

                }}
              />
            </div>
            <div className="w-[100%] h-[30px]  flex  ">
              <div className="w-[50%]">
                <h1 className="text-md font-medium text-gray-500">₹ 1 Lac </h1>
              </div>
              <div className="w-[50%] flex justify-end">
                <h1 className="text-md font-medium text-gray-500">₹ 10 Cr </h1>
              </div>
            </div>
          </div>

          {/* loan amount end  */}
          {/* year start */}
          <div className="w-[100%] h-[100px]  flex flex-col space-y-3">
            <div className="w-[100%] h-[35px]  flex justify-between items-center">
              <div className="W-[40%] h-full text-lg font-medium">
                <h2 className="text-xl font-normal text-black">Years</h2>
              </div>
              <div className="w-[7%]  border-2 h-[35px]  rounded-md border-gray-400 flex justify-center items-center ">
                <h1> {loanData.years}</h1>
              </div>
            </div>

            <div className="w-[100%] h-[40px]  flex justify-center items-center">
              <input
                type="range"
                min="1"
                max="30"
                value={loanData.years}
                class="slider"
                id="myRange"
                className="w-[100%]"
                onChange={(e) => {
                  setLoanData((prev) => {
                    return { ...prev, years: e.target.value };
                  });
                  setSaveEnable(true)

                }}
              />
            </div>
            <div className="w-[100%] h-[30px]  flex  ">
              <div className="w-[50%]">
                <h1 className="text-md font-medium text-gray-500">1 </h1>
              </div>
              <div className="w-[50%] flex justify-end">
                <h1 className="text-md font-medium text-gray-500">30 </h1>
              </div>
            </div>
          </div>
          {/* years end */}
          {/* Interest Rate start */}
          <div className="w-[100%] h-[100px]  flex flex-col space-y-3">
            <div className="w-[100%] h-[35px]  flex justify-between items-center">
              <div className="W-[40%] h-full text-lg font-medium">
                <h2 className="text-xl font-normal text-black">
                  Interest Rate (% P.A.)
                </h2>
              </div>
              <div className="w-[8%]  border-2 h-[35px]  rounded-md border-gray-400 flex justify-center items-center">
                <h1>{loanData.intrestRate} %</h1>
              </div>
            </div>

            <div className="w-[100%] h-[40px]  flex justify-center items-center">
              <input
                type="range"
                min="1"
                value={loanData.intrestRate}
                max="20"
                class="slider"
                id="myRange"
                className="w-[100%]"
                onChange={(e) => {
                  setLoanData((prev) => {
                    return { ...prev, intrestRate: e.target.value };
                  });
                  setSaveEnable(true)

                }}
              />
            </div>
            <div className="w-[100%] h-[30px]  flex  ">
              <div className="w-[50%]">
                <h1 className="text-md font-medium text-gray-500"> 1 </h1>
              </div>
              <div className="w-[50%] flex justify-end">
                <h1 className="text-md font-medium text-gray-500">20 </h1>
              </div>
            </div>
          </div>
    </>)
}


export default Sliders