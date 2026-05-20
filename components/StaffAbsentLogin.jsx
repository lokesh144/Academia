"use client";

import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { Card, Input, Button } from "@material-tailwind/react";

const StaffAbsentLogin = ({ onSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch("/api/staff/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        toast.error(data.message || "Invalid username or password.");
        return;
      }

      toast.success("Signed in.");
      onSuccess();
    } catch {
      toast.error("Could not sign in. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 px-3 py-6 min-h-[60vh]">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-2">
          Staff sign in
        </h1>
        <p className="text-center text-gray-600 mb-6 text-sm">
          Sign in to record absent students.
        </p>

        <Card className="p-6 shadow-md">
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="username"
              required
            />
            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
            <Button type="submit" color="blue-gray" fullWidth disabled={submitting}>
              {submitting ? "Signing in..." : "Sign in"}
            </Button>
          </form>
        </Card>

        <div className="mt-6 text-center">
          <Link
            href="/absent-students"
            className="text-sm font-semibold text-gray-700 hover:underline"
          >
            Back to absent list (public)
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StaffAbsentLogin;
