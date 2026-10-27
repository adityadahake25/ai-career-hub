import "dotenv/config";

import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  await prisma.job.createMany({
    data: [
      {
        title: "Frontend Developer",
        company: "Google",
        location: "Remote",
        salary: "₹40k/month",
        description: "Build modern web applications using React and Next.js.",
        experience: "1+ Years",
        logo: "🚀",
      },
      {
        title: "Backend Developer",
        company: "Microsoft",
        location: "Bangalore",
        salary: "₹55k/month",
        description: "Develop scalable backend APIs using Node.js.",
        experience: "2+ Years",
        logo: "💼",
      },
      {
        title: "AI Intern",
        company: "OpenAI",
        location: "Remote",
        salary: "₹60k/month",
        description: "Work on AI and Machine Learning systems.",
        experience: "Fresher / Internship",
        logo: "🤖",
      },
      {
        title: "Full Stack Developer",
        company: "Amazon",
        location: "Hyderabad",
        salary: "₹70k/month",
        description: "Build full-stack applications.",
        experience: "2+ Years",
        logo: "🔥",
      },
      {
        title: "UI/UX Designer",
        company: "Adobe",
        location: "Remote",
        salary: "₹45k/month",
        description: "Design modern interfaces and experiences.",
        experience: "1+ Years",
        logo: "🎨",
      },
    ],
  });

  console.log("Jobs inserted successfully");
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
