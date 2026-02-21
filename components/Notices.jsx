"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";
import { Typography, Checkbox } from "@material-tailwind/react";
const Notices = () => {
  const [noticeData, setNoticeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [showClassFilter, setShowClassFilter] = useState(false);

  const fetchNotices = async () => {
    const { data, error } = await supabase
      .from("notices")
      .select("id, title, descrp, classes, category")
      .order("id", { ascending: false });

    if (error) {
      console.error("Supabase error:", error.message);
    } else {
      setNoticeData(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  const normalizeClasses = (classes) => {
    if (!classes) return [];
    if (Array.isArray(classes)) return classes;

    if (typeof classes === "string") {
      try {
        const parsed = JSON.parse(classes);
        if (Array.isArray(parsed)) return parsed;
      } catch {
        return classes.split(",").map((c) => c.trim());
      }
    }
    return [];
  };

  const toggleClass = (cls) => {
    setSelectedClasses((prev) =>
      prev.includes(cls) ? prev.filter((c) => c !== cls) : [...prev, cls]
    );
  };

  const filteredNotices = noticeData.filter((n) => {
    const categoryMatch =
      activeCategory === "all" || n.category === activeCategory;

    const classMatch =
      selectedClasses.length === 0 ||
      normalizeClasses(n.classes).some((cls) =>
        selectedClasses.includes(cls)
      );

    return categoryMatch && classMatch;
  });

  const NoticeCard = ({ id, title, descrp, classes, category }) => {
    const isAcademic = category === "academic";

    return (
      <div
        key={id}
        className={`relative flex flex-col m-4 shadow-lg rounded-xl overflow-hidden ${
          isAcademic ? "bg-[#3D72CC]" : "bg-white"
        }`}
      >
        <div
          className={`${
            isAcademic ? "academic-border rounded-xl" : "shining-border"
          }`}
        >
          <div className="pt-5 pr-5 pb-2 pl-5">
            <Image src="/notice.png" width={30} height={30} alt="Notice" />

            <h5 className="mb-2 text-[1.3rem] font-semibold text-black">
              {title}
            </h5>

            <p className="text-base font-light text-black">{descrp}</p>

            {isAcademic && (
              <div className="absolute bottom-0 -right-16 top-3 overflow-hidden">
                <Image
                  src="/academic.png"
                  width={120}
                  height={300}
                  alt="Academic"
                />
              </div>
            )}
          </div>

          <div className="flex flex-wrap px-4 mb-3">
            {normalizeClasses(classes).map((tag, index) => (
              <span
                key={index}
                className="bg-[#3d6f5c] text-white text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="text-center text-black font-semibold p-10">
        Loading notices...
      </div>
    );
  }

  const orderedClasses = [
    "LKG",
    "UKG",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
  ];

  return (
    <div className="bg-white px-3 py-4">
      <h1 className="text-3xl md:text-5xl mx-auto w-fit font-bold mb-4 text-center uppercase text-gray-900 my-2 md:my-6 border-2 border-gray-700 rounded-xl shadow-md px-4 md:px-8 py-2 md:py-3 bg-white">
        Notices
      </h1>

      {/* CATEGORY ROW */}
      <div className="flex gap-4 md:gap-7 mb-4 border-b pb-1 items-center">
        {["all", "general", "academic"].map((type) => (
          <button
            key={type}
            onClick={() => setActiveCategory(type)}
            className={`text-sm md:text-lg font-semibold pb-1 border-b-2 transition-all ${
              activeCategory === type
                ? "border-black text-black"
                : "border-transparent text-gray-500 hover:text-black"
            }`}
          >
            {type === "all"
              ? "All Notices"
              : type === "general"
              ? "General Notices"
              : "Academic Notices"}
          </button>
        ))}

        <div className="ml-auto relative">
          <button
            onClick={() => setShowClassFilter((prev) => !prev)}
            className="text-base md:text-lg font-semibold text-gray-700 hover:text-black md:mr-20"
          >
            Filter Classes
          </button>

          {/* {showClassFilter && (
            <div className="absolute right-6 mt-2 border border-black p-4 rounded-lg bg-gray-50 z-50">
              <div className="grid grid-cols-3 gap-6">
                {orderedClasses.map((cls) => (
                  <label
                    key={cls}
                    className="flex items-center gap-2 text-gray-700 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedClasses.includes(cls)}
                      onChange={() => toggleClass(cls)}
                      className="accent-black w-5 h-5 flex-shrink-0"
                    />
                    <span className="text-lg font-bold">{cls}</span>
                  </label>
                ))}
              </div>
            </div>
          )} */}
          {showClassFilter && (
  <div className="absolute right-0 md:right-10 p-2 md:p-4 w-32 md:w-72 rounded-xl bg-white shadow-md border border-gray-200 z-50">
    <Typography variant="h6" className="mb-4 text-gray-800">
      Select Classes
    </Typography>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3">
      {orderedClasses.map((cls) => (
        <label
          key={cls}
          htmlFor={`class-${cls}`}
          className="flex items-center gap-2 cursor-pointer rounded-lg px-2 py-1"
        >
          <Checkbox
            id={`class-${cls}`}
            checked={selectedClasses.includes(cls)}
            onChange={() => toggleClass(cls)}
            ripple={false}
            className="
              h-5 w-5
              border border-gray-400
              checked:border-black
              checked:bg-black
            "
            containerProps={{
              className: "p-0",
            }}
            iconProps={{
              className: "text-white",
            }}
          />

          <Typography variant="small" className="font-semibold text-gray-700">
            {cls}
          </Typography>
        </label>
      ))}
    </div>
  </div>
)}
        </div>
      </div>

      {/* 2 CARDS PER ROW */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
        {filteredNotices.length === 0 ? (
          <p className="text-black font-medium">No notices available</p>
        ) : (
          filteredNotices.map((notice) => (
            <NoticeCard key={notice.id} {...notice} />
          ))
        )}
      </div>
    </div>
  );
};

export default Notices;
