import "./globals.css";
import { DevConsoleGreeting } from "./components/DevConsoleGreeting";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        {/* Invisible helper component for the developer console easter egg */}
        <DevConsoleGreeting />

        <header className="border-b border-gray-100">
          <div className="mx-auto max-w-[1400px] px-6 py-4 flex items-center justify-between">
            <span className="font-medium">
              Christine Ryan
            </span>
            <nav className="flex gap-6 text-sm text-gray-600">
              <a href="/" className="hover:text-gray-900">
                Home
              </a>
              <a href="/projects" className="hover:text-gray-900">
                Projects
              </a>
              <a href="/about" className="hover:text-gray-900">
                About
              </a>
            </nav>
          </div>
        </header>

        <main className="px-6 py-12">
          {children}
        </main>
      </body>
    </html>
  );
}