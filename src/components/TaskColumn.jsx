import { Droppable } from "react-beautiful-dnd";

function TaskColumn({ column, children }) {
  return (
    <div key={column.id} className="flex min-w-72 h-fit">
      <Droppable droppableId={column.id} key={column.id}>
        {(provided) => (
          <div className="flex flex-col p-2.5 bg-gray-300 rounded w-full max-w-lg">
            <div className="flex items-center">
              <label className="text-3xl font-medium text-slate-600 p-2">
                {column.name}
              </label>
              <div className="min-w-8 min-h-8 max-w-8 max-h-8 rounded flex items-center justify-center">
                <label className="text-gray-500 text-lg font-medium">
                  ( {column?.items?.length} )
                </label>
              </div>
            </div>
            <div ref={provided.innerRef} className="h-full w-full">
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
