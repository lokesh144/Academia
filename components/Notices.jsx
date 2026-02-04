'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";

const Notices = () => {
  const [noticeData, setNoticeData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNotices = async () => {
    const { data, error } = await supabase
      .from("notices")
      .select("id, title, descrp, classes")
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

  if (loading) {
    return (
      <div className="text-center text-black font-semibold p-10">
        Loading notices...
      </div>
    );
  }

  return (
    <div className="flex flex-wrap bg-white justify-center">
      {noticeData.length === 0 ? (
        <p className="text-black font-semibold">No notices found</p>
      ) : (
        noticeData.map(({ id, title, descrp, classes }) => (
          <div
            key={id}
            className="relative flex flex-col m-8 text-gray-700 bg-white shadow-lg bg-clip-border w-80 rounded-xl"
          >
            <div className="shining-border rounded-xl">
              <div className="pt-6 pr-6 pb-2 pl-6">
                <Image
                  src="/notice.png"
                  width={50}
                  height={50}
                  alt="Notice"
                />

                <h5 className="mb-2 text-xl font-semibold text-black">
                  {title}
                </h5>

                <p className="text-base font-light text-black">
                  {descrp}
                </p>
              </div>

              {/* TAGS */}
              <div className="flex flex-wrap px-4 mb-4">
                {Array.isArray(classes) &&
                  classes.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#3d6f5c] text-white text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Notices;
