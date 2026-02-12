"use client";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import {
  PencilSquareIcon,
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

  const showUpdateDialog = (notice) => {
    // Inject custom CSS for update dialog
    if (!document.getElementById("swal-update-styles")) {
      const style = document.createElement("style");
      style.id = "swal-update-styles";
      style.innerHTML = `
        .update-popup {
          border-radius: 1rem !important;
          padding: 0 !important;
          width: 600px !important;
          max-width: 90vw !important;
        }
        .update-header {
          padding: 1.5rem;
          border-bottom: 1px solid #e5e7eb;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .update-body {
          padding: 1.5rem;
        }
        .update-input-group {
          margin-bottom: 1.5rem;
        }
        .update-label {
          display: block;
          font-size: 0.875rem;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 0.5rem;
        }
        .update-input {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 0.5rem;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.2s;
        }
        .update-input:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }
        .update-textarea {
          min-height: 100px;
          resize: vertical;
        }
        .update-checkbox-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          gap: 0.5rem;
          max-height: 200px;
          overflow-y: auto;
          padding: 0.75rem;
          background: #f9fafb;
          border-radius: 0.5rem;
          border: 1px solid #e5e7eb;
        }
        .update-checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          font-size: 0.875rem;
          color: #374151;
        }
        .update-checkbox {
          width: 16px;
          height: 16px;
          cursor: pointer;
        }
        .update-radio-group {
          display: flex;
          gap: 1.5rem;
        }
        .update-radio-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          font-size: 0.95rem;
          color: #374151;
        }
        .update-warning {
          background: #fef3c7;
          color: #92400e;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          font-style: italic;
          margin-bottom: 1rem;
        }
        .update-btn {
          width: 100%;
          padding: 0.875rem;
          border-radius: 0.5rem;
          font-weight: 600;
          font-size: 1rem;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .update-btn-primary {
          background-color: #10b981;
          color: white;
        }
        .update-btn-primary:hover {
          background-color: #059669;
        }
        .swal2-close {
          color: #6b7280 !important;
          font-size: 2rem !important;
        }
        .swal2-html-container {
          margin: 0 !important;
          padding: 0 !important;
        }
      `;
      document.head.appendChild(style);
    }

    const tempSelectedClasses = [...normalizeClasses(notice.classes)];
    let tempTitle = notice.title;
    let tempDescription = notice.descrp;
    let tempCategory = notice.category;

    const updateDialogContent = () => `
      <div>
        <div class="update-header">
          <h2 style="margin: 0; font-size: 1.5rem; font-weight: 600; color: #1f2937;">Update Notice</h2>
        </div>
        <div class="update-body">
          <div class="update-input-group">
            <label class="update-label">Notice Title</label>
            <input 
              type="text" 
              class="update-input" 
              id="update-title" 
              value="${tempTitle}"
              placeholder="Enter notice title"
            />
          </div>

          <div class="update-input-group">
            <label class="update-label">Description</label>
            <textarea 
              class="update-input update-textarea" 
              id="update-description"
              placeholder="Enter detailed description"
            >${tempDescription}</textarea>
          </div>

          <div class="update-input-group">
            <label class="update-label">Category</label>
            <div class="update-radio-group">
              <label class="update-radio-label">
                <input 
                  type="radio" 
                  name="category" 
                  value="general" 
                  ${tempCategory === 'general' ? 'checked' : ''}
                  class="update-checkbox"
                />
                <span>General</span>
              </label>
              <label class="update-radio-label">
                <input 
                  type="radio" 
                  name="category" 
                  value="academic" 
                  ${tempCategory === 'academic' ? 'checked' : ''}
                  class="update-checkbox"
                />
                <span>Academic</span>
              </label>
            </div>
          </div>

          <div class="update-input-group">
            <label class="update-label">Select Classes</label>
            <div class="update-checkbox-grid" id="classes-container">
              ${classList.map(c => `
                <label class="update-checkbox-label">
                  <input 
                    type="checkbox" 
                    class="update-checkbox class-checkbox" 
                    value="${c}"
                    ${tempSelectedClasses.includes(c) ? 'checked' : ''}
                  />
                  <span>${c}</span>
                </label>
              `).join('')}
            </div>
          </div>

          <div class="update-warning">
            Updating notice will modify all future occurrences.
          </div>

          <button class="update-btn update-btn-primary" id="confirm-update-btn">
            Update Notice
          </button>
        </div>
      </div>
    `;

    Swal.fire({
      html: updateDialogContent(),
      showConfirmButton: false,
      showCloseButton: true,
      customClass: {
        popup: 'update-popup'
      },
      didOpen: () => {
        const titleInput = document.getElementById('update-title');
        const descriptionInput = document.getElementById('update-description');
        const categoryRadios = document.querySelectorAll('input[name="category"]');
        const classCheckboxes = document.querySelectorAll('.class-checkbox');
        const confirmBtn = document.getElementById('confirm-update-btn');

        // Update temp values on input
        titleInput.addEventListener('input', (e) => {
          tempTitle = e.target.value;
        });

        descriptionInput.addEventListener('input', (e) => {
          tempDescription = e.target.value;
        });

        categoryRadios.forEach(radio => {
          radio.addEventListener('change', (e) => {
            tempCategory = e.target.value;
          });
        });

        classCheckboxes.forEach(checkbox => {
          checkbox.addEventListener('change', (e) => {
            if (e.target.checked) {
              if (!tempSelectedClasses.includes(e.target.value)) {
                tempSelectedClasses.push(e.target.value);
              }
            } else {
              const index = tempSelectedClasses.indexOf(e.target.value);
              if (index > -1) {
                tempSelectedClasses.splice(index, 1);
              }
            }
          });
        });

        confirmBtn.addEventListener('click', async () => {
          if (!tempTitle.trim()) {
            Swal.fire({
              icon: 'warning',
              title: 'Missing Title',
              text: 'Please enter a notice title',
              timer: 2000,
              showConfirmButton: false
            });
            return;
          }

          if (!tempDescription.trim()) {
            Swal.fire({
              icon: 'warning',
              title: 'Missing Description',
              text: 'Please enter a description',
              timer: 2000,
              showConfirmButton: false
            });
            return;
          }

          if (tempSelectedClasses.length === 0) {
            Swal.fire({
              icon: 'warning',
              title: 'No Classes Selected',
              text: 'Please select at least one class',
              timer: 2000,
              showConfirmButton: false
            });
            return;
          }

          try {
            const payload = {
              title: tempTitle,
              descrp: tempDescription,
              classes: tempSelectedClasses,
              category: tempCategory
            };

            await supabase.from("notices").update(payload).eq("id", notice.id);

            Swal.fire({
              title: "Success!",
              text: "Notice updated successfully.",
              icon: "success",
              timer: 1500,
              showConfirmButton: false,
            });

            resetForm();
            fetchNotices();
          } catch (error) {
            Swal.fire("Error", "Could not update the notice.", "error");
          }
        });
      }
    });
  };

  const handleEdit = (n) => {
    // Show custom update popup instead of switching to add view
    showUpdateDialog(n);
  };

  const handleDelete = async (id) => {
    // Inject custom CSS to handle bottom-right alignment and button styling
    if (!document.getElementById("swal-custom-styles")) {
      const style = document.createElement("style");
      style.id = "swal-custom-styles";
      style.innerHTML = `
        .swal2-actions {
          justify-content: flex-end !important;
          width: 100% !important;
          padding: 0 1.5rem 1.5rem 0 !important;
          margin: 1.5rem 0 0 0 !important;
        }
        .custom-confirm-btn {
          background-color: #ef4444 !important;
          color: white !important;
          padding: 10px 24px !important;
          border-radius: 8px !important;
          font-weight: 600 !important;
          border: none !important;
          margin-left: 10px !important;
        }
        .custom-cancel-btn {
          background-color: white !important;
          color: #000000 !important;
          padding: 10px 24px !important;
          border-radius: 8px !important;
          font-weight: 600 !important;
          border: 1px solid #d1d5db !important;
        }
        .swal2-html-container {
          margin: 0 !important;
          overflow: hidden !important;
          text-align: left !important;
          padding: 0 !important;
        }
        .swal2-popup {
          border-radius: 1rem !important;
          padding: 1.5rem !important;
          height: auto !important;
        }
        .swal2-title {
          text-align: left !important;
          padding: 0 !important;
          margin: 0 !important;
        }
      `;
      document.head.appendChild(style);
    }

    Swal.fire({
      html: `
        <div style="display: flex; align-items: flex-start; gap: 0.75rem; text-align: left;">
        <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#ef4444"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    style="margin-top: 2px;"
  >
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path>
    <path d="M10 11v6"></path>
    <path d="M14 11v6"></path>
    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"></path>
  </svg>
          <h2 style="margin: 0 0 0.5rem 0; font-size: 1.25rem; font-weight: 600; color: #000;">Are you sure?</h2>
          <p style="margin: 0; color: #6b7280; font-size: 0.95rem;"></p>
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: "Confirm",
      cancelButtonText: "Cancel",
      buttonsStyling: false,
      reverseButtons: true,
      width: '550px',
      customClass: {
        confirmButton: 'custom-confirm-btn',
        cancelButton: 'custom-cancel-btn'
      }
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const { error } = await supabase.from("notices").delete().eq("id", id);
          
          if (error) throw error;

          // Simple Success Message
          Swal.fire({
            title: "Deleted!",
            icon: "success",
            timer: 1500,
            showConfirmButton: false
          });

          fetchNotices();
        } catch (error) {
          Swal.fire("Error", "Could not delete notice", "error");
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
                <Typography variant="small" className="font-bold text-gray-600 mb-2">Select Classes:</Typography>
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

              <div className="flex gap-4 pt-4 justify-end">
                <Button type="submit" color="blue" className="px-10 bg-green-400">
                  {editId ? "Update Notice" : "Add Notice"}
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
                All Notices
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
                        className="px-6 py-2"
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
                      <th className="p-4 border-b border-blue-gray-100"><Typography variant="small" className="font-bold text-blue-900 uppercase opacity-70">Title</Typography></th>
                      <th className="p-4 border-b border-blue-gray-100"><Typography variant="small" className="font-bold text-blue-900 uppercase opacity-70">Category</Typography></th>
                      <th className="p-4 border-b border-blue-gray-100"><Typography variant="small" className="font-bold text-blue-900 uppercase opacity-70">Classes</Typography></th>
                      <th className="p-4 border-b border-blue-gray-100"><Typography variant="small" className="font-bold text-blue-900 uppercase opacity-70">Created At</Typography></th>
                      <th className="p-4 border-b border-blue-gray-100 text-center"><Typography variant="small" className="font-bold text-blue-900 uppercase opacity-70">Actions</Typography></th>
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
                                <IconButton variant="text" color="black" onClick={() => handleEdit(n)}>
                                  <PencilSquareIcon className="h-4 w-4" />
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