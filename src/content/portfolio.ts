import portrait from "../assets/images/portrait.png";
import flag from "../assets/images/korean-flag.svg";
import alby from "../assets/images/alby.png";
import yearbookSpread from "../assets/images/yearbook-spread.png";
import winterFormal from "../assets/images/winter-formal.png";
import homecoming from "../assets/images/homecoming.png";
import spiritWeek from "../assets/images/spirit-week.png";
import helmetGame from "../assets/images/helmet-game.png";
import made from "../assets/images/made.png";
import wholeLottaRed from "../assets/images/whole-lotta-red.png";
import theLifeOfPablo from "../assets/images/the-life-of-pablo.png";
import koreanDream from "../assets/images/korean-dream.png";
import becauseILoveYou from "../assets/images/because-i-love-you.png";
import ssPop3 from "../assets/images/ss-pop-3.png";

export interface PortfolioLink {
  label: string;
  /** Add a URL or a local public-file path to enable this link. */
  href?: string;
}

interface ImageAsset {
  src: string;
  alt: string;
}

/** Choose a square cell or a full-width row for each design image. */
interface DesignImage extends ImageAsset {
  isSquare: boolean;
}

interface Album extends ImageAsset {
  href?: string;
}

interface SectionHeading {
  title: string;
  koreanTitle: string;
}

interface Entry {
  title: string;
  description: string;
}

interface PortfolioContent {
  name: string;
  koreanName: string;
  tagline: string;
  portrait: ImageAsset;
  flag: ImageAsset;
  navigation: PortfolioLink[];
  about: SectionHeading & { paragraphs: string[] };
  experience: SectionHeading & { entries: Entry[] };
  projects: SectionHeading & { entries: Entry[] };
  design: SectionHeading & { images: DesignImage[] };
  skills: SectionHeading & { items: string[] };
  footer: { caption: string; albums: Album[] };
}

export const portfolio: PortfolioContent = {
  name: "Jimin Lee",
  koreanName: "이지민",
  tagline: "developer, designer",
  portrait: {
    src: portrait,
    alt: "Jimin Lee in a graduation cap and gown, seated on a sunny football field.",
  },
  flag: { src: flag, alt: "South Korean flag" },
  // Add href to each item when the destinations are ready.
  // For a resume PDF, put the file in public/ and use href: './resume.pdf'.
  navigation: [
    { label: "Resumé", href: "src/assets/Jimin_Lee_Resume.pdf" },
    { label: "LinkedIn", href: "https://linkedin.com/in/lee-ji-min" },
    { label: "GitHub", href: "https://github.com/jiminn-lee" },
  ],
  about: {
    title: "About",
    koreanTitle: "소개",
    paragraphs: [
      "**Computer Science** student at the **University of Illinois Urbana-Champaign** with experience building and shipping full-stack web solutions to real clients.",
      "Currently interested in all things crypto, blockchain, and DeFi. Feel free to reach out at jiminlee102[at]gmail.com.",
    ],
  },
  experience: {
    title: "Experience",
    koreanTitle: "경력",
    entries: [
      {
        title: "Software Developer | Hack4Impact",
        description: "Developed software for nonprofit organizations.",
      },
      {
        title: "Lead Web Developer | Artify4Kids",
        description:
          "Designed, developed, and deployed organization’s home website.",
      },
      {
        title: "Founding Engineer | YearbookPro",
        description: "Built a digital yearbook platform on the web.",
      },
    ],
  },
  projects: {
    title: "Projects",
    koreanTitle: "프로젝트",
    entries: [
      {
        title: "CS 128 Vim",
        description: "Vim key binds in CS 128 programming activities.",
      },
      {
        title: "Tino Lockers",
        description:
          "Cupertino High School’s official locker management system application.",
      },
    ],
  },
  design: {
    title: "Design",
    koreanTitle: "디자인",
    images: [
      {
        src: alby,
        alt: "Mobile app mockup of music rating app alby,",
        isSquare: false,
      },
      {
        src: yearbookSpread,
        alt: "Hall of Fame yearbook spread featuring student athletes.",
        isSquare: false,
      },
      {
        src: winterFormal,
        alt: "Winter formal event poster with a moonlit blue and purple design.",
        isSquare: true,
      },
      {
        src: homecoming,
        alt: "City of Stars homecoming poster with a glowing moon and purple skyline.",
        isSquare: true,
      },
      {
        src: spiritWeek,
        alt: "Red and black spirit week poster listing themed school days.",
        isSquare: true,
      },
      {
        src: helmetGame,
        alt: "Helmet Game poster featuring a raised fist on a light background.",
        isSquare: true,
      },
    ],
  },
  skills: {
    title: "Skills",
    koreanTitle: "기술",
    items: [
      "JavaScript/Typescript",
      "C++",
      "Java",
      "Python",
      "PostgreSQL",
      "Next.js",
      "React",
      "SvelteKit",
      "Astro",
      "FastAPI",
      "Flask",
      "Cloudflare",
      "Figma",
      "Illustrator",
    ],
  },
  footer: {
    caption: "© 2026 JIMIN LEE   ·   MADE IN KOREA ",
    // Add an href to make an album cover a link.
    albums: [
      {
        src: made,
        alt: "MADE album cover",
        href: "https://open.spotify.com/album/2SPrl8C8pgSM5gXbAiyJHY?si=49c2f1309a3c4e8b",
      },
      {
        src: wholeLottaRed,
        alt: "Whole Lotta Red album cover",
        href: "https://open.spotify.com/album/2QRedhP5RmKJiJ1i8VgDGR?si=RCvcptiKSiOJuwL0dpdmgA",
      },
      {
        src: theLifeOfPablo,
        alt: "The Life of Pablo album cover",
        href: "https://open.spotify.com/album/7gsWAHLeT0w7es6FofOXk1?si=b4a4180f901c4f41",
      },
      {
        src: koreanDream,
        alt: "Korean Dream album cover",
        href: "https://open.spotify.com/album/6kAU18tJkLQnvQ2g24NxsH?si=5d0ac2c8dfeb4def",
      },
      {
        src: becauseILoveYou,
        alt: "Because I Love You album cover",
        href: "https://open.spotify.com/track/0I9vXVUpijjek2ULH4UUJw?si=8f53460495944126",
      },
      {
        src: ssPop3,
        alt: "SS POP 3 album cover",
        href: "https://open.spotify.com/album/3JYSv64ZaFK2qHEBZ3suUD?si=JhJzBCwtSUuiwZcxVPu8oQ",
      },
    ],
  },
};
