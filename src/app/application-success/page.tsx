import Link from "next/link";

export default function ApplicationSuccessPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="bg-zinc-900 p-10 rounded-xl text-center max-w-lg">
        <h1 className="text-4xl font-bold text-green-500">
          Application Submitted!
        </h1>

        <p className="mt-4 text-zinc-400">
          Your application has been successfully saved.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block bg-cyan-500 text-black px-6 py-3 rounded-lg font-bold"
        >
          Back To Jobs
        </Link>
      </div>
    </main>
  );
}
