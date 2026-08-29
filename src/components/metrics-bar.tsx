import { metrics } from "@/content/metrics";
import { Container } from "./container";
import { Gauge } from "./gauge";

export function MetricsBar() {
  return (
    <section className="border-y border-line bg-surface py-10 sm:py-12">
      <Container>
        <div className="grid grid-cols-3 gap-3 sm:gap-8">
          {metrics.map((metric) => (
            <Gauge
              key={metric.label}
              value={metric.value}
              label={metric.label}
              fraction={metric.gauge}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
