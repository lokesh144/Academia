"use client";

import { useCallback, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import StaffAbsentLogin from "@/components/StaffAbsentLogin";
import AbsentStudentsForm from "@/components/AbsentStudentsForm";

const StaffAbsentGate = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);

  const checkSession = useCallback(async () => {
    try {
      const res = await fetch("/api/staff/session");
      const data = await res.json();
      setAuthenticated(Boolean(data.authenticated));
    } catch {
      setAuthenticated(false);
    } finally {
      setChecking(false);
    }
  }, []);

  useEffect(() => {
    checkSession();
  }, [checkSession]);

  if (checking) {
    return (
      <div className="bg-gray-50 px-3 py-16 text-center text-gray-600 font-medium min-h-[60vh]">
        Checking access...
      </div>
    );
  }

  return (
    <>
      <Toaster position="top-right" />
      {authenticated ? (
        <AbsentStudentsForm />
      ) : (
        <StaffAbsentLogin onSuccess={() => setAuthenticated(true)} />
      )}
    </>
  );
};

export default StaffAbsentGate;
