"use client";
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
  Chip,
  CardFooter,
  CardBody,
  Input,
} from "@material-tailwind/react";
import { InboxIcon, ListBulletIcon } from "@heroicons/react/24/solid";

const classList = [
  "Nursery",
  "LKG",
  "UKG",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "For All",
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
  const [activeView, setActiveView] = useState("add"); // add | list
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  const [title, setTitle] = useState("");
  const [description, setDescp] = useState("");
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [category, setCategory] = useState("general");
  const [editId, setEditId] = useState(null);

  /* ================= SEARCH & PAGINATION STATE ================= */
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryFilter, setCategoryFilter] = useState("all"); // all | general | academic
  const itemsPerPage = 8;

  /* ================= FETCH ================= */
  const fetchNotices = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("notices")
      .select("*")
      .order("id", { ascending: false });

    setNotices(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchNotices();
  }, []);

  /* ================= FORM ================= */
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
    e.preventDefault();

    if (editId) {
      await supabase
        .from("notices")
        .update({
          title,
          descrp: description,
          classes: selectedClasses,
          category,
        })
        .eq("id", editId);
    } else {
      await supabase.from("notices").insert([
        {
          title,
          descrp: description,
          classes: selectedClasses,
          category,
        },
      ]);
    }

    resetForm();
    fetchNotices();
    setActiveView("list");
  };

  /* ================= ACTIONS ================= */
  const handleEdit = (n) => {
    setEditId(n.id);
    setTitle(n.title);
    setDescp(n.descrp);
    setSelectedClasses(normalizeClasses(n.classes));
    setCategory(n.category);
    setActiveView("add");
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this notice?")) return;
    await supabase.from("notices").delete().eq("id", id);
    fetchNotices();
  };

  /* ================= SEARCH & PAGINATION LOGIC ================= */
  const filteredNotices = notices.filter((n) => {
    const matchesSearch = n.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || n.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredNotices.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNotices = filteredNotices.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  // Helper to generate the pagination numbers with ellipses (...)
  const getPaginationRange = () => {
    const range = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) range.push(i);
    } else {
      if (currentPage <= 3) {
        range.push(1, 2, 3, "...", totalPages - 2, totalPages - 1, totalPages);
      } else if (currentPage >= totalPages - 2) {
        range.push(1, 2, 3, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        range.push(1, "...", currentPage, "...", totalPages);
      }
    }
    return range;
  };

  /* ================= UI ================= */
  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-900">
      {/* ===== SIDEBAR ===== */}
      <aside className="w-64 bg-white shadow-lg p-6">
        <h2 className="text-xl font-bold mb-6">Notice Panel</h2>

        <button
          onClick={() => setActiveView("add")}
          className={`flex items-center gap-3 w-full px-4 py-2 rounded mb-3 ${
            activeView === "add"
              ? "bg-blue-600 text-white"
              : "hover:bg-gray-100"
          }`}
        >
          <InboxIcon className="h-5 w-5" />
          Add Notice
        </button>

        <button
          onClick={() => {
            setActiveView("list");
            setCurrentPage(1);
          }}
          className={`flex items-center gap-3 w-full px-4 py-2 rounded ${
            activeView === "list"
              ? "bg-blue-600 text-white"
              : "hover:bg-gray-100"
          }`}
        >
          <ListBulletIcon className="h-5 w-5" />
          All Notices
        </button>
      </aside>

      {/* ===== MAIN CONTENT ===== */}
      <main className="flex-1 p-8">
        {/* ===== ADD / EDIT ===== */}
        {activeView === "add" && (
          <Card className="p-6 bg-white shadow-lg max-w-3xl">
            <Typography variant="h4" className="mb-4">
              {editId ? "Edit Notice" : "Add Notice"}
            </Typography>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                className="w-full border rounded p-2"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />

              <textarea
                className="w-full border rounded p-2"
                placeholder="Description"
                rows={3}
                value={description}
                onChange={(e) => setDescp(e.target.value)}
                required
              />

              <div className="flex gap-6">
                {["general", "academic"].map((c) => (
                  <label key={c} className="flex items-center gap-2">
                    <input
                      type="radio"
                      checked={category === c}
                      onChange={() => setCategory(c)}
                    />
                    {c}
                  </label>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                {classList.map((c) => (
                  <label key={c} className="flex items-center gap-2">
                    <Checkbox
                      checked={selectedClasses.includes(c)}
                      onChange={() => handleCheckboxChange(c)}
                    />
                    {c}
                  </label>
                ))}
              </div>

              <div className="flex gap-4">
                <button className="bg-blue-700 text-white px-6 py-2 rounded">
                  {editId ? "Update" : "Submit"}
                </button>

                {editId && (
                  <button
                    type="button"
                    onClick={resetForm}
                    className="bg-gray-500 text-white px-6 py-2 rounded"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </Card>
        )}

        {/* ===== TABLE VIEW ===== */}
        {activeView === "list" && (
          <Card className="h-full w-full shadow-lg bg-transparent">
            <div className="p-6 bg-transparent">
              <Typography variant="h4" color="blue-gray" className="mb-4">
                All Notices
              </Typography>
              
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant={categoryFilter === "all" ? "filled" : "outlined"}
                    onClick={() => {
                      setCategoryFilter("all");
                      setCurrentPage(1);
                    }}
                  >
                    All Notices
                  </Button>
                  <Button
                    size="sm"
                    variant={categoryFilter === "general" ? "filled" : "outlined"}
                    onClick={() => {
                      setCategoryFilter("general");
                      setCurrentPage(1);
                    }}
                  >
                    General Notices
                  </Button>
                  <Button
                    size="sm"
                    variant={categoryFilter === "academic" ? "filled" : "outlined"}
                    onClick={() => {
                      setCategoryFilter("academic");
                      setCurrentPage(1);
                    }}
                  >
                    Academic Notices
                  </Button>
                </div>
                
                <div className="w-full md:w-72">
                  <Input
                    label="Search by Title"
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

            <CardBody className="overflow-scroll px-0 pt-0">
              {loading ? (
                <div className="p-10 text-center">Loading notices...</div>
              ) : (
                <table className="w-full min-w-max table-auto text-left">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border-y border-blue-gray-100 p-4 font-bold text-blue-400">
                        Title
                      </th>
                      <th className="border-y border-blue-gray-100 p-4 font-bold text-blue-400">
                        Category
                      </th>
                      <th className="border-y border-blue-gray-100 p-4 font-bold text-blue-400">
                        Classes
                      </th>
                      <th className="border-y border-blue-gray-100 p-4 text-center font-bold text-blue-400">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentNotices.length > 0 ? (
                      currentNotices.map((n) => (
                        <tr
                          key={n.id}
                          className="hover:bg-gray-50 border-b border-blue-gray-50"
                        >
                          <td className="p-4">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold"
                            >
                              {n.title}
                            </Typography>
                          </td>
                          <td className="p-4">
                             <Typography
    variant="small"
    className="capitalize text-gray-700"
  >
    {n.category}
  </Typography>
                            
                          </td>
                          <td className="p-4">
                            <Typography
                              variant="small"
                              className="font-normal text-gray-600"
                            >
                              {normalizeClasses(n.classes).join("\u00A0\u00A0\u00A0")}
                            </Typography>
                          </td>
                          <td className="p-4 text-center">
                            <div className="flex justify-center gap-2">
                              <IconButton
                                variant="text"
                                color="blue"
                                onClick={() => handleEdit(n)}
                              >
                                <PencilIcon className="h-4 w-4" />
                              </IconButton>
                              <IconButton
                                variant="text"
                                color="red"
                                onClick={() => handleDelete(n.id)}
                              >
                                <TrashIcon className="h-4 w-4" />
                              </IconButton>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan={4}
                          className="p-4 text-center text-gray-500"
                        >
                          No notices found matching &quot;{searchTerm}&quot;
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              )}
            </CardBody>

            {/* ===== UPDATED PAGINATION FORMAT FROM IMAGE ===== */}
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
              <Button
                variant="outlined"
                size="sm"
                className="rounded-lg text-blue-gray-900 border-blue-gray-200"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
              >
                PREVIOUS
              </Button>

              <div className="flex items-center gap-2">
                {getPaginationRange().map((page, index) =>
                  typeof page === "number" ? (
                    <IconButton
                      key={index}
                      variant={currentPage === page ? "outlined" : "text"}
                      size="sm"
                      className={`rounded-lg ${currentPage === page ? "bg-gray-100" : ""}`}
                      onClick={() => setPage(page)}
                    >
                      {page}
                    </IconButton>
                  ) : (
                    <span
                      key={index}
                      className="px-2 text-blue-gray-500 font-bold"
                    >
                      {page}
                    </span>
                  ),
                )}
              </div>

              <Button
                variant="outlined"
                size="sm"
                className="rounded-lg text-blue-gray-900 border-blue-gray-200"
                disabled={currentPage === totalPages || totalPages === 0}
                onClick={() => setCurrentPage((prev) => prev + 1)}
              >
                NEXT
              </Button>
            </CardFooter>
          </Card>
        )}
      </main>
    </div>
  );
};

export default NoticesDashboard;