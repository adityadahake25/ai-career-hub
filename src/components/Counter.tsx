"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="mt-10 text-center">
      <p className="text-3xl mb-4">Count: {count}</p>

      <button
        onClick={() => setCount(count + 1)}
        className="bg-white text-black px-6 py-3 rounded-xl"
      >
        Increase
      </button>
    </div>
  );
}
