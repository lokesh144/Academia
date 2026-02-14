"use client";

import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  PencilSquareIcon,
  TrashIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import { supabase } from "@/lib/supabaseClient";
import {
  Card,
  Typography,
  Button,
  IconButton,
  CardFooter,
  CardBody,
  Input,
  Tabs,
  TabsHeader,
  Tab,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import NoticeFormDialog, { normalizeClasses } from "./NoticeFormDialog";

const AllNotices = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formOpen, setFormOpen] = useState(false);
  const [editNotice, setEditNotice] = useState(null);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const itemsPerPage = 6;

  const fetchNotices = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("notices")
      .select("*")
      .order("created_at", { ascending: false });
    setNotices(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  const handleFormSubmit = async (payload) => {
    try {
      if (editNotice) {
        await supabase.from("notices").update(payload).eq("id", editNotice.id);
        toast.success("Notice updated successfully!");
      } else {
        await supabase.from("notices").insert([payload]);
        toast.success("Your notice is now live!");
      }
      setFormOpen(false);
      setEditNotice(null);
      fetchNotices();
    } catch (error) {
      toast.error("Could not save the notice.");
    }
  };

  const handleAddClick = () => {
    setEditNotice(null);
    setFormOpen(true);
  };

  const handleEditClick = (notice) => {
    setEditNotice(notice);
    setFormOpen(true);
  };

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setDeleteOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!deleteId) return;
    try {
      const { error } = await supabase.from("notices").delete().eq("id", deleteId);
      if (error) throw error;
      toast.success("Notice deleted successfully!");
      setDeleteOpen(false);
      setDeleteId(null);
      fetchNotices();
    } catch (error) {
      toast.error("Could not delete notice.");
    }
  };

  const filteredNotices = notices.filter((n) => {
    const matchesSearch = n.title?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || n.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredNotices.length / itemsPerPage);
  const currentNotices = filteredNotices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getPaginationRange = () => {
    const range = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) range.push(i);
    } else {
      if (currentPage <= 3) {
        range.push(1, 2, 3, "...", totalPages - 2, totalPages - 1, totalPages);
      } else if (currentPage >= totalPages - 2) {
        range.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        range.push(1, "...", currentPage, "...", totalPages);
      }
    }
    return range;
  };

  const formatDateTime = (dateString) => {
    if (!dateString) return { date: "N/A", time: "" };
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    return { date: formattedDate, time: formattedTime };
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Toaster position="top-right" reverseOrder={false} />

      <Card className="shadow-lg bg-white overflow-hidden">
        <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <Typography variant="h4" color="blue-gray">
            All Notices
          </Typography>
          <Button
            size="md"
            color="black"
            className="flex items-center gap-2 w-full md:w-auto justify-center text-[0.9rem]"
            onClick={handleAddClick}
          >
            <PlusIcon className="h-5 w-5" />
            Add Notice
          </Button>
        </div>

        <div className="px-6 pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <Tabs value={categoryFilter} className="w-fit">
            <TabsHeader>
              {[
                { label: "All", value: "all" },
                { label: "General", value: "general" },
                { label: "Academic", value: "academic" },
              ].map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  onClick={() => {
                    setCategoryFilter(value);
                    setCurrentPage(1);
                  }}
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full md:w-80">
            <Input
              label="Search notices..."
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
        </div>

        <CardBody className="overflow-x-auto px-0 pt-0">
          {loading ? (
            <div className="p-20 text-center text-gray-500 italic">
              Syncing with database...
            </div>
          ) : (
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr className="bg-blue-gray-50/50">
                  <th className="p-4 border-b border-blue-gray-100">
                    <Typography variant="small" className="font-bold text-[#1b29f2] uppercase opacity-70">
                      Title
                    </Typography>
                  </th>
                  <th className="p-4 border-b border-blue-gray-100">
                    <Typography variant="small" className="font-bold text-[#1b29f2] uppercase opacity-70">
                      Category
                    </Typography>
                  </th>
                  <th className="p-4 border-b border-blue-gray-100">
                    <Typography variant="small" className="font-bold text-[#1b29f2] uppercase opacity-70">
                      Classes
                    </Typography>
                  </th>
                  <th className="p-4 border-b border-blue-gray-100">
                    <Typography variant="small" className="font-bold text-[#1b29f2] uppercase opacity-70">
                      Created At
                    </Typography>
                  </th>
                  <th className="p-4 border-b border-blue-gray-100 text-center">
                    <Typography variant="small" className="font-bold text-[#1b29f2] uppercase opacity-70">
                      Actions
                    </Typography>
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentNotices.length > 0 ? (
                  currentNotices.map((n) => {
                    const { date, time } = formatDateTime(n.created_at);
                    return (
                      <tr
                        key={n.id}
                        className="hover:bg-gray-50/80 border-b border-blue-gray-50 transition-colors"
                      >
                        <td className="px-4 py-2 max-w-xs">
                          <Typography variant="small" color="blue-gray" className="font-bold truncate">
                            {n.title}
                          </Typography>
                        </td>
                        <td className="px-4 py-2">
                          <span
                            className={`w-max px-2 py-1 rounded-full text-sm font-bold uppercase ${
                              n.category === "academic"
                                ? "bg-blue-50 text-blue-900 border border-blue-900"
                                : "bg-yellow-50 text-yellow-900 border border-yellow-900"
                            }`}
                          >
                            {n.category}
                          </span>
                        </td>
                        <td className="px-4 py-2">
                          <Typography variant="small" color="blue-gray">
                            {normalizeClasses(n.classes).join(" ")}
                          </Typography>
                        </td>
                        <td className="px-4 py-2">
                          <div className="flex flex-col">
                            <Typography variant="small" color="blue-gray" className="font-medium">
                              {date}
                            </Typography>
                            <Typography variant="small" className="text-xs text-gray-500">
                              {time}
                            </Typography>
                          </div>
                        </td>
                        <td className="px-4 py-2 text-center">
                          <div className="flex justify-center items-center gap-1">
                            <IconButton
                              variant="text"
                              color="blue-gray"
                              onClick={() => handleEditClick(n)}
                            >
                              <PencilSquareIcon className="h-4 w-4" />
                            </IconButton>
                            <IconButton
                              variant="text"
                              color="red"
                              onClick={() => handleDeleteClick(n.id)}
                            >
                              <TrashIcon className="h-4 w-4" />
                            </IconButton>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={5} className="p-12 text-center">
                      <Typography variant="small" color="gray" className="italic">
                        No notices found matching your criteria.
                      </Typography>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </CardBody>

        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Button
            variant="outlined"
            size="sm"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            Previous
          </Button>
          <div className="flex items-center gap-1">
            {getPaginationRange().map((page, index) =>
              typeof page === "number" ? (
                <IconButton
                  key={index}
                  variant={currentPage === page ? "filled" : "text"}
                  color={currentPage === page ? "blue" : "blue-gray"}
                  size="sm"
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </IconButton>
              ) : (
                <span key={index} className="px-2 text-gray-400">
                  ...
                </span>
              )
            )}
          </div>
          <Button
            variant="outlined"
            size="sm"
            disabled={currentPage === totalPages || totalPages === 0}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next
          </Button>
        </CardFooter>
      </Card>

      <NoticeFormDialog
        open={formOpen}
        handler={() => {
          setFormOpen(false);
          setEditNotice(null);
        }}
        onSubmit={handleFormSubmit}
        editNotice={editNotice}
      />

      <Dialog open={deleteOpen} handler={() => setDeleteOpen(false)} size="xs">
        <DialogHeader>
          <Typography variant="h5" color="blue-gray">
            Are you sure?
          </Typography>
        </DialogHeader>
        <DialogBody>
          <Typography color="gray">
            This notice will be permanently deleted.
          </Typography>
        </DialogBody>
        <DialogFooter className="gap-2">
          <Button variant="outlined" color="gray" onClick={() => setDeleteOpen(false)}>
            Cancel
          </Button>
          <Button color="red" onClick={handleDeleteConfirm}>
            Delete
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default AllNotices;
