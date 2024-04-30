import { useContext, useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";


const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [registerError, setRegisterError] = useState('')
    const [registerSuccess, setRegisterSuccess] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const newUsers = { name, email, photo, password }
        console.log(newUsers)

        setRegisterError('')
        setRegisterSuccess('')


        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one uppercase and one lowercase  characters')
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setRegisterError('Your password should have at least one uppercase and one lowercase  characters')
            return;
        }
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    title: "Welcome!",
                    text: "You have register successfully ",
                    icon: "success"
                  });

            })
            .catch(error => {
                console.log(error)
            })
        
    }


    return (
        <div className=" flex-col my-12 ">
            <div className="text-center ">
                <h1 className="text-5xl font-bold">Register now!</h1>
            </div>
            <div className="card shrink-0 mx-auto w-1/2 shadow-2xl bg-base-100 pb-10">
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="relative">
                            <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered w-full" />
                            <span className="absolute top-4 right-6" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                            </span>
                        </div>
                        {
                            registerError && <p className="text-red-600">{registerError}</p>
                        }
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    {
                        registerSuccess && <p className="text-green-600">{registerSuccess}</p>
                    }
                </form>
                <div>
                    <p className="text-center mt-5">Already have an account? <Link className="text-blue-600 font-bold " to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );


};

export default Register;