import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100">
      <h1 className="text-4xl font-bold text-blue-800">
        Welcome to Website Boss
      </h1>
      <p className="text-lg mt-4">
        Generate industry-specific websites instantly.
      </p>
      <Link to="/create">
        <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md">
          Create Website
        </button>
      </Link>
    </div>
  );
}
