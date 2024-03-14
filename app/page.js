import BlogCard from "@/components/BlogCard";
import CardList from "@/components/CardList";
import Categories from "@/components/Categories";
import Featured from "@/components/Featured";
import Menu from "@/components/Menu";
import { blogs } from "@/lib/data";


export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  return (
    // <main className=" items-center w-full">
    //   <div className="h-full w-[85%] m-0 mt-9 flex flex-wrap gap-28">
    //     {blogs.map((blog) => (
    //       <BlogCard key={blog.title} blog={blog} />
    //     ))}
    //   </div>

    // </main>
    <div className='min-h-screen  text-white'>
      <Featured />
      <Categories />
      <div className="flex flex-wrap  gap-[50px] justify-center">
        <CardList page={page} />
        <Menu />
      </div>
    </div>
  )
}
