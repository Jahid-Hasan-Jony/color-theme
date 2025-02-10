const Home: React.FC = () => {
  return (
    <div className="w-full h-screen bg-background flex items-center justify-center">
      <div className="shadow-box-style rounded shadow-box-shadow-color p-5 w-96 flex flex-col gap-5">
        <h1 className="text-primary font-semibold font-primary text-3xl">
          Project Information
        </h1>
        <p className="text-third font-secondary">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <a
          href="#"
          className="hover:scale-95 bg-primary text-third text-center duration-500 py-2 shadow-btn-style shadow-btn-shadow-color px-3 rounded font-secondary"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default Home;
