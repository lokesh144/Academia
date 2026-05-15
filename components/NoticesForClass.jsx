"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { supabase } from "@/lib/supabaseClient";
import {
  slugToClassDisplayName,
  noticeAppliesToClass,
  normalizeNoticeClasses,
} from "@/lib/noticeClasses";

const NoticeCard = ({ id, title, descrp, classes, category }) => {
  const isAcademic = category === "academic";

  return (
    <div
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

          <h5 className="mb-2 text-[1.3rem] font-semibold text-black">{title}</h5>

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
          {normalizeNoticeClasses(classes).map((tag, index) => (
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

const NoticesForClass = ({ classSlug }) => {
  const className = slugToClassDisplayName(classSlug);
  const [noticeData, setNoticeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!className) {
      setLoading(false);
      return;
    }

    let cancelled = false;

    const run = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("notices")
        .select("id, title, descrp, classes, category")
        .order("id", { ascending: false });

      if (!cancelled) {
        if (error) {
          console.error("Supabase error:", error.message);
          setNoticeData([]);
        } else {
          setNoticeData(data || []);
        }
        setLoading(false);
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [className]);

  if (!className) {
    return (
      <div className="bg-white px-3 py-8 text-center">
        <p className="text-gray-800 font-medium mb-6">This class link is not valid.</p>
        <Link
          href="/notices"
          className="inline-flex items-center gap-2 rounded-lg border-2 border-gray-900 px-5 py-3 font-semibold text-gray-900 hover:bg-gray-100"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          Back to class selection
        </Link>
      </div>
    );
  }

  const filteredNotices = noticeData.filter((n) =>
    noticeAppliesToClass(n.classes, className)
  );

  if (loading) {
    return (
      <div className="text-center text-black font-semibold p-10">
        Loading notices...
      </div>
    );
  }

  return (
    <div className="bg-white px-3 py-4">
      <div className="max-w-6xl mx-auto mb-6">
        <Link
          href="/notices"
          className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:underline mb-4"
        >
          <ArrowLeftIcon className="h-5 w-5 shrink-0" />
          Choose another class
        </Link>

        <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-900 border-2 border-gray-700 rounded-xl shadow-md px-4 py-3 bg-white w-fit mx-auto">
          Class — {className}
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 max-w-6xl mx-auto">
        {filteredNotices.length === 0 ? (
          <p className="text-black font-medium col-span-full text-center py-12">
            No notices for this class yet.
          </p>
        ) : (
          filteredNotices.map((notice) => <NoticeCard key={notice.id} {...notice} />)
        )}
      </div>
    </div>
  );
};

export default NoticesForClass;
