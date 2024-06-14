import { Droppable } from "react-beautiful-dnd";

function TaskColumn({ column, children }) {
  return (
    <div key={column.id} className="flex min-w-72 h-fit">
      <Droppable droppableId={column.id} key={column.id}>
        {(provided) => (
          <div className="flex flex-col p-2.5 bg-gray-300 rounded w-full max-w-lg">
            <label className="text-3xl font-medium text-slate-600 p-2">
              {column.name}
            </label>
            <div ref={provided.innerRef} className="h-full w-full space-y-4">
              {children}
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default TaskColumn;
