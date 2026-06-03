"use client";

export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          color: "#111827",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <title>Application error</title>
        <main style={{ maxWidth: 560, padding: 32, textAlign: "center" }}>
          <p style={{ color: "#6b7280", fontWeight: 700, letterSpacing: 2 }}>
            ERROR 500
          </p>
          <h1 style={{ margin: "12px 0", fontSize: 42 }}>Application error</h1>
          <p style={{ color: "#4b5563", lineHeight: 1.6 }}>
            The application could not load. Try again to recover the page.
          </p>
          {error.digest ? (
            <p style={{ color: "#6b7280", fontSize: 12 }}>
              Reference: {error.digest}
            </p>
          ) : null}
          <button
            type="button"
            onClick={unstable_retry}
            style={{
              marginTop: 20,
              border: 0,
              borderRadius: 8,
              background: "#111827",
              color: "#ffffff",
              cursor: "pointer",
              fontSize: 15,
              fontWeight: 600,
              padding: "12px 18px",
            }}
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
