import { db } from "./firebaseconfig/firebase";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import Loader from "./loader";
function booking() {
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [inputThree, setInputThree] = useState("");
  const [inputFour, setInputFour] = useState("");
  const [inputFive, setInputFive] = useState("");
  const [isLoader, setisLoader] = useState(false);

  let AllValues = {
    name: inputOne,
    lastname: inputTwo,
    date: inputThree,
    time: inputFour,
    plan: inputFive,
  };
  // firebase code start
  async function SetUserInfo() {
    if (
      inputOne != "" &&
      inputTwo != "" &&
      inputThree != "" &&
      inputFour != "" &&
      inputFive != ""
    ) {
      try {
        setisLoader(true);
        const docRef = await addDoc(collection(db, "UserInfo"), AllValues);
        console.log("Data added ", docRef);
        Swal.fire({
          title: "succuss",
          text: "SUBMITTED",
          icon: "success",
          confirmButtonText: "OK",
        });
        setisLoader(false);
        setInputOne("");
        setInputTwo("");
        setInputThree("");
        setInputFour("");
        setInputFive("");
      } catch (e) {
        setisLoader(false);
        console.error("Error", e);
      }
    } else {
      toast("Please enter Fields");
    }
  }

  return (
    <div className="w-full h-screen bg-[#222423] h-[100%] text-white flex flex-col items-center pb-8">
      <h1 className="text-center text-5xl font-bold font-serif pt-6 pb-8">
        Book your <span className="text-orange-400">Availability</span>{" "}
      </h1>
      <div className="flex flex-col">
        <label htmlFor="input">Name *</label>
        <input
          type="text"
          className="w-[70vw] mt-2 p-2 rounded-lg font-bold text-lg text-black "
          id="input"
          placeholder="Enter Name"
          value={inputOne}
          onChange={(e) => setInputOne(e.target.value)}
        />
      </div>
      <div className="flex flex-col mt-2">
        <label htmlFor="input1">LastName *</label>
        <input
          type="text"
          className="w-[70vw] mt-2 p-2 rounded-lg font-bold text-lg text-black "
          id="input1"
          placeholder="Enter LastName"
          value={inputTwo}
          onChange={(e) => setInputTwo(e.target.value)}
        />
      </div>
      <div className="flex flex-col mt-2">
        <label htmlFor="input3">Date *</label>
        <input
          type="date"
          id="input3"
          className=" text-black w-[70vw] mt-2 p-2 rounded-lg font-bold text-lg"
          value={inputThree}
          onChange={(e) => setInputThree(e.target.value)}
        />
      </div>
      <div className="flex flex-col mt-2">
        <label htmlFor="input4">Time *</label>
        <input
          type="time"
          id="input4"
          className=" text-black w-[70vw] mt-2 p-2 rounded-lg font-bold text-lg"
          value={inputFour}
          onChange={(e) => setInputFour(e.target.value)}
        />
      </div>
      <div className="flex flex-col mt-2">
        <label htmlFor="input5">Plan *</label>
        <select
          id="input5"
          className=" text-black w-[70vw] mt-2 p-2 rounded-lg font-bold text-lg"
          value={inputFive}
          onChange={(e) => setInputFive(e.target.value)}
        >
          <option></option>
          <option>Plan-1</option>
          <option>Plan-2</option>
          <option>Plan-3</option>
        </select>
      </div>
      {isLoader ? (
        <Loader props="mt-6" />
      ) : (
        <button
          className=" text-black w-[30vw] bg-orange-400 mt-8 p-2 rounded-lg font-bold text-lg"
          onClick={SetUserInfo}
        >
          Submit
        </button>
      )}
      <ToastContainer />
    </div>
  );
}

export default booking;
