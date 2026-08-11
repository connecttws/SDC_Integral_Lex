import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  alignment = "center",
  className = "",
}: SectionHeadingProps) {
  const alignmentClass = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  }[alignment];

  return (
    <div className={`mb-12 max-w-3xl ${alignmentClass} ${className}`}>
      {subtitle && (
        <span className="block text-sm font-semibold tracking-wider text-gold uppercase mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-ink">
        {title}
      </h2>
      <div
        className={`h-1 w-20 bg-maroon mt-6 ${
          alignment === "center" ? "mx-auto" : alignment === "right" ? "ml-auto" : ""
        }`}
      />
    </div>
  );
}
