import { BlogPost } from "./BlogPost";

export const metadata: Metadata = {
  title:
    "Ragna's Reads: Start-ups & Engineering (10/16 - 10/22) - Jourdan Bul-lalayao",
  description:
    "Ragna's featured reads in start-ups and engineering, from 10/16 - 10/22.",
};

interface Article {
  title: string;
  href: string;
  description: string;
}

export const articles: Article[] = [
  {
    title: "7 simple habits of the top 1% of engineers",
    href:
      "https://engineercodex.substack.com/p/7-simple-habits-of-the-top-1-of-engineers?utm_source=professorragna",
    description:
      "The author of the Engineer's Codex substack shares 7 habits that they observed from some of the elite engineers that they have worked with in their career. These engineers have previously worked at large tech firms like FAANG, and even small start-ups.",
  },
];

const Post = () => <BlogPost />;

export default Post;
