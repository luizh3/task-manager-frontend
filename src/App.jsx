import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import TaskCard from "./components/TaskCard/TaskCard";
import TaskColumn from "./components/TaskColumn/TaskColumn";

const inicialItems = [
  { id: "111", content: "Conteúdo 1" },
  { id: "222", content: "Conteúdo 2" },
  { id: "333", content: "Conteúdo 3" },
];

const inicialColumns = [
  {
    name: "To do",
    id: "123",
    items: inicialItems,
  },
  {
    name: "Doing",
    id: "456",
    items: [],
  },
  {
    name: "Done",
    id: "789",
    items: [],
  },
];

function App() {
  const [columns, setColumns] = useState(inicialColumns);
  const [status, setStatus] = useState([]);

  const onDragEnd = (result) => {
    var sourceColumnItems = [];
    var destinationColumnItems = [];

    var sourceColumnIndex = 0;
    var destinationColumnIndex = 0;

    for (var index in columns) {
      if (columns[index].id == result.source.droppableId) {
        sourceColumnItems = columns[index].items;
        sourceColumnIndex = index;
      } else if (columns[index].id == result.destination.droppableId) {
        destinationColumnItems = columns[index].items;
        destinationColumnIndex = index;
      }
    }

    const draggedItem = sourceColumnItems.find((item) => {
      return item.id === result.draggableId;
    });

    var filteredSourceColumnItems = sourceColumnItems.filter(
      (item) => item.id != result.draggableId
    );

    if (result.source.droppableId == result.destination.droppableId) {
      filteredSourceColumnItems.splice(
        result.destination.index,
        0,
        draggedItem
      );

      let columnsCopy = [...columns];
      columnsCopy[sourceColumnIndex].items = filteredSourceColumnItems;

      setColumns(columnsCopy);

      return;
    }

    destinationColumnItems.splice(result.destination.index, 0, draggedItem);

    let columnsCopy = [...columns];
    columnsCopy[sourceColumnIndex].items = filteredSourceColumnItems;
    columnsCopy[destinationColumnIndex].items = destinationColumnItems;

    setColumns(columnsCopy);
  };

  useEffect(() => {
    const abortController = new AbortController();

    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTgxNTc1MDgsInN1YiI6IjEifQ.Fzzg9VP9DDS7m08ljcEXSaIfS9JrySVxuPXHF1qBv9o";

    async function fetchStatus() {
      const options = {
        method: "GET", // ou 'POST', 'PUT', etc.
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        signal: abortController.signal,
      };
      try {
        const response = await fetch(
          `http://127.0.0.1:5000/api/status/task`,
          options
        );

        const json = await response.json();

        const status = json.statuses?.map((status) => {
          return {
            id: status.id,
            description: status.description,
          };
        });

        const columnsTask = json.statuses?.map((status) => {
          return {
            id: status.id.toString(),
            name: status.description,
            items: status.tasks?.map((task) => {
              return { ...task, id: task.id.toString() };
            }),
          };
        });

        console.log(columnsTask);
        setColumns(columnsTask);
        setStatus(status);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchStatus();
  }, []);

  return (
    <div className="w-screen h-screen bg-gray-200">
      <div className="flex h-full space-x-10 p-10">
        <DragDropContext onDragEnd={onDragEnd}>
          {columns.map((column) => (
            <TaskColumn key={column.id} column={column}>
              {column.items.map((item, index) => (
                <TaskCard key={item.id} item={item} index={index} />
              ))}
            </TaskColumn>
          ))}
        </DragDropContext>
      </div>
    </div>
  );
}

export default App;
