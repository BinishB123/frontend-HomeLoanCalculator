import { useState } from "react";
import { FaChevronCircleUp } from "react-icons/fa";
import DetailTable from "./detailedTable";
import { IoMdDownload } from "react-icons/io";
import { useLoanContext } from "../context/loanContext";
// import { getMonthlyRepaymentSechedule } from "../service/loan";
import { RiRefreshLine } from "react-icons/ri";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { handleApiError } from "../utills/errorHandler";
import { useDispatch } from "react-redux";
import { reset } from "../redux/slice";

function ViewInDetail() {
  const { loanData,  tableData, setTableData } = useLoanContext();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const generatePDF = () => {
   
  };

  return (
    <>
      <div className="w-[100%] h-[60px] flex justify-center  ">
        <div className="w-[95%] h-[full]  bg-gray-200 rounded-md flex ">
          <div className="w-[40%] h-full flex justify-center items-center">
            <p className="text-blue-900  md:font-semibold text-sm  md:text-lg">
              🧾 LIST OF LOANS
            </p>
          </div>
          <div className="w-[60%] h-full flex justify-end items-center">
            <div className="w-[70%] md:w-[25%] h-[40px] ">
              {(view&&tableData.length) ? (
                <button
                  className="w-[100%] cursor-pointer h-full bg-blue-500 rounded-sm text-white text-sm font-medium flex items-center justify-center "
                  onClick={generatePDF}
                >
                  Download PDF{" "}
                  <IoMdDownload className="text-xl ml-3"></IoMdDownload>{" "}
                </button>
              ) : (
                ""
              )}
            </div>
            <div className="w-[20%] h-full  flex justify-center items-center">
              <FaChevronCircleUp
                className={`text-xl md:text-4xl cursor-pointer text-blue-900 ${
                  view && "rotate-180"
                }`}
                onClick={() => {
                  setLoading(!loading);
                  onClickViewDetail();
                  setView(!view);
                }}
              ></FaChevronCircleUp>
            </div>
          </div>
        </div>
      </div>
      {view && (
        <div className="w-[100%] h-[700px] flex justify-center items-center mt-6">
          {!loading ? (
            <div className="w-[95%] h-full ">
              <DetailTable></DetailTable>
            </div>
          ) : (
            <div className="w-[90%] h-full flex justify-center items-start">
             <h1 className="flex space-x-1 font-medium"> <RiRefreshLine className="text-blue-800 animate-spin text-2xl"/>Loading.......</h1>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default ViewInDetail;
