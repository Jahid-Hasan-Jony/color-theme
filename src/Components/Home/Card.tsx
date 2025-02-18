import { FaCircleCheck } from "react-icons/fa6";

const Card: React.FC = () => {
  return (
    <>
      <div className="shadow-box-style bg-card rounded shadow-box-shadow-color p-5 w-96 flex flex-col gap-5">
        <div className="h-52 rounded bg-center bg-no-repeat bg-cover bg-primary-100 bg-[url(/public/img.jpg)] bg-blend-overlay"></div>
        <h1 className="text-primary font-semibold font-primary text-3xl">
          Project Informations
        </h1>
        <p className="text-accent font-secondary">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <ul className="flex flex-col gap-3">
          <li className="text-accent flex items-center gap-3 font-secondary">
            <FaCircleCheck size={20} className="text-primary" />
            <p>JavaScript</p>
          </li>
          <li className="text-accent flex items-center gap-3 font-secondary">
            <FaCircleCheck size={20} className="text-primary" />
            <p>Tailwind CSS</p>
          </li>
          <li className="text-accent flex items-center gap-3 font-secondary">
            <FaCircleCheck size={20} className="text-primary" />
            <p>Bootstrap</p>
          </li>
          <li className="text-accent flex items-center gap-3 font-secondary">
            <FaCircleCheck size={20} className="text-primary" />
            <p>REACT / Next JS</p>
          </li>
        </ul>
        <a
          href="#"
          className="hover:scale-95 hover:bg-secondary hover:shadow-btn-shadow-hover-color bg-primary text-cta-text text-center duration-500 py-2 shadow-btn-style shadow-btn-shadow-color px-3 rounded font-secondary"
        >
          Read More
        </a>
      </div>
    </>
  );
};

export default Card;
