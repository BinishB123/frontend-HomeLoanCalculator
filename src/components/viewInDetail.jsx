import { useState } from "react";
import { FaChevronCircleUp } from "react-icons/fa";
import DetailTable from "./detailedTable";


function ViewInDetail() {
    const [view,setView] = useState(false)
  return (
    <>
      <div className="w-[100%] h-[60px] flex justify-center ">
        <div className="w-[95%] h-[full]  bg-gray-200 rounded-md flex ">
          <div className="w-[40%] h-full flex justify-center items-center">
            <h1 className="text-blue-900 font-semibold text-xl">
              🧾 Loan Repayment Schedule for the Entire Loan Term
            </h1>
          </div>
          <div className="w-[60%] h-full flex justify-end">
            <div className="w-[20%] h-full  flex justify-center items-center">
              <FaChevronCircleUp className={`text-4xl cursor-pointer text-blue-900 ${view&&"rotate-180"}`} onClick={()=>{
                setView(!view)
              }}></FaChevronCircleUp>
            </div>
          </div>
        </div>
      </div>
      {
        view&&(<div className="w-[100%] h-[700px] flex justify-center items-center mt-6">
            <div className="w-[95%] h-full ">
            <DetailTable></DetailTable>
            </div>
        </div>)
      }
    </>
  );
}


export default ViewInDetail