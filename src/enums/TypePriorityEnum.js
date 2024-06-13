const TypePriorityEnum = Object.freeze({
  URGENT: "URGENT",
  MEDIUM: "MEDIUM",
  LOW: "LOW",

  colorByType: (type) => {
    return (
      {
        URGENT: "#ef4444",
        MEDIUM: "#fb923c",
        LOW: "#65a30d",
      }[type] ?? ""
    );
  },
});

export default TypePriorityEnum;
