'use client'
import React,{useState,useEffect} from 'react'
import {
    Card,
    Typography,
    Button,
    Input,
    Textarea,
    Checkbox,
  } from "@material-tailwind/react";
const Events = () => {
  const [events, setEvents]=useState([]);
  const fetchNotice = async () => {
    // alert("Notice added successfully");
    try {
        const res = await fetch('https://academia-4hz2.onrender.com/api/event', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify({title: title,description: description,selectedClasses:selectedClasses})
        });
        const event = await res.json();
      // setNoticeData(result)
      // console.log("Before set",event);
      // const fevent = event.firstEvents;
      setEvents(event);
      console.log("After set events",event);
        // setResponse(result);
        // console.log(result[0].filteredNotices[6].selectedClasses);
    } catch (error) {
        console.error('Error submitting data:', error);
    }
};
  useEffect(() => {
    // console.log('Use Effect')
     fetchNotice();
  }, [])
  return (
    <div className='bg-white'>
        <h1 class="my-10 block font-sans text-black text-2xl lg:text-5xl uppercase font-semibold leading-tight tracking-normal text-center bg-white">
    Upcoming Events
  </h1>
  {events.map(({title,description},index)=>(
  <div key={index} className="bg-white flex p-4 rounded-lg max-w-screen-lg mx-12 md:mx-10 lg:mx-auto my-4 shadow-inner" style={{"box-shadow": "inset 2px 2px 12px rgba(0, 0, 0, 0.3)"}}>
      <div className="w-full md:w-2/3 p-4">
        {/* <Typography variant="overline" display="block">
          Upcoming Events
        </Typography> */}
        <Typography variant="h3" color="black">
          {title}
        </Typography>
        <Typography variant="body1" color="blue-gray">
          {description}
        </Typography>
        <Button variant="outlined" color="primary" className='mt-6 text-sm' size='sm'>
          Show Details
        </Button>
      </div>
      <div className="hidden md:block md:w-1/3">
        <img
          src="https://via.placeholder.com/300"
          alt="Decorative"
          className="w-full h-auto rounded-r-lg"
        />
      </div>
    </div>
  ))}
   
    </div>
  )
}

export default Events