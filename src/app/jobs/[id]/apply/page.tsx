import { submitApplication } from "@/actions/application-actions";

interface ApplyPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ApplyPage({ params }: ApplyPageProps) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-xl mx-auto bg-zinc-900 p-8 rounded-xl">
        <h1 className="text-3xl font-bold mb-6">Apply For Job #{id}</h1>

        <form action={submitApplication} className="space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-zinc-800"
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-zinc-800"
          />

          <input type="hidden" name="jobId" value={id} />

          <button
            type="submit"
            className="w-full bg-cyan-500 text-black py-3 rounded font-bold"
          >
            Submit Application
          </button>
        </form>
      </div>
    </main>
  );
}
