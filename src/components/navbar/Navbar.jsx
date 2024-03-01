import { Link } from "react-router-dom";
import userImg from "./../../assets/user-svgrepo-com.svg";
import themeImg from "./../../assets/grid-plus-svgrepo-com.svg";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="flex min-h-screen w-[20%] flex-col border-t bg-[#1F2937] px-4 pt-6 text-white">
      <div className="pb-6 text-xl font-semibold">logopediemateriaal</div>
      <div className="flex w-fit flex-row content-baseline justify-between gap-4 text-white">
        <div className="h-12 w-12 rounded-full">
          <img
            className="h-10 w-10 rounded-full"
            src={userImg}
            alt="user icon"
          />
        </div>
        <div className="flex h-full flex-col justify-center text-xl font-medium capitalize">
          beheerder
        </div>
      </div>
      <div className="pt-4">
        <div className="pb-2 text-lg uppercase">acties</div>
        <Link className="h-fit w-fit" to="thema">
          <motion.button
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.05, x: 10 }}
            className="flex h-12 w-full flex-col justify-center rounded-md bg-white bg-gradient-to-br from-purple-400 to-purple-700 text-white"
          >
            <span className="flex flex-row justify-start pl-4">
              <img className="h-7 w-7" src={themeImg} alt="theme-icon" />
              <p className="pl-2 text-lg font-semibold"> Thema </p>
            </span>
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
