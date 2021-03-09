import request from "@/utils/axios";

export const register = data => {
  return request({
    url: "api/users",
    method: "post",
    data
  });
};
