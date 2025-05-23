import { NextResponse } from "next/server";
import {
  S3Client,
  ListObjectsV2Command,
  _Object,
  PutObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

async function listAllObjects(Bucket, Prefix = "public") {
  let isTruncated = true;
  let ContinuationToken = undefined;
  const allObjects = [];

  while (isTruncated) {
    const command = new ListObjectsV2Command({
      Bucket,
      Prefix,
      ContinuationToken,
    });

    const response = await s3.send(command);

    const objects =
      response.Contents?.filter((obj) => obj.Key && !obj.Key.endsWith("/")) ??
      [];

    allObjects.push(...objects);

    isTruncated = response.IsTruncated ?? false;
    ContinuationToken = response.NextContinuationToken;
  }

  // Sort by LastModified descending (latest first)
  return allObjects.sort(
    (a, b) =>
      (b.LastModified?.getTime() ?? 0) - (a.LastModified?.getTime() ?? 0)
  );
}

export async function GET() {
  try {
    const bucketName = process.env.AWS_S3_BUCKET;
    const region = process.env.AWS_REGION;

    const objects = await listAllObjects(bucketName);

    const urls = objects.map(
      (obj) => `https://${bucketName}.s3.${region}.amazonaws.com/${obj.Key}`
    );

    return new NextResponse(JSON.stringify({ assets: urls }), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // Adjust this if you want specific origins
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error listing S3 objects:", error);
    return new NextResponse(
      JSON.stringify({ error: "Failed to fetch documents" }),
      {
        status: 500,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );
  }
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
