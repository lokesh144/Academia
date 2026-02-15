"use client";

import React,{useEffect} from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
  Button,
  Checkbox,
  Typography,
  Radio,
} from "@material-tailwind/react";

const classList = [
  "Nursery", "LKG", "UKG", "One", "Two", "Three", "Four",
  "Five", "Six", "Seven", "Eight", "Nine", "Ten", "For All",
];

export const normalizeClasses = (classes) => {
  if (!classes) return [];
  if (Array.isArray(classes)) return classes;
  try {
    const parsed = JSON.parse(classes);
    if (Array.isArray(parsed)) return parsed;
  } catch (e) {}
  if (typeof classes === "string") {
    return classes.split(",").map((c) => c.trim());
  }
  return [];
};

const NoticeFormDialog = ({ open, handler, onSubmit, editNotice }) => {
  const isEdit = !!editNotice;
  const initialTitle = editNotice?.title ?? "";
  const initialDescrp = editNotice?.descrp ?? "";
  const initialCategory = editNotice?.category ?? "general";
  const initialClasses = editNotice ? normalizeClasses(editNotice.classes) : [];

  const [title, setTitle] = React.useState(initialTitle);
  const [description, setDescription] = React.useState(initialDescrp);
  const [category, setCategory] = React.useState(initialCategory);
  const [selectedClasses, setSelectedClasses] = React.useState(initialClasses);

  useEffect(() => {
    if (open) {
      setTitle(editNotice?.title ?? "");
      setDescription(editNotice?.descrp ?? "");
      setCategory(editNotice?.category ?? "general");
      setSelectedClasses(editNotice ? normalizeClasses(editNotice.classes) : []);
    }
  }, [open, editNotice]);

  const handleCheckboxChange = (c) => {
    setSelectedClasses((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit({ title, descrp: description, classes: selectedClasses, category });
  };

  return (
    <Dialog open={open} handler={handler} size="md" className="p-0">
      <DialogHeader className="flex justify-between px-6 pt-4 pb-4 border-b border-blue-gray-100">
        <Typography variant="h4" color="blue-gray">
          {isEdit ? "Edit Notice" : "Add New Notice"}
        </Typography>
        <Button variant="text" size="sm" color="blue-gray" onClick={handler}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </Button>
      </DialogHeader>
      <form onSubmit={handleSubmit}>
        <DialogBody className="overflow-y-auto max-h-[65vh] px-6 py-4 space-y-4">
          <Input
            label="Notice Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="font-sans"
          />
          <Textarea
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows={4}
            className="font-sans"
          />
          <div>
            <Typography variant="small" className="mb-2 block font-semibold text-blue-gray-700">
              Category
            </Typography>
            <div className="flex gap-6">
              <Radio
                name="category"
                label="General"
                value="general"
                checked={category === "general"}
                onChange={() => setCategory("general")}
                color="blue"
              />
              <Radio
                name="category"
                label="Academic"
                value="academic"
                checked={category === "academic"}
                onChange={() => setCategory("academic")}
                color="blue"
              />
            </div>
          </div>
          <div>
            <Typography variant="small" className="mb-3 block font-semibold text-blue-gray-700">
              Select Classes
            </Typography>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-fit gap-5 max-h-40 overflow-y-auto p-4 border border-blue-gray-100 rounded-lg">
              {classList.map((c) => (
                <label key={c} className="flex items-center gap-2 cursor-pointer">
                  <Checkbox
                    ripple={false}
                    checked={selectedClasses.includes(c)}
                    onChange={() => handleCheckboxChange(c)}
                    color="blue"
                    containerProps={{ className: "p-0" }}
                  />
                  <Typography variant="medium" className="font-medium text-blue-gray-700">
                    {c}
                  </Typography>
                </label>
              ))}
            </div>
          </div>
        </DialogBody>
        <DialogFooter className="flex justify-end gap-2 px-6 pb-6 pt-4 border-t border-blue-gray-100">
          <Button variant="outlined" color="gray" onClick={handler}>
            Cancel
          </Button>
          <Button type="submit" color="green">
            {isEdit ? "Update Notice" : "Add Notice"}
          </Button>
        </DialogFooter>
      </form>
    </Dialog>
  );
};

export default NoticeFormDialog;
