"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
          <div style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Something went wrong!</h2>
            <button
              onClick={() => reset()}
              style={{
                padding: "0.75rem 1.5rem",
                fontSize: "1rem",
                backgroundColor: "#000",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
