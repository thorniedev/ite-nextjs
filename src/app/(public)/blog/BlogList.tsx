
'use client';

import BlogComponent from "@/components/Blog/BlogComponent";
import { BlogType } from "@/lib/Types/BlogType";
import Link from "next/link";


type BlogResponse = {
    posts: BlogType[];
  }

const url = process.env.NEXT_PUBLIC_API_URL;

async function fetchBlogs(): Promise<BlogType[]> {
    try {
      const response = await fetch(`${url}/posts`);

      const data: BlogResponse = await response.json();
      return data.posts;
  
    } catch (error) {
      throw error;
    }
}

const blogs = await fetchBlogs();

// console.log(blogs)

export default function BlogList() {

  // const blogs:BlogType[] = [
  //   {
  //     profile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     name: "John Doe",
  //     position: "Software Engineer"
  //   },
  //   {
  //     profile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     name: "Jane Doe",
  //     position: "Product Manager"
  //   },
  //   {
  //     profile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     name: "Bob Smith",
  //     position: "UX Designer"
  //   },
  //   {
  //     profile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     name: "Alice Johnson",
  //     position: "Data Scientist"
  //   }
  // ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold text-center">Blog List</h1>
      <div className="container bg-gray-400 mx-auto py-8 grid grid-cols-4 gap-4">
        {
        blogs?.map((blog, index) => (
          // <BlogComponent key={index} {...blog} /> or
          <Link key={blog.id} href={`/blog/${blog.id}`}>
            <BlogComponent 
            key={index}
            id={blog.id}
            title={blog.title}
            body={blog.body}
            views={blog.views}
          />
          </Link>
          
        ))
      }
      </div>
    </div>
  );
}
