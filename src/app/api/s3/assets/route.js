import { NextResponse } from "next/server";
import {
  S3Client,
  ListObjectsV2Command,
  _Object,
  PutObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

async function listAllObjects(bucketName, folderName) {
  let isTruncated = true;
  let ContinuationToken = undefined;
  const allObjects = [];

  while (isTruncated) {
    const command = new ListObjectsV2Command({
      Bucket: bucketName,
      Prefix: folderName,
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

    const assetFolder = "assets";
    const objects = await listAllObjects(bucketName, assetFolder);

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
    const sanitizeFileName = (filename) => {
      return filename
        .trim()
        .replace(/\s+/g, "_") // Replace spaces with underscores
        .replace(/[+,]/g, "") // Remove + and ,
        .replace(/[^\w.-]/g, "") // Remove other unsafe characters
        .replace(/__+/g, "_"); // Collapse double underscores
    };

    const fileExtension = name.split(".").pop();

    const baseName = sanitizeFileName(name.replace(/\.[^.]+$/, ""));
    const fileKey = `assets/${baseName}-${timestamp}.${fileExtension}`;

    const command = new PutObjectCommand({
      Bucket: process.env.AWS_S3_BUCKET,
      Key: fileKey,
      ContentType: type,
    });

    const signedUrl = await getSignedUrl(s3, command, { expiresIn: 60 });

    return new NextResponse(
      JSON.stringify({
        uploadUrl: signedUrl,
        fileUrl: `https://${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_REGION}.amazonaws.com/${fileKey}`,
      }),
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );
  } catch (err) {
    console.error("Error generating pre-signed URL:", err);
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
export async function DELETE(req) {
  try {
    const bucketName = process.env.AWS_S3_BUCKET;
    const { searchParams } = new URL(req.url);
    const key = searchParams.get("key");
    if (!key || typeof key !== "string") {
      return new NextResponse(
        JSON.stringify({
          error: "Missing or invalid 'key' in query parameters",
        }),
        {
          status: 400,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );
    }

    const command = new DeleteObjectCommand({
      Bucket: bucketName,
      Key: key,
    });

    await s3.send(command);

    return new NextResponse(
      JSON.stringify({ message: "File deleted successfully", deletedKey: key }),
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error deleting S3 object:", error);

    return new NextResponse(
      JSON.stringify({ error: "Failed to delete file" }),
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
