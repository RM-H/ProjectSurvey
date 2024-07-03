import axios from "axios";

export const url = ' http://192.168.1.111/api/v1/survey'
export const base_url =' http://192.168.1.111'


export const getInfo= (token)=>{
    return axios.post(`${url}/info`, token)
}



