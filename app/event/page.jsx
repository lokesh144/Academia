"use client";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { Clock12 } from 'lucide-react';
import { Button } from "@material-tailwind/react";

const events = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800",
    badge: "Popular",
    badgeType: "popular",
    title: "Summer Music Festival",
    time: "2:00 PM - 10:00 PM",
    date: "Jan 21",
    description:
      "Join us for the annual summer music festival featuring popular artists, food trucks, and an amazing atmosphere.",
  },
];

export default function EventPage() {
  return (
    <main className="min-h-screen px-6 py-16 bg-gray-50">
      <h1 className="text-5xl mx-auto w-fit font-bold mb-10 text-center uppercase text-gray-900 border-2 border-gray-700 rounded-xl shadow-md px-8 py-3 bg-white">
        Events
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {events.map((event) => (
          <div
            key={event.id}
            className="
              group bg-white rounded-3xl overflow-hidden
              shadow-xl
              transform-gpu will-change-transform
              transition-transform duration-300 ease-out
              
            "
          >
            {/* Image Section */}
            <div className="relative h-56 overflow-hidden">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                unoptimized
              />

              {/* Badge */}
              <span
                className={`absolute top-4 left-4 text-xs font-bold px-4 py-1.5 rounded-full shadow-md z-10 ${
                  event.badgeType === "popular"
                    ? "bg-orange-500 text-white"
                    : "bg-rose-500 text-white"
                }`}
              >
                {event.badge}
              </span>
            </div>

            {/* Content Section */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {event.title}
              </h3>

              <div className="space-y-1 text-black text-sm">
                <div className="flex items-center">
                   <Clock12 className="h-4 w-4 mr-2"/>
                  {event.time}
                </div>

                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-black" />
                  {event.date}
                </div>
                
              </div>
              <div className="mt-2"><Button variant="gradient">See Details</Button></div> 
              

            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
