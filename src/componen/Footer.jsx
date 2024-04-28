import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-gray-200 mt-24 py-12">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center py-6">
                    <div className="">
                        <span className=" text-3xl font-extrabold text-blue-800">WD</span>
                        <span className=" text-xl font-semibold pl-2">Travels</span>
                        <p className="pt-3">This is the world best travel agency.<br />Providing reliable service since 1992</p>
                    </div>
                    <div>
                        <p>Blog</p>
                        <p>Achievement</p>
                        <p>About us</p>
                        <p>Refund policy</p>
                        <p>Terms and Conditions</p>
                    </div>
                    <div>
                        <h6 className="footer-title text-center">Social</h6>
                        <div className="flex items-center space-x-3">
                            <FcGoogle size={20}></FcGoogle>
                            <FaFacebook size={20}></FaFacebook>
                            <FaGithub size={20}></FaGithub>
                            
                        </div>
                    </div>
                </div>
                <p className="text-center"><small>Copyright © 2024 - All right reserved by <span className="text-blue-800 font-bold">WD Travel</span></small></p>

            </div>


        </div>
    );
};

export default Footer;