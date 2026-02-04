'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
// import {getSession} from '@/lib';
// import '@/styles/dashboard.css'; 

import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Checkbox,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
// import useAuth from '@/src/hooks/useAuth';
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
const classes = [
  { id: 1, title: 'Nursery' },
  { id: 2, title: 'LKG' },
  { id: 3, title: 'UKG' },
  { id: 4, title: 'One' },
  { id: 5, title: 'Two' },
  { id: 6, title: 'Three' },
  { id: 7, title: 'Four' },
  { id: 8, title: 'Five' },
  { id: 9, title: 'Six' },
  { id: 10, title: 'Seven' },
  { id: 11, title: 'Eight' },
  { id: 11, title: 'Nine' },
  { id: 12, title: 'Ten' },
  { id: 13, title: 'For All' }
];
const AddNotice = () => {
  const [open, setOpen] = React.useState(0);
  const [title, setTitle] = React.useState('');
  const [description, setDescp] = React.useState('');
  const [response, setResponse] = React.useState(null);
  const [selectedClasses, setSelectedClasses] = React.useState([]);

  const handleCheckboxChange = (classTitle) => {
    setSelectedClasses(prevSelectedClasses => {
      if (prevSelectedClasses.includes(classTitle)) {
        return prevSelectedClasses.filter(title => title !== classTitle);
      } else {
        return [...prevSelectedClasses, classTitle];
      }
    });
  };
  // const {isAuthenticated,isLoading} = useAuth();
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  const opend=()=>{
    alert('Dashboard dialogue');
  };
  // if (!isAuthenticated) {
  //   return <div>Redirecting...</div>;
  // }

  // if (status=='loading') return <div>Loading...</div>;

  // if (!session || !session.user) {
  //   router.push('/lokesh');
  //   return null;
  // }
  // const session=await getSession();
  // console.log(session)
  const handleSubmit = async (event) => {
    console.log("okay")
    alert("Notice added successfully");
    console.log("Selected Classes: ", selectedClasses);
    event.preventDefault();
    try {
        const res = await fetch('http://localhost:5000/api/notice', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({title: title,description: description,selectedClasses:selectedClasses})
        });
        const result = await res.json();
        setResponse(result);
    } catch (error) {
        console.error('Error submitting data:', error);
    }
};
  return (
    <div className="flex">
    <Card className="h-[calc(100vh)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Sidebar
        </Typography>
      </div>
      <List>
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Dashboard
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem onClick={()=>opend()}>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Analytics
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Reporting
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Projects
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
              <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                E-Commerce
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Orders
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Products
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <hr className="my-2 border-blue-gray-50" />
        <Link href='/addnotice'>
        <ListItem>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Add Notice
          {/* <ListItemSuffix>
            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
          </ListItemSuffix> */}
        </ListItem>
        </Link>
        <Link href='/addevent'>
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Add Event
        </ListItem>
        </Link>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
    <Card className="h-[calc(100vh)] w-full max-w-[80rem] p-4 shadow-xl shadow-blue-gray-900/5">
    <Typography variant="h3" color="blue-gray">
          Add Notice
        </Typography>

<form className="max-w-sm" onSubmit={handleSubmit}>
  <div className="mb-5">
    <label for="Title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
    <input type="text" id="email" value={title} onChange={(e) => setTitle(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title" required />
  </div>
  <div className="mb-5">
    <label for="Description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
    <input type="text" id="password" value={description} onChange={(e) => setDescp(e.target.value)}className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description" required />
  </div>
  
<h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Classes</h3>
<ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg mb-5 sm:flex flex-wrap dark:bg-gray-700 dark:border-gray-600 dark:text-white">
{classes.map(classed => (
        <div className="flex w-max mb-5" key={classed.id}>
            <Checkbox color="black"  id={`class-checkbox-${classed.id}`} checked={selectedClasses.includes(classed.title)} onChange={() => handleCheckboxChange(classed.title)}/>
            <label htmlFor={`class-checkbox-${classed.id}`} for="vue-checkbox-list" className="w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300 mr-2">{classed.title}</label>
        </div>
    ))}
</ul>

  {/* <div class="flex items-start mb-5">
    <div class="flex items-center h-5">
      <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div> */}
  <button type="submit"  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
{/* Edit Notices */}
    </Card>
    {/* </Card> */}
    </div>
  )
}

export default AddNotice