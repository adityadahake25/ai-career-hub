import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="bg-zinc-900 text-white px-8 py-4 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold">AI Career Hub</h1>

        <div className="flex gap-6 text-lg">
          <Link href="/">Home</Link>

          <Link href="/jobs">Jobs</Link>

          <Link href="/dashboard">Dashboard</Link>

          <Link href="applications">Applications</Link>

          <Link href="/about">About</Link>

          <Link href="/contact">Contact</Link>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
