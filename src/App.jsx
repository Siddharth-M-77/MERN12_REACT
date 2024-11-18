import React from "react";

function App() {
  return (
    <div className=" justify-center items-center min-h-screen w-screen bg-gray-700 flex flex-col">
      <h1 className="text-4xl font-bold text-blue-500">Welcome to MERN12</h1>
      <h1 className="text-4xl font-bold text-blue-500">
        {import.meta.env.VITE_CHATAPI}
      </h1>
    </div>
  );
}

export default App;
