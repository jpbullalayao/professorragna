import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Link } from "@/components/Link";
import { Section } from "@/components/Section";
import { Text } from "@/components/Text";

import { contentContainer, mainContainer, sections } from "./page.css";

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
              <h1>{`Hello, I'm Jourdan 👾`}</h1>

              <Text>I build start-ups, web apps and APIs.</Text>

              <Text>
                {`I'm a full-stack software engineer based in the San Francisco
                Bay Area, with 9 years of experience building and deploying web
                applications and APIs from scratch.`}
              </Text>

              <Text>
                I have worked with all types of start-ups, from pre-seed with 3
                {` employees, to mid-stage that IPO'ed during my tenure.`}
              </Text>

              <Text>
                {`I'm still figuring out what's next in my career path. But at the
                same time, I'm building and studying to become the best engineer
                I can be 🛠️📚.`}
              </Text>
            </Section>

            <Section>
              <h2>Video Games 🎮</h2>

              <Text>
                {`When I'm not coding, I `}
                <Link href="https://twitch.tv/professorragna">stream</Link> and
                talk Pokemon, fighting games 🐬, and JRPGs.
              </Text>

              <Text>
                I enjoy playing some games competitively, and am most recently a
                2023 World Championship competitor in Pokemon.
              </Text>

              <Text>
                {`Casually, I'll wind down with a good RPG like Final Fantasy.`}
              </Text>
            </Section>

            <Section>
              <h2>Start-ups & Engineering 🚀</h2>

              <Text>
                Do you need an engineer to build your next start-up or project?
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
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
