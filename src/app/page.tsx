import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { MetricsBar } from "@/components/metrics-bar";
import { Portfolio } from "@/components/portfolio";
import { Process } from "@/components/process";
import { Testimonials } from "@/components/testimonials";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-paper"
      >
        Pular para o conteúdo
      </a>

      <Nav />

      <main id="main-content" className="flex-1">
        <Hero />
        <MetricsBar />
        <Portfolio />
        <Process />
        <Testimonials />
        <CtaSection />
      </main>

      <Footer />
    </>
  );
}
