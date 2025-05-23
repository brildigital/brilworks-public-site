import { NextResponse } from "next/server";
import { S3Client, ListObjectsV2Command, _Object } from "@aws-sdk/client-s3";

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
    console.log("response", response);
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

    return NextResponse.json({ assets: urls });
  } catch (error) {
    console.error("Error listing S3 objects:", error);
    return NextResponse.json(
      { error: "Failed to fetch documents" },
      { status: 500 }
    );
  }
}
