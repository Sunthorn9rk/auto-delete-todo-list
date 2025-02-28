"use client";
import Link from "next/link";
import {useState} from "react";
import {FaTasks, FaUser} from "react-icons/fa";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main
      className={`flex flex-col items-center justify-center min-h-screen p-6 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      } transition-colors duration-500`}
    >
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-4 right-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-transform transform hover:scale-105"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <h1 className="text-2xl font-bold mb-4 animate-fade-in">
        Frontend Assignment
      </h1>
      <p className="text-gray-600 mb-6 animate-fade-in">
        Select an assignment to view:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/auto-delete-todo-list">
          <button className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105 button-bounce">
            <FaTasks />
            Auto Delete Todo List
          </button>
        </Link>

        <Link href="/user-data-summary">
          <button className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-transform transform hover:scale-105 button-bounce">
            <FaUser />
            User Data Summary
          </button>
        </Link>
      </div>
    </main>
  );
}
