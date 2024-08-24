'use client'
import React,{useState} from 'react'
// import { useState } from “react”
import {
    generateUploadButton,
    generateUploadDropzone,
    } from "@uploadthing/react";
// import { UploadButton } from "../utils/uploadthing"
const ImgUpload = () => {
const [imgUrl, setImgUrl] = useState('')
console.log(imgUrl)
// const ImgUpload = () => {
     const UploadButton = generateUploadButton();
 const UploadDropzone = generateUploadDropzone();
  return (
    <main className="text-black bg-white flex flex-col items-center justify-between p-24">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
      {/* <select name="fruit">
    <option value="apple">Category 1</option>
    <option value="banana">Category 2</option>
    <option value="orange">Category 3</option>
    <option value="orange">Category 4</option>
    <option value="orange">Category 5</option>
  </select> */}
  <div className="flex flex-row "/>
  {/* <input type="text" placeholder="Enter Text"/>
  <input type="number" placeholder="Enter Number"/>
  <select name="selection">
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
    <option value="option4">Option 4</option>
    <option value="option5">Option 5</option>
  </select> */}
    </main>
  )
}

export default ImgUpload