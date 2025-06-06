import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Tailwind CSS is working! 🎉
        </h1>
        <p className="text-gray-600">
          Your Tailwind CSS setup is complete and ready to use in your Vidoodle
          project.
        </p>
        <button className="mt-6 px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
