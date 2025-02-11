import Card from "./Card";
import ColorBtn from "./ColorBtn";
const Home: React.FC = () => {
  return (
    <>
      <div className="min-h-[7vh] flex flex-wrap bg-background justify-end py-3 px-12 gap-3">
        <ColorBtn btnColor="black" mode="dark" />
        <ColorBtn btnColor="white" mode="light-mode" />
        <ColorBtn btnColor="red" mode="red-mode" />
      </div>
      <div className="p-5 w-full gap-5 min-h-[93vh] bg-background flex flex-wrap items-center justify-center">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Home;
