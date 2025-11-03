import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/db";
import ChatSession from "../../../../models/ChatSession";

// GET → Fetch all chat sessions
export async function GET(req) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const id = Number(searchParams.get("id"));
    if (id) {
      const chat = await ChatSession.findOne({ id });
      return NextResponse.json(chat);
    }
    const sessions = await ChatSession.find().sort({ updatedAt: -1 });
    return NextResponse.json(sessions);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch chats" },
      { status: 500 }
    );
  }
}

// POST → Create or append chat messages
export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();

    const { id, messages } = body;

    if (!id || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "id and messages[] are required" },
        { status: 400 }
      );
    }

    // Check if chat session exists
    let chat = await ChatSession.findOne({ id });

    if (!chat) {
      chat = await ChatSession.create({ id, messages });
    } else {
      // Append new messages
      chat.messages.push(...messages);
      await chat.save();
    }

    return NextResponse.json(chat);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to save chat" }, { status: 500 });
  }
}

// PUT → Update chat (append or modify messages)
export async function PUT(req) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const id = Number(searchParams.get("id"));
    const { messages } = await req.json();

    if (!Array.isArray(messages)) {
      return NextResponse.json(
        { error: "messages[] required" },
        { status: 400 }
      );
    }

    let chat = await ChatSession.findOne({ id });

    if (!chat) {
      chat = await ChatSession.create({ id, messages });
    } else {
      chat.messages.push(...messages);
      await chat.save();
    }

    return NextResponse.json(chat);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Error updating chat" }, { status: 500 });
  }
}

// DELETE → Remove chat by ID
export async function DELETE(req) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const id = Number(searchParams.get("id"));
    await ChatSession.deleteOne({ id });
    return NextResponse.json({ success: true, message: "Chat deleted" });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to delete chat" },
      { status: 500 }
    );
  }
}
