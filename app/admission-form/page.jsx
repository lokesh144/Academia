"use client";
import React from "react";

export default function AdmissionForm() {
  return (
    <div className="min-h-screen py-10 px-4">

      <div className="max-w-6xl mx-auto bg-white p-10 rounded-lg ">

        {/* Header */}
        <div className="text-center mb-10">

          <h1 className="text-3xl font-bold text-gray-800">
            Tinau English Boarding School
          </h1>

          <p className="text-gray-600 mt-2">
            Online Admission Form
          </p>

          {/* Logo Placeholder */}
          <div className="flex justify-center mt-5">
            <div className="w-24 h-24 border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-500">
              LOGO
            </div>
          </div>

        </div>


        {/* DETAILS OF CHILD */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          DETAILS OF THE CHILD
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mb-8">

          <input className="input" placeholder="Applied for grade"/>

          <input className="input" placeholder="First Name"/>

          <input className="input" placeholder="Last Name"/>

          <select className="input">
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <input className="input" placeholder="Age"/>

          <input className="input" placeholder="Date of Birth BS (YYYY-MM-DD)"/>

          <input className="input" placeholder="Date of Birth AD (YYYY-MM-DD)"/>

          <input className="input" placeholder="Mother Tongue"/>

          <input className="input" placeholder="Nationality"/>

          <select className="input">
            <option>Blood Group</option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>O+</option>
            <option>O-</option>
          </select>

          <input className="input" placeholder="Nearest Bus Station"/>

        </div>


        {/* CURRENT SCHOOL */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          DETAILS OF THE CURRENT SCHOOL OF THE CHILD
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mb-8">

          <input className="input" placeholder="Previous School Name"/>

          <input className="input" placeholder="Address"/>

          <input className="input" placeholder="Contact Number"/>

        </div>


        {/* FATHER DETAILS */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          FATHER DETAILS
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mb-8">

          <input className="input" placeholder="Father Name"/>

          <input className="input" placeholder="Address"/>

          <input className="input" placeholder="Phone Number"/>

          <input className="input" placeholder="Nationality"/>

          <input className="input" placeholder="Education"/>

          <input className="input" placeholder="Occupation"/>

          <input className="input" placeholder="Position"/>

          <input className="input" placeholder="Email"/>

          <input className="input md:col-span-2" placeholder="Organization Details (if any)"/>

        </div>


        {/* MOTHER DETAILS */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          MOTHER DETAILS
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mb-8">

          <input className="input" placeholder="Mother Name"/>

          <input className="input" placeholder="Address"/>

          <input className="input" placeholder="Phone Number"/>

          <input className="input" placeholder="Nationality"/>

          <input className="input" placeholder="Education"/>

          <input className="input" placeholder="Occupation"/>

          <input className="input" placeholder="Position"/>

          <input className="input" placeholder="Email"/>

          <input className="input md:col-span-2" placeholder="Organization Details (if any)"/>

        </div>


        {/* SIBLING */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          IF THE CHILD HAS SIBLINGS, PLEASE FILL THE FOLLOWING DETAILS
        </h2>

        <div className="grid md:grid-cols-4 gap-4 mb-10">

          <input className="input" placeholder="Name"/>

          <input className="input" placeholder="School Name"/>

          <input className="input" placeholder="Age"/>

          <select className="input">
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>

        </div>


        {/* Submit */}
        <div className="flex justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-lg font-medium">
            Submit
          </button>
        </div>

      </div>
    </div>
  );
}