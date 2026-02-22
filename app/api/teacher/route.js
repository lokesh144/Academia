import {supabase} from "../../../lib/supabase";
import { v4 as uuidv4 } from "uuid";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const fname = formData.get("fname");
    const lname = formData.get("lname");
    const email = formData.get("email");
    const contact = formData.get("contact");
    const gender = formData.get("gender");
    const education = formData.get("education");

    const documentFront = formData.get("document_front");
    const documentBack = formData.get("document_back");
    const academicDegree = formData.get("academic_degree");

    // ✅ Required Validation
    if (
      !fname ||
      !lname ||
      !email ||
      !contact ||
      !gender ||
      !education ||
      !academicDegree
    ) {
      return Response.json(
        { error: "All required fields must be filled." },
        { status: 400 }
      );
    }

    let documentFrontPath = null;
    let documentBackPath = null;
    let academicDegreePath = null;

    // 🔹 Upload Academic Degree (Required)
    if (academicDegree) {
      const fileExt = academicDegree.name.split(".").pop();
      const fileName = `${uuidv4()}.${fileExt}`;
      const filePath = `academic/${fileName}`;

      const { error } = await supabase.storage
        .from("teacher-documents")
        .upload(filePath, academicDegree, {
          contentType: academicDegree.type,
        });

      if (error) throw error;

      academicDegreePath = filePath;
    }

    // 🔹 Upload Document Front (Optional)
    if (documentFront && documentFront.size > 0) {
      const fileExt = documentFront.name.split(".").pop();
      const fileName = `${uuidv4()}.${fileExt}`;
      const filePath = `citizenship/front-${fileName}`;

      const { error } = await supabase.storage
        .from("teacher-documents")
        .upload(filePath, documentFront, {
          contentType: documentFront.type,
        });

      if (error) throw error;

      documentFrontPath = filePath;
    }

    // 🔹 Upload Document Back (Optional)
    if (documentBack && documentBack.size > 0) {
      const fileExt = documentBack.name.split(".").pop();
      const fileName = `${uuidv4()}.${fileExt}`;
      const filePath = `citizenship/back-${fileName}`;

      const { error } = await supabase.storage
        .from("teacher-documents")
        .upload(filePath, documentBack, {
          contentType: documentBack.type,
        });

      if (error) throw error;

      documentBackPath = filePath;
    }

    // 🔹 Insert into Database
    const { error: insertError } = await supabase
      .from("new-teachers")
      .insert([
        {
          firstName: fname,
          lastName: lname,
          Email: email,
          Contact: contact,
          Gender: gender,
          Education: education,
          document_front: documentFrontPath,
          document_back: documentBackPath,
          academic_degree: academicDegreePath,
        },
      ]);

    if (insertError) throw insertError;

    return Response.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
