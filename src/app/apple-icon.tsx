import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0A0A",
        }}
      >
        <svg width="112" height="112" viewBox="0 0 24 24" fill="none">
          <rect
            x="2.5"
            y="4"
            width="19"
            height="16"
            rx="2.5"
            stroke="#FAFAFA"
            strokeWidth="1.6"
          />
          <line
            x1="2.5"
            y1="8.4"
            x2="21.5"
            y2="8.4"
            stroke="#FAFAFA"
            strokeWidth="1.6"
            strokeOpacity="0.5"
          />
          <path
            d="M13 10L19 13.2L15.7 14.35L17.6 18.2L16 19L14.1 15.15L11.9 17Z"
            fill="#2D5CFF"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
