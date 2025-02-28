"use client";
import {useEffect, useState} from "react";
import {fetchUsers} from "../../utils/api";
import {transformUsers} from "../../utils/transform";

export default function UserTable() {
  interface DepartmentData {
    male: number;
    female: number;
    ageRange: string;
    hair: Record<string, number>;
    addressUser: Record<string, string>;
  }
  const [data, setData] = useState<Record<string, DepartmentData> | null>(null);

  useEffect(() => {
    fetchUsers().then((users) => {
      const transformed = transformUsers(users);
      setData(transformed);
    });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">User Data Grouped by Department</h1>
      <pre className="bg-gray-200 p-4 mt-4">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}
