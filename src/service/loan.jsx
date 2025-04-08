import { loan } from "../api/api"
import { axiosInstance } from "../api/axios"


export const getLoadDetailOfUser = (id)=>{
    return new Promise((resolve, reject) => {
        axiosInstance.get(loan.getloanDataOfUser+`/${id}`).then((response)=>{
            resolve(response.data)
        }).catch((error)=>{
            reject(error)
        })
    })

}