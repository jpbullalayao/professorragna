import type { Metadata } from "next";

import { BlogPost } from "./BlogPost";

export const metadata: Metadata = {
  title:
    "Ragna's Reads: Start-ups & Engineering (10/16 - 10/22) - Jourdan Bul-lalayao",
  description:
    "Ragna's featured reads in start-ups and engineering, from 10/16 - 10/22.",
};

const Post = () => <BlogPost />;

export default Post;
