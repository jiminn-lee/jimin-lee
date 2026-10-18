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
      className="grid grid-cols-1 items-start gap-x-12 gap-y-8 sm:grid-cols-[153px_330px]"
    >
      <header className="text-left sm:text-right">
        <h2
          id={`${id}-title`}
          className="text-[32px] leading-10 tracking-[-0.9px] sm:text-[36px] sm:leading-12"
        >
          {title}
        </h2>
        <p
          lang="ko"
          className="font-korean text-[18px] leading-7 sm:text-[20px] sm:leading-8"
        >
          {koreanTitle}
        </p>
      </header>
      <div className="min-w-0 wrap-break-word">{children}</div>
    </section>
  );
}
