import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import { contentContainer, mainContainer } from "@/app/page.css";

import StyledComponentsRegistry from "@/lib/registry";

interface Props {
  children: React.ReactNode;
}

const BlogLayout = ({ children }: Props) => (
  <StyledComponentsRegistry>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className={contentContainer}>
        <Header />
        <main className={mainContainer}>
          <article>{children}</article>
        </main>
        <Footer />
      </div>
    </div>
  </StyledComponentsRegistry>
);

export default BlogLayout;
