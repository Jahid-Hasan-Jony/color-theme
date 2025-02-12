import ColorBtn from "../../Home/ColorBtn";

const Header = () => {
  return (
    <div className="min-h-[7vh] flex flex-wrap bg-background justify-end py-3 px-12 gap-3">
      <ColorBtn btnColor="black" mode="dark" />
      <ColorBtn btnColor="white" mode="light-mode" />
      <ColorBtn btnColor="rgb(78, 0, 0)" mode="red-mode" />
    </div>
  );
};

export default Header;
