import Latest from "./components/molecules/Latest/Latest";
import Studio from "./components/molecules/Studio/Studio";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center bg-white font-sans">
      <main className="flex p-20 h-full w-full flex items-center justify-between bg-white">
<Latest/>
<Studio/>
      </main>
    </div>
  );
}
