import FetchOptionsHelper from "../../helpers/FetchOptionsHelper";
import { useFetch } from "./useFetch";

export function usePut() {
  return useFetch(FetchOptionsHelper.put());
}
