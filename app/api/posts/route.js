import { getAuthSession } from "@/utils/auth";
// import { cloudinary, storage } from "@/utils/cloudinary";
import prisma from "@/utils/connect";
// import multer from "multer";
import { NextResponse } from "next/server";
// import nextConnect from 'next-connect';

// export const GET = async (req) => {
//     const { searchParams } = new URL(req.url);

//     const page = searchParams.get("page");
//     const cat = searchParams.get("cat");

//     const POST_PER_PAGE = 2;
//     const query = {
//         take: POST_PER_PAGE,
//         skip: POST_PER_PAGE * (page - 1),
//         where: {
//             ...(cat && { catSlug: cat })
//         }
//     }
//     try {
//         const [posts, count] = await prisma.$transaction([
//             prisma.post.findMany(query),
//             prisma.post.count({where:query.where}),
//         ])

//         return new NextResponse(JSON.stringify({ posts, count }, { status: 500 }))
//     } catch (error) {
//         console.log(error);
//         return new NextResponse(
//             JSON.stringify({ message: "something went wrong!" }, { status: 500 })
//         )
//     }
// }

// import cloudinary from 'cloudinary';

// cloudinary.config({
//   cloud_name: process.env.YOUR_CLOUD_NAME,
//   api_key:process.env.YOUR_API_KEY,
//   api_secret: process.env.YOUR_API_SECRET,
// });

export const GET = async (req) => {
    const { searchParams } = new URL(req.url);

    const page = searchParams.get("page");
    const cat = searchParams.get("cat");

    const POST_PER_PAGE = 4;
    const query = {
        take: POST_PER_PAGE,
        skip: POST_PER_PAGE * (page - 1),
        where: {
            ...(cat && { catSlug: cat })
        }
    }
    try {
        const [posts, count] = await prisma.$transaction([
            prisma.post.findMany(query),
            prisma.post.count({ where: query.where }),
        ])

        return new NextResponse(JSON.stringify({ posts, count }, { status: 500 }))
    } catch (error) {
        console.log(error);
        return new NextResponse(
            JSON.stringify({ message: "something went wrong!" }, { status: 500 })
        )
    }
}

//upload post

// const upload = multer({ storage })





export const POST = async (req) => {
    const session = await getAuthSession();
    // await use(upload.single('file'));
    // const { originalname, url, public_id } = req.file;

    if (!session) {
        return new NextResponse(
            JSON.stringify({ message: "not Authenticated" }, { status: 401 })
        )
    }

    try {
        const body = await req.json()
        // const result = await cloudinary.uploader.upload(body.img);
        // res.json({
        //     img: result.secure_url, // https url
        //     public_id: result.public_id,
        //   });
        // console.log(body.img);
        const post = await prisma.post.create({
            data: {
                ...body,
                userEmail: session.user.email
            },
        })
        return new NextResponse(JSON.stringify(post, { status: 200 }))
    } catch (error) {
        console.log(error);
        return new NextResponse(
            JSON.stringify({ message: "something went wrong!" }, { status: 500 })
        )
    }
}