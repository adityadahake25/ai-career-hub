"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteApplication(formData: FormData) {
  const id = Number(formData.get("id"));

  await prisma.application.delete({
    where: {
      id,
    },
  });

  revalidatePath("/application");
}
