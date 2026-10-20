
import Link from "next/link";

const projects = [
  {
    name: "DSH Plugin",
    description: "一个正在持续迭代的插件项目，记录从开发到打包交付的工程实践。",
    tags: ["Plugin", "Engineering"],
  },
  {
    name: "MyWebsite",
    description: "使用 Next.js、TypeScript 和 Tailwind CSS 构建的个人网站。",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-5xl px-6">
        {/* 导航 */}
        <header className="flex items-center justify-between border-b border-zinc-800 py-6">
          <Link href="/" className="text-xl font-bold tracking-tight">
            MyWebsite<span className="text-cyan-400">.</span>
          </Link>

          <nav className="flex gap-6 text-sm text-zinc-400">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/projects" className="hover:text-white">Projects</Link>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <Link href="/about" className="hover:text-white">About</Link>
          </nav>
        </header>

        {/* 个人介绍 */}
        <section className="py-24 md:py-32">
          <p className="mb-5 text-sm font-medium tracking-widest text-cyan-400">
            HELLO, WORLD!
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            こんにちは、私は
            <br />
            <span className="text-cyan-400">日本の女子高校生です</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
          コードを書くのが好きで、数学・物理学・化学・天文学・コンピューター科学、そして文学・歴史・哲学・日本のアニメも好きな女の子。でも、ちょっと臆病で内向的だよ～
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-zinc-950 transition hover:bg-cyan-300"
            >
              View my projects →
            </Link>

            <Link
              href="/about"
              className="rounded-lg border border-zinc-700 px-6 py-3 transition hover:border-zinc-400"
            >
              Learn more
            </Link>
          </div>
        </section>

        {/* 项目展示 */}
        <section className="pb-24">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold">SELECTED WORK</h2>
            </div>
            <Link href="/projects" className="text-sm text-zinc-400 hover:text-white">
              All →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.name}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-7 transition hover:border-cyan-500/50"
              >
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="mt-4 min-h-16 leading-7 text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-zinc-800 px-3 py-1 text-xs text-cyan-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 页脚 */}
        <footer className="flex flex-wrap justify-between gap-4 border-t border-zinc-800 py-8 text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} MyWebsite</p>
          <p>Built with Next.js & Tailwind CSS</p>
        </footer>
      </div>
    </main>
  );
}