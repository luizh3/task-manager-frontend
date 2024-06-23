import { useGet } from "./useGet";
import ApiHelper from "../../helpers/ApiHelper";
import { useEffect, useState } from "react";

export function useStatuses() {
  const [statuses, setStatuses] = useState([]);
  const [columns, setColumns] = useState([]);

  const { isLoading, data, dsError } = useGet(`${ApiHelper.url()}/status/task`);

  useEffect(() => {
    const statuses =
      data?.statuses?.map((status) => {
        return {
          id: status.id,
          description: status.description,
        };
      }) ?? [];

    const columnsTask =
      data?.statuses
        ?.map((status) => {
          return {
            id: status.id.toString(),
            name: status.description,
            items: status.tasks?.map((task) => {
              return { ...task, id: task.id.toString() };
            }),
          };
        })
        .sort((firstTask, secondTask) => firstTask.id - secondTask.id) ?? [];

    setStatuses(statuses);
    setColumns(columnsTask);
  }, [data]);

  return [isLoading, statuses, setStatuses, columns, setColumns, dsError];
}
