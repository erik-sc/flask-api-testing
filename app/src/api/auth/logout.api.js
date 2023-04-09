import axiosInstance from "../base/axios-instance.api";

const URL = "/logout"

export async function logout() {
    return await axiosInstance.post(URL)
}