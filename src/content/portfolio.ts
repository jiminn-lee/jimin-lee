import album0 from "../assets/gallery/albums/made.png";
import album1 from "../assets/gallery/albums/whole-lotta-red.png";
import album2 from "../assets/gallery/albums/the-life-of-pablo.png";
import album3 from "../assets/gallery/albums/korean-dream.png";
import album4 from "../assets/gallery/albums/because-i-love-you.png";
import album5 from "../assets/gallery/albums/ss-pop-3.png";
import darkFlagStripes from "../assets/branding/korean-flag-stripes-dark.svg";
import darkWordmark from "../assets/branding/jimin-lee-dark.svg";
import portrait from "../assets/gallery/portrait.webp";
import flagStripes from "../assets/branding/korean-flag-stripes.svg";
import flagCenter from "../assets/branding/korean-flag-center.svg";
import wordmark from "../assets/branding/jimin-lee.svg";
import resume from "../assets/documents/Jimin_Lee_Resume.pdf";

export type ProjectId =
  "hack4impact" | "artify4kids" | "yearbookpro" | "tino-lockers";
export type DetailId = "portrait" | ProjectId;

export interface PortfolioLink {
  label: string;
  href: string;
}

export interface ProjectDetail {
  href?: string;
  title: string;
  role: string;
  period: string;
  description: string;
  technologies: string;
}

export const portfolio = {
  name: "Jimin Lee",
  flag: {
    stripes: flagStripes,
    darkStripes: darkFlagStripes,
    center: flagCenter,
  },
  darkWordmark,
  wordmark,
  // Widths are in pixels; image heights follow their natural proportions.
  gallery: [
    {
      src: portrait,
      alt: "Jimin Lee in a graduation cap and gown on a sunny football field.",
      width: 230,
    },
    { src: album0, alt: "MADE album cover", width: 78 },
    { src: album1, alt: "Whole Lotta Red album cover", width: 78 },
    { src: album2, alt: "The Life of Pablo album cover", width: 78 },
    { src: album3, alt: "Korean Dream album cover", width: 78 },
    { src: album4, alt: "Because I Love You album cover", width: 78 },
    { src: album5, alt: "SS POP 3 album cover", width: 78 },
  ],
  introduction:
    "& Computer Science student at the University of Illinois Urbana-Champaign.",
  navigation: [
    { label: "Resume", href: resume },
    { label: "GitHub", href: "https://github.com/jiminn-lee" },
    { label: "LinkedIn", href: "https://linkedin.com/in/lee-ji-min" },
  ] satisfies PortfolioLink[],
  email: "jiminlee102@gmail.com",
  details: {
    hack4impact: {
      title: "Hack4Impact",
      role: "Software Developer",
      period: "Sep. 26 - Present",
      description: `Kits to Heart (Fa26): Care-kit request and fulfillment platform for cancer support. Implemented server actions for Stripe workflow, account authentication, request validation, and database operations.`,
      technologies:
        "Next.js · TypeScript · PostgreSQL · Drizzle ORM · Zod · Stripe · EasyPost · Resend",
    },
    artify4kids: {
      title: "Artify4Kids",
      role: "Lead Web Developer",
      period: "Oct. 23 - Present",
      description:
        "Nonprofit’s full-stack website. Focused on UI/UX design, image delivery over the cloud, and SEO optimization.",
      technologies: "SvelteKit · JavaScript · Cloudflare R2",
    },
    yearbookpro: {
      title: "YearbookPro",
      role: "Founding Software Engineer",
      period: "Feb. 25 - Jul. 26",
      description:
        "EdTech SaaS startup for a digital yearbook platform. I wrote type-safe frontend workflows for FastAPI endpoints and integrated a WAL-based CDC pipeline for database changes. Now discontinued.",
      technologies:
        "SvelteKit · TypeScript · FastAPI · Python · PostgreSQL · Redis · RabbitMQ · Typesense · NGINX",
    },
    "tino-lockers": {
      href: "https://github.com/cupertinoasb/tino-lockers",
      title: "Tino Lockers",
      role: "School Dedicated Project",
      period: "Nov. 23 - Jul. 26",
      description:
        "Cupertino High School’s current centralized locker management application. We replaced manual administrative workflows and streamlined student requests across all campus lockers.",
      technologies: "SvelteKit · TypeScript · PostgreSQL · Drizzle ORM · Zod",
    },
  } satisfies Record<ProjectId, ProjectDetail>,
};
