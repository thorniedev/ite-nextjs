import BlogComponent from "@/components/Blog/BlogComponent";
import { BlogType } from "@/lib/Types/BlogType";

async function fetchBlogById(id: string): Promise<BlogType> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return res.json();
}

export default async function BlogDetail({
    params
}: { params: { id: string } }) {
    
    const blog = await fetchBlogById(params.id);

    return (
        <div className="container mx-auto py-8">
            <h1>Blog Detail</h1>
            <BlogComponent
                id={blog.id}
                title={blog.title}
                body={blog.body}
                views={blog.views}
            />
        </div>
    );
}
