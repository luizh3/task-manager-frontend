import { useGet } from "./useGet";
import ApiHelper from "../../helpers/ApiHelper";

export function useRoles() {
  return useGet(`${ApiHelper.url()}/role`);
}
