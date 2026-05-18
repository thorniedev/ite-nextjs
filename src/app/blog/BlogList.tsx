import BlogComponent from "@/components/Blog/BlogComponent";
import { BlogType } from "@/lib/Types/BlogType";

export default function BlogList() {

  const blogs:BlogType[] = [
    {
      profile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "John Doe",
      position: "Software Engineer"
    },
    {
      profile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Jane Doe",
      position: "Product Manager"
    },
    {
      profile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Bob Smith",
      position: "UX Designer"
    },
    {
      profile: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Alice Johnson",
      position: "Data Scientist"
    }
  ]
  
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold text-center">Blog List</h1>
      <div className="container bg-blue-400 mx-auto py-8 grid grid-cols-4 gap-4">
        {
        blogs?.map((blog, index) => (
          // <BlogComponent key={index} {...blog} /> or
          <BlogComponent 
            key={index}
            profile={blog.profile}
            name={blog.name}
            position={blog.position}
          />
        ))
      }
      </div>
    </div>
  );
}
