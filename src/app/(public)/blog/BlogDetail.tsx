import BlogComponent from "@/components/Blog/BlogComponent";
import { getBlogById } from "@/lib/blogs";

export default async function BlogDetail({ id }: { id: string }) {
    const blog = await getBlogById(id);

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
