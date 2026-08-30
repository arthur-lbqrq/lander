import { metrics } from "@/content/metrics";
import { Container } from "./container";
import { Gauge } from "./gauge";

export function MetricsBar() {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <div className="grid grid-cols-3 gap-6 sm:gap-12">
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
