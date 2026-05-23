import { ImageResponse } from "next/og";

export const alt =
  "soma / startup — a one-day startup challenge for South Orange + Maplewood students";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
          backgroundColor: "#f7f3e8",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "#0e0e0c",
            fontSize: 150,
            fontWeight: 700,
            letterSpacing: -8,
          }}
        >
          <div style={{ display: "flex" }}>soma</div>
          <div style={{ display: "flex", color: "#ee4a2a", fontWeight: 400, padding: "0 10px" }}>
            /
          </div>
          <div style={{ display: "flex" }}>startup</div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 27,
            letterSpacing: 8,
            color: "#6b675e",
          }}
        >
          ONE-DAY PITCH COMPETITION
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 14,
            fontSize: 27,
            letterSpacing: 8,
            color: "#6b675e",
          }}
        >
SOUTH ORANGE + MAPLEWOOD, NJ
        </div>
      </div>
    ),
    { ...size },
  );
}
