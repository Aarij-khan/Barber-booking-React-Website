import aboutimg from "./assets/barber.png";

function About() {
  return (
    <div className=" bg-[#222423] pt-20 pb-28">
      <hr />
      <h1 className="text-center text-5xl font-bold text-white tracking-wide pb-10 pt-4">
        About us
      </h1>
      <div className="w-full flex  justify-center items-center gap-4 flex-col sm:flex-row pb-6">
        <div className="w-full sm:w-1/2 p-4 sm:p-0">
          <p className="text-white   text-center text-xl ">
            At Our Barber Shop , we believe in more than just a haircut. We
            offer a personalized grooming experience tailored to your style. Our
            skilled barbers are passionate about delivering precision cuts,
            sharp fades, and classic shaves. Whether you're looking for a fresh
            new look or a traditional cut, we're here to ensure you leave
            feeling confident and looking your best. Visit us for a relaxing,
            professional experience that goes beyond the ordinary.
          </p>
        </div>
        <div className=" w-full sm:w-1/2 flex justify-center p-4 ">
          <img src={aboutimg} alt="" className="w-[500px] rounded-2xl" />
        </div>
      </div>
     
      <hr />  
    </div>
  );
}

export default About;
