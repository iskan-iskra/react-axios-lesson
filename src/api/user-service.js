import { HttpClient } from "./core";

const ENDPOINT = "/users";

const getUserList = async () => HttpClient.get(ENDPOINT);

export default {
  getUserList,
};
