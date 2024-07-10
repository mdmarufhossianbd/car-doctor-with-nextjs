import HomePageBanner from "./components/banner";
import HomeAbout from "./components/homeAbout";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto relative">
      <HomePageBanner/>
      <HomeAbout />
    </main>
  );
}
