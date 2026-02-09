'use client'
import React from 'react'
import Link from 'next/link';
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Checkbox,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  InboxIcon,
} from "@heroicons/react/24/solid";
import { supabase } from "@/lib/supabaseClient";

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
  { id: 12, title: 'Nine' },
  { id: 13, title: 'Ten' },
  { id: 14, title: 'For All' }
];

const AddNotice = () => {
  const [open, setOpen] = React.useState(0);
  const [title, setTitle] = React.useState('');
  const [description, setDescp] = React.useState('');
  const [selectedClasses, setSelectedClasses] = React.useState([]);
  const [category, setCategory] = React.useState('general'); // ✅ NEW

  const handleCheckboxChange = (classTitle) => {
    setSelectedClasses(prev =>
      prev.includes(classTitle)
        ? prev.filter(t => t !== classTitle)
        : [...prev, classTitle]
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error } = await supabase
      .from("notices")
      .insert([
        {
          title: title,
          descrp: description,
          classes: selectedClasses,
          category: category, // ✅ NEW
        },
      ]);

    if (error) {
      alert("Error: " + error.message);
    } else {
      alert("Notice added successfully ✅");
      setTitle("");
      setDescp("");
      setSelectedClasses([]);
      setCategory("general");
    }
  };

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="flex">
      {/* SIDEBAR */}
      <Card className="h-screen w-full max-w-[20rem] p-4 shadow-xl">
        <Typography variant="h5" className="p-4">Sidebar</Typography>
        <List>
          <Accordion open={open === 1}>
            <ListItem selected={open === 1}>
              <AccordionHeader onClick={() => handleOpen(1)}>
                <ListItemPrefix>
                  <PresentationChartBarIcon className="h-5 w-5" />
                </ListItemPrefix>
                Dashboard
              </AccordionHeader>
            </ListItem>
            <AccordionBody>
              <ListItem>Analytics</ListItem>
            </AccordionBody>
          </Accordion>

          <Link href="/addnotice">
            <ListItem>
              <ListItemPrefix>
                <InboxIcon className="h-5 w-5" />
              </ListItemPrefix>
              Add Notice
            </ListItem>
          </Link>
        </List>
      </Card>

      {/* MAIN */}
      <Card className="h-screen w-full p-6 shadow-xl">
        <Typography variant="h3">Add Notice</Typography>

        <form className="max-w-sm mt-6" onSubmit={handleSubmit}>
          {/* TITLE */}
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium">Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded p-2 text-black"
              required
            />
          </div>

          {/* DESCRIPTION */}
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium">Description</label>
            <input
              value={description}
              onChange={(e) => setDescp(e.target.value)}
              className="w-full border rounded p-2 text-black"
              required
            />
          </div>

          {/* CLASSES */}
          <h3 className="mb-3 font-semibold">Classes</h3>
          <div className="flex flex-wrap gap-4 mb-6">
            {classes.map(c => (
              <div key={c.id} className="flex items-center gap-2">
                <Checkbox
                  checked={selectedClasses.includes(c.title)}
                  onChange={() => handleCheckboxChange(c.title)}
                />
                <span>{c.title}</span>
              </div>
            ))}
          </div>

          {/* ✅ CATEGORY SECTION */}
          <h3 className="mb-3 font-semibold">Category</h3>
          <div className="flex gap-6 mb-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                value="general"
                checked={category === "general"}
                onChange={(e) => setCategory(e.target.value)}
              />
              <span>General</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                value="academic"
                checked={category === "academic"}
                onChange={(e) => setCategory(e.target.value)}
              />
              <span>Academic</span>
            </label>
          </div>

          {/* SUBMIT */}
          <button className="bg-blue-700 text-white px-6 py-2 rounded">
            Submit
          </button>
        </form>
      </Card>
    </div>
  );
};

export default AddNotice;