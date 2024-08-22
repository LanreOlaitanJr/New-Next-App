import BlogModel from "@/models/BlogModel";
import connectToDatabase from "@/config/db";

// Connect To DB
const connet = async () => {
    await connectToDatabase()
}

// Handle Post Request
export const POST = async (req) => {
    await connet()
    try {
        const body = await req.json()
        const blog = await BlogModel.create(body)
        return new Response(JSON.stringify({success: true, data: blog, }), {
            status: 201,
            headers: {"Content-Type": "application/json"}
        })
    } catch (error) {
        return new Response(JSON.stringify({success: false}), {
            status: 400,
            headers: {"Content-Type": "application/json"}
        })
    }
}