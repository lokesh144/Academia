"use client";

import React, { useState } from "react";
import {
  ChevronRight,
  Upload,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";
import Navbarr from "./Navbarr";

const TeacherSetup = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState({});
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  };

  console.log(selectedFiles);

  const handleUpload = async () => {
    for (const file of selectedFiles) {
      await uploadFile(file);
    }
    setSelectedFiles([]);
  };

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/teacher", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setUploadedFiles((prev) => [...prev, file.name]);
      }
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    contact: "",
    gender: "",
    education: "",
    document_front_url: "",
    document_back_url: "",
    academic_degree_url: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      setForm({ ...form, [name]: files[0]?.name || "" });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // text fields
    formData.append("fname", form.fname);
    formData.append("lname", form.lname);
    formData.append("email", form.email);
    formData.append("contact", form.contact);
    formData.append("gender", form.gender);
    formData.append("education", form.education);

    // files
    formData.append("document_front", form.document_front);
    formData.append("document_back", form.document_back);
    formData.append("academic_degree", form.academic_degree);

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
        document_front_url: "",
        document_back_url: "",
        academic_degree_url: "",
      });
    } else {
      alert(result.error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbarr />

      <div className="flex justify-center items-center flex-1 py-4">
        <div className="bg-white w-[95%] max-w-6xl rounded-[30px] shadow-2xl flex flex-col md:flex-row overflow-hidden">
          {/* LEFT */}
          <div className="w-full md:w-[35%] bg-[#2f6f5a] text-white flex flex-col items-center justify-center p-8">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center border-4 border-[#1e4d3f] mb-6">
              <img src="/application.png" alt="Profile" />
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
          <div className="w-full md:w-[65%] flex flex-col">
            <form
              id="teacher-form"
              onSubmit={handleSubmit}
              className="p-6 md:p-10 space-y-5 flex-1 overflow-y-auto"
            >
              <h3 className="text-xl font-bold text-black border-b pb-2">
                Personal Information
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  label="First Name"
                  name="fname"
                  placeholder="John"
                  value={form.fname}
                  onChange={handleChange}
                />
                <Input
                  label="Last Name"
                  name="lname"
                  placeholder="Doe"
                  value={form.lname}
                  onChange={handleChange}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  label="Email"
                  name="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                />
                <Input
                  label="Contact"
                  name="contact"
                  placeholder="+977 98xxxxxxx"
                  value={form.contact}
                  onChange={handleChange}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label text="Gender" />
                  <div className="flex gap-6 mt-2">
                    <Radio
                      name="gender"
                      value="Male"
                      checked={form.gender === "Male"}
                      onChange={handleChange}
                    />
                    <Radio
                      name="gender"
                      value="Female"
                      checked={form.gender === "Female"}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <Select
                  label="Education"
                  name="education"
                  value={form.education}
                  onChange={handleChange}
                  options={["High School", "Bachelor", "Master", "PhD"]}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
              <div>
<span>here</span>




                <input
                  type="file"
                  multiple
                  onChange={handleFileSelect}
                  
                  id="document_front_url"
                />
                
                </div>
                <File
                  label="Document (Front)"
                  name="document_front_urls"
                  onChange={handleChange}
                />
                <File
                  label="Document (Back)"
                  name="document_back_url"
                  onChange={handleChange}
                />
              </div>

              <File
                label="Academic Degree"
                name="academic_degree_url"
                onChange={handleChange}
              />
            </form>

            <div className="sticky bottom-0 bg-gray-50 border-t px-10 py-4 flex justify-end">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  handleUpload();
                  console.log("clicked.");
                }}
                form="teacher-form"
                className="bg-white border-2 border-black text-black px-10 py-3 rounded-xl font-black"
              >
                SUBMIT APPLICATION <CheckCircle2 className="inline ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------- COMPONENTS ---------- */

const Input = ({ label, ...props }) => (
  <div>
    <label className="block mb-1 font-bold text-sm text-black">{label}</label>
    <input
      {...props}
      required
      className="w-full border-2 border-gray-300 px-3 py-2 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:border-emerald-600"
    />
  </div>
);

const Select = ({ label, options, ...props }) => (
  <div>
    <label className="block mb-1 font-bold text-sm text-black">{label}</label>
    <select
      {...props}
      required
      className="w-full border-2 border-gray-300 px-3 py-2 rounded-lg text-black bg-white"
    >
      <option value="">Select</option>
      {options.map((o) => (
        <option key={o}>{o}</option>
      ))}
    </select>
  </div>
);

const File = ({ label, name, onChange }) => (
  <div>
    <label className="block mb-1 font-bold text-sm text-black">{label}</label>
    <label className="flex justify-between items-center border-2 border-dashed border-gray-300 px-3 py-2 rounded-lg cursor-pointer bg-gray-50">
      <span className="text-gray-500 text-sm">Attach file</span>
      <Upload size={16} className="text-gray-500" />
      <input type="file" name={name} onChange={onChange} hidden />
    </label>
  </div>
);

const Radio = (props) => (
  <label className="flex gap-2 items-center text-black font-medium">
    <input type="radio" {...props} className="accent-emerald-600" />
    {props.value}
  </label>
);

const Label = ({ text }) => (
  <label className="block font-bold text-sm text-black">{text}</label>
);

export default TeacherSetup;
