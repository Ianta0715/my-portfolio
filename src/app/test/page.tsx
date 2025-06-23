"use client";

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Portfolio Test</h1>
        <p className="text-xl">If you see this, the basic setup works!</p>
        <p className="text-sm mt-4 text-gray-400">
          Server is running on: http://localhost:3001
        </p>
      </div>
    </div>
  );
}
