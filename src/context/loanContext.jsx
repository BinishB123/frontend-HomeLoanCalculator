import { createContext, useState, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoadDetailOfUser } from "../service/loan";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { handleApiError } from "../utills/errorHandler";
import { reset } from "../redux/slice";

const loanContext = createContext(null);

function LoanContextProvider({ children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [view, setView] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [enableSave, setSaveEnable] = useState(false);

  const [calculatedData, setCalculatedData] = useState({
    emi: 0,
    intrestAmount: 0,
    totalPayable: 0,
  });
  const [loanData, setLoanData] = useState({
    loanAmount: 0,
    years: 0,
    intrestRate: 0,
  });

  const { userInfo } = useSelector((state) => state.user);
  
  useEffect(() => {
    if (userInfo) {
      getLoadDetailOfUser(userInfo.id)
        .then((data) => {
          setCalculatedData({
            emi: data.emi,
            intrestAmount: data.interestAmount,
            totalPayable: data.totalPayable,
          });
          setLoanData({
            loanAmount: data._doc.loanAmount,
            years: data._doc.year,
            intrestRate: data._doc.interestRate,
          });
        })
        .catch((error) => {
          handleApiError(error, navigate, dispatch, reset);
        });
    }
  }, [userInfo]);

  return (
    <>
      <loanContext.Provider
        value={{
          calculatedData,
          setCalculatedData,
          loanData,
          setLoanData,
          enableSave,
          setSaveEnable,
          view,
          setView,
          tableData,
          setTableData,
        }}
      >
        {children}
      </loanContext.Provider>
    </>
  );
}

export const useLoanContext = () => {
  return useContext(loanContext);
};

export default LoanContextProvider;
