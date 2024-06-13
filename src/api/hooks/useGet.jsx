import FetchOptionsHelper from "../../helpers/FetchOptionsHelper";
import { useFetch } from "./useFetch";

export function useGet(dsUrl) {
  return useFetch(FetchOptionsHelper.get(), dsUrl);
}
