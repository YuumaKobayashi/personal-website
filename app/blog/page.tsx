import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-cyan-400 hover:underline">
          ← 返回首页
        </Link>

        <h1 className="mt-12 text-5xl font-bold">Blogs</h1>
        <p className="mt-6 inline-block rounded-2xl bg-pink-500/10 px-4 py-2 text-pink-200 ring-1 ring-pink-400/30">
          <span>🎀</span>
          Record the way I build my projects, and also so thought about the society.
        </p>

        <div className="mt-12 rounded-xl border border-zinc-800 p-8">
          <h2 className="text-2xl font-semibold">第一篇文章即将发布</h2>
          <p className="mt-4 text-zinc-400">
            接下来会在这里实现 Markdown 博客系统。
          </p>
        </div>
      </div>
    </main>
  );
}