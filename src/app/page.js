import HomePageBanner from "./components/banner";
import HomeAbout from "./components/homeAbout";
import HomeService from "./components/homeService";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto relative">
      <HomePageBanner/>
      <HomeAbout />
      <HomeService />
    </main>
  );
}
