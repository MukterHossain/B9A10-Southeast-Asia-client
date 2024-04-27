import {  NavLink } from "react-router-dom";


const Navbar = () => {


    const navLinks = <>

        <NavLink to='/' className={({ isActive }) => isActive ? 'py-1 px-3 rounded-sm  font-bold bg-green-400 text-white' : 'font-bold py-1 px-3 rounded-sm border-2 border-gray-200 '}>Home</NavLink>
        <NavLink to='/allTourist' className={({ isActive }) => isActive ? 'py-1 px-3 rounded-sm  font-bold bg-green-400 text-white' : 'font-bold py-1 px-3 rounded-sm border-2 border-gray-200 '}>All Tourists Spot</NavLink>
        {/* {
            user && <NavLink to='/contact' className={({ isActive }) => isActive ? 'py-1 px-3 rounded-sm  font-bold bg-green-400 text-white' : 'font-bold py-1 px-3 rounded-sm border-2 border-gray-200 '}>Contact Us</NavLink>
        } */}

    </>

    return (
        <div className="shadow-lg ">
            <div className="navbar bg-base-100 max-w-6xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="flex items-center">
                    <span className=" text-3xl font-extrabold text-blue-800">WD</span></div>
                    <span className=" text-xl font-semibold pl-2">Travels</span>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                    {/* <div>
                        {
                            user ?
                                <div className="dropdown dropdown-end">
                                    <div className="flex justify-around items-center">
                                        <label tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img title={user?.displayName || 'user name not found'} src={user?.photoURL || "https://i.ibb.co/V2JRhyS/mosque.jpg"} />
                                            </div>
                                        </label>

                                        <button onClick={logOut} className="btn bg-green-500 text-white font-semibold">Log Out</button>
                                    </div>

                                </div>
                                :
                                <Link to='/login'>
                                    <button className="btn bg-green-500 text-white font-semibold">Login</button>
                                </Link>
                        }

                    </div> */}

                </div>
            </div>
        </div>
    );
};

export default Navbar;