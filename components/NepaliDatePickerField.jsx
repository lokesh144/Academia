"use client";

import dynamic from "next/dynamic";
import { Typography } from "@material-tailwind/react";
import "react-nepali-datepicker-bs/dist/index.css";

const NepaliDatePicker = dynamic(
  () =>
    import("react-nepali-datepicker-bs").then((mod) => mod.NepaliDatePicker),
  {
    ssr: false,
    loading: () => (
      <div className="h-11 w-full rounded-lg border border-blue-gray-200 bg-blue-gray-50/50 animate-pulse" />
    ),
  }
);

/**
 * Bikram Sambat date picker; onChange receives YYYY-MM-DD (English numerals).
 */
export default function NepaliDatePickerField({ label, value, onChange, placeholder }) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <Typography variant="small" className="font-medium text-blue-gray-700">
          {label}
        </Typography>
      )}
      <NepaliDatePicker
        inputClassName="w-full rounded-lg border border-blue-gray-200 px-3 py-2.5 text-gray-900 font-medium focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
        value={value}
        onChange={(date) => onChange(date ?? "")}
        options={{ calenderLocale: "en", valueLocale: "en" }}
        placeholder={placeholder ?? "Select date (BS)"}
        todayIfEmpty={false}
        weekDayLabelSize="md"
        theme="light"
        formatOptions={{
          separator: "-",
          format: "YYYY-MM-DD",
        }}
      />
    </div>
  );
}
