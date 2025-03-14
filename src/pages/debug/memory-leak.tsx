import { useEffect, useState } from "react";
import Layout from "@/components/Layout";

export default function MemoryLeak() {
  const [count, setCount] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    window.addEventListener("mousemove", () => setHovered(true));

  }, []);

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
