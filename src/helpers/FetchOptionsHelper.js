import ApiHelper from "./ApiHelper";

function get() {
  return {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ApiHelper.token()}`,
    },
  };
}

function put() {
  return {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ApiHelper.token()}`,
    },
  };
}

export default {
  get,
  put,
};
