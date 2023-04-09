import axiosInstance from "../base/axios-instance.api";

const URL = "/login"

export async function login({code, state}) {
    return await axiosInstance.post(URL, {
        code: code,
        state: state
    }) 
}