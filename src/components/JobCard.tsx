import { Job } from "@/types/job";
import Link from "next/link";

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <Link href={`/jobs/${job.id}`}>
      <div
        className="
          rounded-xl
          p-6

          bg-white
          dark:bg-zinc-900

          text-black
          dark:text-white

          border
          border-zinc-300
          dark:border-cyan-500/20

          shadow-md
          hover:shadow-xl

          hover:scale-[1.02]

          transition-all
          duration-300
        "
      >
        {/* Job Title */}
        <h2 className="text-2xl font-bold">{job.title}</h2>

        {/* Company & Location */}
        <p className="mt-2 text-gray-600 dark:text-zinc-300">
          {job.company} • {job.location}
        </p>

        {/* Salary */}
        <p className="mt-3 font-semibold text-cyan-500">{job.salary}</p>

        {/* Description */}
        <p className="mt-4 text-gray-700 dark:text-zinc-300">
          {job.description}
        </p>

        {/* Experience */}
        <p className="mt-4 font-medium text-cyan-500">
          Experience: {job.experience}
        </p>

        {/* Skills */}
        {job.skills && (
          <div className="mt-4 flex flex-wrap gap-2">
            {job.skills.map((skill) => (
              <span
                key={skill}
                className="
                  rounded-full
                  bg-gray-200
                  dark:bg-zinc-800

                  px-3
                  py-1

                  text-sm
                  text-gray-800
                  dark:text-white
                "
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* Apply Button */}
        <button
          className="
            mt-6
            w-full

            rounded-xl

            bg-cyan-500
            py-3

            font-semibold
            text-black

            transition-all
            duration-300

            hover:bg-cyan-400
          "
        >
          Apply Now
        </button>
      </div>
    </Link>
  );
}
