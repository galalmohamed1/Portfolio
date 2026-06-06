import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { LiveProjectButton, TiltCard } from "./primitives";
import ecommerceCover from "@/assets/projects/ecommerce-cover.jpg";
import freshcart from "@/assets/projects/freshcart-2.png";
import facebookCover from "@/assets/projects/facebook-cover.jpg";
import facebook2 from "@/assets/projects/facebook-2.png";
import moviesCover from "@/assets/projects/movies-cover.jpg";
import weatherCover from "@/assets/projects/weather-cover.jpg";
import editmediaCover from "@/assets/projects/editmedia-cover.jpg";

type Project = {
  n: string;
  category: string;
  name: string;
  url: string;
  col1a: string;
  col2: string;
};

const shot = (url: string, w: number, crop?: number) =>
  `https://image.thum.io/get/width/${w}${crop ? `/crop/${crop}` : ""}/noanimate/${url}`;

const PROJECTS: Project[] = [
  {
    n: "01",
    category: "Project · E-commerce",
    name: "E-Commerce App",
    url: "https://freshcart-galal-eight.vercel.app/",
    col1a: ecommerceCover,
    col2: freshcart,
  },
  {
    n: "02",
    category: "Project · Social UI",
    name: "Facebook UI Clone",
    url: "https://social-app-nine-orcin.vercel.app/auth",
    col1a: facebook2,
    col2: facebookCover,
  },
  {
    n: "03",
    category: "Project · Entertainment",
    name: "Movies App",
    url: "https://movies-app-wine-psi.vercel.app/",
    col1a: shot("https://movies-app-wine-psi.vercel.app/", 600, 800),
    col2: moviesCover,
  },
  {
    n: "04",
    category: "Project · Utility",
    name: "Weather App",
    url: "https://weather-app-eight-orcin-14.vercel.app/",
    col1a: shot("https://weather-app-eight-orcin-14.vercel.app/", 600, 800),
    col2: weatherCover,
  },
  {
    n: "05",
    category: "Project · Creative Tool",
    name: "Edit Media Studio",
    url: "https://edite-media-studio.vercel.app/",
    col1a: shot("https://edite-media-studio.vercel.app/", 600, 800),
    col2: editmediaCover,
  },
];

function Card({ p, index, total }: { p: Project; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={ref} className="h-[85vh] sticky" style={{ top: `calc(6rem + ${index * 28}px)` }}>
      <motion.div style={{ scale, transformOrigin: "top center" }} className="h-full">
        <TiltCard
          className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8 h-full flex flex-col gap-4 sm:gap-6"
          style={{ background: "#0C0C0C" }}
        >
          <div className="flex flex-row items-center gap-4 sm:gap-6 md:gap-8 flex-wrap">
            <div
              className="font-black leading-none"
              style={{ color: "#D7E2EA", fontSize: "clamp(3rem, 10vw, 140px)" }}
            >
              {p.n}
            </div>
            <div className="flex flex-col flex-1 min-w-37.5">
              <span
                className="font-light uppercase tracking-widest"
                style={{ color: "#D7E2EA", opacity: 0.6, fontSize: "clamp(0.7rem, 1.1vw, 1rem)" }}
              >
                {p.category}
              </span>
              <h3
                className="font-medium uppercase"
                style={{
                  color: "#D7E2EA",
                  fontSize: "clamp(1.1rem, 2.4vw, 2.2rem)",
                  lineHeight: 1.1,
                }}
              >
                {p.name}
              </h3>
            </div>
            <a href={p.url} target="_blank" rel="noopener noreferrer">
              <LiveProjectButton />
            </a>
          </div>
          <div className="flex flex-row gap-3 sm:gap-4 md:gap-5 flex-1 min-h-0">
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5" style={{ width: "40%" }}>
              <img
                src={p.col1a}
                alt={`${p.name} preview 1`}
                loading="lazy"
                className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
                style={{ height: "clamp(130px, 35vw, 430px)" }}
              />
            </div>
            <div style={{ width: "60%" }} className="flex-1">
              <img
                src={p.col2}
                alt={`${p.name} full preview`}
                loading="lazy"
                className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              />
            </div>
          </div>
        </TiltCard>
      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-32"
      style={{ background: "#0C0C0C" }}
    >
      <h2
        className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Projects
      </h2>
      <div className="flex flex-col">
        {PROJECTS.map((p, i) => (
          <Card key={p.n} p={p} index={i} total={PROJECTS.length} />
        ))}
      </div>
    </section>
  );
}
