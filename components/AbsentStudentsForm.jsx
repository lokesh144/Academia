"use client";

import { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import {
  Card,
  Typography,
  Textarea,
  Button,
  Select,
  Option,
} from "@material-tailwind/react";
import NepaliDatePickerField from "@/components/NepaliDatePickerField";
import { supabase } from "@/lib/supabaseClient";
import {
  ABSENT_STUDENT_CLASSES,
  normalizeBsDate,
  parseStudentNames,
} from "@/lib/absentStudents";

const AbsentStudentsForm = () => {
  const [dateBs, setDateBs] = useState("");
  const [className, setClassName] = useState(ABSENT_STUDENT_CLASSES[0] ?? "");
  const [namesText, setNamesText] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const normalizedDate = normalizeBsDate(dateBs);
    const studentNames = parseStudentNames(namesText);

    if (!normalizedDate) {
      toast.error("Please select a date from the Nepali calendar.");
      return;
    }
    if (!className) {
      toast.error("Please select a class.");
      return;
    }
    if (studentNames.length === 0) {
      toast.error("Enter at least one student name.");
      return;
    }

    setSubmitting(true);
    try {
      const { error } = await supabase.from("absent_students").insert([
        {
          date_bs: normalizedDate,
          class_name: className,
          student_names: studentNames,
        },
      ]);

      if (error) throw error;

      toast.success("Absent students recorded.");
      setDateBs("");
      setNamesText("");
    } catch (err) {
      console.error(err);
      toast.error(
        err?.message?.includes("absent_students")
          ? "Database table missing. Run supabase/absent_students.sql in Supabase."
          : "Could not save. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 px-3 py-6 min-h-[60vh]">
      <div className="max-w-xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-2">
          Record absent students
        </h1>
        <p className="text-center text-gray-600 mb-6 text-sm">
          Date in Nepali (Bikram Sambat), class, and student names.
        </p>

        <Card className="p-6 shadow-md">
          <form onSubmit={handleSubmit} className="space-y-5">
            <NepaliDatePickerField
              label="Date (Nepali / BS)"
              value={dateBs}
              onChange={setDateBs}
              placeholder="Select date"
            />

            <Select
              label="Class"
              selected={className}
              onChange={(val) => setClassName(val || "")}
            >
              {ABSENT_STUDENT_CLASSES.map((cls) => (
                <Option key={cls} value={cls}>
                  {cls}
                </Option>
              ))}
            </Select>

            <Textarea
              label="Student names"
              value={namesText}
              onChange={(e) => setNamesText(e.target.value)}
              rows={8}
              required
            />

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button type="submit" color="green" disabled={submitting} className="flex-1">
                {submitting ? "Saving..." : "Save"}
              </Button>
              <Link
                href="/absent-students"
                className="inline-flex flex-1 items-center justify-center rounded-lg border border-gray-400 px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-100"
              >
                View by class
              </Link>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default AbsentStudentsForm;
