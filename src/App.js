import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";
import Restaurants from "./components/Restaurants.jsx";
import Footer from "./components/Footer.jsx";
import { useState } from "react";

//custom Hook useThemeSwitcher
function useThemeSwitcher() {
  const [isActive, setIsActive] = useState(false);

  const toggleTheme = () => {
    isActive === true ? setIsActive(false) : setIsActive(true);
    document.getElementById("root").classList.toggle("bg-black");
    document.getElementById("hero_content").classList.toggle("text-white");
  };

  return [isActive, toggleTheme];
}

function App() {
  const [isActive, toggleTheme] = useThemeSwitcher();
  return (
    <div className="flex flex-col gap-12">
      <Header isActive={isActive} toggleTheme={toggleTheme} />
      <HeroSection isActive={isActive} toggleTheme={toggleTheme} />
      <Restaurants />
      <Footer />
    </div>
  );
}

export default App;
