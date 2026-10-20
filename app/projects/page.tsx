import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-cyan-400 hover:underline">
          ← 返回首页
        </Link>

        <h1 className="mt-12 text-5xl font-bold">我的项目</h1>
        <p className="mt-6 text-zinc-400">
          这里记录我的软件项目、技术实践与实验。
        </p>

        <div className="mt-12 rounded-xl border border-zinc-800 p-8">
          <h2 className="text-2xl font-semibold">DSH Plugin</h2>
          <p className="mt-4 text-zinc-400">
            已完成初步开发与打包，后续将持续优化。
          </p>
        </div>
      </div>
    </main>
  );
}