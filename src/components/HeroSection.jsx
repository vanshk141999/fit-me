import Graphic from "../assets/graphic.png";
import Banana from "../assets/banana.svg";
import Apple from "../assets/apple.png";
import HeroImage from "../assets/hero-image.png";
import { BsChevronDoubleDown } from "react-icons/bs";

function HeroSection({ isActive, toggleTheme }) {
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div id="hero_content" className="flex gap-8">
        <div>
          <img
            src={Graphic}
            className="hidden lg:block mt-44 w-[500px]"
            alt="graphic-pattern"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-medium">
            Premium <span className="text-[#FC8018]">Quality</span>
          </h1>
          <h1 className="flex flex-row gap-2 items-center text-5xl font-medium">
            Food for your <img src={Banana} alt="banana" />
            <span className="text-[#FC8018]">healthy</span>
          </h1>
          <h1 className="flex flex-row gap-2 items-center text-5xl font-medium">
            <img src={Apple} alt="apple" className="w-32" />
            <span className="text-[#FC8018]">& Daily Life</span>
          </h1>
          <p className="break-words">
            Your one-stop destination for delicious delivery meals. Elevate your
            daily meals with premium quality, healthy food options, designed to
            nourish your body and satisfy your taste buds.
          </p>
          <div className="mt-10">
            <h3>Popular cities in India</h3>
            <div className="pt-10">
              <a href="/" className="">
                <span className="text-[#9BA3AF] hover:text-[#FC8018]">
                  Hyderabad
                </span>
                <span className="text-[#FC8018] mx-10 hover:text-[#9BA3AF]">
                  Chennai
                </span>
                <span className="text-[#9BA3AF] hover:text-[#FC8018]">
                  Mumbai
                </span>
                <span className="text-[#FC8018] mx-10 hover:text-[#9BA3AF]">
                  Bangalore
                </span>
                <span className="text-[#9BA3AF] hover:text-[#FC8018]">
                  Delhi
                </span>
                <span className="text-[#FC8018] mx-10 hover:text-[#9BA3AF]">
                  Kolkata
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <img src={HeroImage} alt="heroImage" />
        </div>
      </div>
      <div className="animate-bounce drop-shadow-lg">
        {isActive ? (
          <BsChevronDoubleDown size={25} color="white" />
        ) : (
          <BsChevronDoubleDown size={25} />
        )}
      </div>
    </div>
  );
}

export default HeroSection;
