import Land from "@/app/components/molecules/Land/Land";

export default function Home() {
  return (
    <div className="flex items-center justify-center bg-white font-sans">
      <main className="flex h-full w-full flex items-center justify-between bg-white">
           <Land/>
      </main>
    </div>
  );
}
