import { Draggable } from "react-beautiful-dnd";
import MultiIconPreview from "./MultiIconPreview";
import TypePriorityEnum from "../enums/TypePriorityEnum";
import TaskModal from "./TaskModal";
import { useState } from "react";
import ApiEndpoint from "../api/ApiEndpoint";
import LimitDateBadget from "./LimitDateBadget";

function TaskCard({ item, index }) {
  const [isVisibleTaskModal, setIsVisibleTaskModal] = useState(false);

  const iconMembers =
    item.members?.map(() => {
      return "https://www.pontotel.com.br/wp-content/uploads/2022/05/imagem-corporativa.jpg";
    }) ?? [];

  const dsColorPriorityBorder = TypePriorityEnum.colorByType(item.priority);

  function handleClick() {
    handleVisibleTaskModal();
  }

  function handleVisibleTaskModal() {
    setIsVisibleTaskModal(!isVisibleTaskModal);
  }

  return (
    <>
      {isVisibleTaskModal && (
        <TaskModal
          onClose={handleVisibleTaskModal}
          item={item}
          titleModal="Atualizar tarefa"
          onSumitCallback={ApiEndpoint.updateTask}
          successMessage="Tarefa atualizada com sucesso!"
          errorMessage="Falha ao atualizadar tarefa!"
        />
      )}
      <Draggable draggableId={item.id} index={index} key={item.id}>
        {(provided) => (
          <div
            onClick={handleClick}
            className={`bg-gray-100 rounded min-w-56 min-h-44 min-w-56 flex flex-col justify-between space-y-3 shadow-md border-l-4`}
            {...provided.dragHandleProps}
            {...provided.draggableProps}
            ref={provided.innerRef}
            style={{
              height: 40,
              marginTop: 10,
              padding: 15,
              borderColor: dsColorPriorityBorder,
              ...provided.draggableProps.style,
            }}
          >
            <div className="text-lg font-medium  w-full">{item.title}</div>
            <label>{item.description}</label>
            <div className="flex justify-between items-center">
              {item && item.dh_limit && (
                <LimitDateBadget
                  dhLimit={item?.dh_limit}
                  dhCreated={item?.dh_created}
                />
              )}
              <MultiIconPreview iconsUrl={iconMembers} />
            </div>
          </div>
        )}
      </Draggable>
    </>
  );
}

export default TaskCard;
