import { useCallback, useEffect, useState } from "react";
import { FaCircleArrowDown } from "react-icons/fa6";
import { useLoanContext } from "../context/loanContext";
import { emiCalulator } from "../utills/emiCaluculator";
import { useDispatch, useSelector } from "react-redux";
import { TbListDetails } from "react-icons/tb";
import Sliders from "./sliders";
import PieChartArea from "./pieChart";
import EmiCalculatedArea from "./emiCalculatedData";
import { useNavigate } from "react-router";
import { handleApiError } from "../utills/errorHandler";
import { reset } from "../redux/slice";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { getMonthlyRepaymentSechedule } from "../service/loan";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { setCalculatedData, loanData, setLoanData, setView,setTableData, loans, setLoans } =
    useLoanContext();
  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    if (!userInfo) {
      navigate("/login", { replace: true });
      return;
    }
  }, [userInfo]);

  const calculate = useCallback(() => {
    const updateData = emiCalulator(
      loanData.loanAmount,
      loanData.intrestRate,
      loanData.years
    );

    setCalculatedData({
      emi: updateData.emi,
      interestAmount: updateData.interestAmount,
      totalPayable: updateData.totalPayable,
    });
  }, [loanData]);

  useEffect(() => {
    setView(false);
    calculate();
  }, [calculate]);


  const onClickViewDetail = (loanData,viewDetails=false) => {
    
  

      getMonthlyRepaymentSechedule(
       parseInt( loanData.loanAmount),
       loanData.interestRate,
        parseInt(loanData.year)
      )
        .then((response) => {
         
          if (!viewDetails) {
            let data = response
            const doc = new jsPDF();
               let pageNumber = 1;
               const rowsPerPage = 50;
               const chunkedReports = [];
               for (let i = 0; i < data.length; i += rowsPerPage) {
                 chunkedReports.push(data.slice(i, i + rowsPerPage));
               }
               chunkedReports.forEach((chunk, index) => {
                 if (index > 0) doc.addPage();
                 doc.setFontSize(12);
                 doc.text(`  ${loanData.loanName} | Principle Amount :${loanData.loanAmount}|intrest :${loanData.interestRate}|year : ${loanData.year}`, 14, 15);
           
                 const tableDataFormatted = chunk.map((report) => [
                   report.month,
                   parseFloat(report.principalPaid)?.toFixed(2) || "0.00",
                   parseFloat(report.interestPaid)?.toFixed(2) || "0.00",
                   parseFloat(report.remainingBalance)?.toFixed(2) || "0.00",
                   parseFloat(report.totalEMI)?.toFixed(2) || "0.00",
                 ]);
           
                 autoTable(doc, {
                   startY: 20,
                   head: [
                     [
                       "Month",
                       "Principal Paid",
                       "Interest Paid",
                       "Remaining Balance",
                       "Total EMI",
                     ],
                   ],
                   body: tableDataFormatted,
                 });
           
                 pageNumber++;
               });
           
               doc.save("loan_repayment_schedule.pdf");
          }else{
            setTableData(response);
          }
        
        })
        .catch((error) => {
          console.log(error);
          
          handleApiError(error, navigate, dispatch, reset);
        });
    };
  
  

  return (
    <>
      <div className="w-[100%] h-auto flex flex-col ">
        <div className="w-[100%] h-[1200px] md:h-[500px]   md:flex md:flex-row md:justify-center md:items-center flex-col md:space-x-2  ">
          <div className="md:w-[45%] sm:[100%] md:h-full sm:h-[200px]  flex flex-col items-center space-y-8 justify-center">
            <Sliders></Sliders>
          </div>
          <div className="md:w-[45%] sm:[100%] md:h-full sm:h-[500px]  flex md:flex-row flex-col justify-center items-center ">
            <EmiCalculatedArea></EmiCalculatedArea>
            <PieChartArea></PieChartArea>
          </div>
        </div>
        <div className=" w-[100%] h-[600px]  flex justify-center items-end">
          <div className="w-[90%] h-full space-y-3  ">
            <div className="w-[100%] h-[50px] border-b-2 border-l-2 rounded-md flex items-center ">
              <h1 className="text-xl font-semibold pl-4 ">List Of Loans</h1>
            </div>
            <div className="w-[100%] h-[430px] space-y-3 flex flex-col">
              {loans.map((data, index) => (
                <div key={index} className="w-[100%] cursor-pointer rounded-sm h-[50px] flex bg-gray-100 hover:bg-blue-100">
                  <div className="w-[40%] h-full flex  items-center">
                   <h1 className="text-md font-semibold pl-4">{data.loanName}</h1>
                  </div>
                  <div className="w-[60%] h-full  flex justify-end items-center cursor-pointer">
                    <div className="w-[30%]  flex flex-col items-center " onClick={()=>{
                      onClickViewDetail(data)
                    }}>
                      <FaCircleArrowDown className="text-sm mt-3"></FaCircleArrowDown>
                      <h1 className="text-sm font-semibold">DownLoad as Pdf</h1>

                    </div>
                    <div className="w-[30%]  flex flex-col items-center " onClick={()=>{
                      onClickViewDetail(data,true)
                      setView(true)
                    }}>
                    <TbListDetails className="text-md  mt-3 "></TbListDetails>
                    <h1 className="text-sm font-semibold">View In Detail</h1>

                    </div>


                  </div>
                  {/* You can add content here if needed */}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* <ViewInDetail></ViewInDetail> */}
      </div>
    </>
  );
}

export default Home;
