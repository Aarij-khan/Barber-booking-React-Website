import { collection, getDocs } from "firebase/firestore";
import { signOut, onAuthStateChanged } from "@firebase/auth";
import { db } from "./firebaseconfig/firebase";
import { auth } from "./firebaseconfig/firebase";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Loader from "./loader";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
function Dashboard() {
  const navigate = useNavigate()
  const [data, setData] = useState([]);
  const [isLoader, setIsLoader] = useState(false);

  async function readUserData() {
    let arr = [];
    const querySnapshot = await getDocs(collection(db, "UserInfo"));
    querySnapshot.forEach((doc) => {
      arr.push({...doc.data(),docId:doc.id});
      setData(arr);
    });
  }

  useEffect(() => {
    readUserData();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // toast(`Hello ${user.email.split("@")[0]}`)
        // navigate("/dashboard")
        console.log("yes");
        // window.location.href = "/dashboard";
        
      } else {
        window.location.href = "/signin";
      }
    });

  }, []);
  function signoutUser() {
    setIsLoader(true)
    signOut(auth)
      .then(() => {
        navigate("/signin");
      })
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
         {isLoader?<Loader/>:"Signout"} 
        </button>
      </div>
      <hr />

      <div className="text-white py-4 text-xl sm:text-2xl w-full flex">
        <th className="pl-10  text-left w-[19vw] pt-2 hidden sm:block ">S no</th>
        <td className="sm:pl-10 pl-2 text-left w-[20vw]" >
        Customer
        </td>
        <td className="pl-10  text-center w-[20vw] hidden sm:block">
        Lastname
        </td>
        <td className="sm:pl-10 pl-8  text-center w-[20vw]">
        Plans
        </td>
        <td className="sm:pl-10 pl-14  text-center w-[20vw]">
        Date
        </td>
        <td className="sm:pl-10 pl-20 text-center   w-[20vw]" >
        Time
        </td>
      </div>
      <hr />
      {data.map((e, index) => {
        return (
          <div key={index} className="text-white text-xl w-full  bg-[#222423] flex">
            <div  className="text-white text-lg sm:text-2xl flex " >
              <th className="pl-10  text-left w-[20vw] pt-2 sm:text-xl hidden sm:block">{index}</th>
              <td className="sm:pl-6 pl-4 text-left w-[20vw] " >
                {e.name}
              </td>
              <td className="text-center w-[8vw] hidden sm:block">
                {e.lastname}
              </td>
              <td className=" pl-5 text-center w-[23vw]" >
                {e.plan}
              </td>
              <td className="  sm:w-[16vw] pl-7 sm:pl-0">
                {e.date}
              </td>
              <div className=" text-center  w-[12vw] pl-7 sm:pl-0 flex items-center justify-around" >
                {e.time}
              <button className="p-1 m-1 ml-4 bg-orange-400 rounded-lg" onClick={()=>navigate("/viewpage",{state : e})}>View</button>
              </div>
            </div>
          </div>
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
