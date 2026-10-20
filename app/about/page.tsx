import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-20 text-white">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-cyan-400 hover:underline">
          ← 返回首页
        </Link>

        <h1 className="mt-12 text-5xl font-bold">关于我</h1>

        <p className="mt-8 max-w-2xl text-lg leading-9 text-zinc-400">
        コードを書くのが好きで、数学・物理学・化学・天文学・コンピューター科学、そして文学・歴史・哲学・日本のアニメも好きな女の子。でも、ちょっと臆病で内向的だよ～
        </p>
      </div>
    </main>
  );
}