import Badget from "./Badget";
import TypePriorityEnum from "../enums/TypePriorityEnum";

export default function PriorityBadget({ text, typePriority }) {
  var colorByPriority = new Map([
    [TypePriorityEnum.URGENT, "bg-red-100 text-red-800"],
    [TypePriorityEnum.MEDIUM, "bg-yellow-100 text-yellow-800"],
    [TypePriorityEnum.LOW, "bg-green-100 text-green-800"],
  ]);

  return <Badget color={colorByPriority.get(typePriority, "")} text={text} />;
}
