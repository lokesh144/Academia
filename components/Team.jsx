"use client";
import React,{useRef,useEffect} from 'react'
import {IconButton} from "@material-tailwind/react";
import { PageTitle } from "../components/ui/page-title";
import { TeamCard } from "../components/ui/team-card";
// import { FeatureCard, TeamCard } from "../app/widgets/cards";
// import { featuresData, teamData, contactData } from "@/app/data/team-data";
import teamData from "@/app/data/team-data";
const Team = () => {
    const teamRef = useRef(null);

    useEffect(() => {
      
        const slideTeam = () => {
          teamRef.current.classList.add('team-card-slide');
          setTimeout(() => {
            teamRef.current.classList.remove('team-card-slide');
            setTimeout(slideTeam, 1000); // Adjust this value for the desired delay between slides
          }, 10000); // Adjust this value for the desired slide duration
        };
    
        slideTeam();
    
      }, []);
  return (
    <>
    <section className="px-4 pt-2 pb-4 bg-white">
        <div className="container mx-auto">
          <PageTitle section="Our Team" heading="OUR TEAM">
            Lorem ipsum dolor sit amet consectetur.
          </PageTitle>
          <div ref={teamRef} className="mx-10 mt-10 grid grid-cols-1 gap-12 gap-x-14 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard className="w-[10%]"
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-xl fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>
      </>
  )
}

export default Team

// function IconButton(props) {
//   return (
//     <svg
//     {...props}
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     width="24"
//     height="24"
//     fill="none"
//     >
//     <circle
//       r={11}
//       cx={12}
//       cy={12}
//       fill="none"
//       stroke="currentcolor"
//       strokeWidth={2}
//     />
//   </svg>
//   )
// }