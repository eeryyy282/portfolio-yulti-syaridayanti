import { ImageResponse } from "next/og";
import { siteContent } from "@/content";

export const runtime = "edge";

export const alt = siteContent.metadata.ogTitle;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const { hero, metadata } = siteContent;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          background: "linear-gradient(135deg, #FFF5F7 0%, #FEEBF0 40%, #FFFDFB 100%)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "10px 24px",
              background: "#FFFFFF",
              borderRadius: "50px",
              border: "2px solid #FCD5E1",
            }}
          >
            <div
              style={{
                width: "16px",
                height: "16px",
                borderRadius: "50%",
                background: "#EC4E80",
              }}
            />
            <span
              style={{
                fontSize: "20px",
                fontWeight: "700",
                color: "#EC4E80",
                letterSpacing: "0.5px",
              }}
            >
              {metadata.ogBadge}
            </span>
          </div>

          <div
            style={{
              fontSize: "20px",
              fontWeight: "600",
              color: "#64748B",
            }}
          >
            {metadata.ogSubHeader}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1
            style={{
              fontSize: "64px",
              fontWeight: "900",
              color: "#0F172A",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            {hero.fullName},{" "}
            <span style={{ color: "#EC4E80" }}>{hero.degree}</span>
          </h1>

          <h2
            style={{
              fontSize: "28px",
              fontWeight: "700",
              color: "#B81C4B",
              margin: 0,
            }}
          >
            {hero.headline}
          </h2>

          <p
            style={{
              fontSize: "22px",
              color: "#334155",
              lineHeight: 1.5,
              maxWidth: "920px",
              margin: 0,
            }}
          >
            {metadata.ogDescription}
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {metadata.ogTags.map((tag, idx) => (
            <div
              key={idx}
              style={{
                padding: "10px 22px",
                background: "#FFFFFF",
                borderRadius: "16px",
                fontSize: "18px",
                fontWeight: "700",
                color: "#1E293B",
                border: "1px solid #FCD5E1",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
