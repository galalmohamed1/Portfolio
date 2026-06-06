import { AnimatedText, ContactButton, FadeIn } from "./primitives";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 gap-16 sm:gap-20 md:gap-24"
    >
      <img
        src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
        alt=""
        className="absolute w-30 sm:w-40 md:w-52 top-[4%] left-[1%] sm:left-[2%] md:left-[4%]"
      />
      <img
        src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
        alt=""
        className="absolute w-30 sm:w-40 md:w-52 bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]"
      />
      <img
        src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
        alt=""
        className="absolute w-30 sm:w-40 md:w-52 top-[4%] right-[1%] sm:right-[2%] md:right-[4%]"
      />
      <img
        src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
        alt=""
        className="absolute w-30 sm:w-40 md:w-52 bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]"
      />

      <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16 relative z-10">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            About me
          </h2>
        </FadeIn>
        <AnimatedText
          text="I'm Galal, a frontend and Flutter developer crafting fast, beautiful, and motion-rich digital products for web and mobile. I build seamless user experiences that feel modern, responsive, and premium. Let's build something incredible together."
          className="font-medium text-center leading-relaxed max-w-140"
          style={{ color: "#D7E2EA", fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
        />
      </div>

      <FadeIn delay={0.2} y={20} className="relative z-10">
        <ContactButton />
      </FadeIn>
    </section>
  );
}
