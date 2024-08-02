import type { Metadata } from "next";

import { Container } from "./container";

export const metadata: Metadata = {
  title:
    "Introducing the Start-up Engineering Library - Jourdan Bul-lalayao",
  description:
    "In this blog post, I announce the Start-up Engineering Library - a collection of articles, videos, and other resources to help you grow as a start-up engineer.",
};

const Post = () => <Container />;

export default Post;
