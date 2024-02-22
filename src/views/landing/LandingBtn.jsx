import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const LandingBtn = ({ children, icon, to }) => {
  return (
    <Link
      className={`flex flex-col items-center text-3xl w-full p-3 gap-y-2 hover:scale-110 duration-500 capitalize bg-black text-white bg-gradient-to-br rounded-md font-semibold shadow ${styles[children]}`}
      to={to || "admin"}
    >
      {icon || <FaUser />}
      <span>{children}</span>
    </Link>
  );
};

export default LandingBtn;
const styles = {
  client: "shadow-blue-500/50 from-blue-300 to-blue-700",
  therapist: "shadow-orange-500/50 from-orange-300 to-orange-700",
  admin: "shadow-purple-400/50 from-purple-400 to-purple-700",
};
