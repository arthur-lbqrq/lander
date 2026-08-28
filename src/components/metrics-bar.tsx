import { metrics } from "@/content/metrics";
import { Container } from "./container";

export function MetricsBar() {
  return (
    <section className="border-y border-white/10 bg-white/[0.02] py-10 sm:py-12">
      <Container>
        <dl className="grid grid-cols-3 gap-6 sm:gap-8">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="flex flex-col-reverse items-center gap-2 text-center"
            >
              <dt className="font-mono text-xs text-paper/60 sm:text-sm">
                {metric.label}
              </dt>
              <dd className="font-display text-3xl font-medium text-paper sm:text-4xl">
                {metric.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
