import JobCard from "@/components/JobCard";

async function getJobs() {
  const response = await fetch("http://localhost:3000/api/jobs");

  return response.json();
}

export default async function HomePage() {
  const jobs = await getJobs();

  return (
    <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white p-8 transition-colors duration-300">
      {/* HERO */}
      <section className="text-center py-16">
        <h1 className="text-6xl font-bold">AI Career Hub</h1>

        <p className="text-gray-400 mt-4 text-lg">
          Find internships, jobs, and opportunities in tech.
        </p>
      </section>

      {/* JOBS */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job: any) => (
          <JobCard key={job.id} job={job} />
        ))}
      </section>
    </main>
  );
}
