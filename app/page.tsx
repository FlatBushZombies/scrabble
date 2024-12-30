import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import WaitingList from "@/components/WaitingList";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Navbar */}
      <header className="w-full">
      </header>

      {/* Main Content */}
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <Hero />
        
      </main>

  
    </div>
  );
}
