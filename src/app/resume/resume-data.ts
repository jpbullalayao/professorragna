export interface ResumeExperience {
  company: string;
  period: string;
  title: string;
  technologies: string;
  highlights: string[];
}

export interface ResumeProject {
  name: string;
  href: string;
  description: string;
}

export interface ResumeProfile {
  firstName: string;
  lastName: string;
  phone: string;
  phoneHref: string;
  email: string;
  linkedIn: string;
  linkedInHref: string;
  objective: string;
}

export const resumeProfile: ResumeProfile = {
  firstName: "Jourdan",
  lastName: "Bul-lalayao",
  phone: "(408) 607-0410",
  phoneHref: "tel:+14086070410",
  email: "jpbullalayao@gmail.com",
  linkedIn: "linkedin.com/in/jpbullalayao",
  linkedInHref: "https://www.linkedin.com/in/jpbullalayao",
  objective:
    "Team with world-class founders and engineers to build products that people want, at scale",
};

export const resumeExperience: ResumeExperience[] = [
  {
    company: "Ledger Investing",
    period: "January 2024 - Present",
    title: "Senior Full-Stack Engineer",
    technologies:
      "Claude Code, Grok Bot, AI SDK, Cursor, MCP, Next.js, Eve, Python/Django, React, TypeScript, D3, Databricks",
    highlights: [
      "Experimented with, built & demo'd first organization Eve agent to proactively debug production via MCPs like Vercel & Railway",
      "Created personal and shared organizational agent skills to optimize design and engineer workflows for better operating efficiency",
      "Leveraged AI harnesses such as Claude Code for swift prototypes to gather requirements from executives & users + full build-out",
      "Partnered with lead designers to create design system tokens and agent skills for colors, components & typography for good DevEx",
      "Built graphs, and data visualization / workflow / agent tools for users & agents using libraries such as AI SDK, Plotly & visx (D3)",
      "Moved to Reports team to help build and bring-to-market a self-serve bordereau upload & reports application for reinsurance users",
    ],
  },
  {
    company: "Wag!",
    period: "July 2017 - May 2023",
    title: "Senior Full-Stack Engineer",
    technologies:
      "AWS, React/Redux, Python/Django, Next.js, TypeScript, Gitlab, Postgres, Redis, Segment, New Relic, Sumologic",
    highlights: [
      "Delivered new Wag! Tag product from zero to market as lead front-end engineer by building & deploying new React service",
      "Led many internal & user-facing projects that grew company revenue & web traffic from 300k to 5+ million visits monthly",
      "Pioneered the usage of TypeScript and introduced SSR to optimize for better SEO for company and dog service provider goals",
      "Collaborated with Product/Engineering/Design to engineer multiple web services from zero lines of code all the way to deployment",
      "Built RESTful API endpoints with a focus on fast performance and SEO via key/value stores, caches and performant SQL queries",
      "Helped create, publish, and manage internal npm library of React components and packages shared by several web services",
      "Built Gitlab CI pipelines with DevOps team to deploy web services and maintain code integrity via code linters & test automation",
      "Screened engineering candidates and performed on-site interviews in order to build the best web engineering team possible",
    ],
  },
  {
    company: "Jobox",
    period: "July 2016 - January 2017",
    title: "Co-Founder, CTO (Full-Stack)",
    technologies:
      "AWS, Angular 2, TypeScript, Ruby on Rails, Ionic 2, HTML5, CSS3, Postgres, Redis, Git, Stripe API, Twilio",
    highlights: [
      "Built and delivered (to beta) SaaS iOS app to service providers to help them manage their businesses and time more efficiently",
    ],
  },
];

export const resumeProjects: ResumeProject[] = [
  {
    name: "metaframe.gg",
    href: "https://metaframe.gg",
    description:
      "Pre-launch web app & API built via modern agentic workflows; aggregating competitive data & sharing insights via social media. /goal monetization",
  },
  {
    name: "tinytool.sh",
    href: "https://tinytool.sh",
    description:
      "Web repository of simple tools built for the needs of fellow creators and developers. /goal monetization",
  },
  {
    name: "Pokemon Agent",
    href: "https://github.com/jpbullalayao",
    description:
      "Architecting an agent harness with custom CLIs & skills of competitive Pokemon knowledge to help prepare for official competition",
  },
  {
    name: "Wedding Seating Chart",
    href: "https://www.weddingseatingchart.app",
    description:
      "Leveraged the newest AI technologies to vibe code & bring-to-market a wedding seating chart app. Now serves paying customers.",
  },
];

export const resumeEducation = {
  school: "University of San Francisco",
  degree: "B.S. Computer Science",
};

export const resumeSkills = [
  "Claude Code",
  "Grok Bot",
  "AI SDK",
  "Cursor",
  "MCP",
  "Next.js",
  "Python",
  "Django",
  "React + Redux",
  "JavaScript",
  "TypeScript",
  "D3",
  "Databases",
  "Ruby on Rails",
  "Replit",
  "v0",
  "Supabase",
  "AWS",
];
