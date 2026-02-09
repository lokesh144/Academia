import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";
import { blob } from "stream/consumers";

async function uploadFile(file, name, meme){
  if(!file) return null;

  console.log(name, meme);

    const res =  await supabase.from("blob").insert([
      {
        blob: file,
        filename: name,
        meme
      }
    ]).select('id')

    console.log(res, 'response')
}

export async function POST(req) {
  try {
    // for multipart we get formdata instead of parsing json
    const formData = await req.formData();



    const frontDocument = formData.get("file");
    const bytes = await frontDocument.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const frontDocumentId = await uploadFile(buffer, frontDocument.name, frontDocument.type);

    if(frontDocumentId){
      return NextResponse.json({
        message: 'all good'
      })
    }else{
      return NextResponse.json({
        message: 'messed up'
      })
    }

    // const { data, error } = await supabase
    //   .from("teachers")
    //   .insert([
    //     {
    //       fname,
    //       lname,
    //       email,
    //       contact,
    //       gender,
    //       education,
    //       academic_degree_url,
    //       document_front_url,
    //       document_back_url,
    //     },
    //   ])
    //   .select(); // IMPORTANT: returns inserted row

    // if (error) {
    //   return NextResponse.json(
    //     { error: error.message },
    //     { status: 400 }
    //   );
    // }

    // return NextResponse.json(
    //   { success: true, data },
    //   { status: 200 }
    // );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}