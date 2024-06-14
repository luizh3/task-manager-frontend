import FetchOptionsHelper from "../../helpers/FetchOptionsHelper";
import { useFetch } from "./useFetch";

export function useGet(dsUrl, triggerState = []) {
  return useFetch(FetchOptionsHelper.get(), dsUrl, triggerState);
}
