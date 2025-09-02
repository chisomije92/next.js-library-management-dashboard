import Link from "next/link";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const ROUTES = [
  {
    id: 1,
    href: "/",
    label: "Home",
  },
  {
    id: 2,
    href: "/books",
    label: "Books",
  },
  {
    id: 3,
    href: "/reading-list",
    label: "Reading List",
  },
  {
    id: 4,
    href: "/debug/memory-leak",
    label: "Debugging",
  },
];

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
        <nav>
          <ul>
            {ROUTES.map((route) => (
              <li className="mb-4" key={route.id}>
                <Link href={route.href} className="hover:text-gray-300">
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="flex-1 bg-gray-100 p-8 text-gray-900">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Library Management Dashboard</h1>
        </header>
        <section>{children}</section>
      </main>
    </div>
  );
}
