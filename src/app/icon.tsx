import { ImageResponse } from "next/og";

// Generated from this site's own BrandIcon (see components/BrandMark.tsx)
// so the favicon matches the header mark and brand palette exactly,
// instead of every site sharing one generic icon.
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f1214",
          color: "#5c6e8e",
          borderRadius: 7,
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3.5" y="8" width="10" height="12" rx="0.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M13.5 20h4a2.5 2.5 0 0 0 2.5-2.5V12" stroke="currentColor" strokeWidth="1.4" strokeDasharray="1.6 2" />
      <path d="M14 8h6M14 8v6" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      </div>
    ),
    size
  );
}
