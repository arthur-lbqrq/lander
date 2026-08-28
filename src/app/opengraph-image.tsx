import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadSpaceGrotesk() {
  const css = await fetch(
    "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500&text=lander.co"
  ).then((res) => res.text());
  const match = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/);
  if (!match) throw new Error("Space Grotesk font source not found");
  return fetch(match[1]).then((res) => res.arrayBuffer());
}

export default async function OpengraphImage() {
  const spaceGrotesk = await loadSpaceGrotesk();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0A0A",
          color: "#FAFAFA",
        }}
      >
        <svg
          width="96"
          height="96"
          viewBox="-3 -3 66 66"
          fill="none"
          style={{ marginBottom: 32 }}
        >
          <rect
            x="0"
            y="0"
            width="60"
            height="60"
            rx="14"
            fill="none"
            stroke="#FAFAFA"
            strokeWidth="5"
          />
          <rect x="0" y="0" width="60" height="16" rx="14" fill="#FAFAFA" />
          <path
            d="M30 26L30 48M30 48L20 38M30 48L40 38"
            stroke="#2D5CFF"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div
          style={{
            display: "flex",
            fontFamily: "Space Grotesk",
            fontWeight: 500,
            fontSize: 72,
            letterSpacing: -2.2,
          }}
        >
          lander
          <span style={{ color: "#2D5CFF" }}>.co</span>
        </div>
        <div style={{ display: "flex", marginTop: 20, fontSize: 28, color: "#68686C" }}>
          Landing pages rápidas, feitas para converter.
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Space Grotesk", data: spaceGrotesk, weight: 500, style: "normal" },
      ],
    }
  );
}
