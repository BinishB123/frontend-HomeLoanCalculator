import { createContext, useReducer, useState, useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { getLoadDetailOfUser } from "../service/loan";





const loanContext = createContext(null)



function LoanContextProvider({children}){
    const [calculatedData,setCalculatedData] = useState({emi:0,intrestAmount:0,totalPayable:0})
    const [loanData,setLoanData]  = useState({loanAmount:0,years:0,intrestRate:0})
    const {userInfo} = useSelector((state)=>state.user)
    useEffect(()=>{
        if(userInfo){
            
            getLoadDetailOfUser(userInfo.id).then((data)=>{
                setCalculatedData({emi:data.emi,intrestAmount:data.interestAmount,totalPayable:data.totalPayable})
                setLoanData({loanAmount:data._doc.loanAmount,years:data._doc.year,intrestRate:data._doc.interestRate})
            })
        
           
           
        }

    },[userInfo])
    console.log(calculatedData);
    console.log(loanData);


    return(<>
    <loanContext.Provider value={{calculatedData,setCalculatedData,loanData,setLoanData}}>
      {children}
    </loanContext.Provider>
    </>)
}

export const useLoanContext = ()=>{
    return useContext(loanContext)
}


export default LoanContextProvider 