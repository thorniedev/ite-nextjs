import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200​ text-center">
        ចូល​ Team អត់ ចូល អត់? 
        Dom and visual DOM manipulation in Next.js
      </h1>
    </div>
  );
}
