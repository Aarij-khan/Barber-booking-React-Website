import { collection, getDocs } from "firebase/firestore";
import { signOut, onAuthStateChanged } from "@firebase/auth";
import { db } from "./firebaseconfig/firebase";
import { auth } from "./firebaseconfig/firebase";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Dashboard() {
  const [data, setData] = useState([]);

  async function readUserData() {
    let arr = [];
    const querySnapshot = await getDocs(collection(db, "UserInfo"));
    querySnapshot.forEach((doc) => {
      arr.push(doc.data());
      setData(arr);
    });
  }

  useEffect(() => {
    readUserData();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // toast(`Hello ${user.email.split("@")[0]}`)
      } else {
        console.log("No");
        window.location.href = "/signin";
      }
    });
  }, []);
  function signoutUser() {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        toast(error);
      });
    toast("Signout succussfully");
  }
  return (
    <div className="bg-[#222423] w-full h-screen">
      <h1 className="text-5xl text-center font-bold text-white">DashBoard</h1>
      <h1 className="text-4xl text-center font-bold mt-6 text-white pb-4">
        Bookings
      </h1>
      <div className="w-full flex justify-end pb-2 pr-4  ">
        <button
          className="p-2 bg-orange-400 w-[10 bg-red-300 text-center0px] rounded-xl"
          onClick={signoutUser}
        >
          Signout
        </button>
      </div>
      <hr />

      {/* <div className="w-full flex justify-between items-center p-4  ">
        <h1 className="text-orange-400 uppercase text-xl ">S no</h1>
        <h1 className="text-orange-400 uppercase text-xl ">Customer Name</h1>
        <h1 className="text-orange-400 uppercase text-xl ">Lastname</h1>
        <h1 className="text-orange-400 uppercase text-xl ">Plans</h1>
        <h1 className="text-orange-400 uppercase text-xl ">Date</h1>
        <h1 className="text-orange-400 uppercase text-xl ">Time</h1>
      </div> */}

      <div className="text-white py-4 text-xl sm:text-2xl w-full flex">
        <th className="pl-10  text-left w-[19vw] pt-2 hidden sm:block ">S no</th>
        <td className="sm:pl-10 pl-2 text-left w-[20vw]" colspan="3">
        Customer
        </td>
        <td className="pl-10  text-center w-[20vw] hidden sm:block" colspan="2">
        Lastname
        </td>
        <td className="sm:pl-10 pl-8  text-center w-[20vw]" colspan="2">
        Plans
        </td>
        <td className="sm:pl-10 pl-14  text-center w-[20vw]" colspan="2">
        Date
        </td>
        <td className="sm:pl-10 pl-20 text-center   w-[20vw]" colspan="2">
        Time
        </td>
      </div>
      <hr />
      {data.map((e, index) => {
        return (
          <div className="text-white text-xl w-full  bg-[#222423] flex">
            <div key={index} className="text-white text-lg sm:text-2xl flex " >
              <th className="pl-10  text-left w-[20vw] pt-2 sm:text-xl hidden sm:block">{index}</th>
              <td className="sm:pl-6 pl-4 text-left w-[20vw] " colspan="3">
                {e.name}
              </td>
              <td className="text-center w-[8vw] hidden sm:block" colspan="2">
                {e.lastname}
              </td>
              <td className=" pl-5 text-center w-[23vw]" colspan="2">
                {e.plan}
              </td>
              <td className="  sm:w-[18vw] pl-7 sm:pl-0" colspan="2">
                {e.date}
              </td>
              <td className=" text-center  w-[8vw] pl-7 sm:pl-0" colspan="2">
                {e.time}
              </td>
            </div>
          </div>
          // <div key={index} className="w-full h-[40px] flex justify-center items-center  gap-[90px] md:gap-[145px] border ">
          //     <h1 className="text-white mt-2 ">{index}</h1>
          //     <h1 className="text-white mt-2 ml-[10 bg-red-300 text-center0px] md:ml-[120px]">{e.name}</h1>
          //     <h1 className="text-white mt-2 ml-[120px] md:ml-[120px]">{e.lastname}</h1>
          //     <h1 className="text-white mt-2 ml-[110 bg-red-300 text-centerpx] md-ml-[90px]">{e.plan}</h1>
          //     <h1 className="text-white mt-2">{e.date}</h1>
          //     <h1 className="text-white mt-2">{e.time}</h1>
          // </div>
        );
      })}

      <ToastContainer />
    </div>
  );
}

export default Dashboard;

// date
// :
// "2024-08-05"
// lastname
// :
// "won"
// name
// :
// "khan"
// plan
// :
// "Plan-3"
// time
