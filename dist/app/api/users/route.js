// Auto-generated API route for users
import { NextResponse } from "next/server";
// import { getAllUsers } from "@/lib/controllers/users";
export async function GET() {
    // const data = await getAllUsers();
    // return NextResponse.json(data);
    return NextResponse.json({ message: "GET users" });
}
export async function POST(request) {
    const body = await request.json();
    return NextResponse.json({ message: "POST users", data: body });
}
