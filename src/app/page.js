import Link from "next/link";

export default function Home() {
  return (
    <div className="p-5">
      <div className="flex gap-4 items-center">
        <Link href="/">Home</Link>
        <Link href="/todos">Todos</Link>
      </div>
      <h1 className="text-4xl font-bold  text-center py-5">Home</h1>
    </div>
  );
}
