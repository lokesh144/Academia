'use client'
import React,{useState} from 'react'
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

const Teacher = () => {
  // const handleSubmit=()=>{
  //   alert("Form submitted successfully");
  // }
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const handleSubmit = async (event) => {
    // alert("Notice added successfully");
    event.preventDefault();
    // const data = { fname,lname,email,contact };
    try {
        const res = await fetch('http://localhost:5000/api/teachers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({fname: fname,lname: lname,email:email,contact:contact})
        });
        const data = await res.json();
      // setNoticeData(result)
      // console.log("Before set",event);
      // const fevent = event.firstEvents;
      console.log("After Submit events",data);
        // setResponse(result);
        // console.log(result[0].filteredNotices[6].selectedClasses);
        if (res.ok) {
          alert('Data submitted successfully!');
        } else {
          alert('Failed to submit data');
        }
    } catch (error) {
        console.error('Error submitting data:', error);
    }
    // alert("Form submit successful !")
};
  return (
         <Card shadow={false} className="ml-16 mt-10  ">
           {/* Background image */}
  <div
    className="absolute inset-0 bg-[url('/application.png')] bg-cover bg-center opacity-50 pointer-events-none"
  ></div>
          <Typography variant="h1" color="blue-gray">
            Apply for Teacher
          </Typography>
          <Typography color="transparent" className="mt-1 font-normal text-lg">
            Enter your details to apply.
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
            <div className="mb-6 flex flex-col gap-6">
              <div className="flex gap-x-8">
                <div id="first">
              <Typography variant="h6" color="blue-gray" className="-mb-3" required>
                First Name 
              </Typography><br/>
              <Input
              name='fname'
                size="lg"
                placeholder="First Name"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-44"
                labelProps={{
                  className: "before:content-none after:content-none",
                }} 
                required
                onChange={(e) => setFname(e.target.value)}
              />
              </div>
              <div id="second">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Last Name *
              </Typography><br/>
              <Input
              name='lname'
                size="lg"
                placeholder="Last Name"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-44"
                labelProps={{
                  className: "before:content-none after:content-none",
                }} 
                required
                onChange={(e) => setLname(e.target.value)}
                style={{'list-style':'none'}}
              />
              </div>
              <div id="email">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Email
              </Typography><br/>
              <Input
              name='email'
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-56"
                labelProps={{
                  className: "before:content-none after:content-none",
                }} 
                onChange={(e) => setEmail(e.target.value)}
              />
              </div>
              </div>
              <div className="flex gap-x-10">
                <div id="contact">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                Contact
              </Typography><br/>
              <Input
                name="contact"
                size="lg"
                placeholder="98*******"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 w-44"
                labelProps={{
                  className: "before:content-none after:content-none",
                }} 
                onChange={(e) => setContact(e.target.value)}
              />
                </div>
                <div>
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Education/Degree
              </Typography><br/>
              <div className=" min-w-[100px]">      
  <div className="relative w-[200px]">
    <select
        className="w-[200px] bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
          <option hidden disabled selected value> --Select-- </option>
        <option value="school">School Level</option>
        <option value="+2 level">+2 Level</option>
        <option value="bachelor">Bachelor Level</option>
    </select>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="h-5 w-5 ml-1 absolute top-3.5 right-2 text-slate-700">
      <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
    </svg>
  </div>
</div>
</div>

<div>
<Typography variant="h6" color="blue-gray" className="-mb-3">
                Gender
              </Typography><br/>
              <div className=" min-w-[100px]">      
  <div className="relative w-[200px]">
    <select
        className="w-[200px] bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
          <option hidden disabled selected value> --Select-- </option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
    </select>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="h-5 w-5 ml-1 absolute top-3.5 right-2 text-slate-700">
      <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
    </svg>
  </div>
  </div>
</div>
</div>
<div className="flex gap-x-10">
                {/* <Typography variant="h6" color="blue-gray" className="-mb-3">
                Password
              </Typography>
              <Input
                type="password"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              /> */}
              <div class="max-w-md">
      <label class="text-base font-semibold mb-2 block">Document (Front)</label>
      <input type="file"
        class="w-64 font-semibold text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4  rounded" />
      <p class="text-xs mt-2">PNG, JPG are Allowed.</p>
    </div>
              <div class="max-w-md">
      <label class="text-base font-semibold mb-2 block">Document (Back)</label>
      <input type="file"
        class="w-64 font-semibold text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4  rounded" />
      <p class="text-xs mt-2">PNG, JPG are Allowed.</p>
    </div>

    <div class="max-w-md">
      <label class="text-base font-semibold mb-2 block">Academic Degree</label>
      <input type="file"
        class="w-64 font-semibold text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4  rounded" />
      <p class="text-xs mt-2">PNG, JPG are Allowed.</p>
    </div>
    </div>
            </div>
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                    &nbsp;Terms and Conditions
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            /><br/>
            <div class="flex justify-end">
            <Button className="mt-6 text-base" type="submit">
              submit
            </Button>
            </div>
            {/* <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <a href="#" className="font-medium text-gray-900">
                Sign In
              </a>
            </Typography> */}
          </form>
        </Card>
      );
}

export default Teacher