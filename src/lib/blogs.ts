import { BlogType } from "@/lib/Types/BlogType";
import { cache } from "react";

type BlogResponse = {
  posts: BlogType[];
};

const DEFAULT_BLOG_API_URL = "https://dummyjson.com";

function getBlogApiUrl(path: string) {
  const baseUrl =
    process.env.BLOG_API_URL ||
    process.env.NEXT_PUBLIC_API_URL ||
    DEFAULT_BLOG_API_URL;

  return new URL(path, `${baseUrl.replace(/\/+$/, "")}/`);
}

export async function getBlogs() {
  const response = await fetch(getBlogApiUrl("posts"));

  if (!response.ok) {
    throw new Error(`Failed to fetch blogs: ${response.status}`);
  }

  const data = (await response.json()) as BlogResponse;

  return data.posts;
}

export const getBlogById = cache(async (id: string) => {
  const response = await fetch(getBlogApiUrl(`posts/${id}`));

  if (!response.ok) {
    throw new Error(`Failed to fetch blog ${id}: ${response.status}`);
  }

  return (await response.json()) as BlogType;
});
