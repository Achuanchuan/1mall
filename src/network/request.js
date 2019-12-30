import axios from "axios";
export function request(config) {
  //创建axios实例
  const instance = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 5000
  });

  // axios拦截器
  instance.interceptors.request.use(
    config => {
      // console.log(config);
      return config;
    },
    err => {
      // console.log(err);
    }
  );

  // 响应拦截
  instance.interceptors.response.use(res => {
    console.log(res);
  }),
    err => {
      console.log(err);
    };

  return instance(config);
  //  返回promise
}
