import { useEffect, useState } from "react";

const socialLinks = [
  {
    name: "Facebook Page",
    icon: "/images/facebook.png",
    url: "https://www.facebook.com/share/1Gfbtzyfdr/?mibextid=wwXIfr",
  },
  {
    name: "Facebook Account",
    icon: "/images/facebook.png",
    url: "https://www.facebook.com/share/1DLryfVTFt/?mibextid=wwXIfr",
  },
  {
    name: "Telegram Group",
    icon: "/images/telegram.png",
    url: "https://t.me/sombok_cosmetic",
  },
  {
    name: "Telegram Account",
    icon: "/images/telegram.png",
    url: "https://t.me/lang_cosmetic",
  },
  {
    name: "TikTok",
    icon: "/images/tiktok.png",
    url: "https://www.tiktok.com/@zey_lang_cosmetic",
  },
  {
    name: "Instagram",
    icon: "/images/ig.png",
    url: "https://www.instagram.com/zeyy_lang?igsh=ankyNzZ2ZjRvYnox&utm_source=qr",
  },
];

const FloatingHearts = () => {
  const hearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 8,
    duration: 6 + Math.random() * 6,
    size: 12 + Math.random() * 16,
    opacity: 0.15 + Math.random() * 0.25,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute animate-float-up"
          style={{
            left: `${h.left}%`,
            animationDelay: `${h.delay}s`,
            animationDuration: `${h.duration}s`,
            fontSize: `${h.size}px`,
            opacity: h.opacity,
          }}
        >
          💗
        </span>
      ))}
    </div>
  );
};

const Sparkles = () => {
  const sparkles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 2 + Math.random() * 3,
    size: 4 + Math.random() * 6,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full animate-sparkle"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
            background: `radial-gradient(circle, hsl(340 82% 75%), transparent)`,
          }}
        />
      ))}
    </div>
  );
};

const Index = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, hsl(340 80% 92%), hsl(320 70% 90%), hsl(300 60% 93%), hsl(340 80% 95%))",
      }}
    >
      <FloatingHearts />
      <Sparkles />

      <div
        className={`relative z-10 w-full max-w-md mx-auto px-6 py-12 flex flex-col items-center transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Profile Logo */}
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary shadow-lg animate-pulse-glow mb-5">
          <img
            src="/images/logo.png"
            alt="Zeyy Lang - Sombok Cosmetic"
            width={640}
            height={640}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Brand Name */}
        <h1
          className="text-2xl font-bold tracking-widest text-foreground mb-1"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          SOMBOK COSMETIC
        </h1>
        <p className="text-muted-foreground text-sm mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
          ✨ Beauty & Skincare Products ✨
        </p>

        {/* Social Links */}
        <div className="w-full flex flex-col gap-3.5">
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 w-full rounded-2xl px-4 py-3.5 bg-card/80 backdrop-blur-sm border border-border shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              style={{
                animationDelay: `${i * 100}ms`,
                transitionDelay: `${i * 60}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: `all 0.5s ease ${i * 80}ms`,
              }}
            >
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <img
                  src={link.icon}
                  alt={link.name}
                  width={192}
                  height={192}
                  loading="lazy"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="text-foreground font-medium text-base group-hover:text-primary transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {link.name}
              </span>
            </a>
          ))}
        </div>

        {/* Footer */}
        <p className="mt-10 text-xs text-muted-foreground">
          © 2026 Zeyy Lang • Sombok Cosmetic
        </p>
      </div>
    </div>
  );
};

export default Index;
