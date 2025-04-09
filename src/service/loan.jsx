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
        reject(error.response)
    })
  });
};

export const updateLoanData = (userId, loanAmount, intrest, year) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .patch(loan.updateLoanData, { userId, loanAmount, intrest, year })
      .then((response) => {
        resolve(response.data);
      }).catch((error) => {                
        reject(error.response)
    });
  });
};

export const getMonthlyRepaymentSechedule = (loanAmount, intrest, year) => {
  return new Promise((resolve, reject) => {
    axiosInstance
      .get(
        loan.getMonthlyRepaymentSechdule + `/${loanAmount}/${intrest}/${year}`
      )
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {                
        reject(error.response)
    })
  });
};
