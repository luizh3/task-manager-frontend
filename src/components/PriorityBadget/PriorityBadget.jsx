import Badget from "../Badget/Badget";

export const PriorityEnum = Object.freeze({
  URGENT: 1,
  MEDIUM: 2,
  LOW: 3,
});

export default function PriorityBadget({ text }) {
  return <Badget color="bg-blue-100 text-blue-800" text={text} />;
}
