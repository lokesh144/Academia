"use client";

import React from "react";
import Link from "next/link";
import { ORDERED_NOTICE_CLASSES, classDisplayNameToSlug } from "@/lib/noticeClasses";

const Notices = () => {
  return (
    <div className="bg-white px-3 py-4">
      <h1 className="text-3xl md:text-5xl mx-auto w-fit font-bold mb-4 text-center uppercase text-gray-900 my-2 md:my-6 border-2 border-gray-700 rounded-xl shadow-md px-4 md:px-8 py-2 md:py-3 bg-white">
        Notices
      </h1>

      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
        {ORDERED_NOTICE_CLASSES.map((cls) => {
          const slug = classDisplayNameToSlug(cls);
          return (
            <Link
              key={cls}
              href={`/notices/${slug}`}
              className="flex min-h-[100px] md:min-h-[120px] items-center justify-center rounded-2xl border-2 border-gray-800 bg-gradient-to-br from-gray-50 to-white px-3 py-6 text-center text-lg md:text-xl font-bold text-gray-900 shadow-md transition hover:border-black hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              {cls}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Notices;
