import { prisma } from "@/lib/prisma";
import ApplicationTable from "@/components/ApplicationTable";

export default async function ApplicationsPage() {
  // Fetch all applications from the database
  const applications = await prisma.application.findMany({
    include: {
      job: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-8">Applications</h1>

      {/* Pass applications to the client component */}
      <ApplicationTable applications={applications} />
    </main>
  );
}
