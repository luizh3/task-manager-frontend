import LocalStorageHelper from "./LocalStorageHelper";

function url() {
  return import.meta.env.VITE_BASE_API_URL;
}

function token() {
  return LocalStorageHelper.getItem("token");
}

export default {
  url,
  token,
};
