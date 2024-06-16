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

function put(data = {}) {
  return {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ApiHelper.token()}`,
    },
    body: JSON.stringify(data),
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

function deleteMethod() {
  return {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ApiHelper.token()}`,
    },
  };
}

export default {
  get,
  put,
  post,
  deleteMethod,
};
