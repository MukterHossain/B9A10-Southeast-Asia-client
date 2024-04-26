import { Link } from "react-router-dom";


const Login = () => {

    // const { signIn, googleLogin, githubLogin } = useContext(AuthContext);
    // const location = useLocation();
    // const navigate = useNavigate();
    console.log('login', location)

    // const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
    //     const { email, password } = data;
    //     signIn(email, password)
    //         .then(result => {
    //             if (result.user) {
    //                 // toast('You have login successfully')
    //                 navigate(location?.state || '/')
    //             }
    //         })
    //         .catch(() => {
    //             // toast('Please valid email and password')
    //         })
    }

    // const handleSocietyLogin = societyContainer => {
    //     societyContainer()
    //         .then(result => {
    //             if (result.user) {
    //                 // toast('You have social login successfully')
    //                 navigate(location?.state || '/')
    //             }

    //         })
    // }

    return (
        <div className=" flex-col my-12 ">
            <div className="text-center ">
                <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="card shrink-0 mx-auto w-1/2 shadow-2xl bg-base-100 pb-10">
                <form onSubmit={onSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered"  />
                        {/* {...register("email", { required: true })} */}
                        {/* {errors.email && <span className="text-red-600">This field is required</span>} */}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered"  />
                        
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <div>
                    <p className="text-center mt-5">Do not have an account ? <Link className="text-blue-600 font-bold " to='/register'>Register</Link></p>
                </div>
                <div>
                    <div className="divider mx-10">continue with</div>
                    <div className="flex justify-around">
                        <button  className="btn btn-primary  btn-outline">Google</button>
                        <button className="btn btn-secondary  btn-outline">Github</button>
                        {/* <button onClick={() => handleSocietyLogin(googleLogin)} className="btn btn-primary  btn-outline">Google</button>
                        <button onClick={() => handleSocietyLogin(githubLogin)} className="btn btn-secondary  btn-outline">Github</button> */}
                    </div>
                </div>
            </div>
            {/* <ToastContainer></ToastContainer> */}
        </div>
    );


};

export default Login;