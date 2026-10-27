"use client";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6">
      <h1 className="text-5xl font-bold text-red-500">Something Went Wrong</h1>

      <p className="text-zinc-400">{error.message}</p>

      <button
        onClick={() => reset()}
        className="bg-cyan-500 text-black px-6 py-3 rounded-xl font-bold"
      >
        Try Again
      </button>
    </main>
  );
}
