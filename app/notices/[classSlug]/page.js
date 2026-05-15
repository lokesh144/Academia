import React from "react";
import Topbar from "@/components/Topbar";
import Navbarr from "@/components/Navbarr";
import NoticesForClass from "@/components/NoticesForClass";

export default function NoticesByClassPage({ params }) {
  return (
    <>
      <Topbar />
      <Navbarr />
      <NoticesForClass classSlug={params.classSlug} />
    </>
  );
}
