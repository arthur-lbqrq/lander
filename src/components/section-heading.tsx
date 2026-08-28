import { Eyebrow } from "./eyebrow";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      <Eyebrow className={align === "center" ? "justify-center" : ""}>
        {eyebrow}
      </Eyebrow>
      <h2 className="mt-4 text-balance font-display text-3xl leading-[1.1] font-medium tracking-[-0.03em] text-paper sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 max-w-2xl text-base text-paper/70 sm:text-lg ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
