/*
 * @Description: 组件
 * @Author: 海象
 * @Date: 2020-12-13 13:18:45
 * @LastEditors: 海象
 * @LastEditTime: 2020-12-13 13:21:05
 */
import axios from "@/utils/request";

export function login(data) {
  return axios.post("/user/login", data);
}

export function getInfo() {
  return axios.get("/user/info");
}
