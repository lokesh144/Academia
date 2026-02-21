"use client";
import React, { useState } from "react";
import {
  ChevronRight,
  Upload,
} from "lucide-react";
import Navbarr from "./Navbarr";

const TeacherSetup = () => {

  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    contact: "",
    gender: "",
    education: "",
    document_front: null,
    document_back: null,
    academic_degree: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    Object.entries(form).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });

    const res = await fetch("/api/teacher", {
      method: "POST",
      body: formData,
    });

    const result = await res.json();

    if (res.ok) {
      alert("Application Submitted Successfully!");
      setForm({
        fname: "",
        lname: "",
        email: "",
        contact: "",
        gender: "",
        education: "",
        document_front: null,
        document_back: null,
        academic_degree: null,
      });
    } else {
      alert(result.error || "Submission failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-black">
      <Navbarr />

      <div className="flex h-screen overflow-hidden">
        {/* LEFT */}
        <div className="w-full md:w-[35%] bg-[#2f6f5a] text-white flex flex-col items-center justify-center p-8">
          <div className="w-32 h-32 bg-white rounded-full overflow-hidden flex items-center justify-center border-4 border-[#1e4d3f] mb-6">
            <img
              src="/application.png"
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <h2 className="text-2xl font-extrabold mb-2">
            Lets get you set up
          </h2>
          <p className="text-green-100 text-sm text-center">
            It should only take a couple of minutes
          </p>

          <button className="w-12 h-12 bg-white text-[#2f6f5a] rounded-full mt-6 flex items-center justify-center">
            <ChevronRight />
          </button>
        </div>

        {/* RIGHT */}
        <div className="w-3/5 overflow-y-auto p-12 bg-white">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
              Personal Information
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-2 gap-6">
                <Input
                  label="First Name"
                  type="text"
                  placeholder="John"
                  name="fname"
                  value={form.fname}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="Last Name"
                  type="text"
                  placeholder="Doe"
                  name="lname"
                  value={form.lname}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <Input
                  label="Email"
                  type="email"
                  placeholder="john@example.com"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="Contact"
                  type="tel"
                  placeholder="+977 98xxxxxxx"
                  name="contact"
                  value={form.contact}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Label text="Gender" />
                  <div className="flex gap-6 mt-2">
                    <Radio
                      name="gender"
                      value="Male"
                      onChange={handleChange}
                      checked={form.gender === "Male"}
                    />
                    <Radio
                      name="gender"
                      value="Female"
                      onChange={handleChange}
                      checked={form.gender === "Female"}
                    />
                  </div>
                </div>
                <Select
                  label="Education"
                  name="education"
                  value={form.education}
                  onChange={handleChange}
                  options={[
                    "High School",
                    "Bachelor's Degree",
                    "Master's Degree",
                    "PhD",
                  ]}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <File label="Document (Front)" name="document_front" onChange={handleChange} />
                <File label="Document (Back)" name="document_back" onChange={handleChange} />
              </div>

              <div className="grid grid-cols-1 gap-6">
                <File label="Academic Degree" name="academic_degree" onChange={handleChange} />
              </div>

              <div className="flex justify-center pt-6">
                <button
                  type="submit"
                  className="bg-white border-2 border-black text-black px-10 py-3 rounded-xl font-black"
                >
                  SUBMIT APPLICATION
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------- COMPONENTS ---------- */

const Input = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-2">
      {label}
    </label>
    <input
      {...props}
      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg 
      focus:border-emerald-500 focus:outline-none 
      text-black caret-black placeholder-gray-400 bg-white"
    />
  </div>
);

const Select = ({ label, options, ...props }) => (
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-2">
      {label}
    </label>
    <select
      {...props}
      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg 
      focus:border-emerald-500 focus:outline-none 
      text-black bg-white"
    >
      <option value="">Select</option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  </div>
);

const File = ({ label, name, onChange }) => (
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-2">
      {label}
    </label>
    <label className="flex items-center justify-between w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-emerald-500 transition-colors bg-white">
      <span className="text-gray-400">Attach file</span>
      <Upload className="w-5 h-5 text-gray-400" />
      <input type="file" name={name} onChange={onChange} className="hidden" />
    </label>
  </div>
);

const Radio = (props) => (
  <label className="flex items-center gap-2 cursor-pointer">
    <input
      type="radio"
      {...props}
      className="w-5 h-5 accent-emerald-600 cursor-pointer"
    />
    <span className="text-gray-700">{props.value}</span>
  </label>
);

const Label = ({ text }) => (
  <label className="block text-sm font-semibold text-gray-700 mb-2">
    {text}
  </label>
);

export default TeacherSetup;