import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          viewBox="0 0 24 24"
          fill="none"
          style={{ marginBottom: 32 }}
        >
          <rect
            x="2.5"
            y="4"
            width="19"
            height="16"
            rx="2.5"
            stroke="#FAFAFA"
            strokeWidth="1.4"
          />
          <line
            x1="2.5"
            y1="8.4"
            x2="21.5"
            y2="8.4"
            stroke="#FAFAFA"
            strokeWidth="1.4"
            strokeOpacity="0.5"
          />
          <path
            d="M13 10L19 13.2L15.7 14.35L17.6 18.2L16 19L14.1 15.15L11.9 17Z"
            fill="#2D5CFF"
          />
        </svg>
        <div style={{ display: "flex", fontSize: 72, fontWeight: 700, letterSpacing: -1 }}>
          lander.co
        </div>
        <div style={{ display: "flex", marginTop: 20, fontSize: 28, color: "#68686C" }}>
          Landing pages rápidas, feitas para converter.
        </div>
      </div>
    ),
    { ...size }
  );
}
