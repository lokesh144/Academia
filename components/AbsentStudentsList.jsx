"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Card,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import { supabase } from "@/lib/supabaseClient";
import {
  ABSENT_STUDENT_CLASSES,
  groupAbsentRecordsByDate,
} from "@/lib/absentStudents";

const AbsentStudentsList = () => {
  const [selectedClass, setSelectedClass] = useState(ABSENT_STUDENT_CLASSES[0] ?? "");
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!selectedClass) {
      setLoading(false);
      return;
    }

    let cancelled = false;

    const fetchAbsent = async () => {
      setLoading(true);
      setError(null);

      const { data, error: fetchError } = await supabase
        .from("absent_students")
        .select("id, date_bs, class_name, student_names, created_at")
        .eq("class_name", selectedClass)
        .order("date_bs", { ascending: false });

      if (!cancelled) {
        if (fetchError) {
          console.error(fetchError);
          setError(fetchError.message);
          setRecords([]);
        } else {
          setRecords(data || []);
        }
        setLoading(false);
      }
    };

    fetchAbsent();
    return () => {
      cancelled = true;
    };
  }, [selectedClass]);

  const groupedByDate = groupAbsentRecordsByDate(records);

  return (
    <div className="bg-white px-3 py-6 min-h-[60vh]">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center uppercase text-gray-900 mb-2 border-2 border-gray-700 rounded-xl shadow-md px-6 py-3">
          Absent Students
        </h1>
        <p className="text-center text-gray-600 mb-6 mt-3">
          View absent student names by class and date (Nepali calendar).
        </p>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div className="w-full sm:max-w-xs">
            <Select
              label="Select class"
              selected={selectedClass}
              onChange={(val) => setSelectedClass(val || "")}
            >
              {ABSENT_STUDENT_CLASSES.map((cls) => (
                <Option key={cls} value={cls}>
                  {cls}
                </Option>
              ))}
            </Select>
          </div>
          <Link
            href="/add-absent-students"
            className="inline-flex justify-center rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-gray-800"
          >
            Record absence
          </Link>
        </div>

        {loading ? (
          <p className="text-center text-gray-500 py-12">Loading...</p>
        ) : error ? (
          <Card className="p-6 border border-red-200 bg-red-50">
            <Typography color="red" className="font-medium">
              Could not load records. Ensure the <code>absent_students</code> table exists in Supabase
              (run <code>supabase/absent_students.sql</code>).
            </Typography>
            <Typography variant="small" className="mt-2 text-red-700">
              {error}
            </Typography>
          </Card>
        ) : groupedByDate.length === 0 ? (
          <p className="text-center text-gray-600 py-12">
            No absent students recorded for <strong>{selectedClass}</strong> yet.
          </p>
        ) : (
          <div className="space-y-5">
            {groupedByDate.map(({ date_bs, student_names }) => (
              <Card key={date_bs} className="p-5 shadow-sm border border-gray-200">
                <Typography variant="h6" className="text-gray-900 mb-3 font-bold">
                  {date_bs} <span className="text-gray-500 font-normal text-sm">(BS)</span>
                </Typography>
                <Typography variant="small" className="text-gray-600 mb-2 block">
                  Class: {selectedClass}
                </Typography>
                <ul className="list-disc list-inside space-y-1 text-gray-800">
                  {student_names.map((name, i) => (
                    <li key={`${date_bs}-${name}-${i}`}>{name}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AbsentStudentsList;
