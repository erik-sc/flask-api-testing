import axiosInstance from "../base/axios-instance.api";

const URL = "/todoist/auth"

export async function getAuthUrl() {
    return await axiosInstance.get(URL)
}