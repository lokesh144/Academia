"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (
      username === "admin" &&
      password === "admin@123"
    ) {
      await fetch("/api/admin/login", { method: "POST" });
      router.push("/addnotice");
    } else {
      alert("Invalid admin credentials ❌");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-lg w-[350px]"
      >
        <h1 className="text-2xl font-bold mb-6 text-center text-black">
          Admin Login
        </h1>

        <input
          type="text"
          placeholder="Username"
          className="
            w-full
            border border-gray-300
            p-2 mb-4 rounded
            bg-white text-black
            placeholder-gray-500
            focus:outline-none
            focus:ring-2 focus:ring-blue-600
          "
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="
            w-full
            border border-gray-300
            p-2 mb-6 rounded
            bg-white text-black
            placeholder-gray-500
            focus:outline-none
            focus:ring-2 focus:ring-blue-600
          "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="
            w-full
            bg-blue-700
            hover:bg-blue-800
            text-white
            py-2 rounded
            font-semibold
          "
        >
          Login
        </button>
      </form>
    </div>
  );
}
