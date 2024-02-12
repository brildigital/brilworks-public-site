import { NextResponse } from "next/server";
import prismadb from "../../lib/prismadb";

export async function GET(req, res) {
  try {
    const users = await prismadb.user.findMany({
      where: {
        email: {
          not: process.env.SENDGRID_DEFAULT_FROM_EMAIL,
        },
      },
    });

    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  } finally {
    await prismadb.$disconnect();
  }
}
