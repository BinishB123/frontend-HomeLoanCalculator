import { useSelector } from "react-redux";
import { useLoanContext } from "../context/loanContext";
import { addNewLoanData } from "../service/loan";
import { handleApiError } from "../utills/errorHandler";
import { toast } from "sonner";

function Modal() {
    const { userInfo } = useSelector((state) => state.user);
  const { loanData, setLoans,setLoanData, setSaveEnable,setAdd } = useLoanContext();
 
  const addNewLoan = ()=>{
    if(loanData.loanName.trim()===""){
      return toast.warning('provide an identical name')
    }
    addNewLoanData( userInfo.id,
      loanData.loanAmount,
      loanData.intrestRate,
      loanData.years,
      loanData.loanName
    ).then((response) => {
      setLoans(response)
        console.log(response);
        setAdd(false)
        toast.success("saved");
        setSaveEnable(false);
        setLoanData((prev) => {
          return { ...prev, loanName:"" };
        })
      })
      .catch((error) => {
        handleApiError(error, navigate, dipatch, reset);
      });
  }

  return (
    <>
      <div className="fixed inset-0 cursor-pointer bg-black/20 backdrop-blur flex items-center justify-center transition-opacity ">
        <div className="w-[40%] h-[200px] rounded-md bg-white flex flex-col space-y-4 justify-center items-center cursor-pointer">
          <div
            className="w-[90%] h-[30px]  text-3xl text-end"
            //   onClick={() => setUpload(false)}
          ></div>
          <div className="w-[80%] h-[40px] ">
            <input
              value={loanData.loanName}
              onChange={(e) =>
                setLoanData((prev) => {
                  return { ...prev, loanName:e.target.value };
                })
              }
              type="text"
              placeholder="Loan Name"
              className="w-full h-full pl-5 rounded-md border-2 border-gray-400"
            />
          </div>

          <div className="w-[80%] h-[80px]  flex justify-between">
            <button
              className="w-[45%] rounded-md cursor-pointer h-[50px] border-2 border-gray-600 text-gray-600  "
              onClick={() => {
                setAdd(false);
              }}
            >
              Cancel
            </button>
            <button 
              className="w-[45%] h-[50px] bg-blue-950  rounded-md text-white "
                onClick={addNewLoan}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
