import { useLoanContext } from "../context/loanContext"
import DetailTable from "./detailedTable"



function ViewInDetailModal(){
    const {setView} = useLoanContext()
    
    return(<>
    <div className="fixed inset-0 cursor-pointer bg-black/20 backdrop-blur flex items-center justify-center transition-opacity ">
        <div className="w-[70%] h-[700px] rounded-md bg-white flex flex-col space-y-4 justify-center items-center cursor-pointer">
        <div
          className="w-[90%] h-[30px]  text-3xl text-end"
          onClick={() => setView(false)}
        >
          x
        </div>
         <DetailTable></DetailTable>
        </div>
      </div>
    </>)
}


export default ViewInDetailModal