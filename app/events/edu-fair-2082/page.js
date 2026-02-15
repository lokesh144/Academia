import React from 'react'
import Events from '@/components/Events';
import Topbar from '@/components/Topbar';
import Navbarr from '@/components/Navbarr';
import EventDetails from '@/components/Eventsv2';
const events = () => {
  return (
    <>
    <Topbar/>
    <Navbarr/>
    {/* <Events/> */}
    <EventDetails/>
    </>
  )
}

export default events