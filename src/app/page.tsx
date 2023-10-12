import Image from "next/image";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Link } from "@/components/Link";
import { Section } from "@/components/Section";
import { Text } from "@/components/Text";

import githubIcon from "@/assets/icon-github.svg";
import linkedinIcon from "@/assets/icon-linkedin.svg";
import twitterIcon from "@/assets/icon-twitter.svg";

const Home = () => {
  return (
    <>
      <Header name="professorragna.com" />
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "80px 0",
        }}
      >
        <div
          style={{
            width: "40%",
          }}
        >
          <Section>
            <h1>Hello, I'm Professor Ragna 👾</h1>

            <Text>I build start-ups, web apps and APIs.</Text>

            <Text>
              I'm a full-stack software engineer based in the San Francisco Bay
              Area, with 9 years of experience building and deploying web
              applications from scratch.
            </Text>

            <Text>
              I have worked with a wide-range of start-ups, from pre-seed with 3
              employees, to mid-stage start-ups that IPO'ed during my tenure.
            </Text>

            <Text>
              But when I'm not coding, I{" "}
              <Link href="https://twitch.tv/professorragna">stream</Link> and
              talk Pokemon, fighting games 🐬, and JRPGs.
            </Text>
          </Section>

          <Section>
            <h2>Start-ups & Engineering 🚀</h2>
            <Text>
              Do you need an engineer for your next start-up or project? Tweet
              me{" "}
              <Link href="https://twitter.com/professorragna">
                @professorragna
              </Link>{" "}
              or <Link href="mailto:professor.ragna@gmail.com">e-mail</Link> me.
              I'd love to hear what you're building.
            </Text>
          </Section>
        </div>
      </main>

      <Footer>
        <span>© 2023 Professor Ragna</span>
        <div>
          <Image src={githubIcon} alt="GitHub" />
          <Image src={linkedinIcon} alt="LinkedIn" />
          <Image src={twitterIcon} alt="Twitter" />
        </div>
      </Footer>
    </>
  );
};

export default Home;
