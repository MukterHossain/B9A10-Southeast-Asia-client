import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Register = () => {
    const {createUser} = useContext(AuthContext)
    // const { createUser, updateUserProfile } = useContext(AuthContext);
    // const [registerError, setRegisterError] = useState('')
    // const [registerSuccess, setRegisterSuccess] = useState('')
    // const [showPassword, setShowPassword] = useState(false)

    // const location = useLocation();
    // const navigate = useNavigate();

    // const { register, handleSubmit, formState: { errors } } = useForm();
    // const {signInUser} = useContext(AuthContext)
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        const newUsers = { email, password }
        console.log(newUsers)
        createUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error)
        })
        
        // signInUser(email, password)
        // .then(result => {
        //     console.log(result.user)
        //     const user = {
        //         email,
        //         lastLoggedAt: result.user?.metadata?.lastSignInTime
        //     }
        //     // update last logged at in the database
        //     fetch('https://m56-coffee-store-server.vercel.app/user', {
        //         method: 'PATCH',
        //         headers: {
        //             'content-type' : 'application/json'
        //         },
        //         body: JSON.stringify(user)
        //     })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //     })
        // })
        // .catch(error => {
        //     console.log(error)
        // })
    }



    // const onSubmit = data => {
        // const { email, password, image, name } = data;

        // setRegisterError('')
        // setRegisterSuccess('')

        // if (password.length < 6) {
        //     setRegisterError('Password should be at least 6 characters or longer');
        //     return;
        // }
        // const isValid = /[A-Z]/.test(password) && /[a-z]/.test(password);
        // else if (!/[A-Z]/.test(password))  {
        //     // setRegisterError('Your password should have at least one uppercase and one lowercase  characters')
        //     return;
        // }
        // else if (!/[a-z]/.test(password))  {
        //     // setRegisterError('Your password should have at least one uppercase and one lowercase  characters')
        //     return;
        // }

        // createUser(email, password)
        //     .then(() => {
        //         updateUserProfile(name, image)
        //         // setRegisterSuccess('you have register successfully ')
        //         // toast('you have register successfully')
        //             .then(() => {
        //                 navigate('/')
        //             });

        //     });
    // };

    return (
        <div className=" flex-col my-12 ">
            <div className="text-center ">
                <h1 className="text-5xl font-bold">Register now!</h1>
            </div>
            <div className="card shrink-0 mx-auto w-1/2 shadow-2xl bg-base-100 pb-10">
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        {/* <div className="relative">
                        <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered w-full"  />
                        <span className="absolute top-4 right-6" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                        </span>
                    </div> */}
                        {/* {errors.password && <span className="text-red-600">This field is required</span>} */}
                        {/* {
                        registerError && <p className="text-red-600">{registerError}</p>
                    } */}
                    </div>
                    {/* {
                    registerSuccess && <p className="text-green-600">{registerSuccess}</p>
                } */}

                </form>

                <div>
                    <p className="text-center mt-5">Already have an account? <Link className="text-blue-600 font-bold " to='/login'>Login</Link></p>
                </div>

            </div>
            {/* <ToastContainer></ToastContainer> */}
        </div>
    );


};

export default Register;