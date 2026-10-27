import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import type { Metadata } from "next";
import { title } from "process";

interface JobPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: JobPageProps): Promise<Metadata> {
  const { id } = await params;

  const job = await prisma.job.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!job) {
    return {
      title: "Job Not Found",
    };
  }

  return {
    title: `${job.title} | AI Career Hub`,
    description: job.description,
  };
}

export default async function JobDetailsPage({ params }: JobPageProps) {
  // Wait for params
  const { id } = await params;

  // Find matching job
  const job = await prisma.job.findUnique({
    where: {
      id: Number(id),
    },
  });

  // If job not found
  if (!job) {
    notFound();
  }

  // If job exists
  return (
    <main className="min-h-screen bg-black text-white p-10 ">
      <div className="max-w-3xl mx-auto bg-gradient-to-br from-zinc-900 to-zinc-800 p-10 rounded-2xl shadow-2xl">
        {/* Job Title */}
        <h1 className="text-5xl font-bold flex items-center gap-3">
          {job.title}
        </h1>

        {/* Company + Location */}
        <p className="text-gray-400 mt-4 text-xl">
          {job.company} • {job.location}
        </p>

        {/* Salary */}
        <p className="mt-6 text-2xl font-semibold">{job.salary}</p>

        <p className="text-zinc-300 mt-6 text-lg">{job.description}</p>

        <p className="mt-4 text-cyan-400 font-medium">
          Experience Required: {job.experience}
        </p>

        {/* Apply Button */}
        <Link
          href={`/jobs/${job.id}/apply`}
          className="mt-10 block w-full bg-cyan-500 text-black py-4 rounded-xl text-lg font-bold hover:bg-cyan-400 transition text-center"
        >
          Apply Now
        </Link>

        <Link href="/">
          <button className="mt-4 w-full border border-zinc-700 py-4 rounded-xl hover:bg-zinc-800 transition">
            Back To Jobs
          </button>
        </Link>
      </div>
    </main>
  );
}
