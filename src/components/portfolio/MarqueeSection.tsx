import { useEffect, useRef, useState } from "react";
import art1 from "@/assets/marquee/art-1.jpg";
import art2 from "@/assets/marquee/art-2.jpg";
import art3 from "@/assets/marquee/art-3.jpg";
import art4 from "@/assets/marquee/art-4.jpg";
import art5 from "@/assets/marquee/art-5.jpg";
import art6 from "@/assets/marquee/art-6.jpg";

const ROW1 = [art1, art3, art5, art2, art6, art4];
const ROW2 = [art4, art6, art2, art5, art3, art1];

function Row({ imgs }: { imgs: string[] }) {
  const tripled = [...imgs, ...imgs, ...imgs];
  return (
    <div className="flex gap-3" style={{ willChange: "transform" }}>
      {tripled.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          loading="lazy"
          className="rounded-2xl object-cover shrink-0"
          style={{ width: 420, height: 270 }}
        />
      ))}
    </div>
  );
}

export function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const [, setTick] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      const t = offset - 200;
      if (row1Ref.current) row1Ref.current.style.transform = `translateX(${t}px)`;
      if (row2Ref.current) row2Ref.current.style.transform = `translateX(${-t}px)`;
      setTick((x) => x);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-24 sm:pt-32 md:pt-40 pb-10 flex flex-col gap-3"
      style={{ background: "#0C0C0C", overflowX: "clip" }}
    >
      <div ref={row1Ref} style={{ willChange: "transform" }}>
        <Row imgs={ROW1} />
      </div>
      <div ref={row2Ref} style={{ willChange: "transform" }}>
        <Row imgs={ROW2} />
      </div>
    </section>
  );
}
