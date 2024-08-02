import { Link } from "@/components/link";
import { Text } from "@/components/text";

export const Container = () => (
	<article>
    <div className="mb-6">
      <Text className="text-2xl font-bold" tag="h1">
        Introducing the Start-up Engineering Library 📚
      </Text>
      <Text className="text-secondary">
        8/1/2024
      </Text>
    </div>
		<Text className="mb-6">
			I’m very excited to share a small project I’ve put together, the{" "}
			<Link href="https://github.com/jpbullalayao/startup-engineer-library">
				Start-up Engineer Library
			</Link>
			!
		</Text>

		<Text className="mb-6">
			You can probably guess the target audience from the name, but I hope it
			can reach software engineers of any level, whether you’re just starting
			your career out of school and exploring the world of start-ups, or if
			you’re a principal engineer ready to start on the next big idea.
		</Text>

		<Text className="mb-6">
			In this library, I’ve begun to compile a list of some of the highest
			quality resources out there that have proven to be invaluable during my
			career as an engineer building start-ups. I find myself constantly coming
			back to these when I’m building and ideating, and I find these resources
			just as useful as the last time I’ve consumed them.
		</Text>

		<Text className="mb-6">
			The resources published in the library range from a few different mediums
			- namely, YouTube videos and online essays. As I continue growing and
			pursuing my goals, you can expect more content from this library that not
			only takes the form of videos and essays, but also podcasts, book
			recommendations, and blog posts. I hope it can be an invaluable resource
			to you in your role as a software engineer building start-ups.
		</Text>

		<Text className="mb-6">
			Please feel free to star/watch the repo, and tweet me{" "}
			<Link href="https://twitter.com/professorragna">@professorragna</Link> if
			there are any particular resources you know of that I could learn from!
		</Text>
	</article>
);
