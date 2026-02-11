"use client";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import {
  PencilIcon,
  TrashIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { supabase } from "@/lib/supabaseClient";
import {
  Checkbox,
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
} from "@material-tailwind/react";
import { InboxIcon, ListBulletIcon } from "@heroicons/react/24/solid";

const classList = [
  "Nursery", "LKG", "UKG", "One", "Two", "Three", "Four", 
  "Five", "Six", "Seven", "Eight", "Nine", "Ten", "For All",
];

const normalizeClasses = (classes) => {
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

const NoticesDashboard = () => {
  const [activeView, setActiveView] = useState("add");
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  const [title, setTitle] = useState("");
  const [description, setDescp] = useState("");
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [category, setCategory] = useState("general");
  const [editId, setEditId] = useState(null);

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

  const handleCheckboxChange = (c) => {
    setSelectedClasses((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c],
    );
  };

  const resetForm = () => {
    setTitle("");
    setDescp("");
    setSelectedClasses([]);
    setCategory("general");
    setEditId(null);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const payload = { 
          title, 
          descrp: description, 
          classes: selectedClasses, 
          category 
      };

      if (editId) {
        await supabase.from("notices").update(payload).eq("id", editId);
        // Popup for Update
        Swal.fire({
          title: "Success!",
          text: "Notice updated successfully.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      } else {
        await supabase.from("notices").insert([payload]);
        // Popup for Create
        Swal.fire({
          title: "Posted!",
          text: "Your notice is now live.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      }
      resetForm();
      fetchNotices();
      setActiveView("list");
    } catch (error) {
      Swal.fire("Error", "Could not save the notice.", "error");
    }
  };

  const handleEdit = (n) => {
    setEditId(n.id);
    setTitle(n.title);
    setDescp(n.descrp);
    setSelectedClasses(normalizeClasses(n.classes));
    setCategory(n.category);
    setActiveView("add");
  };
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This notice will be permanently removed from the archive. You won't be able to revert this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",    // Red for delete
      cancelButtonColor: "#475569",  // Gray for cancel
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
      reverseButtons: true           // Puts "Keep it" on the left
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const { error } = await supabase.from("notices").delete().eq("id", id);
          
          if (error) throw error;

          // Success notification after deletion
          Swal.fire({
            title: "Deleted!",
            text: "The notice has been successfully removed.",
            icon: "success",
            timer: 2000,
            showConfirmButton: false
          });

          fetchNotices(); // Refresh the list
        } catch (error) {
          Swal.fire("Error", "There was a problem deleting this notice.", "error");
        }
      }
    });
  };
  const filteredNotices = notices.filter((n) => {
    const matchesSearch = n.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || n.category === categoryFilter;
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

  // UPDATED: Formats date and time (HH:MM)
  const formatDateTime = (dateString) => {
    if (!dateString) return "N/A";
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
    <div className="flex min-h-screen bg-gray-100 text-gray-900">
      <aside className="w-64 bg-white shadow-lg p-6">
        <h2 className="text-xl font-bold mb-6 text-blue-gray-800">Notice Panel</h2>
        <button
          onClick={() => setActiveView("add")}
          className={`flex items-center gap-3 w-full px-4 py-2 rounded mb-3 transition-all ${activeView === "add" ? "bg-blue-600 text-white shadow-md" : "hover:bg-gray-100 text-gray-600"}`}
        >
          <InboxIcon className="h-5 w-5" /> Add Notice
        </button>
        <button
          onClick={() => {
            setActiveView("list");
            setCurrentPage(1);
          }}
          className={`flex items-center gap-3 w-full px-4 py-2 rounded transition-all ${activeView === "list" ? "bg-blue-600 text-white shadow-md" : "hover:bg-gray-100 text-gray-600"}`}
        >
          <ListBulletIcon className="h-5 w-5" /> All Notices
        </button>
      </aside>

      <main className="flex-1 p-8 max-w-7xl mx-auto">
        {activeView === "add" && (
          <Card className="p-6 bg-white shadow-lg max-w-3xl border border-gray-100">
            <Typography variant="h4" color="blue-gray" className="mb-6">
              {editId ? "Edit Notice" : "Create New Notice"}
            </Typography>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Notice Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <textarea
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Detailed Description"
                rows={4}
                value={description}
                onChange={(e) => setDescp(e.target.value)}
                required
              />
              
              <div className="py-2">
                <Typography variant="small" className="font-bold text-gray-600 mb-2">Category:</Typography>
                <div className="flex gap-6">
                  {["general", "academic"].map((c) => (
                    <label key={c} className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="radio"
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                        checked={category === c}
                        onChange={() => setCategory(c)}
                      />{" "}
                      <span className="capitalize group-hover:text-blue-600 transition-colors">{c}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="py-2">
                <Typography variant="small" className="font-bold text-gray-600 mb-2">Target Classes:</Typography>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-gray-50 p-4 rounded-xl border border-gray-200">
                  {classList.map((c) => (
                    <label key={c} className="flex items-center gap-2 cursor-pointer hover:bg-white p-1 rounded transition-colors">
                      <Checkbox
                        ripple={false}
                        className="h-4 w-4"
                        containerProps={{ className: "p-0" }}
                        checked={selectedClasses.includes(c)}
                        onChange={() => handleCheckboxChange(c)}
                      />{" "}
                      <Typography className="text-xs font-medium text-gray-700">{c}</Typography>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button type="submit" color="blue" className="px-10">
                  {editId ? "Update Notice" : "Post Notice"}
                </Button>
                {editId && (
                  <Button variant="outlined" color="gray" onClick={resetForm}>
                    Cancel
                  </Button>
                )}
              </div>
            </form>
          </Card>
        )}

        {activeView === "list" && (
          <Card className="shadow-lg bg-white overflow-hidden">
            <div className="p-6">
              <Typography variant="h4" color="blue-gray" className="mb-4">
                Notices Archive
              </Typography>
              <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <Tabs value={categoryFilter} className="w-full md:w-max">
                  <TabsHeader>
                    {[
                      { label: "All", value: "all" },
                      { label: "General", value: "general" },
                      { label: "Academic", value: "academic" },
                    ].map(({ label, value }) => (
                      <Tab
                        className="!uppercase px-6 py-2"
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
            </div>

            <CardBody className="overflow-x-auto px-0 pt-0">
              {loading ? (
                <div className="p-20 text-center text-gray-500 italic">Syncing with database...</div>
              ) : (
                <table className="w-full min-w-max table-auto text-left">
                  <thead>
                    <tr className="bg-blue-gray-50/50">
                      <th className="p-4 border-b border-blue-gray-100"><Typography variant="small" className="font-bold text-blue-600 uppercase opacity-70">Title</Typography></th>
                      <th className="p-4 border-b border-blue-gray-100"><Typography variant="small" className="font-bold text-blue-600 uppercase opacity-70">Category</Typography></th>
                      <th className="p-4 border-b border-blue-gray-100"><Typography variant="small" className="font-bold text-blue-600 uppercase opacity-70">Classes</Typography></th>
                      <th className="p-4 border-b border-blue-gray-100"><Typography variant="small" className="font-bold text-blue-600 uppercase opacity-70">Posted On</Typography></th>
                      <th className="p-4 border-b border-blue-gray-100 text-center"><Typography variant="small" className="font-bold text-blue-600 uppercase opacity-70">Actions</Typography></th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentNotices.length > 0 ? (
                      currentNotices.map((n) => {
                        const { date, time } = formatDateTime(n.created_at);
                        return (
                          <tr key={n.id} className="hover:bg-gray-50/80 border-b border-blue-gray-50 transition-colors">
                            <td className="p-4 max-w-xs">
                              <Typography variant="small" color="blue-gray" className="font-bold truncate">
                                {n.title}
                              </Typography>
                            </td>
                            <td className="p-4">
                              <div className={`w-max px-2 py-1 rounded-md text-[10px] font-bold uppercase ${n.category === 'academic' ? 'bg-blue-50 text-blue-700' : 'bg-yellow-50 text-yellow-800'}`}>
                                {n.category}
                              </div>
                            </td>
                            <td className="p-4">
                              <Typography className="text">
                                {normalizeClasses(n.classes).join("\u00A0\u00A0\u00A0")}
                              </Typography>
                            </td>
                            <td className="p-4">
                              <div className="flex flex-col">
                                <Typography variant="small" color="blue-gray" className="font-medium">
                                  {date}
                                </Typography>
                                <Typography variant="small" className="text-xs text-gray-500">
                                  {time}
                                </Typography>
                              </div>
                            </td>
                            <td className="p-4 text-center">
                              <div className="flex justify-center items-center">
                                <IconButton variant="text" color="blue" onClick={() => handleEdit(n)}>
                                  <PencilIcon className="h-4 w-4" />
                                </IconButton>
                                <IconButton variant="text" color="red" onClick={() => handleDelete(n.id)}>
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
                className="flex items-center gap-2"
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
                    <span key={index} className="px-2 text-gray-400">...</span>
                  )
                )}
              </div>
              <Button
                variant="outlined"
                size="sm"
                className="flex items-center gap-2"
                disabled={currentPage === totalPages || totalPages === 0}
                onClick={() => setCurrentPage((prev) => prev + 1)}
              >
                Next
              </Button>
            </CardFooter>
          </Card>
        )}
      </main>
    </div>
  );
};

export default NoticesDashboard;