import D3Tree from "./D3-Tree";

const Main = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="w-full p-2 text-xl font-bold text-center text-white bg-black line-clamp-1">
        CHAKINGAL
      </div>
      <D3Tree />
    </div>
  );
};

export default Main;
