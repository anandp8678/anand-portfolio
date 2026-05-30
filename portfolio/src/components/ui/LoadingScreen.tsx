"use client";

export default function LoadingScreen() {
  return (
    <div id="loading-screen">
      <div className="text-center">
        <div className="font-display text-2xl font-bold gradient-text mb-2 tracking-widest">
          Anand P
        </div>
        <div className="font-mono text-xs text-slate-500 mb-6">Initializing...</div>
        <div className="loading-bar">
          <div className="loading-bar-fill" />
        </div>
      </div>
    </div>
  );
}
