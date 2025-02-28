import UserTable from "@/components/UserTable";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-purple-100 to-purple-300 p-10">
      <h1 className="text-4xl font-extrabold mb-6 text-gray-800 animate-fade-in">
        User Data Summary
      </h1>
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105">
        <UserTable />
      </div>
    </div>
  );
};

export default page;
