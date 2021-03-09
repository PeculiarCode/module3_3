import request from "@/utils/axios";

export const login = data => {
  return request({
    url: "api/users/login",
    method: "post",
    data
  });
};
export const update = data => {
  return request({
    url: "api/users/login",
    method: "post",
    data
  });
};
