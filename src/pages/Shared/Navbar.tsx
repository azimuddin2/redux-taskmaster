import { SiTask } from "react-icons/si";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="max-w-7xl mx-auto h-16 flex items-center justify-between gap-3 px-5">
            <div className="flex items-center">
                <SiTask className="text-green-500 text-2xl" />
                <span className="text-lg font-semibold">TaskMaster</span>
            </div>
            <div>
                <ul className="flex items-center">
                    <li className="mr-8 font-normal">
                        <Link to="/">Task</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </div>
            <div>
                dark
            </div>
        </nav>
    );
};

export default Navbar;