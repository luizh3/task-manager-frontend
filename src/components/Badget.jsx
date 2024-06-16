function Badget({ color, text }) {
  return (
    <div className={`${color} font-medium md:text-sm p-1 px-2 rounded w-fit`}>
      {text}
    </div>
  );
}

export default Badget;
