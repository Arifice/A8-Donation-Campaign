import "./Navbar.css"
import { NavLink } from "react-router-dom";


const Navbar = () => {
    
    return (
        <div>
            <div className="flex justify-between items-center navbar bg-base-100">
                <div className="flex-1">
                    <img className="" src="https://i.postimg.cc/T16Gw1P6/Logo.png" alt="" />
                </div>
                <div className="flex-none">
                    <NavLink to={'/'}  className={"lg:ml-5 ml-2  lg:font-semibold  md:text-2xl lg:text-3xl"}>Home</NavLink>                    
                    <NavLink to={'/donation'}  className={"lg:ml-5 ml-2 lg:font-semibold md:text-2xl lg:text-3xl"}>Donation</NavLink>
                    <NavLink to={'/statistics'}  className={'lg:ml-5 ml-2 lg:text-3xl md:text-2xl lg:font-semibold'}>Statistics</NavLink>
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;