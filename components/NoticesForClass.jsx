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

const NoticeCard = ({
  id,
  title,
  descrp,
  classes,
  imageUrl,
  created_at,
}) => {
  return (
    <div className="bg-white border-2 border-gray-500 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      
      {/* Notice Image */}
      {imageUrl && (
        <div className="w-full h-56 overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            width={800}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-5">
        {/* Date */}
        {created_at && (
          <p className="text-sm text-gray-500 mb-2">
            {new Date(created_at).toLocaleDateString()}
          </p>
        )}

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-900 mb-3 leading-snug">
          {title}
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-[0.97rem] leading-relaxed mb-4">
          {descrp}
        </p>

        {/* Classes */}
        {classes && normalizeNoticeClasses(classes).length > 0 && (
          <div className="flex flex-wrap gap-2">
            {normalizeNoticeClasses(classes).map((tag, index) => (
              <span
                key={index}
                className="text-sm border border-gray-300 text-gray-700 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
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
