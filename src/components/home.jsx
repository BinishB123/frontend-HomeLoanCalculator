import { useCallback, useEffect, useState } from "react";
import ViewInDetail from "./viewInDetail";
import { useLoanContext } from "../context/loanContext";
import { emiCalulator } from "../utills/emiCaluculator";
import { useSelector } from "react-redux";
import Sliders from "./sliders";
import PieChartArea from "./pieChart";
import EmiCalculatedArea from "./emiCalculatedData";
import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();
  const { setCalculatedData, loanData, setView } = useLoanContext();
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
        <ViewInDetail></ViewInDetail>
      </div>
    </>
  );
}

export default Home;
