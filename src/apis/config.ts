/**
 * 配置axios
 * @krisle
 * @date：2020/08/16
 */
import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

export const baseUrl = "http://api.krislee-vip.com"; //请求地址

axios.defaults.baseURL = baseUrl;
axios.defaults.headers.post["Content-Type"] = "application/json";
//axios 的实例及拦截器配置

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

axiosInstance.interceptors.response.use(
  (res) => res.data,
  (err) => {
    console.log(err, "网络错误");
  }
);

export { axiosInstance };

//创建(request请求)

const request = ({
  url,
  data,
  method = "post",
  ...rest
}: AxiosRequestConfig) => {
  return axios({
    url,
    data,
    method,
    ...rest,
  })
    .then((response: AxiosResponse) => {
      return response; //处理成功
    })
    .then((response: AxiosResponse) => {
      if (response.status === 200) {
        return response.data;
      }
    })
    .catch((error: any) => {
      //catch这里统一处理错误
    })
    .finally(() => {
      //处理不会出错的代码
    });
};

export default request;
