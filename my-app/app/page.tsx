import Latest from "./components/molecules/Latest/Latest";
import Studio from "./components/molecules/Studio/Studio";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <main className="flex flex-col items-center bg-white">
        <div className="w-full max-w-[1440px] mx-auto bg-black">
          <Studio />
          <Latest />
        </div>
      </main>
    </div>
  );
}
