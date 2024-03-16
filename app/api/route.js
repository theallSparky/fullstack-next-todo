import { NextResponse } from "next/server";

const LoadDB = async () => {
  await ConnectDB();
};

export async function GET(request) {
  return NextResponse.json({ msg: "get method hit" });
}
