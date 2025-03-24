// import HamburgerIcon from "../assets/Hamburger";
import SunIcon from "../assets/Sun";
import D3Tree from "./D3-Tree";

const Main = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex items-center justify-between w-full p-2 text-xl font-bold text-center text-primary bg-secondary line-clamp-1">
        <div className="flex items-center justify-center w-8 h-8 hover:bg-secondary-3 rounded-full cursor-pointer">
          {/* <HamburgerIcon /> */}
        </div>
        <div>CHAKINGAL</div>
        <div
          onClick={() => {
            document.getElementById("root")?.classList.toggle("light");
          }}
          className="flex items-center justify-center w-8 h-8 hover:bg-secondary-3 rounded-full cursor-pointer"
        >
          <SunIcon />
        </div>
      </div>
      <D3Tree />
    </div>
  );
};

export default Main;
