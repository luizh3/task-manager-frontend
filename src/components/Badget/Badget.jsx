function Badget({ color, text }) {
  return (
    <span className={`${color} text-lg font-medium px-2 py-1 rounded`}>
      {text}
    </span>
  );
}

export default Badget;
