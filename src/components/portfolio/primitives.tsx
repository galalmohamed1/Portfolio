import { motion, useScroll, useTransform } from "framer-motion";
import { useCallback, useEffect, useRef, useState, type ReactNode, type ElementType } from "react";

export function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = "div",
  className,
  style,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: ElementType;
  className?: string;
  style?: React.CSSProperties;
}) {
  const MotionEl = motion.create(as);
  return (
    <MotionEl
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
      style={style}
    >
      {children}
    </MotionEl>
  );
}

export function ContactButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="mailto:gm3308769@gmail.com"
      className={`inline-block cursor-pointer rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base text-white font-medium uppercase tracking-widest ${className}`}
      style={{
        background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
        boxShadow: "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
        outline: "2px solid white",
        outlineOffset: "-3px",
      }}
    >
      Contact Me
    </a>
  );
}

export function LiveProjectButton() {
  return (
    <button className="rounded-full cursor-pointer border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors">
      Live Project
    </button>
  );
}

export function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className,
  style,
}: {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const within =
        Math.abs(dx) < rect.width / 2 + padding && Math.abs(dy) < rect.height / 2 + padding;
      if (within) {
        setActive(true);
        setPos({ x: dx / strength, y: dy / strength });
      } else {
        setActive(false);
        setPos({ x: 0, y: 0 });
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [padding, strength]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        transition: active ? activeTransition : inactiveTransition,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}

export function AnimatedText({
  text,
  className,
  style,
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });
  const chars = text.split("");
  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((c, i) => (
        <Char key={i} progress={scrollYProgress} range={[i / chars.length, (i + 1) / chars.length]}>
          {c}
        </Char>
      ))}
    </p>
  );
}

function Char({
  children,
  progress,
  range,
}: {
  children: ReactNode;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span style={{ position: "relative" }}>
      <span style={{ opacity: 0.2 }}>{children}</span>
      <motion.span style={{ opacity, position: "absolute", left: 0, top: 0 }}>
        {children}
      </motion.span>
    </span>
  );
}

export function TiltCard({
  children,
  className,
  style,
  maxTilt = 12,
  perspective = 1000,
  scale = 1.02,
  glare = true,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  maxTilt?: number;
  perspective?: number;
  scale?: number;
  glare?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({});
  const [isHovering, setIsHovering] = useState(false);

  const handleMove = useCallback(
    (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const pctX = dx / (rect.width / 2);
      const pctY = dy / (rect.height / 2);
      const rotateY = pctX * maxTilt;
      const rotateX = -pctY * maxTilt;
      const transX = dx * 0.05;
      const transY = dy * 0.05;
      setTransform(
        `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale}) translate3d(${transX}px, ${transY}px, 0)`,
      );
      if (glare) {
        const glareX = ((e.clientX - rect.left) / rect.width) * 100;
        const glareY = ((e.clientY - rect.top) / rect.height) * 100;
        setGlareStyle({
          background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 60%)`,
          opacity: isHovering ? 1 : 0,
        });
      }
    },
    [maxTilt, perspective, scale, glare, isHovering],
  );

  const handleEnter = useCallback(() => {
    setIsHovering(true);
    window.addEventListener("mousemove", handleMove);
  }, [handleMove]);

  const handleLeave = useCallback(() => {
    setIsHovering(false);
    window.removeEventListener("mousemove", handleMove);
    setTransform("");
    setGlareStyle({});
  }, [handleMove]);

  useEffect(() => {
    return () => window.removeEventListener("mousemove", handleMove);
  }, [handleMove]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        transform:
          transform || `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
        transformStyle: "preserve-3d",
        transition: isHovering ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
        willChange: "transform",
      }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {children}
      {glare && (
        <div
          className="pointer-events-none absolute inset-0 rounded-inherit"
          style={{
            ...glareStyle,
            transition: "opacity 0.3s ease-out",
            borderRadius: "inherit",
          }}
        />
      )}
    </div>
  );
}
