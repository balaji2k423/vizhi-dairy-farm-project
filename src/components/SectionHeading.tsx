import { ReactNode } from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  children?: ReactNode;
}

const SectionHeading = ({
  badge,
  title,
  subtitle,
  align = "center",
  children,
}: SectionHeadingProps) => {
  return (
    <div
      className={`mb-16 ${
        align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-2xl"
      }`}
    >
      {badge && (
        <span className="inline-block text-sm font-medium text-accent uppercase tracking-wider mb-4">
          {badge}
        </span>
      )}
      <h2 className="heading-lg text-foreground mb-6">{title}</h2>
      {subtitle && (
        <p className="body-lg text-muted-foreground">{subtitle}</p>
      )}
      {children}
      <div className={`divider-gold mt-8 ${align === "center" ? "mx-auto" : ""}`} />
    </div>
  );
};

export default SectionHeading;
