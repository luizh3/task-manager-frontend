export default function TextArea({ className, rows, placeHolder }) {
  return (
    <div className={className}>
      <textarea
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        id="inline-password"
        type="password"
        rows={rows}
        placeholder={placeHolder}
      />
    </div>
  );
}
