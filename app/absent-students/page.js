import React from "react";
import Topbar from "@/components/Topbar";
import Navbarr from "@/components/Navbarr";
import AbsentStudentsList from "@/components/AbsentStudentsList";

export default function AbsentStudentsPage() {
  return (
    <>
      <Topbar />
      <Navbarr />
      <AbsentStudentsList />
    </>
  );
}
