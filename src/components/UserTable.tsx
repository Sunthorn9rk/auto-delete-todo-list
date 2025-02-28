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
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-gray-800 animate-fade-in">
        User Data Grouped by Department
      </h1>
      {data ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider">
                  Department
                </th>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider">
                  Male
                </th>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider">
                  Female
                </th>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider">
                  Age Range
                </th>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider">
                  Hair Colors
                </th>
                <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm leading-4 font-medium text-gray-600 uppercase tracking-wider">
                  Address
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(data).map(([department, info]) => (
                <tr key={department}>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {department}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {info.male}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {info.female}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {info.ageRange}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {Object.entries(info.hair).map(([color, count]) => (
                      <div key={color}>
                        {color}: {count}
                      </div>
                    ))}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    {Object.entries(info.addressUser).map(([key, value]) => (
                      <div key={key}>
                        {key}: {value}
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center text-gray-500">Loading...</div>
      )}
    </div>
  );
}
