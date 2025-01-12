'use client'
import React,{useState} from 'react'
import { ToastContainer } from 'react-toastify'; // Import toast function
import {ImageUploadComplete,ImageUploadError} from '../uploadthing/upload';
import 'react-toastify/dist/ReactToastify.css';
// import 'onImageUploadComplete' 
const ImageUpload2 = () => {
  
  return (
    <div><ToastContainer/>
    {/* <ImageUpload
    onImageUploadComplete={imageUploadComplete}
    onImageUploadError={imageUploadError}
/> */}
</div>
  )
}

export default ImageUpload2