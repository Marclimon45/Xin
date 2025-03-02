import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center">CPX LAB</h1>

        {/* Login Button */}
        <div className="mt-4">
          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded">Login</button>
        </div>

        {/* Link to Register Page */}
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <Link href="/register">
            <span className="text-blue-600 font-semibold cursor-pointer">Register Here</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
