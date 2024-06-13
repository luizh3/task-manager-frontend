import { Draggable } from "react-beautiful-dnd";
import MultiIconPreview from "./MultiIconPreview";
import TypePriorityEnum from "../enums/TypePriorityEnum";
import DataHelper from "../helpers/DataHelper";
import PriorityBadget from "./PriorityBadget";

function TaskCard({ item, index }) {
  const iconMembers =
    item.members?.map(() => {
      return "https://www.pontotel.com.br/wp-content/uploads/2022/05/imagem-corporativa.jpg";
    }) ?? [];

  const dsColorPriorityBorder = TypePriorityEnum.colorByType(item.priority);

  console.log(dsColorPriorityBorder);

  const nrDaysDelivery = DataHelper.daysToDate(item.dh_limit, item.dh_created);

  const tpCardPriorityByDaysLeft =
    nrDaysDelivery < 15
      ? TypePriorityEnum.URGENT
      : nrDaysDelivery < 30
      ? TypePriorityEnum.MEDIUM
      : TypePriorityEnum.LOW;

  return (
    <Draggable draggableId={item.id} index={index} key={item.id}>
      {(provided) => (
        <div
          className={`bg-gray-100 rounded min-w-24 min-h-44 flex flex-col justify-between space-y-3 shadow-md border-l-4`}
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
            {nrDaysDelivery && (
              <PriorityBadget
                text={`Entrega em ${nrDaysDelivery} dias`}
                typePriority={tpCardPriorityByDaysLeft}
              />
            )}
            <MultiIconPreview iconsUrl={iconMembers} />
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default TaskCard;
