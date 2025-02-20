import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../ContextAPI/ThemeContext";
import User from "../User/User";

const Registration = () => {
  const { theme } = useContext(ThemeContext);
  const [data, setData] = useState([]); // Store users
  const [file, setFile] = useState(null); // Store file

  // Fetch Users (Runs only once)
  useEffect(() => {
    fetch("http://localhost:3000/allusers")
      .then((res) => res.json())
      .then((users) => setData(users))
      .catch((error) => console.error("Fetch Error:", error));
  }, [data]); // ✅ Empty dependency array to prevent infinite loop

  // Handle Image Selection
  const imageHandler = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle Form Submit
  const submitHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", event.target.name.value);
    formData.append("mail", event.target.mail.value);
    formData.append("number", event.target.number.value);
    formData.append("designation", event.target.designation.value);
    formData.append("blood", event.target.blood.value);
    formData.append("password", event.target.password.value);

    try {
      const response = await fetch("http://localhost:3000/adduser", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to add user");
      }

      const newUser = await response.json();
      setData((prevData) => [...prevData, newUser]); // ✅ Manually append new user
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <section className="min-h-[93vh] bg-background">
        <div className="p-5 flex justify-center items-center flex-wrap flex-col">
          {theme !== "light-mode" ? (
            <img
              className="w-52 my-5"
              src="MTS-Logo-in-white-color-with-text.png"
              alt="Logo"
            />
          ) : (
            <img className="w-52 my-5" src="MTS-Logo-Branding.png" alt="Logo" />
          )}

          {/* Registration Form */}
          <div className="my-5 shadow-box-style bg-card rounded shadow-box-shadow-color p-5 w-96 flex flex-col gap-5">
            <form onSubmit={submitHandler}>
              <input
                className="mb-4 uppercase font-secondary block w-full rounded-md bg-accent/10 px-3 py-2 text-base text-primary bold placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary"
                type="file"
                name="file"
                required
                accept="image/jpg, image/png, image/jpeg"
                onChange={imageHandler}
              />
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

        {/* User Table */}
        <div className="flex justify-center items-center">
          <table className="table-auto">
            <thead className="text-white">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Mail</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <User key={item._id} info={item} />
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Registration;
