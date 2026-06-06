import portrait from "@/assets/portrait.png";
import { ContactButton, FadeIn, Magnet } from "./primitives";

const NAV = ["About", "Services", "Projects", "Contact"];

export function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col" style={{ overflowX: "clip" }}>
      <FadeIn
        as="nav"
        delay={0}
        y={-20}
        className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 relative z-20"
      >
        {NAV.map((n) => (
          <a
            key={n}
            href={`#${n.toLowerCase()}`}
            className="text-sm md:text-lg lg:text-[1.4rem] font-medium uppercase tracking-wider transition-opacity duration-200 hover:opacity-70"
            style={{ color: "#D7E2EA" }}
          >
            {n}
          </a>
        ))}
      </FadeIn>

      <div className="overflow-hidden px-6 md:px-10 mt-6 sm:mt-4 md:-mt-5">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[10vw] sm:text-[11vw] md:text-[12vw] lg:text-[13vw]">
            Hi, i&apos;m galal
          </h1>
        </FadeIn>
      </div>

      <div className="mt-auto flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 relative z-20">
        <FadeIn delay={0.35} y={20}>
          <p
            className="font-light uppercase tracking-wide leading-snug max-w-40 sm:max-w-55 md:max-w-70"
            style={{ color: "#D7E2EA", fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
          >
            frontend developer crafting high-performance digital experiences
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 w-70 sm:w-90 md:w-110 lg:w-130"
      >
        <Magnet padding={150} strength={3}>
          <img src={portrait} alt="Galal portrait" className="w-full h-auto" />
        </Magnet>
      </FadeIn>
    </section>
  );
}
