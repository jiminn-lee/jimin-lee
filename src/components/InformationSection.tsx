import type { ReactNode } from "react";

interface InformationSectionProps {
  id: string;
  title: string;
  koreanTitle: string;
  children: ReactNode;
}

export function InformationSection({
  id,
  title,
  koreanTitle,
  children,
}: InformationSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="grid grid-cols-[153px_330px] items-start gap-x-16"
    >
      <header className="text-right">
        <h2
          id={`${id}-title`}
          className="text-[36px] leading-12 tracking-[-0.9px]"
        >
          {title}
        </h2>
        <p lang="ko" className="font-korean text-[20px] leading-8">
          {koreanTitle}
        </p>
      </header>
      <div>{children}</div>
    </section>
  );
}
