import TypePriorityEnum from "../enums/TypePriorityEnum";
import DataHelper from "../helpers/DataHelper";
import PriorityBadget from "./PriorityBadget";

export default function LimitDateBadget({ dhLimit, dhCreated }) {
  const nrDaysDelivery = DataHelper.daysToDate(dhLimit, dhCreated);

  const tpCardPriorityByDaysLeft =
    nrDaysDelivery < 15
      ? TypePriorityEnum.URGENT
      : nrDaysDelivery < 30
      ? TypePriorityEnum.MEDIUM
      : TypePriorityEnum.LOW;

  return (
    <PriorityBadget
      text={`Entrega em ${nrDaysDelivery} dias`}
      typePriority={tpCardPriorityByDaysLeft}
    />
  );
}
