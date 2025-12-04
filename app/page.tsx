import ResumePage from "./components/ResumePage";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <ResumePage />
      </main>
    </div>
  );
}
