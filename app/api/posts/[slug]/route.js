import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

//fetch single post or detailes page of post or blog

export const GET = async (req, { params }) => {
    const { slug } = params
    try {
        const post = await prisma.post.update({
            where: { slug },
            data: { views: { increment: 1 } },
            include: { user: true }
        })
        return new NextResponse(JSON.stringify(post, { status: 500 }))
    } catch (error) {
        console.log(error);
        return new NextResponse(
            JSON.stringify({ message: "something went wrong!" }, { status: 500 })
        )
    }
}