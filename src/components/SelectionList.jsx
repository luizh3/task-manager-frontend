import SelectOption from "./SelectOption";

export default function SelectionList({
  options,
  title,
  isEnableRemove,
  onRemove,
  onConfirm,
}) {
  return (
    <div className="min-h-8 max-h-40 w-full flex flex-col space-y-1">
      <label className="font-medium text-gray-600">{title}</label>
      <div className="h-full w-full overflow-auto">
        {options?.length > 0 &&
          options?.map((option) => (
            <SelectOption
              key={option.id}
              option={option}
              onRemove={onRemove}
              onConfirm={onConfirm}
              isEnableRemove={isEnableRemove}
            />
          ))}
        {!options?.length && (
          <div>
            <label className="text-gray-600">
              Nenhum resultado encontrado!
            </label>
          </div>
        )}
      </div>
    </div>
  );
}
