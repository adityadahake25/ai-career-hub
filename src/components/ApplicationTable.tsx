"use client";

import { useState } from "react";
import DeleteButton from "./DeleteButton";
import { deleteApplication } from "@/actions/delete-application";

interface ApplicationTableProps {
  applications: any[];
}

export default function ApplicationTable({
  applications,
}: ApplicationTableProps) {
  const [search, setSearch] = useState("");

  const filteredApplications = applications.filter((application) =>
    application.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      {/* Search Box */}
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 rounded bg-zinc-800 text-white mb-6"
      />

      <div className="overflow-x-auto">
        <table className="w-full border border-zinc-700">
          <thead>
            <tr className="bg-zinc-900">
              <th className="p-4 border">ID</th>
              <th className="p-4 border">Name</th>
              <th className="p-4 border">Email</th>
              <th className="p-4 border">Job Title</th>
              <th className="p-4 border">Company</th>
              <th className="p-4 border">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredApplications.map((application) => (
              <tr key={application.id}>
                <td className="p-4 border">{application.id}</td>

                <td className="p-4 border">{application.name}</td>

                <td className="p-4 border">{application.email}</td>

                <td className="p-4 border">{application.job.title}</td>

                <td className="p-4 border">{application.job.company}</td>

                <td className="p-4 border">
                  <form action={deleteApplication}>
                    <input type="hidden" name="id" value={application.id} />

                    <DeleteButton />
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
