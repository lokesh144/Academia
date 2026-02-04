import { supabase } from "@/lib/supabaseClient";

export default async function TeachersPage() {
  const { data: teachers, error } = await supabase
    .from("teachers")
    .select(`
      id,
      fname,
      lname,
      email,
      contact,
      gender,
      education,
      academic_degree_url,
      document_front_url,
      document_back_url
    `);

  if (error) {
    return (
      <div className="p-6 text-red-600 font-semibold">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen text-black">
      <h1 className="text-2xl font-extrabold mb-6 text-black">
        Teacher Applications
      </h1>

      <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
        <table className="w-full border-collapse text-black text-sm">

          {/* TABLE HEADER */}
          <thead>
            <tr className="bg-gray-200 text-black uppercase">
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Email</th>
              <th className="p-3 border">Contact</th>
              <th className="p-3 border">Gender</th>
              <th className="p-3 border">Education</th>
              <th className="p-3 border">Degree</th>
              <th className="p-3 border">Document Front</th>
              <th className="p-3 border">Document Back</th>
            </tr>
          </thead>

          {/* TABLE BODY */}
          <tbody>
            {teachers?.length === 0 ? (
              <tr>
                <td colSpan="8" className="p-4 text-center border text-black">
                  No applications found
                </td>
              </tr>
            ) : (
              teachers?.map((t) => (
                <tr
                  key={t.id}
                  className="border-b hover:bg-gray-100 text-black"
                >
                  <td className="p-3 border font-semibold">
                    {t.fname} {t.lname}
                  </td>
                  <td className="p-3 border">{t.email}</td>
                  <td className="p-3 border">{t.contact}</td>
                  <td className="p-3 border">{t.gender}</td>
                  <td className="p-3 border">{t.education}</td>
                  <td className="p-3 border">{t.academic_degree}</td>

                  <td className="p-3 border">
                    {t.document_front ? (
                      <a
                        href={t.document_front}
                        target="_blank"
                        className="text-blue-600 underline"
                      >
                        View
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>

                  <td className="p-3 border">
                    {t.document_back ? (
                      <a
                        href={t.document_back}
                        target="_blank"
                        className="text-blue-600 underline"
                      >
                        View
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
}
