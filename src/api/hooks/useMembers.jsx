import { useGet } from "./useGet";
import ApiHelper from "../../helpers/ApiHelper";

export function useMembers(dsUsername) {
  return useGet(`${ApiHelper.url()}/user?dsUsername=${dsUsername}`, [
    dsUsername,
  ]);
}
