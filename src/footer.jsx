import barber from "./assets/barber2.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full bg-[#141615]">
    <div className="w-full flex justify-between items-center pb-6">
      <div className="p-4 flex items-center gap-2">
        <img src={barber} className="w-[110px] h-[110px]  rounded-full" />
        <h1 className="text-white   font-bold text-4xl">Barber <span className="text-orange-400">Shop</span></h1>
      </div>
      <div>
        <ul className="flex text-white gap-4 sm:gap-20 mr-4 font-bold text-xl flex-col sm:flex-row">
          <li>Home</li>
          <li>Services</li>
          <li>
            <Link to="./signin">Dashboard</Link>
          </li>
        </ul>
      </div>
    </div>
    <h2 className="text-center text-white pb-4">© barber Shop . All right reserved</h2>
    </div>
  );
}

export default Footer;
