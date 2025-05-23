// app/api/upload/route.js
import { NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export async function OPTIONS() {
  const response = new NextResponse(null, { status: 204 });
  response.headers.set("Access-Control-Allow-Origin", "*"); // or your domain
  response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return response;
}

export async function POST(req) {
  try {
    // Parse formData from the request
    const formData = await req.formData();
    const name = formData.get("name");
    const type = formData.get("type");

    if (!name || !type) {
      return NextResponse.json(
        { error: "Missing name or type in formData" },
        { status: 400 }
      );
    }

    const timestamp = Date.now();
    const fileExtension = name.split(".").pop();
    const baseName = name.replace(/\s+/g, "_").replace(/\.[^.]+$/, "");
    const fileKey = `public/${baseName}-${timestamp}.${fileExtension}`;

    const command = new PutObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET,
      Key: fileKey,
      ContentType: type,
    });

    const signedUrl = await getSignedUrl(s3, command, { expiresIn: 60 });

    const response = NextResponse.json({
      uploadUrl: signedUrl,
      fileUrl: `https://${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileKey}`,
    });
    return response;
  } catch (err) {
    console.error("Error generating pre-signed URL:", err);
    return NextResponse.json(
      { error: "Failed to generate upload URL" },
      { status: 500 }
    );
  }
}
