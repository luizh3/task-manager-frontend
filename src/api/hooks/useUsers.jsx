import { useGet } from "./useGet";
import ApiHelper from "../../helpers/ApiHelper";

export function useUsers() {
  return useGet(`${ApiHelper.url()}/user`);
}
