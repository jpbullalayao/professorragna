"use client";

import { ContentDivider } from "@/components/content-divider";
import { Link } from "@/components/link";
import { Text } from "@/components/text";

import { linkAttributor } from "@/helpers/link-attributor";

interface Article {
  title: string;
  href: string;
  description: string;
}

const articles: Article[] = [
  {
    title: "7 simple habits of the top 1% of engineers",
    href: linkAttributor(
      "https://engineercodex.substack.com/p/7-simple-habits-of-the-top-1-of-engineers"
    ),
    description:
      "The author of the Engineer's Codex substack shares 7 habits that they observed from some of the elite engineers that they have worked with in their career. These engineers have previously worked at large tech firms like FAANG, and even small start-ups.",
  },
  {
    title: "Mastering 1:1s as an Engineering Manager",
    href: linkAttributor(
      "https://hybridhacker.email/p/mastering-one-on-ones-as-an-engineering-manager"
    ),
    description:
      "An author on The Hybrid Hacker substack shares his insights on 1:1 meetings Engineering Managers and their engineers. He explains exactly what 1:1s are, how to go about building the 1:1 process, and practical suggestions for running successful 1:1s based on his own experience.",
  },
  {
    title:
      "The Rise of Next.js: Why It's the Full-Stack Framework of Choice for Modern Websites",
    href: linkAttributor("https://www.felixvemmer.com/blog/why-next-js"),
    description:
      "A comprehensive review on the standout framework Next.js (which is actually what this blog is built on top of). The author of this article unpacks in great technical detail why Next.js is a dependable choice for web applications today, and how/why it might stand the test of time.",
  },
  {
    title: "Random Thoughts 15 years into Software Engineering",
    href: linkAttributor(
      "https://roughlywritten.substack.com/p/random-thoughts-15-years-into-software"
    ),
    description:
      "The author of the Roughly Written substack briefly shares some of his biggest takeaways as a software engineer of 15 years, a career spanning from start-ups to large FAANG-like companies.",
  },
  {
    title: "From Individual Contributor to Engineering Director",
    href: linkAttributor(
      "https://hybridhacker.email/p/from-individual-contributor-to-director"
    ),
    description:
      "Another article featured from The Hybrid Hacker substack; the author shares their personal story of how they started in an individual contributor role with Namecheap, and worked their way through a couple promotions to eventually become a director. In doing so, they illustrate the challenges and takeaways of each role while climbing the ladder.",
  },
  {
    title: "Always cheer",
    href: linkAttributor("https://world.hey.com/jason/always-cheer-ccd76145"),
    description:
      "Jason Fried writes a short and sweet passage with one simple philosophy that will certainly help your team dynamic: cheer for everyone on your team.",
  },
  {
    title: "What makes a 10x software engineer?",
    href: linkAttributor(
      "https://www.reddit.com/r/SoftwareEngineering/comments/177txm6/what_makes_a_10x_software_engineer"
    ),
    description:
      'The r/SoftwareEngineering subreddit discusses their opinions on what is considered a "10x software engineer" - with many traits ranging from great communication, to building and shipping fast, to understanding at a deep level the organization\'s tools.',
  },
  {
    title:
      "How to get more interviews, offers, and higher compensation at top tech companies",
    href: linkAttributor(
      "https://careercutler.substack.com/p/how-to-get-more-interviews-offers"
    ),
    description:
      "Jordan Cutler, author of the High Growth Engineer substack, summarizes the main takeaways from his interview with Alan Stein, CEO of Kadima Careers. As the title of the article suggests, he shares actionable steps discussed about how to get more interviews, more offers, and negotiating for higher compensation.",
  },
];

export const BlogPost = () => (
  <>
    <Text tag="h1">{`Ragna's Reads: Start-ups & Engineering (10/16 - 10/22)`}</Text>
    <Text>
      <i>
        This is the first edition of <b>{`Ragna's Reads`}</b>, where I feature
        the top articles I read in the start-up and engineering worlds each
        week. They will contain anything related to growing as an engineer,
        philosophies in the start-up space, leadership principles, new or
        existing technologies, and the like. I hope you find value in them
        especially if you are looking to grow as a start-up engineer.
      </i>
    </Text>

    <ContentDivider />

    <div className="flex flex-col gap-6">
      {articles.map(({ title, href, description }) => (
        <div key={href}>
          <Text tag="h2" className="text-xl">
            <Link href={href}>{title}</Link>
          </Text>
          <Text>{description}</Text>
        </div>
      ))}
    </div>

    <ContentDivider />

    <Text>
      What have you read this week? Tweet me{" "}
      <Link href="https://twitter.com/professorragna">@professorragna</Link>!
    </Text>
  </>
);
