"use client"
import React,{useState} from 'react'
import galleryData from "../app/data/gallery-data";
import { Typography,ButtonGroup, Button } from "@material-tailwind/react";
const Gallery = () => {
  const [items,setItems]=useState(galleryData);

    const filterItem=(categItem)=>{
     const updatedItem=galleryData.filter((curElem)=>
         curElem.category.includes(categItem));
     setItems(updatedItem);
  }
  return (
    <>
    <ButtonGroup className="justify-center bg-white py-10" size="lg" variant="outlined" ripple={true}>
      <Button className="text-lg px-6 py-2" onClick={()=>filterItem('all')}>All</Button>
      <Button className="text-lg px-6 py-2" onClick={()=>filterItem('2072')}>2072</Button>
      <Button className="text-lg px-6 py-2" onClick={()=>filterItem('2073')}>2073</Button>
      <Button className="text-lg px-6 py-2" onClick={()=>filterItem('2074')}>2074</Button>
      <Button className="text-lg px-6 py-2" onClick={()=>filterItem('2075')}>2075</Button>
      <Button className="text-lg px-6 py-2" onClick={()=>filterItem('2076')}>2076</Button>
      <Button className="text-lg px-6 py-2" onClick={()=>filterItem('2077')}>2077</Button>
    </ButtonGroup>
    <div className="bg-white px-10 grid grid-cols-1 gap-x-0 gap-y-4 sm:grid-cols-2 md:grid-cols-3">
    {
          items.map((elem)=>{
            const {image, name}=elem;
              return(
                <>
                <div className="flex flex-col items-center">
                <img className="object-cover object-center w-[22rem] h-48 rounded-lg"
      src={image} alt="gallery-photo" />
        <Typography variant="h5" color="black" className='mt-1 self-start pl-10'>{name}</Typography>
          </div>
                </>
              )
            })
          }
</div>
</>
  )
}

export default Gallery