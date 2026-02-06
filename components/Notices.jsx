"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";

const Notices = () => {
  const [noticeData, setNoticeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");

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

  const filteredNotices =
    activeCategory === "all"
      ? noticeData
      : noticeData.filter((n) => n.category === activeCategory);

  const NoticeCard = ({ id, title, descrp, classes, category }) => {
    const isAcademic = category === "academic";

    return (
      <div
        key={id}
        className="relative flex flex-col m-1 shadow-lg w-80 rounded-xl bg-white"
      >
        {/* 🔴 THIS IS THE FIX */}
        <div
          className="shining-border rounded-xl"
          style={isAcademic ? { backgroundColor: "#3D72CC" } : {}}
        >
          <div className="pt-5 pr-5 pb-2 pl-5">
            <Image src="/notice.png" width={30} height={30} alt="Notice" />

            <h5 className="mb-2 text-xl font-semibold text-black">
              {title}
            </h5>

            <p className="text-base font-light text-black">
              {descrp}
            </p>
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

  return (
    <div className="bg-white px-3 py-4">
      <h1 className="text-3xl font-bold text-black mb-4">
        Notices
      </h1>

      <div className="flex gap-4 mb-4 border-b pb-1">
        {["all", "general", "academic"].map((type) => (
          <button
            key={type}
            onClick={() => setActiveCategory(type)}
            className={`text-lg font-semibold pb-1 border-b-2 transition-all ${
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
      </div>

      <div className="flex flex-wrap justify-start">
        {filteredNotices.length === 0 ? (
          <p className="text-black font-medium">
            No notices available
          </p>
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
