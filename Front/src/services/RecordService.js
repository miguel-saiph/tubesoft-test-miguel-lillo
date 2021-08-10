import http from "../http-common";

const getAll = () => {
  return http.get("/records");
};

const create = data => {
  return http.post("/records", data);
};

export default {
  getAll,
  create,
};