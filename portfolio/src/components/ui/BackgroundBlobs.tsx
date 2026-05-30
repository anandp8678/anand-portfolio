"use client";

export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Top-left large blob */}
      <div
        className="blob"
        style={{
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, #00D4FF 0%, transparent 70%)",
          top: "-200px",
          left: "-200px",
          opacity: 0.08,
          animation: "float 10s ease-in-out infinite",
        }}
      />
      {/* Top-right purple blob */}
      <div
        className="blob"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)",
          top: "100px",
          right: "-100px",
          opacity: 0.1,
          animation: "float 12s ease-in-out 3s infinite",
        }}
      />
      {/* Middle cyan */}
      <div
        className="blob"
        style={{
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, #06FFC8 0%, transparent 70%)",
          top: "50%",
          left: "30%",
          opacity: 0.05,
          animation: "float 14s ease-in-out 5s infinite",
        }}
      />
      {/* Bottom-left */}
      <div
        className="blob"
        style={{
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)",
          bottom: "-100px",
          left: "10%",
          opacity: 0.08,
          animation: "float 11s ease-in-out 2s infinite",
        }}
      />
      {/* Bottom-right blue */}
      <div
        className="blob"
        style={{
          width: "450px",
          height: "450px",
          background: "radial-gradient(circle, #00D4FF 0%, transparent 70%)",
          bottom: "10%",
          right: "5%",
          opacity: 0.07,
          animation: "float 9s ease-in-out 4s infinite",
        }}
      />
    </div>
  );
}
