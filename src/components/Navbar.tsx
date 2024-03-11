import { Link } from "react-router-dom";
import logo from '../../public/video-player-logo.png'

const Navbar = () => {
  return (
    <nav className=" bg-black p-4 mb-10">
      <Link to={"/"}>
        {" "}
        <div className="gap-1 text-center">
        
          <span className="text-2xl text-white font-bold">Video Clone</span>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
