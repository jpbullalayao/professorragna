import type { Metadata } from "next";
import { Suspense } from "react";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Link } from "@/components/link";
import { Section } from "@/components/section";
// import { Sidebar } from "@/components/sidebar";
import { Text } from "@/components/text";

import { TipSection } from "./_components/tip-section";

export const metadata: Metadata = {
  title: "Professor Ragna - Start-ups, Engineering, & Video Games",
  description: "The home page for Professor Ragna (Jourdan Bul-lalayao)",
};

const posts = [
  {
    title: "Introducing the Start-up Engineering Library",
    href: "/blog/introducing-start-up-engineer-library",
    date: "8/1/2024",
  },
];

const Home = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full lg:w-[70%]">
        <Header />

        <main className="flex justify-center my-7 lg:my-[80px]">
          <div className="w-full lg:w-1/2">
            <Section>
              <Text variant="header" tag="h1">{`Hello, I'm Jourdan 👾`}</Text>

              <Text className="my-6">
                I build start-ups, web apps and APIs.
              </Text>

              <Text className="my-6">
                {`I'm a full-stack software engineer based in the San Francisco
                Bay Area, with a decade of experience building and deploying web
                apps and APIs from zero.`}
              </Text>

              <Text className="my-6">
                {`I've built all types of start-ups, from pre-seed with 0 employees, to mid-stage that IPO'ed during my tenure.`}
              </Text>

              <Text className="my-6">
                {`I'm still figuring out what I want to focus on next. In the mean time, I'm researching, prototyping and studying to become the best product engineer
                I can be 🛠️📚. I'm also on `}
                <Link href="https://twitter.com/professorragna">Twitter</Link> a
                lot.
              </Text>
            </Section>

            <Section>
              <Text variant="header" tag="h2">Video Games 🎮</Text>

              <Text className="my-6">
                {`When I'm not coding, I `}
                <Link href="https://twitch.tv/professorragna">stream</Link> and
                talk Pokemon, fighting games 🐬, and JRPGs.
              </Text>

              <Text className="my-6">
                I enjoy playing some games competitively. I was a 2023 World
                Championship competitor in Pokemon, and am recently also a 2024
                World Championship invitee.
              </Text>

              <Text className="my-6">
                {`Casually, I'll wind down with a good RPG like Final Fantasy. I'm on the Dawntrail hype, catch me on Behemoth in `}
                <Link href="https://na.finalfantasyxiv.com/lodestone/character/3410408/#profile">
                  FFXIV
                </Link>
                .
              </Text>
            </Section>

            <Section>
              <Text variant="header" tag="h2">Start-ups & Engineering 🚀</Text>

              <Text className="my-6">
                Are you looking for an engineer for your next start-up?
              </Text>

              <Text className="my-6">
                Tweet me{" "}
                <Link href="https://twitter.com/professorragna">
                  @professorragna
                </Link>{" "}
                or <Link href="mailto:professor.ragna@gmail.com">e-mail</Link>{" "}
                {`me. I'd love to hear what you're building.`}
              </Text>
            </Section>

            <Section>
              <Text variant="header" tag="h2">Chat with me ☕</Text>

              <Text className="my-6">
                {`I'm always open to meeting other engineers, founders, and fellow gamers. `}
                <Link href="https://calendly.com/professorragna/30min">
                  Schedule a chat
                </Link>{" "}
                with me some time and let me know how I can help!
              </Text>
            </Section>

            <Section>
              {/* Suspense needed for useSearchParams... https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout */}
              <Suspense>
                <TipSection />
              </Suspense>
            </Section>

            <Section>
              <Text variant="header" tag="h2">Blog ✍️</Text>

              {posts.map(({ title, href, date }) => (
                <div key={href} className="flex justify-between my-6">
                  <Text>
                    <Link href={href}>{title}</Link>
                  </Text>

                  <Text className="text-secondary">{date}</Text>
                </div>
              ))}
            </Section>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
