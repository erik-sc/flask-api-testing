import axiosInstance from "../base/axios-instance.api";
const TASK_URL = "/tasks";
export async function getTasks() {
  return await axiosInstance.get(TASK_URL);
}
