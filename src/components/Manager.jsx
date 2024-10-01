import React, { useEffect, useState } from "react";
import CryptoJS from "crypto-js";
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
  const [icon, setIcon] = useState("visibility_off");
  const [view, setView] = useState("password");
  const [form, setForm] = useState({
    site: "",
    username: "",
    password: "",
    id: "",
  });
  const [passwordArray, setpasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    }
  }, []);

  const show = () => {
    if (icon === "visibility_off") {
      setIcon("visibility");
      setView("text");
    } else {
      setIcon("visibility_off");
      setView("password");
    }
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const savePassword = () => {
    if (!form.site || !form.username || !form.password) {
      alert("Please fill the form properly!");
      return;
    }
      setpasswordArray((prevpasswordArray) => {
        const newId = uuidv4();
        const encryptedPassword = CryptoJS.AES.encrypt(form.password, "your-secret-key").toString();
        const newPassword = { ...form, id: newId, password: encryptedPassword};
        localStorage.setItem(
          "passwords",
          JSON.stringify([...prevpasswordArray, newPassword])
        );
        console.log(newPassword, newId);
        setForm({ site: "", username: "", password: "", id: "" });
        return [...prevpasswordArray, form];
      });
  };
  const copytext = (text) => {
    navigator.clipboard.writeText(text);
  };
  const editPassword = (id) => {
    const edit = (passwordArray.find((item) => item.id === id)[0]);
    setForm({...edit, password: CryptoJS.AES.decrypt(passwordToEdit.password, "your-secret-key").toString(CryptoJS.enc.Utf8)});
    deletePassword(id);
  };
  const deletePassword = (id) => {
    setpasswordArray(passwordArray.filter((item) => item.id !== id));
    setpasswordArray(passwordArray.filter((item) => item.id !== id));
    localStorage.setItem(
      "passwords",
      JSON.stringify(passwordArray.filter((item) => item.id !== id))
    );
  };

  return (
    <div className="max-w-7xl min-h-screen mx-auto">
      <div className="flex ml-[46%]">
        <h1 className="text-white font-bold text-3xl">Pass</h1>
        <h1 className="text-green-800 font-bold text-3xl">OP</h1>
      </div>
      <p className="text-green-300 ml-[42%] text-l">
        Your own password manager
      </p>
      <div className="flex flex-col p-5 pt-9 px-10">
        <input
          onChange={handleChange}
          className="rounded-full border-green-800 p-5 py-2"
          value={form.site}
          name="site"
          placeholder="Enter website URL"
          type="text"
        />
        <div className="flex justify-around gap-12 py-10">
          <input
            onChange={handleChange}
            className="rounded-full w-full border-green-800 p-5 py-2"
            value={form.username}
            name="username"
            placeholder="Enter Username"
            type="text"
          />
          <div className="relative">
            <input
              onChange={handleChange}
              className="rounded-full w-full border-green-800 p-5 py-2"
              value={form.password}
              name="password"
              placeholder="Enter Password"
              type={view}
            />
            <span
              className="material-symbols-outlined absolute right-2 top-2 cursor-pointer"
              onClick={show}
            >
              {icon}
            </span>
          </div>
        </div>
        <button
          onClick={savePassword}
          className="flex gap-3 bg-green-800 justify-center mt-2 p-5 py-2 rounded-lg mx-auto border-2 border-green-300"
        >
          <lord-icon
            src="https://cdn.lordicon.com/jgnvfzqg.json"
            trigger="hover"
            colors="primary:#ffffff"
          ></lord-icon>
          <h2 className="text-white text-2xl">Add Password</h2>
        </button>
      </div>
      <div className="pt-6 w-full">
        {passwordArray.length === 0 && (
          <div className="text-white text-center text-2xl">
            No passwords available to show.
          </div>
        )}
        {passwordArray.length != 0 && (
          <div>
            <table className="w-6/7 mx-auto rounded-lg overflow-hidden">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th className="p-2 border border-black">Website URL</th>
                  <th className="p-2 border border-black">Username</th>
                  <th className="p-2 border border-black">Password</th>
                  <th className="p-2 border border-black">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-green-100">
                {passwordArray.map((item) => {
                  return (
                    <tr>
                      <td className="text-center w-32 p-2 border border-black pt-3">
                        <div className="flex justify-center gap-2">
                          <a href={item.site} target="_blank">
                            {item.site}
                          </a>
                          <div
                            className="cursor-pointer"
                            onClick={() => {
                              copytext(item.site);
                            }}
                          >
                            <lord-icon
                              src="https://cdn.lordicon.com/depeqmsz.json"
                              trigger="hover"
                              style={{ width: "23px", height: "23px" }}
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className="text-center w-32 p-2 border border-black pt-3">
                        <div className="flex justify-center gap-2">
                          {item.username}
                          <div
                            className="cursor-pointer"
                            onClick={() => {
                              copytext(item.username);
                            }}
                          >
                            <lord-icon
                              src="https://cdn.lordicon.com/depeqmsz.json"
                              trigger="hover"
                              style={{ width: "23px", height: "23px" }}
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className="text-center w-32 p-2 border border-black pt-3">
                        <div className="flex justify-center gap-2">
                        {CryptoJS.AES.decrypt(item.password, "your-secret-key").toString(CryptoJS.enc.Utf8)}
                          <div
                            className="cursor-pointer"
                            onClick={() => {
                              copytext(CryptoJS.AES.decrypt(item.password, "your-secret-key").toString(CryptoJS.enc.Utf8));
                            }}
                          >
                            <lord-icon
                              src="https://cdn.lordicon.com/depeqmsz.json"
                              trigger="hover"
                              style={{ width: "23px", height: "23px" }}
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className="text-center w-32 p-2 border border-black pt-3">
                        <span className="flex gap-2 justify-center">
                          <lord-icon
                            onClick={() => {
                              editPassword(item.id);
                            }}
                            src="https://cdn.lordicon.com/ogkflacg.json"
                            trigger="hover"
                            style={{ width: "23px", height: "23px" }}
                          ></lord-icon>
                          <lord-icon
                            onClick={() => {
                              deletePassword(item.id);
                            }}
                            src="https://cdn.lordicon.com/skkahier.json"
                            trigger="hover"
                            style={{ width: "23px", height: "23px" }}
                          ></lord-icon>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Manager;
