import { HttpClient } from "./core";

const ENDPOINT = "/posts";

const getPostList = () => HttpClient.get(ENDPOINT);

const getPost = async (id) =>
  HttpClient.get(ENDPOINT, {
    params: id,
  });

const createPost = async (params) => HttpClient.post(ENDPOINT, params);

const changePost = async (id, params) =>
  HttpClient.put(ENDPOINT + `/${id}`, params);

const deletePost = async (id) => HttpClient.delete(ENDPOINT + `/${id}`);

export default {
  getPostList,
  getPost,
  createPost,
  changePost,
  deletePost,
};
