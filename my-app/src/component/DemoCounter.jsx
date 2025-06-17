import { useState } from "react";

export const DemoCounter = () => {
  const [counter, setCounter] = useState(0);
  console.log("counter", counter);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <div className="text-3xl font-bold mb-4">Counter</div>
      <div className="text-5xl font-semibold mb-6">{counter}</div>
      <div className="flex gap-4">
        <button
          onClick={() => setCounter(counter + 1)}
          className="px-6 py-2 bg-blue-500 text-white rounded-xl shadow hover:bg-blue-600 transition"
        >
          +
        </button>
        <button
          onClick={() => setCounter(counter - 1)}
          className="px-6 py-2 bg-red-500 text-white rounded-xl shadow hover:bg-red-600 transition"
        >
          -
        </button>
      </div>
    </div>
  );
};
