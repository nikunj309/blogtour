"use client"

// import { cloudinary } from '@/utils/cloudinary'
// const cloudinary = require('cloudinary').v2;
// import cloudinary from 'cloudinary';
import { faImage } from '@fortawesome/free-regular-svg-icons'
import { faCloudArrowUp, faPlus, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSession } from 'next-auth/react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import { stringify } from 'postcss'
import { useEffect, useState } from 'react'
// import ReactQuill from 'react-quill'
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

const WritePage = () => {
    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState('');
    const [catSlug, setCatSlug] = useState('');
    const [file, setFile] = useState(null);
    // const [media, setMedia] = useState("");
    const [value, setValue] = useState('');

    const { status } = useSession();
    const router = useRouter()

  

    // cloudinary.config({
    //     cloud_name: process.env.YOUR_CLOUD_NAME,
    //     api_key: process.env.YOUR_API_KEY,
    //     api_secret: process.env.YOUR_API_SECRET,
    // });


    // useEffect(() => {
    //     const upload = async () => {
    //         const uploadRes =await cloudinary.uploader.upload(file, {
    //             upload_preset: "owejpqbm"
    //         })
    //         setMedia(uploadRes.secure_url)
    //     }
    //     file && upload()
    // }, [file])


    if (status === "loading") {
        return <div>Loading...</div>
    }
    if (status === "unauthenticated") {
        router.push("/")
    }

    const OpenPlus = () => {
        setOpen(!open);
    }




    const slugify = (str) =>
         
        str
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, "");

    const slugify2 = (str) =>
         
        str
            .slice(3,str.length-4);


   

    const handleSubmit = async () => {
        // let formData = new FormData();
        // formData.append("file", file);
        // const result = await cloudinary.uploader.upload(formData, {
        //     upload_preset: "owejpqbm"
        // });
        const mediaUrl =  await imageUpload()
        const res = await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify({
                title,
                desc: slugify2(value),
                img: mediaUrl,
                slug: slugify(title),
                catSlug: catSlug || "style"
            })
        })

        if(!res.ok) {
            return Error(message.Error);
        }

        router.push('/')
    }


    const imageUpload = async ()=>{
        const data =  new FormData()
        data.append('file',file)
        data.append('upload_preset',"owejpqbm")
        data.append('cloud_name','dz2xtd4vs')
        const res = await fetch('https://api.cloudinary.com/v1_1/dz2xtd4vs/image/upload',{
          method:"POST",
          body:data
        })
        const res2  = await res.json()
        console.log(res2);
        return res2.url
   }


    return (
        <div className='border-red-600 rounded-2xl border-solid p-3 border-2'>
            <input
                type='text'
                placeholder='Title'
                onChange={(e) => setTitle(e.target.value)}
                className='p-12 text-6xl outline-none border-none bg-transparent w-full'
            />
            <select
                className='mb-[50px] py-[10px] px-5 ml-[50px] max-w-max bg-gray-900 border-[1px]'
                onChange={(e) => setCatSlug(e.target.value)}
            >
                <option value="style">style</option>
                <option value="fashion">fashion</option>
                <option value="food">food</option>
                <option value="technology">technology</option>
                <option value="jobs">jobs</option>
                <option value="code">code</option>
            </select>
            <div className='flex gap-5 h-[500px] flex-col'>
                <button className='write_openplus' onClick={OpenPlus} >
                    <FontAwesomeIcon icon={faPlus} />
                </button>
                {open && (
                    <div className='flex gap-5 w-full z-[999] absolute ml-14' >
                        <input
                            type="file"
                            id="image"
                            onChange={(e) => setFile(e.target.files[0])}
                            style={{ display: "none" }}
                        />
                        <button className='write_openplus'>
                            <label htmlFor='image'>
                                <FontAwesomeIcon icon={faImage} />
                            </label>
                        </button>
                        <button className='write_openplus'>
                            <FontAwesomeIcon icon={faCloudArrowUp} />
                        </button>
                        <button className='write_openplus'>
                            <FontAwesomeIcon icon={faVideo} />
                        </button>
                    </div>
                )}
                <ReactQuill
                    theme="snow"
                    value={value}
                    onChange={setValue}
                    placeholder="Enter Description"
                    className='w-full h-72 mt-0 mb-0'
                />
            </div>
            <button className='pagination_btn' onClick={handleSubmit}>Publish</button>
        </div>
    )
}

export default WritePage
