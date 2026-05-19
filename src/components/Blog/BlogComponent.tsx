import { BlogType } from "@/lib/Types/BlogType";

// Distructuring props
export default function BlogComponent({ id, title, body, views } : BlogType) {
  return (
      <div className="flex flex-col items-center gap-2">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h1 className="font-bold">{title}</h1>
          <p className="text-gray-500">{id}</p>
          <p className="text-gray-500">{body}</p>
          <p className="text-lg font-bold text-black">Views: {views}</p>
        </div>
      </div>
  );
}
