import { PieChart } from "@mui/x-charts/PieChart";
import { useLoanContext } from "../context/loanContext";
import { updateLoanData } from "../service/loan";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { handleApiError } from "../utills/errorHandler";
import { useNavigate } from "react-router";
import { reset } from "../redux/slice";

function PieChartArea() {
  const { userInfo } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dipatch = useDispatch();
  const { calculatedData, loanData, enableSave, setSaveEnable } =
    useLoanContext();

  const saveData = () => {
    updateLoanData(
      userInfo.id,
      loanData.loanAmount,
      loanData.intrestRate,
      loanData.years
    )
      .then(() => {
        toast.success("saved");
        setSaveEnable(false);
      })
      .catch((error) => {
        handleApiError(error, navigate, dipatch, reset);
      });
  };

  return (
    <>
      <div className="w-[100%] md:w-[60%]  h-full flex items-center justify-center  ">
        <div className="h-[380px] w-[90%]  flex-col items-center justify-center">
          <div className="w-[100%] h-[50px]  flex justify-center md:justify-end items-center">
            {enableSave ? (
              <button
                className="w-[40%] h-[40px] bg-blue-500 text-lg cursor-pointer font-semibold  text-white rounded-sm"
                onClick={saveData}
              >
                save
              </button>
            ) : (
              ""
            )}
          </div>
          <div className="w-[100%] h-[330px] flex flex-col items-start">
            <PieChart
              series={[
                {
                  data: [
                    {
                      id: 0,
                      value: calculatedData.interestAmount,
                      label: "Intrest Amount",
                      color: "#f87171",
                    },
                    {
                      id: 1,
                      value: loanData.loanAmount,
                      label: "Principle Amount",
                      color: "#60a5fa",
                    },
                  ],
                },
              ]}
              width={420}
              height={390}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PieChartArea;
