import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Yulti Syaridayanti, S.K.M. - Portofolio Sarjana Kesehatan Masyarakat";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
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
        {/* Top Header Pill */}
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
              PORTOFOLIO RESMI
            </span>
          </div>

          <div
            style={{
              fontSize: "20px",
              fontWeight: "600",
              color: "#64748B",
            }}
          >
            Universitas Jambi • IPK 3.86 (Cumlaude)
          </div>
        </div>

        {/* Center Main Info */}
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
            Yulti Syaridayanti,{" "}
            <span style={{ color: "#EC4E80" }}>S.K.M.</span>
          </h1>

          <h2
            style={{
              fontSize: "28px",
              fontWeight: "700",
              color: "#B81C4B",
              margin: 0,
            }}
          >
            Promosi Kesehatan & Ilmu Perilaku • Advokasi Komunitas
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
            Berpengalaman dalam advokasi kesehatan Suku Anak Dalam, intervensi Tuberkulosis (TB), edukasi media visual, serta optimalisasi data faskes di Puskesmas & BKKBN.
          </p>
        </div>

        {/* Bottom Feature Badges */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
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
            🌟 Lulus Cepat 3.5 Tahun
          </div>
          <div
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
            📄 Artikel Terakreditasi Sinta 3
          </div>
          <div
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
            🎤 Certified Public Speaking
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

