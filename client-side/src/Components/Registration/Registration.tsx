import { useContext } from "react";
import { ThemeContext } from "../../ContextAPI/ThemeContext";

const Registration = () => {
  const { theme } = useContext(ThemeContext);
  const submitHandler = () => {
    event?.preventDefault();
    const name = event?.target.name.value;
    const mail = event?.target.mail.value;
    const number = event?.target.number.value;
    const designation = event?.target.designation.value;
    const blood = event?.target.blood.value;
    const password = event?.target.password.value;
    const info = { name, mail, number, designation, blood, password };
    fetch("http://localhost:3000/adduser", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <>
      <section className="min-h-[93vh] bg-background">
        <div className="p-5 flex justify-center items-center flex-wrap flex-col">
          {theme != "light-mode" ? (
            <img
              className="w-52 my-5"
              src="MTS-Logo-in-white-color-with-text.png"
              alt=""
            />
          ) : (
            <img className="w-52 my-5" src="MTS-Logo-Branding.png" alt="" />
          )}

          <div className="my-5 shadow-box-style bg-card rounded shadow-box-shadow-color p-5 w-96 flex flex-col gap-5">
            <form onSubmit={submitHandler}>
              <input
                className="mb-4 uppercase font-secondary block w-full rounded-md bg-accent/10 px-3 py-2 text-base text-primary bold placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
                type="text"
                name="name"
                placeholder="Full Name"
                required
              />
              <input
                className="mb-4 uppercase font-secondary block w-full rounded-md bg-accent/10 px-3 py-2 text-base text-primary bold placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
                type="email"
                name="mail"
                placeholder="Enter E-mail"
                required
              />
              <input
                className="mb-4 uppercase font-secondary block w-full rounded-md bg-accent/10 px-3 py-2 text-base text-primary bold placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
                type="tel"
                name="number"
                placeholder="Enter Number"
                required
              />
              <input
                className="mb-4 uppercase font-secondary block w-full rounded-md bg-accent/10 px-3 py-2 text-base text-primary bold placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
                type="text"
                name="designation"
                placeholder="Enter Designation"
                required
              />
              <input
                className="mb-4 uppercase font-secondary block w-full rounded-md bg-accent/10 px-3 py-2 text-base text-primary bold placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
                type="text"
                name="blood"
                placeholder="Enter Blood Group"
                required
              />
              <input
                className="mb-7 uppercase font-secondary block w-full rounded-md bg-accent/10 px-3 py-2 text-base text-primary bold placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
                type="password"
                name="password"
                placeholder="Enter Password"
                required
              />
              <button
                type="submit"
                className="cursor-pointer uppercase w-full hover:scale-95 hover:bg-secondary hover:shadow-btn-shadow-hover-color bg-primary text-cta-text text-center duration-500 py-2 shadow-btn-style shadow-btn-shadow-color px-3 rounded font-secondary"
              >
                Register Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
