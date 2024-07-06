import axios from "axios";

export const url = ' https://mis.ofoghiranianteam.ir/api/v1/survey'
export const base_url =' https://mis.ofoghiranianteam.ir'


export const getInfo= (token)=>{
    return axios.post(`${url}/info`, token)
}


export const submitSurvey= (data)=>{
    return axios.post(`${url}/save`, data)
}



