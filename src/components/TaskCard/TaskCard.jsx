import { Draggable } from "react-beautiful-dnd";
import Badget from "../Badget/Badget";
import MultiIconPreview from "../MultiIconPreview/MultiIconPreview";

function TaskCard({ item, index }) {
  const iconMembers =
    item.members?.map(() => {
      return "https://www.pontotel.com.br/wp-content/uploads/2022/05/imagem-corporativa.jpg";
    }) ?? [];

  return (
    <Draggable draggableId={item.id} index={index} key={item.id}>
      {(provided) => (
        <div
          className="bg-gray-100 rounded min-w-24 min-h-44 flex flex-col space-y-3 shadow-md"
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
          style={{
            height: 40,
            marginTop: 10,
            padding: 15,
            ...provided.draggableProps.style,
          }}
        >
          <div className="flex items-center space-x-3">
            <Badget text="URGENTE" />
            <div className="text-lg font-medium">{item.title}</div>
          </div>
          <label>{item.description}</label>
          <div className="flex justify-between items-center">
            <div className="font-medium md:text-sm text-red-600 bg-red-100 p-1 px-2 rounded">
              Entrega em 12 dias
            </div>
            <MultiIconPreview iconsUrl={iconMembers} />
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default TaskCard;
