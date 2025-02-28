import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Frontend Assignment</h1>
      <p className="text-gray-600 mb-6">Select an assignment to view:</p>

      <div className="flex gap-4">
        <Link href="/auto-delete-todo-list">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            Auto Delete Todo List
          </button>
        </Link>

        <Link href="/user-data-summary">
          <button className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
            User Data Summary
          </button>
        </Link>
      </div>
    </main>
  );
}
