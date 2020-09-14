import { axiosInstance } from "./config";

//基本请求
export const getHomeRequest = () => {
  return axiosInstance.get("/api");
};
