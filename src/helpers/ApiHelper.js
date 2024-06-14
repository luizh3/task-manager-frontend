import LocalStorageHelper from "./LocalStorageHelper";

function url() {
  return import.meta.env.VITE_BASE_API_URL;
}

function token() {
  return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTgyNDMyNTcsInN1YiI6IjEifQ.4FXGUu_NaIkxrtjBZEYBWz8ZInLD3NAViavZv9RcR5A";
  // return LocalStorageHelper.getItem("token");
}

export default {
  url,
  token,
};
