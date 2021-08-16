import http from "../http-common";

const getAll = () => {
  return http.get("/records");
};

const create = data => {
  return http.post("/records", data);
};

const RecordService = {
  getAll,
  create,
};

export default RecordService