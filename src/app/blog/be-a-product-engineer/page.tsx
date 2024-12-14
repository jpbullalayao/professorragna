import type { Metadata } from "next";

import { Link } from "@/components/link";
import { Text } from "@/components/text";

export const metadata: Metadata = {
	title: "Be a product engineer - Jourdan Bul-lalayao",
	description:
		"In this blog post, I discuss the rise of AI and how it's changing the way engineers work, and how engineers can leverage AI to be closer to their product and help shape the vision that companies need to build for success.",
};

const Post = () => (
	<div className="flex flex-col gap-6">
		<div className="mb-6">
			<Text variant="header" tag="h1">
				Be a product engineer
			</Text>
			<Text className="text-secondary">12/14/2024</Text>
		</div>

		<Text>
			{`I continue to be amazed by the prospect of what you can do with AI the
			more I use it, and it's constantly evolving. New models like GPT-4o and
			Claude 3.5 Sonnet are frequently released, new AI start-ups and products
			are coming out of both left and right field everyday, and it's hard to
			keep up with - but with the ones that have stuck out, it's been incredible
			to discover and envision the kind of world we're building towards.`}
		</Text>

		<Text>
			{`Let me start with how I view AI impacting engineers from a career
			standpoint. Perhaps this might even be the only point I discuss first and
			I may save more thoughts for another post, because there's a lot I can
			talk about in regards to how AI affects literally everything that
			interests me as an engineer. I think what makes a great engineer today,
			and perhaps what you'd even call a 10x Engineer before, is not the same as
			what it was yesterday. At least in the world of start-ups. And perhaps
			that's actually been the case for the past 1-2 years, but I just haven't
			realized it until earlier this year and actually had the opportunity to
			talk about it sooner.`}
		</Text>

		<Text>
			{`Many individual contributors (ICs) like myself are enamored by the idea of
			being the type of engineer that can deliver great value to their company,
			and has deep technical expertise and can solve any technical problem in
			front of them, with the highest quality and standards to top it off. It's
			what I've wanted myself since I began my career after graduating from
			university. Whether that's solving a tough (but easy for you) leetcode
			interview question in 10 mins, or consistently delivering major products
			to users that previously started as ambiguous product proposals that did
			not have clear requirements. You just knew what had to be done and you did
			it. Or maybe you didn’t, but you figured it out. And you delivered it
			fast.`}
		</Text>

		<Text>
			Technical expertise at such a high level has and always will be very
			important to any team. This will never change, but now more than ever the
			success of companies and the scale at which they see it will be a function
			of engineering talent, especially with how many companies are started and
			competing with each other every day. But it’s not just the technical
			expertise that engineers can deliver value with now. Engineers today have
			an easier opportunity to build for and optimize for a new skill set that
			will deliver even more value to companies.
		</Text>

		<Text className="font-bold">Be a product engineer.</Text>

		<Text>
			It’s a bit cliche - product engineers aren’t a new thing. Companies like{" "}
			<Link href="https://posthog.com/">PostHog</Link> hire specifically for
			them. Engineers at companies like{" "}
			<Link href="https://angellist.com/" target="_blank">
				AngelList
			</Link>{" "}
			have moved up from IC roles into product leadership roles. But what’s
			different today are the suite of AI tools that are available for engineers
			to be closer to their product and help shape the vision that companies
			need to build for success.
		</Text>

		<Text>
			I was inspired to share my thoughts because AI has helped me think about
			my work not just from an engineering perspective but also with a product
			lens. Prototyping tools like the{" "}
			<Link href="https://replit.com/" target="_blank">
				Replit
			</Link>{" "}
			agent and Vercel’s{" "}
			<Link href="https://v0.dev/" target="_blank">
				v0
			</Link>{" "}
			have made it easy to put a basic web prototype together for the purposes
			of gathering feedback from users, communicating business requirements and
			UI/UX ideas with designers, and ultimately learning what is possible with
			the product I’m trying to build. And this is really just the tip of the
			iceberg. Never have I felt more powerful and product-knowledgable as an
			engineer.
		</Text>

		<Text>
			On top of solving engineering problems, AI helps engineers solve business
			problems.
		</Text>

		<Text>
			With what AI products are being built nowadays, it feels like many more
			great companies can and will be built without dedicated product managers
			and designers. They will just need great engineers, and my theory is that
			the great engineers of today and tomorrow will be the ones who can
			effectively leverage AI to deliver business value. Understand the product,
			understand the industry, become close enough to your users to know their
			pain points, and then build - it’s easier than ever with AI.
		</Text>
	</div>
);

export default Post;
