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
        <svg width="108" height="108" viewBox="-3 -3 66 66" fill="none">
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
      </div>
    ),
    { ...size }
  );
}
