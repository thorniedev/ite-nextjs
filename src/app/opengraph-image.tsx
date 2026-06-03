import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} social preview`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f8fafc",
          color: "#0f172a",
          padding: "72px",
          border: "24px solid #0f172a",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            fontWeight: 700,
            color: "#2563eb",
          }}
        >
          NEXT.JS APP ROUTER
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <div style={{ display: "flex", fontSize: 86, fontWeight: 800 }}>
            {siteConfig.name}
          </div>
          <div
            style={{
              display: "flex",
              maxWidth: "880px",
              fontSize: 34,
              lineHeight: 1.35,
              color: "#475569",
            }}
          >
            Products, blog posts, and modern Next.js examples.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#64748b" }}>
          {siteConfig.url}
        </div>
      </div>
    ),
    size,
  );
}
