import bcrypt from "bcrypt";
import prismadb from "../../lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    if (req.method !== "POST") {
      return NextResponse.json({ status: 405 }).end();
    }
    const { token, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 12);

    const validToken = await prismadb.user.findFirst({
      where: {
        verifyToken: token,
      },
    });

    const validResetToken = await prismadb.user.findFirst({
      where: {
        forgotPasswordToken: token,
      },
    });

    if (!validToken && !validResetToken) {
      return NextResponse.json(
        { error: "User not invited or requested" },
        { status: 422 }
      );
    }

    const updateUserParams = {
      where: { email: validResetToken?.email || validToken?.email },
      data: {
        password: hashedPassword,
        isVerified: !!validToken, // Set isVerified to true only if validToken exists
      },
    };

    const updatedUser = await prismadb.user.update(updateUserParams);

    const logMessage = validResetToken
      ? "Reset password for forget user"
      : "Set password for user";

    return NextResponse.json({ updatedUser }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: `Something went wrong: ${error}` },
      { status: 400 }
    );
  }
}
