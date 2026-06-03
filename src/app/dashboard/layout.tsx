import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Manage products, blogs, and settings.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DashboardLayout({
  children,
  products,
  setting,
  blogs,
  modal,
}: {
  children: React.ReactNode;
  products: React.ReactNode;
  setting: React.ReactNode;
  blogs: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {modal}

      {/* Sidebar */}
      <aside className="w-64 border-r p-4 bg-gray-100">
        <h1 className="text-xl font-bold mb-4">Dashboard</h1>

        <nav className="space-y-2">
          <div>🏠 Home</div>
          <div>Products</div>
          <div>Settings</div>
          <div>Blogs</div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {children}

        {/* Parallel Route */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Blogs (Parallel Route)</h2>
          {blogs}
        </div>

        {/* Parallel Route */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Products (Parallel Route)</h2>
          {products}
        </div>

        {/* Parallel Route */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Settings (Parallel Route)</h2>
          {setting}
        </div>
      </main>
    </div>
  );
}
