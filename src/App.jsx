import { DragDropContext } from "react-beautiful-dnd";
import TaskCard from "./components/TaskCard";
import TaskColumn from "./components/TaskColumn";
import Spinner from "./components/Spinner";
import { useStatuses } from "./api/hooks/useStatuses";
import ApiEndpoint from "./api/ApiEndpoint";

function App() {
  const [isLoading, statuses, setStatuses, columns, setColumns, dsError] =
    useStatuses();

  const onDragEnd = async (result) => {
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

    onItemChangeColum(draggedItem, columns[destinationColumnIndex].id);

    let columnsCopy = [...columns];
    columnsCopy[sourceColumnIndex].items = filteredSourceColumnItems;
    columnsCopy[destinationColumnIndex].items = destinationColumnItems;

    setColumns(columnsCopy);
  };

  async function onItemChangeColum(item, newColumnId) {
    await ApiEndpoint.updateStatusTask(item.id, newColumnId);
  }

  return (
    <div className="w-screen min-h-screen	max-h-fit bg-gray-200">
      {isLoading && (
        <div className="flex min-h-screen	 items-center justify-center">
          <Spinner />
        </div>
      )}
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
