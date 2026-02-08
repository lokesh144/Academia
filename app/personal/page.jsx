"use client";

import React from "react";

export default function Marksheet() {
  const subjects = [
    ["English", "6.40", "4.00", "10.40"],
    ["Nepali", "7.10", "4.50", "11.60"],
    ["Maths", "14.80", "", "14.80"],
    ["Science", "6.00", "4.80", "10.80"],
    ["Hamro Serofaro", "9.00", "4.50", "13.50"],
    ["G.K.", "6.00", "2.30", "8.30"],
    ["Our Butwal", "5.60", "2.40", "8.00"],
    ["Dictation", "2.00", "", "2.00"],
  ];

  const activities = [
    { label: "Homework", grade: "A" },
    { label: "Classwork", grade: "A" },
    { label: "Discipline", grade: "A" },
    { label: "Art & Craft", grade: "C" },
    { label: "Games & Sports", grade: "B" },
    { label: "Dance", grade: "B" },
    { label: "G.K.", grade: "B" },
    { label: "Others", grade: "B" },
  ];

  return (
    <div className="max-w-4xl mx-auto my-10 p-8 border-4 border-black bg-white text-black font-serif shadow-lg">
      
      {/* Header Section */}
      <div className="flex items-center gap-6 border-b-2 border-black pb-4 mb-4">
        <img src="/logo.png" alt="School Logo" className="w-24 h-24 object-contain" />
        <div className="flex-1 text-center">
          <p className="italic text-sm">&quot;Quality Education For Global Challenges&quot;</p>
          <h1 className="text-3xl font-bold uppercase tracking-tight">Our Peaceland Academy</h1>
          <p className="text-sm leading-tight mt-1">
            Shivnagar, Butwal-7, Rupandehi, Nepal <br />
            Ph.: 071-548021, Cell: 9847033788 | Email: peacelandaca@gmail.com
          </p>
        </div>
      </div>

      <div className="text-center font-bold mb-2">SECOND TERMINATION : 2079</div>
      
      <div className="text-center text-2xl font-bold border-2 border-black py-1 mb-6 uppercase tracking-widest">
        Mark Sheet
      </div>

      {/* Student Info Table */}
      <div className="grid grid-cols-2 gap-x-12 mb-6 border-b border-gray-300 pb-4">
        <div className="grid grid-cols-2">
          <span>Name :</span> <span className="font-bold border-b border-black">Barun Thapa</span>
          <span>Grade :</span> <span className="font-bold border-b border-black">One</span>
        </div>
        <div className="grid grid-cols-2">
          <span>Roll No. :</span> <span className="font-bold border-b border-black">19</span>
          <span>Section :</span> <span className="font-bold border-b border-black">Moon</span>
        </div>
      </div>

      {/* Main Marks Table */}
      <table className="w-full border-collapse border border-black text-sm text-center">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-black p-1" rowSpan={2}>S.N.</th>
            <th className="border border-black p-1" rowSpan={2}>Subjects</th>
            <th className="border border-black p-1" colSpan={2}>Full Marks</th>
            <th className="border border-black p-1" colSpan={2}>Pass Marks</th>
            <th className="border border-black p-1" colSpan={2}>Obtained Marks</th>
            <th className="border border-black p-1" rowSpan={2}>Total</th>
            <th className="border border-black p-1" rowSpan={2}>Remarks</th>
          </tr>
          <tr className="bg-gray-100 text-xs">
            <th className="border border-black p-1">TH.</th>
            <th className="border border-black p-1">PR.</th>
            <th className="border border-black p-1">TH.</th>
            <th className="border border-black p-1">PR.</th>
            <th className="border border-black p-1">TH.</th>
            <th className="border border-black p-1">PR.</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((row, i) => (
            <tr key={i} className="hover:bg-gray-50">
              <td className="border border-black p-1">{i + 1}</td>
              <td className="border border-black p-1 text-left px-2">{row[0]}</td>
              <td className="border border-black p-1">—</td>
              <td className="border border-black p-1">—</td>
              <td className="border border-black p-1">—</td>
              <td className="border border-black p-1">—</td>
              <td className="border border-black p-1 font-semibold">{row[1]}</td>
              <td className="border border-black p-1">{row[2] || "—"}</td>
              <td className="border border-black p-1 font-bold">{row[3]}</td>
              <td className="border border-black p-1"></td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Results and Summary */}
      <div className="flex justify-between items-start mt-6 gap-8">
        <div className="w-3/5 p-3 border border-black h-32 italic">
          <span className="font-bold not-italic">Remarks :</span> Good.
        </div>
        
        <table className="w-2/5 border-collapse border border-black">
          <tbody>
            <tr className="bg-yellow-200 font-bold">
              <td className="border border-black p-1 px-2 uppercase text-xs">Grand Total</td>
              <td className="border border-black p-1 text-center">79.40</td>
            </tr>
            {[
              ["Percentage", "61.08%"],
              ["Division", "First"],
              ["Result", "Passed"],
              ["Position", "22th"],
              ["Attendance", "45/48"],
            ].map(([label, val], idx) => (
              <tr key={idx}>
                <td className="border border-black p-1 px-2 text-xs uppercase">{label}</td>
                <td className="border border-black p-1 text-center font-semibold">{val}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Key to Grades */}
      <div className="mt-6 border border-black p-3">
        <p className="font-bold text-xs mb-2 underline">KEY TO GRADES / DIVISION</p>
        <div className="grid grid-cols-2 text-[10px] gap-1 leading-tight">
          <div>80% and above : A = Excellent</div>
          <div>60% - 79% : B = Good</div>
          <div>45% - 59% : C = Average</div>
          <div>40% - 44% : D = Satisfactory</div>
        </div>
      </div>

      {/* Extra Curriculars */}
      <table className="w-full border-collapse border border-black mt-6 text-center text-[10px] uppercase">
        <thead className="bg-gray-50">
          <tr>
            {activities.map((act, i) => (
              <th key={i} className="border border-black p-1">{act.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {activities.map((act, i) => (
              <td key={i} className="border border-black p-1 font-bold text-sm">{act.grade}</td>
            ))}
          </tr>
        </tbody>
      </table>

      {/* Signatures */}
      <div className="flex justify-between items-end mt-16 px-4 font-bold text-xs">
        <div className="border-t border-black pt-1 w-32 text-center">Class Teacher</div>
        <div className="pb-1">Issue Date: 2079.07.20</div>
        <div className="border border-dashed border-gray-400 w-24 h-24 flex items-center justify-center text-gray-300">Seal</div>
        <div className="border-t border-black pt-1 w-32 text-center">Principal</div>
      </div>
    </div>
  );
}