import type { Metadata } from "next";
import { Suspense } from "react";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Link } from "@/components/link";
import { Section } from "@/components/section";
import { Text } from "@/components/text";

import { TipSection } from "./_components/tip-section";

export const metadata: Metadata = {
  title: "Professor Ragna - Start-ups, Engineering, & Video Games",
  description: "The home page for Professor Ragna (Jourdan Bul-lalayao)",
};

const posts = [
  {
    title: "Launching linear-python",
    href: "/blog/launching-linear-python",
    date: "12/26/2024",
  },
  {
    title: "Be a product engineer",
    href: "/blog/be-a-product-engineer",
    date: "12/14/2024",
  },
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
            <Section className="flex flex-col gap-6">
              <Text variant="header" tag="h1">{`Hello, I'm Jourdan 👾`}</Text>

              <Text>I build start-ups.</Text>

              <Text>
                {`I'm a full-stack product engineer based in the San Francisco
                Bay Area, with a decade of experience building and deploying web
                apps and APIs from zero.`}
              </Text>

              <Text>
                {`I've built all types of start-ups, from pre-seed with 0 employees, to mid-stage that IPO'ed during my tenure.`}
              </Text>

              <Text>
                {`I'm currently employed full-time, and enjoy my role a lot. But on the side, I love to prototype, build, research and study to become the best engineer
                I can be 🛠️📚. I'm also on `}
                <Link href="https://twitter.com/professorragna">Twitter</Link> a
                lot.
              </Text>
            </Section>

            <Section className="flex flex-col gap-6">
              <Text variant="header" tag="h2">
                Video Games 🎮
              </Text>

              <Text>
                {`When I'm not coding, I `}
                <Link href="https://twitch.tv/professorragna">stream</Link> and
                talk Pokemon, fighting games 🐬, and JRPGs.
              </Text>

              <Text>
                I enjoy playing some games competitively. I was a 2023 and 2024
                World Championship competitor in Pokemon.
              </Text>

              <Text>
                {`Casually, I'll wind down with a good RPG like Final Fantasy. I'm on the Dawntrail hype, catch me on Behemoth in `}
                <Link href="https://na.finalfantasyxiv.com/lodestone/character/3410408/#profile">
                  FFXIV
                </Link>
                .
              </Text>
            </Section>

            <Section className="flex flex-col gap-6">
              <Text variant="header" tag="h2">
                Start-ups & Engineering 🚀
              </Text>

              <Text>
                Are you looking for an engineer for your next start-up or an
                investor?
              </Text>

              <Text>
                Tweet me{" "}
                <Link href="https://twitter.com/professorragna">
                  @professorragna
                </Link>{" "}
                or <Link href="mailto:professor.ragna@gmail.com">e-mail</Link>{" "}
                {`me. I'd love to hear what you're building.`}
              </Text>
            </Section>

            {/* <Section className="flex flex-col gap-6">
              <Text variant="header" tag="h2">
                Chat with me ☕
              </Text>

              <Text>
                {`I'm always open to meeting other founders, engineers, and fellow gamers. `}
                <Link href="https://calendly.com/professorragna/30min">
                  Schedule a chat
                </Link>{" "}
                with me some time and let me know how I can help!
              </Text>
            </Section> */}

            <Section>
              {/* Suspense needed for useSearchParams... https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout */}
              <Suspense>
                <TipSection />
              </Suspense>
            </Section>

            <Section>
              <Text variant="header" tag="h2">
                Blog ✍️
              </Text>

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
