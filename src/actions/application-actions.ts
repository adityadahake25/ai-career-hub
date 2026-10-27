"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function submitApplication(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const jobId = Number(formData.get("jobId"));

  await prisma.application.create({
    data: {
      name,
      email,
      jobId,
    },
  });

  redirect("/application-success");
}
