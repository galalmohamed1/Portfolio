import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { MarqueeSection } from "@/components/portfolio/MarqueeSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ServicesSection } from "@/components/portfolio/ServicesSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";

export const Route = createFileRoute("/")({
  component: Index,
});

const ALL_SITES: { name: string; url: string }[] = [
  { name: "E-Commerce App", url: "https://freshcart-galal-eight.vercel.app/" },
  { name: "Facebook UI Clone", url: "https://social-app-nine-orcin.vercel.app/auth" },
  { name: "Movies App", url: "https://movies-app-wine-psi.vercel.app/" },
  { name: "Weather App", url: "https://weather-app-eight-orcin-14.vercel.app/" },
  { name: "Edit Media Studio", url: "https://edite-media-studio.vercel.app/" },
];

const CV_URL =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a/v1/e0675c62-911f-4a19-98d7-81545b8a4068/684a6bb1-2720-4f78-be06-0783ff4494e8/Galal-Mohamed-CV.pdf";

function Index() {
  return (
    <main style={{ background: "#0C0C0C", overflowX: "clip" }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />

      <section
        id="all-work"
        className="px-6 md:px-10 py-20 md:py-28"
        style={{ background: "#0C0C0C", color: "#D7E2EA" }}
      >
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-12 md:mb-16"
          style={{ fontSize: "clamp(2.5rem, 9vw, 110px)" }}
        >
          All work
        </h2>
        <ul className="max-w-3xl mx-auto divide-y divide-white/10 border-y border-white/10">
          {ALL_SITES.map((s) => (
            <li key={s.url}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-5 sm:py-6 uppercase tracking-widest text-sm sm:text-base transition-opacity hover:opacity-70"
              >
                <span>{s.name}</span>
                <span className="opacity-50 group-hover:opacity-100 transition-opacity">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <footer
        id="contact"
        className="px-6 md:px-10 py-16 flex flex-col items-center gap-6 text-center"
        style={{ background: "#0C0C0C", color: "#D7E2EA" }}
      >
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 9vw, 110px)" }}
        >
          Let&apos;s talk
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm sm:text-base uppercase tracking-widest">
          <a href="mailto:gm3308769@gmail.com" className="hover:opacity-70 transition-opacity">
            gm3308769@gmail.com
          </a>
          <a
            href="https://wa.me/201003044257"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity"
          >
            WhatsApp · +20 100 304 4257
          </a>
        </div>
        <a
          href={CV_URL}
          target="_blank"
          rel="noopener noreferrer"
          download="Galal-Mohamed-CV.pdf"
          className="inline-flex items-center gap-2 px-6 py-3 mt-2 border border-white/20 rounded-full text-sm uppercase tracking-widest hover:bg-white/10 transition-colors"
        >
          Download CV ↓
        </a>
        <p className="text-xs uppercase tracking-widest opacity-50 mt-8">
          © {new Date().getFullYear()} Galal
        </p>
      </footer>
    </main>
  );
}
