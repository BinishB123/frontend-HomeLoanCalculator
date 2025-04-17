import { loan } from "../api/api";
import { axiosInstance } from "../api/axios";

export const getLoadDetailOfUser = (id) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .get(loan.getloanDataOfUser + `/${id}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.response);
      });
  });
};

export const addNewLoanData = (userId, loanAmount, intrest, year,loanName) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .post(loan.addNewLoanData,
        { userId, loanAmount, intrest, year,loanName}
      )
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.response);
      });
  });
};

export const getMonthlyRepaymentSechedule = (loanAmount, intrest, year) => {
  console.log(loanAmount, intrest, year);
  
  return new Promise((resolve, reject) => {
    axiosInstance
      .get(
        loan.getMonthlyRepaymentSechdule + `/${loanAmount}/${intrest}/${year}`
      )
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.response);
      });
  });
};
