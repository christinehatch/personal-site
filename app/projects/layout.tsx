import Link from "next/link";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-12">
      {/* Left navigation */}
      <aside className="w-56 shrink-0">
        <h2 className="mb-4 text-sm font-medium text-gray-500">
          Projects
        </h2>

        <nav className="flex flex-col gap-2">
          <Link
            href="/projects/openflights"
            className="rounded px-3 py-2 text-sm hover:bg-gray-100"
          >
            OpenFlights Explorer
          </Link>

          <span className="px-3 py-2 text-sm text-gray-400">
            (more coming)
          </span>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
