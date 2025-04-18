// Auto-generated API route for lessonPlans
import { NextResponse } from "next/server";
// import { getAllLessonPlans } from "@/lib/controllers/lessonPlans";
export async function GET() {
    // const data = await getAllLessonPlans();
    // return NextResponse.json(data);
    return NextResponse.json({ message: "GET lessonPlans" });
}
export async function POST(request) {
    const body = await request.json();
    return NextResponse.json({ message: "POST lessonPlans", data: body });
}
