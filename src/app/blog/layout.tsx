import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

interface Props {
  children: React.ReactNode;
}

const BlogLayout = ({ children }: Props) => (
  <div className="flex justify-center">
    <div className="w-full lg:w-[70%]">
      <Header />
      <main className="flex justify-center my-7 lg:my-[80px]">
        <article>{children}</article>
      </main>
      <Footer />
    </div>
  </div>
);

export default BlogLayout;
