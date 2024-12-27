import type { Metadata } from "next";

import { Link } from "@/components/link";
import { Text } from "@/components/text";

export const metadata: Metadata = {
  title: "Launching linear-python - Jourdan Bul-lalayao",
  description:
    "In this blog post, I discuss launching linear-python, a Python wrapper for the Linear API.",
};

const Post = () => (
  <div className="flex flex-col gap-6">
    <div className="mb-6">
      <Text variant="header" tag="h1">
        Launching linear-python
      </Text>
      <Text className="text-secondary">12/26/2024</Text>
    </div>

    <Text>
      I launched the first version of{" "}
      <Link
        href="https://github.com/jpbullalayao/linear-python?ref=professorragna.com"
        target="_blank"
      >
        linear-python
      </Link>{" "}
      some time last week.
    </Text>

    <Text>
      As the GitHub README and description suggests, it’s a Python wrapper for
      the{" "}
      <Link href="https://linear.app/?ref=professorragna.com" target="_blank">
        Linear
      </Link>{" "}
      API. Linear is the issue tracker and product planning tool that we use at
      my company. I love it and have no complaints against it, having used more
      tenured tools in JIRA and Asana in the past. It might be the product tool
      of choice for many small start-ups out there nowadays, but if not I’m
      curious to know what other start-ups use instead.
    </Text>

    <Text>
      Anyways, if you happen to be building a Python project that requires you
      to automate the creation of Linear tickets, or perform other
      Linear-related tasks, this is the library for you! I was inspired to begin
      building this library when I was experimenting with the Agent Builder on{" "}
      <Link href="https://agent.ai/?ref=professorragna.com" target="_blank">
        agent.ai
      </Link>
      ; I created a very simple{" "}
      <Link href="https://agent.ai/profile/34f619tk5rlxvh62?ref=professorragna.com">
        Product Requirements Task Agent
      </Link>{" "}
      on there that analyzes PRD files and interprets actionable design +
      engineering tasks out of the PRDs. Currently, it just spits these tasks
      out in text - the agent doesn’t actually create Linear tasks
      automatically.
    </Text>

    <Text>
      However, the goal of this library was to enable any project to automate
      any interactions with the Linear API - that is, allow projects and agents
      such as mine to create Linear tasks, and perform other operations with
      Linear. Admittedly there is still a lot of functionality that needs to be
      built and supported, but I could not find an up-to-date and active python
      project that wrapped the Linear API.
    </Text>

    <Text>
      Give it a try, and let me know what you think! You can download it from{" "}
      <Link
        href="https://pypi.org/project/linear-python?ref=professorragna.com"
        target="_blank"
      >
        PyPI
      </Link>{" "}
      here.
    </Text>
  </div>
);

export default Post;
