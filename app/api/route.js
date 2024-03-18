import { NextResponse } from "next/server";

const LoadDB = async () => {
  await ConnectDB();
};

export async function GET(request) {
  return NextResponse.json({ msg: "get method hit" });
}

export async function POST(request) {
  const { title, description } = await request.json();

  await TodoModel.create({
    title,
    description,
  });

  return NextResponse.json({ msg: "Todo created!" });
}
