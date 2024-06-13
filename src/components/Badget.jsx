function Badget({ color, text }) {
  return (
    <span className={`${color} font-medium md:text-sm p-1 px-2 rounded`}>
      {text}
    </span>
  );
}

export default Badget;
