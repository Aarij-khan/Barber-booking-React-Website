import { useEffect, useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "@firebase/auth";
import { auth } from "./firebaseconfig/firebase";
import tick from "./assets/tick.gif";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import Loader from "./loader";
function Signin() {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isloading, setIsloading] = useState(false);
  

  

  function LoginToDatabase() {
    if (Email != "" && password != "") {
      setIsloading(true);
      signInWithEmailAndPassword(auth, Email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          window.location.href = "/dashboard";
          toast("Signin sucuccessfully");
        })
        .catch((error) => {
          toast(error.code);
          setIsloading(false);
        });
        setEmail("");
        setPassword("");
    } else {
      toast("Enter Fields");
      setIsloading(false);
    }
  }

  return (
    <div className="w-full h-[100vh] bg-teal-700 flex items-center justify-center">
      <div className="flex flex-col gap-6 items-center ">
        <img src={tick} className="h-[190px] w-[350px] object-contain" />
        <input
          type="text"
          className="w-[300px] h-[45px] sm:h-[45px] sm:w-[400px] rounded-lg p-1"
          placeholder="Enter Email address"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="w-[300px] h-[45px] sm:h-[45px] sm:w-[400px] rounded-lg p-1"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isloading ? (
          <Loader />
        ) : (
          <button
            className="border-2 p-3 bg-white rounded-lg w-[200px] hover:bg-teal-400 font-bold "
            onClick={LoginToDatabase}
          >
            Login
          </button>
        )}
        <ToastContainer />
      </div>
    </div>
  );
}

export default Signin;
