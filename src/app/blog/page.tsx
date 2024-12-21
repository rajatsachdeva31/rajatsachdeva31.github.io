import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { getBlogPosts } from "@/data/blog";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section>
      <BlurFadeText
        delay={BLUR_FADE_DELAY}
        className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-8"
        yOffset={8}
        text={"Bits of Everything..."}
      />
      <BlurFade
        delay={BLUR_FADE_DELAY + 0.04}
        className="flex items-center justify-between mb-8"
      >
        <p className="text-md tracking-tight md:text-lg">
          A mix of ideas, stories, and random thoughts. It&apos;s a space to
          reflect, experiment, and share whatever&apos;s on my mind—from the
          little things that inspire me to the big ideas that shape my journey.
        </p>
        <Image
          src="/blog.png"
          alt="Memoji having idea"
          width={200}
          height={100}
        />
      </BlurFade>
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
            <Link
              className="flex flex-col space-y-1 mb-4"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col gap-1 pb-6 border-b">
                <p className="text-lg font-semibold">{post.metadata.title}</p>
                <p className="text-sm text-muted-foreground">
                  {post.metadata.summary}
                </p>
                <p className="text-xs text-muted-foreground">
                  {post.metadata.publishedAt}
                </p>
              </div>
            </Link>
          </BlurFade>
        ))}
    </section>
  );
}
