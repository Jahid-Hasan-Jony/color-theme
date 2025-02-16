import { useState } from "react";

const User = ({ info }) => {
  const { name, mail, _id } = info;
  const [status, setStatus] = useState(false);
  const [mode, setMode] = useState(false);
  const [defaultValue, setDefaultValue] = useState(info);

  // Corrected function
  const valueHandler = (key, event) => {
    setDefaultValue((prev) => ({
      ...prev,
      [key]: event.target.value,
    }));
  };

  const updateHandler = async () => {
    try {
      const response = await fetch("http://localhost:3000/userUpdate", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(defaultValue), // Ensure defaultValue includes _id
      });

      const data = await response.json();

      if (response.ok) {
        console.log("User updated successfully!");
        setStatus((prev) => !prev); // Ensure proper state update
        setMode(false); // Exit edit mode after updating
      } else {
        console.error(data.error || "Failed to update user info.");
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const deleteHandler = async (_id) => {
    try {
      const response = await fetch("http://localhost:3000/deleteuser", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("User deleted successfully!");
        setStatus(!status);
      } else {
        console.error(data.error || "Failed to delete user.");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <tr className="text-white p-3">
      <td className="p-2">
        {!mode ? (
          _id
        ) : (
          <input
            type="text"
            value={defaultValue?._id}
            onChange={(event) => valueHandler("_id", event)}
          />
        )}
      </td>
      <td className="p-2">
        {!mode ? (
          name
        ) : (
          <input
            type="text"
            value={defaultValue?.name}
            onChange={(event) => valueHandler("name", event)}
          />
        )}
      </td>
      <td className="p-2">
        {!mode ? (
          mail
        ) : (
          <input
            type="email"
            value={defaultValue?.mail}
            onChange={(event) => valueHandler("mail", event)}
          />
        )}
      </td>
      <td className="p-2">
        {!mode ? (
          <>
            <span
              className="bg-red-600 cursor-pointer p-2 inline-block m-1 rounded"
              onClick={() => deleteHandler(_id)}
            >
              Delete
            </span>
            <span
              className="bg-green-700 inline-block m-1 p-2 rounded cursor-pointer"
              onClick={() => setMode((prev) => !prev)}
            >
              Edit
            </span>
          </>
        ) : (
          <>
            <span
              className="bg-green-700 inline-block m-1 p-2 rounded cursor-pointer"
              onClick={() => {
                updateHandler();
                setMode((prev) => !prev);
              }}
            >
              Update
            </span>
            <span
              className="bg-blue-700 inline-block m-1 p-2 rounded cursor-pointer"
              onClick={() => {
                setDefaultValue(info);
                setMode((prev) => !prev);
              }}
            >
              Cancel
            </span>
          </>
        )}
      </td>
    </tr>
  );
};

export default User;
