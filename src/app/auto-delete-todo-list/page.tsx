"use client";
import {useState, useRef} from "react";
import {TodoItem} from "@/types";
import {todoItems} from "@/data";

export default function AutoDeleteTodoList() {
  const [mainList, setMainList] = useState<TodoItem[]>(todoItems);
  const [fruits, setFruits] = useState<TodoItem[]>([]);
  const [vegetables, setVegetables] = useState<TodoItem[]>([]);
  const timeouts = useRef<{[key: string]: NodeJS.Timeout}>({}); // Store timeouts

  const moveToColumn = (item: TodoItem) => {
    setMainList((prev) => prev.filter((i) => i.name !== item.name));

    if (item.type === "Fruit") {
      setFruits((prev) => [...prev, item]);
    } else {
      setVegetables((prev) => [...prev, item]);
    }

    // Set a timeout and store it
    timeouts.current[item.name] = setTimeout(() => moveBackToMain(item), 5000);
  };

  const moveBackToMain = (item: TodoItem) => {
    // Check if the item is already in mainList before adding
    setMainList((prev) =>
      prev.some((i) => i.name === item.name) ? prev : [...prev, item]
    );

    setFruits((prev) => prev.filter((i) => i.name !== item.name));
    setVegetables((prev) => prev.filter((i) => i.name !== item.name));

    // Clear timeout when moved manually
    if (timeouts.current[item.name]) {
      clearTimeout(timeouts.current[item.name]);
      delete timeouts.current[item.name];
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-6">Auto Delete Todo List</h1>

      <div className="flex gap-10 w-full max-w-4xl">
        {/* Main List */}
        <div className="w-1/3 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Main List</h2>
          {mainList.map((item) => (
            <button
              key={item.name}
              onClick={() => moveToColumn(item)}
              className="block w-full text-left bg-gray-200 hover:bg-gray-300 p-2 rounded mt-2"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Fruits Column */}
        <div className="w-1/3 p-4 bg-green-100 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Fruits</h2>
          {fruits.map((item) => (
            <button
              key={item.name}
              onClick={() => moveBackToMain(item)}
              className="block w-full text-left bg-green-300 hover:bg-green-400 p-2 rounded mt-2"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Vegetables Column */}
        <div className="w-1/3 p-4 bg-yellow-100 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Vegetables</h2>
          {vegetables.map((item) => (
            <button
              key={item.name}
              onClick={() => moveBackToMain(item)}
              className="block w-full text-left bg-yellow-300 hover:bg-yellow-400 p-2 rounded mt-2"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
