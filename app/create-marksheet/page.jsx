"use client";

import { useState } from "react";

export default function Marksheet() {
  const subjects = [
    { name: "English", full: 15, pass: 6 },
    { name: "Nepali", full: 15, pass: 6 },
    { name: "Maths", full: 20, pass: 8 },
    { name: "Science", full: 15, pass: 6 },
    { name: "G.K.", full: 7.5, pass: 3 },
  ];

  const [marks, setMarks] = useState(Array(subjects.length).fill(""));

  const total = marks.reduce((a, b) => a + Number(b || 0), 0);
  const percentage = ((total / 72.5) * 100).toFixed(2);
  const result = percentage >= 40 ? "Pass" : "Fail";

  return (
    <div className="sheet">
      {/* HEADER */}
      <div className="header">
        <h1>OUR PEACELAND ACADEMY</h1>
        <p>Shivnagar, Butwal-7, Rupandehi, Nepal</p>
        <h2>SECOND TERMINAL EXAMINATION - 2079</h2>
        <h3>MARK SHEET</h3>
      </div>

      {/* STUDENT INFO */}
      <table className="info">
        <tbody>
          <tr>
            <td><b>Name:</b> Barun Thapa</td>
            <td><b>Roll No:</b> 19</td>
          </tr>
          <tr>
            <td><b>Grade:</b> One</td>
            <td><b>Section:</b> Moon</td>
          </tr>
        </tbody>
      </table>

      {/* MARKS TABLE */}
      <table className="marks">
        <thead>
          <tr>
            <th>S.N.</th>
            <th>Subjects</th>
            <th>Full Marks</th>
            <th>Pass Marks</th>
            <th>Obtained Marks</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((sub, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{sub.name}</td>
              <td>{sub.full}</td>
              <td>{sub.pass}</td>
              <td>
                <input
                  type="number"
                  value={marks[i]}
                  onChange={(e) => {
                    const m = [...marks];
                    m[i] = e.target.value;
                    setMarks(m);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* RESULT SUMMARY */}
      <table className="summary">
        <tbody>
          <tr>
            <td><b>Grand Total:</b></td>
            <td>{total}</td>
          </tr>
          <tr>
            <td><b>Percentage:</b></td>
            <td>{percentage}%</td>
          </tr>
          <tr>
            <td><b>Result:</b></td>
            <td>{result}</td>
          </tr>
        </tbody>
      </table>

      {/* FOOTER */}
      <div className="footer">
        <p>Class Teacher</p>
        <p>Principal</p>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .sheet {
          max-width: 800px;
          margin: auto;
          padding: 20px;
          background: white;
          color: black;
          font-family: "Times New Roman", serif;
        }

        .header {
          text-align: center;
          border-bottom: 2px solid black;
          padding-bottom: 10px;
        }

        h1 {
          font-size: 26px;
          font-weight: bold;
        }

        h2 {
          font-size: 16px;
          margin-top: 5px;
        }

        h3 {
          margin-top: 5px;
          text-decoration: underline;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 15px;
        }

        th, td {
          border: 1px solid black;
          padding: 6px;
          text-align: center;
          font-size: 14px;
        }

        .info td {
          border: none;
          text-align: left;
          padding: 5px;
        }

        input {
          width: 80px;
          text-align: center;
          border: 1px solid black;
          color: black;
        }

        .summary td {
          text-align: left;
          padding-left: 10px;
        }

        .footer {
          display: flex;
          justify-content: space-between;
          margin-top: 40px;
        }
      `}</style>
    </div>
  );
}
