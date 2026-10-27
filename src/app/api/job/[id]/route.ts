import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

interface RouteProps {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(request: Request, { params }: RouteProps) {
  const { id } = await params;

  const job = await prisma.job.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!job) {
    return Response.json(
      {
        message: "Job Not Found",
      },
      {
        status: 404,
      },
    );
  }

  return Response.json(job);
}
