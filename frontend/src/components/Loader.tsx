import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

interface LoaderProps {
  onComplete?: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const duration = 600;
    const intervalTime = 30;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment + Math.random() * 1.5;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            onComplete?.();
          }, 400);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        width: "100%",
        gap: "28px",
        backgroundColor: "hsl(270 30% 6%)",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        overflow: "hidden",
      }}
    >
      {/* Ambient blobs */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "15%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, hsl(330 90% 60% / 0.12), transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "15%",
          width: 250,
          height: 250,
          borderRadius: "50%",
          background: "radial-gradient(circle, hsl(270 80% 65% / 0.12), transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      {/* Logo ring */}
      <div className="relative h-28 w-28 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-pulse" />
        <div
          className="absolute inset-0 rounded-full border-t-2 border-primary animate-spin"
          style={{ boxShadow: "0 0 20px hsl(330 90% 60% / 0.4)" }}
        />
        <div className="h-16 w-16 rounded-2xl overflow-hidden bg-card flex items-center justify-center">
          <img src="/logo.png" alt="Party Palooza" className="h-14 w-14 object-contain" />
        </div>
      </div>

      {/* Brand name */}
      <div className="flex flex-col items-center gap-1">
        <h1
          className="text-2xl font-extrabold tracking-widest text-gradient-gold uppercase"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Party Palooza
        </h1>
        <p className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground font-semibold">
          Vijayawada
        </p>
      </div>

      {/* Progress bar */}
      <div className="flex flex-col items-center gap-2">
        <div className="h-[3px] w-52 bg-primary/10 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-300 ease-out"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, hsl(330 90% 60%), hsl(270 80% 65%))",
              boxShadow: "0 0 12px hsl(330 90% 60% / 0.6)",
            }}
          />
        </div>
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-semibold">
          {progress < 40
            ? "Getting the party ready..."
            : progress < 70
            ? "Setting up decorations..."
            : progress < 90
            ? "Almost there..."
            : "Let's celebrate! 🎉"}
        </span>
      </div>

      {/* Floating sparkles */}
      <div className="absolute top-8 left-8 text-primary/30 animate-bounce" style={{ animationDuration: "3s" }}>
        <Sparkles className="h-5 w-5" />
      </div>
      <div className="absolute top-12 right-12 text-secondary/30 animate-bounce" style={{ animationDuration: "2.5s" }}>
        <Sparkles className="h-4 w-4" />
      </div>
      <div className="absolute bottom-12 left-16 text-primary/20 animate-bounce" style={{ animationDuration: "4s" }}>
        <Sparkles className="h-6 w-6" />
      </div>
      <div className="absolute bottom-8 right-8 text-secondary/20 animate-bounce" style={{ animationDuration: "3.5s" }}>
        <Sparkles className="h-5 w-5" />
      </div>
    </div>
  );
};

export default Loader;
