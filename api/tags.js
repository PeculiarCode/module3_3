import request from "@/utils/axios";

export const tags = params => {
  return request({
    url: "api/tags",
    method: "get",
    params
  });
};
