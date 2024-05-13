import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";


const Login = () => {

    const {signIn,signInWithGoogle} = useContext(AuthContext);
        const location = useLocation();
        const navigate = useNavigate();
        
        const [showPassword, setShowPassword] = useState(false);


        const handleLogin = (e)=>{
        
            e.preventDefault();
            // console.log(e.currentTarget);
            const form = new FormData(e.currentTarget);
            const email = form.get('email');
            const password = form.get('password');
    
            console.log(email,password);
    
            signIn(email,password)
            .then(result=>{
                console.log(result.user)
                toast('Logged in successfully.');
    
                navigate(location?.state? location.state: '/');
    
            })
            .catch(error=>{
                console.error(error)
                toast('Invalid Email or password.')
            })
            
    
        }
    


         // GOOGLE SIGN IN
         const handleGoogleSignIn=()=>{
                signInWithGoogle()
                .then(result=>{
                    console.log(result.user);
                })
                .catch(error=>{
                    console.error(error)
                })
         }



    return (
        <div>
            <div className="hero min-h-screen bg-base-200 bg-[url('https://i.ibb.co/W2J61YB/Banner5.jpg')]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="bg-cover h-[300px] rounded-2xl lg:block lg:w-2/3 bg-[url('https://i.ibb.co/XVjbyx5/Banner1.jpg')]">
            <div className="flex items-center h-full px-20">
              <div>
                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Login Now
                </h2>

                <p className="max-w-xl mt-3 text-white">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                  autem ipsa, nulla laboriosam dolores, repellendus perferendis
                  libero suscipit nam temporibus molestiae
                </p>
              </div>
            </div>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-[#cb8d5c]">
            <form onSubmit={handleLogin} className="card-body">
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
             
              <div className="form-control mt-6">
                <button className=" text-white btn bg-[#cb8d5c]">Login</button>

                <a onClick={handleGoogleSignIn} className="flex items-center justify-center px-6 py-3 mt-4 text-white transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600">
                    <FaGoogle></FaGoogle>
                    <span className="mx-2">Sign in with Google</span>
                </a>


                <p className="text-center mb-5 mt-5">Do not have an account please <NavLink to='/register'><span className="font-bold text-white">Register</span></NavLink></p>
              </div>
            </form>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Login;