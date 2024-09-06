import React from "react";
import { useLocation } from "react-router-dom";
import gif from "./assets/sign up.gif"

function Viewpage() {
  const params = useLocation();
  console.log("🚀 ~ Viewpage ~ params:", params)
  const { name, date, lastname, plan, time } = params.state;
  return (
    <div className="bg-[#223240] w-full h-screen flex justify-center items-center flex-col gap-6">
        <h1 className="uppercase text-4xl font-bold text-white">Customer details</h1>
        <div className="text-white  flex flex-col gap-6  bg-orange-400 rounded-xl w-[400px]">
            <img src={gif} className=" w-full h-[150px]"/>
          <h1 className="text-3xl font-bold uppercase " >Name : {name}</h1>
          <h1  className="text-3xl font-bold uppercase ">Lastname : {lastname}</h1>
          <h1  className="text-3xl font-bold uppercase ">Plan : {plan}</h1>
          <h1  className="text-3xl font-bold uppercase ">Date : {date}</h1>
          <h1  className="text-3xl font-bold uppercase ">
          Time : {time}
          </h1> 
      </div>
    </div>
  );
}

export default Viewpage;
