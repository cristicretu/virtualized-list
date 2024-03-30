import { VirtualizedList } from "@/components/virtualized-list";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <VirtualizedList itemCount={1000000} />
    </main>
  );
}
