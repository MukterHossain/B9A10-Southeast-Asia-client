import { Outlet } from "react-router-dom";
import Navbar from "../componen/Navbar";
import Footer from "../componen/Footer";


const MainRoot = () => {
    return (
        <div>
            <div >
                <div>
                    <Navbar></Navbar>
                </div>
                <div className="max-w-6xl mx-auto">
                    <Outlet></Outlet>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainRoot;