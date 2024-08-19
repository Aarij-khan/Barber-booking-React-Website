import cut from "./assets/cut.png";
import shop from "./assets/shop.jpg";
function Hero() {
  return (
    <div className="w-full  flex-col bg-[#222423] sm:flex-row flex justify-center items-center pt-10 sm:pt-6 pb-10">
      <div className="w-full sm:w-1/3 px-6 flex gap-2 flex-col md:w-1/2 sm:pt-6 ">
        <h1 className="text-white mx-1 sm:mx-10 font-bold text-6xl">Skilled Craftsmen</h1>
        <h1 className="text-white mx-1 sm:mx-10 font-bold text-6xl">Barber <span className="text-orange-400">Shop</span></h1>
        <p className=" text-white text-center mt-2">
          A barber is a person whose occupation is mainly focused on style and
          men's and boys hair or beards. A barber's place pf work is known as a
          barber shop.
        </p>
      </div>
      <div className="w-full sm:w-1/2 mr-1">
            <div className="flex gap-6 flex-col items-center mt-10 sm:flex-row">
                <img src={cut} alt="pic" className="w-[70%] sm:w-[48%] md:w-[50%]   rounded-2xl shadow-lg border-[6px] border-orange-400 "/>
                <img src={shop} alt="pic" className="w-[70%] sm:w-[41.5%] md:w-[43%]    rounded-2xl shadow-lg border-[6px] border-orange-400 object-cover"/>
            </div>
      </div>
    </div>
  );
}4
export default Hero;
