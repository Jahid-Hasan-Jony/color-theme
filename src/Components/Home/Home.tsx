import Card from "./Card";
const Home: React.FC = () => {
  return (
    <>
      <div className="p-5 w-full gap-5 min-h-[93vh] bg-background flex flex-wrap items-center justify-center">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Home;
