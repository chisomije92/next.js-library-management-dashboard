"use client";
import Layout from "@/components/layouts/Layout";
import { useMemoryLeaks } from "@/hooks/useMemoryLeaks";

export default function MemoryLeak() {
  const { count, hovered } = useMemoryLeaks();

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">Memory Leak Debugging</h2>
      <p>Count: {count}</p>
      <p className={hovered ? "text-green-500" : "text-gray-500"}>
        {hovered ? "Hover detected" : "No movement detected"}
      </p>
    </Layout>
  );
}
