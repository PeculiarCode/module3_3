import request from "@/utils/axios";
//获取文章数据
export const articles = query => {
  return request({
    url: "api/articles",
    method: "get",
    params: query
  });
};
//发表文章
export const publishArticle = (data, token) => {
  return request({
    url: "api/articles",
    method: "post",
    headers: {
      authorization: `Token ${token}`
    },
    data
  });
};
//获取单篇文章详情
export const slug = (token, slug) => {
  return request({
    url: `api/articles/${slug}`,
    method: "get",
    headers: {
      authorization: `Token ${token}`
    }
  });
};
export const favorite = (token, slug, method) => {
  return request({
    url: `api/articles/${slug}/favorite`,
    method,
    headers: {
      authorization: `Token ${token}`
    }
  });
};
//获取单篇文章评论
export const discuss = (token, slug, method, data = "") => {
  return request({
    url: `api/articles/${slug}/comments`,
    method,
    data,
    headers: {
      authorization: `Token ${token}`
    }
  });
};
//删除评论
export const deleteComment = (token, slug, id) => {
  return request({
    url: `api/articles/${slug}/comments/${id}`,
    method: "delete",
    headers: {
      authorization: `Token ${token}`
    }
  });
};
//删除文章
export const deleteArticle = (token, slug) => {
  return request({
    url: `api/articles/${slug}`,
    method: "delete",
    headers: {
      authorization: `Token ${token}`
    }
  });
};
//个人文章列表
export const personArticle = (token, params) => {
  return request({
    url: `api/articles/feed`,
    method: "get",
    params,
    headers: {
      authorization: `Token ${token}`
    }
  });
};
//查看个人信息
export const personInfo = (token, name) => {
  return request({
    url: `api/profiles/${name}`,
    method: "get",
    headers: {
      authorization: `Token ${token}`
    }
  });
};
//订阅某人或取消订阅
export const follow = (token, name, method) => {
  return request({
    url: `api/profiles/${name}/follow`,
    method,
    headers: {
      authorization: `Token ${token}`
    }
  });
};
//设置个人信息
export const setting = (token, data) => {
  return request({
    url: `api/user`,
    method:'put',
    data,
    headers: {
      authorization: `Token ${token}`
    }
  });
};
