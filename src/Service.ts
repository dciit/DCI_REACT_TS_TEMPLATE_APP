
import Axios from "axios";
import { MLogin } from "./interface";
const http = Axios.create({
    baseURL: import.meta.env.VITE_API,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8;json/html; charset=UTF-8',
    }
});

export function API_LOGIN(param: MLogin) {
    return new Promise<any>(resolve => {
        http.post(`/employee/login`, param).then((res) => {
            resolve(res.data);
        })
    })
}