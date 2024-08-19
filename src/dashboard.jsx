import { collection, getDocs } from "firebase/firestore";
import {signOut,onAuthStateChanged} from "@firebase/auth";
import { db } from "./firebaseconfig/firebase";
import { auth } from "./firebaseconfig/firebase";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Dashboard() {
    const [data , setData] = useState([])
    

  async function readUserData() {
    let arr = [];
    const querySnapshot = await getDocs(collection(db, "UserInfo"));
    querySnapshot.forEach((doc) => {
        arr.push(doc.data())
        setData(arr)
    });
  }

useEffect(()=>{
    readUserData()
      
      onAuthStateChanged(auth, (user) => {
        if (user) {
          toast(`Hello ${user.email.split("@")[0]}`)
    } else {
        console.log("No");
        window.location.href= "/signin";
    }
    })
},[])
function signoutUser() {
  toast("Signout succussfully")
  signOut(auth).then(() => {
    }).catch((error) => {
     alert(error)
    });
    

}
  return (
    <div className="bg-[#222423] w-full h-screen">
      <h1 className="text-5xl text-center font-bold text-white">DashBoard</h1>
      <h1 className="text-4xl text-center font-bold mt-6 text-white pb-4">Bookings</h1>
      <div className="w-full flex justify-end pb-2 pr-4  ">
      <button className="p-2 bg-orange-400 w-[100px] rounded-xl" onClick={signoutUser}>Signout</button>

      </div>
      <hr />
   
                <div className="w-full flex justify-between items-center p-4  " >
                <h1 className="text-orange-400 uppercase text-xl ">S no</h1>
                <h1 className="text-orange-400 uppercase text-xl ">Customer Name</h1>
                <h1 className="text-orange-400 uppercase text-xl ">Lastname</h1>
                <h1 className="text-orange-400 uppercase text-xl ">Plans</h1>
                <h1 className="text-orange-400 uppercase text-xl ">Date</h1>
                <h1 className="text-orange-400 uppercase text-xl ">Time</h1>
            </div>
            <hr />
      {data.map((e,index)=>{
        return(
            <div key={index} className="w-full h-[40px] flex justify-center items-center  gap-[90px] md:gap-[145px] border ">
                <h1 className="text-white mt-2 ">{index}</h1>
                <h1 className="text-white mt-2 ml-[100px] md:ml-[120px]">{e.name}</h1>
                <h1 className="text-white mt-2 ml-[120px] md:ml-[120px]">{e.lastname}</h1>
                <h1 className="text-white mt-2 ml-[110px] md-ml-[90px]">{e.plan}</h1>
                <h1 className="text-white mt-2">{e.date}</h1>
                <h1 className="text-white mt-2">{e.time}</h1>
            </div>
        )
      })}
        
<ToastContainer/>
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
