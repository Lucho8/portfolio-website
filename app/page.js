import NavBar from "@/src/components/NavBar";
import MainPage from "@/src/components/MainPage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <NavBar />
      <MainPage/>
    </main>
  );
}
