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

function post(data) {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ApiHelper.token()}`,
    },
    body: JSON.stringify(data),
  };
}

export default {
  get,
  put,
  post,
};
