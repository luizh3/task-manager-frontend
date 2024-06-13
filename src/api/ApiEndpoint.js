import ApiHelper from "../helpers/ApiHelper";
import FetchOptionsHelper from "../helpers/FetchOptionsHelper";

async function updateStatusTask(idItem, idStatus) {
  try {
    const response = await fetch(
      `${ApiHelper.url()}/task/status?id=${idItem}&idStatus=${idStatus}`,
      FetchOptionsHelper.put()
    );

    console.log(await response.json());
  } catch (error) {
    console.error(error.message);
  }
}

export default {
  updateStatusTask,
};
