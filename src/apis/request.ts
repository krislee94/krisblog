import { axiosInstance } from "./config";

//基本请求
export const getHomeRequest = () => {
  return axiosInstance.get("/");
};

export const getBannerRequest = () => {
  return axiosInstance.post("/banner", {
    type: 0,
  });
};
