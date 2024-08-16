import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Login = () => {
    const {signInUser, logInWithGoogle, logInWithGithub} = useContext(AuthContext)

    const navigate = useNavigate();
    console.log('login', location)
    const handleUserLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
         signInUser(email, password)
        .then(result => {
            console.log(result.user)
            e.target.reset()
            navigate('/')
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handleGoogleLogIn = () =>{
        logInWithGoogle()
        .then(result => {
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error)
        })
    }

   


    return (
        <div className=" flex-col my-12 ">
            <div className="text-center ">
                <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="card shrink-0 mx-auto w-1/2 shadow-2xl bg-base-100 pb-10">
                <form onSubmit={handleUserLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered"  />

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
                        <button onClick={handleGoogleLogIn} className="btn btn-primary  btn-outline">Google</button>
                        <button onClick={logInWithGithub} className="btn btn-secondary  btn-outline">Github</button>
                    </div>
                </div>
            </div>
        </div>
    );


};

export default Login;