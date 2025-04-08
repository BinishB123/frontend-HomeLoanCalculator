import { useEffect, useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import ViewInDetail from "./viewInDetail";
import { useLoanContext } from "../context/loanContext";

function Home() {
  const {calculatedData,setCalculatedData,loanData,setLoanData} = useLoanContext()
  useEffect(()=>{
    
    
    
  },[])
  console.log(calculatedData);
    console.log(loanData);

  return (
    <><div className="w-[100%] h-[500px]  md:flex md:flex-row md:justify-center md:items-center sm:flex-col md:space-x-2 ">
    <div className="md:w-[45%] sm:[100%] md:h-full sm:h-[200px]  flex flex-col items-center space-y-8 justify-center">
      {/* Loan Amount */}
      <div className="w-[100%] h-[100px]  flex flex-col space-y-3">
        <div className="w-[100%] h-[35px]  flex justify-between items-center">
          <div className="W-[40%] h-full text-lg font-medium">
            <h2 className="text-xl font-normal text-black">Loan Amount</h2>
          </div>
          <div className="w-[30%]  border-2 h-[35px]  rounded-sm border-gray-400 flex justify-center items-center">
            <h1 className="text-md font-medium text-gray-500">₹ {loanData.loanAmount} </h1>
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
              setLoanData((prev)=>{
                return {...prev,loanAmount:e.target.value}
              })
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
              setLoanData((prev)=>{
                return {...prev,years:e.target.value}
              })
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
              setLoanData((prev)=>{
                return {...prev,intrestRate:e.target.value}
              })
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
      {/* end */}
    </div>
    <div className="md:w-[45%] sm:[100%] md:h-full sm:h-[200px]  flex justify-center items-center ">
      <div className="w-[35%] h-full  flex items-center ">
        <div className="h-[380px] w-[100%] flex flex-col justify-center space-y-3">
          <div className="w-[100%] h-[100px]  flex flex-col space-y-2">
            <h1 className="text-sm font-semibold text-gray-600">
              Monthly Home Loan EMI
            </h1>
            <h3 className="text-4xl font-bold ">₹</h3>
          </div>
          <div className="w-[100%] h-[100px]  flex flex-col space-y-2">
            <h1 className="text-sm font-semibold text-gray-600">
              Principal Amount
            </h1>
            <h3 className="text-3xl font-bold ">₹7,50,56,815</h3>
          </div>     
          <div className="w-[100%] h-[100px]  flex flex-col space-y-2">
            <h1 className="text-sm font-semibold text-gray-600">
              Interest Amount
            </h1>
            <h3 className="text-2xl font-bold ">₹7,50,56,815</h3>
          </div>
          <div className="w-[100%] h-[100px]  flex flex-col space-y-2">
            <h1 className="text-sm font-semibold text-gray-600">
              Total Amount Payable
            </h1>
            <h3 className="text-xl font-bold ">₹7,50,56,815</h3>
          </div>
        </div>
      </div>
      <div className="w-[60%] h-full flex items-center justify-center  ">
        <div className="h-[380px] w-[90%]  flex items-center justify-center">
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 10, label: "series A" },
                  { id: 1, value: 15, label: "series B" },
                ],
              },
            ]}
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>

    
  </div>
  {/* view In Detail */}
  <ViewInDetail></ViewInDetail>
  </>

  );
}

export default Home;
