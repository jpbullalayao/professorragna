import type { Metadata } from "next";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Link } from "@/components/link";
import { Section } from "@/components/section";
import { Text } from "@/components/text";

import { contentContainer, mainContainer, sections } from "./page.css";

export const metadata: Metadata = {
  title: "Jourdan Bul-lalayao - Start-ups, Engineering, & Video Games",
  description: "The home page for Jourdan Bul-lalayao",
};

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className={contentContainer}>
        <Header />
        <main className={mainContainer}>
          <div className={sections}>
            <Section>
              <h1 className="text-2xl font-bold">{`Hello, I'm Jourdan 👾`}</h1>

              <Text className="my-6">I build start-ups, web apps and APIs.</Text>

              <Text className="my-6">
                {`I'm a full-stack software engineer based in the San Francisco
                Bay Area, with a decade of experience building and deploying web
                applications and APIs from scratch.`}
              </Text>

              <Text className="my-6">
                I have worked with all types of start-ups, from pre-seed with 0
                {` employees, to mid-stage that IPO'ed during my tenure.`}
              </Text>

              <Text className="my-6">
                {`I'm still figuring out what's next in my career path. But at the
                same time, I'm building and studying to become the best engineer
                I can be 🛠️📚.`}
              </Text>
            </Section>

            <Section>
              <h2 className="text-2xl font-bold">Video Games 🎮</h2>

              <Text className="my-6">
                {`When I'm not coding, I `}
                <Link href="https://twitch.tv/professorragna">stream</Link> and
                talk Pokemon, fighting games 🐬, and JRPGs.
              </Text>

              <Text className="my-6">
                I enjoy playing some games competitively. I was a
                2023 World Championship competitor in Pokemon, and am recently also a 2024 World Championship invitee.
              </Text>

              <Text className="my-6">
                {`Casually, I'll wind down with a good RPG like Final Fantasy.`}
              </Text>
            </Section>

            <Section>
              <h2 className="text-2xl font-bold">Start-ups & Engineering 🚀</h2>

              <Text className="my-6">
                Do you need an engineer to build your next start-up or project?
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
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
