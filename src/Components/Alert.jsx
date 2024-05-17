import "../globals.css";
export default function Alert({ message, onClick }) {
  return (
    <div className="absolute">
      <div className="w-[300px] text-center p-8 rounded-lg bg-orange-700 text-white">
        <p className="mb-5">{message}</p>
        <button
          onClick={onClick}
          className="bg-white text-orange-700 p-2 rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
}
