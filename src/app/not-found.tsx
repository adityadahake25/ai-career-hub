import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6">
      <h1 className="text-7xl font-bold text-cyan-500">404</h1>

      <h2 className="text-3xl font-semibold">Job Not Found</h2>

      <p className="text-zinc-400">
        The page you're looking for doesn't exist.
      </p>

      <Link
        href="/"
        className="bg-cyan-500 text-black px-6 py-3 rounded-xl font-bold"
      >
        Back To Home
      </Link>
    </main>
  );
}
