import bcrypt from "bcrypt";
import prismadb from "../../lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    if (req.method !== "POST") {
      return NextResponse.json({ status: 405 }).end();
    }
    const body = await req.json();
    const { email, username, password } = body;

    const existingUser = await prismadb.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "User with same email already exist" },
        { status: 422 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prismadb.user.create({
      data: {
        email,
        name: username,
        hashedPassword,
        emailVerified: new Date(),
      },
    });
    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: `Something went wrong: ${error}` },
      { status: 400 }
    );
  }
}
