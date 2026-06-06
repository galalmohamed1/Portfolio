import { FadeIn } from "./primitives";

const SERVICES = [
  {
    n: "01",
    name: "Frontend Development",
    d: "High-performance frontend solutions built with React, Next.js, and modern web technologies — delivering pixel-accurate designs, smooth animations, and exceptional user experiences on every device.",
  },
  {
    n: "02",
    name: "Landing Pages",
    d: "High-impact landing pages designed to convert: striking hero sections, clear messaging, and motion-driven storytelling end to end.",
  },
];

export function ServicesSection() {
  return (
    <section
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10"
      style={{ background: "#FFFFFF" }}
    >
      <h2
        className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ color: "#0C0C0C", fontSize: "clamp(3rem, 12vw, 160px)", lineHeight: 1 }}
      >
        Services
      </h2>
      <div className="max-w-5xl mx-auto">
        {SERVICES.map((s, i) => (
          <FadeIn
            key={s.n}
            delay={i * 0.1}
            className="flex flex-row items-start gap-6 md:gap-10 py-8 sm:py-10 md:py-12"
            style={{
              borderTop: "1px solid rgba(12, 12, 12, 0.15)",
              ...(i === SERVICES.length - 1
                ? { borderBottom: "1px solid rgba(12, 12, 12, 0.15)" }
                : {}),
            }}
          >
            <div
              className="font-black leading-none"
              style={{ color: "#0C0C0C", fontSize: "clamp(3rem, 10vw, 140px)" }}
            >
              {s.n}
            </div>
            <div className="flex flex-col gap-3 md:gap-5 flex-1">
              <h3
                className="font-medium uppercase"
                style={{
                  color: "#0C0C0C",
                  fontSize: "clamp(1rem, 2.2vw, 2.1rem)",
                  lineHeight: 1.1,
                }}
              >
                {s.name}
              </h3>
              <p
                className="font-light leading-relaxed max-w-2xl"
                style={{
                  color: "#0C0C0C",
                  opacity: 0.6,
                  fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)",
                }}
              >
                {s.d}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
