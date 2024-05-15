import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";

const Register = () => {

  useEffect(()=>{
    document.title = 'Beauty_care-Registration';
},[])


    const {createUser}=useContext(AuthContext);

    // const [showPassword, setShowPassword] = useState(false);

    const handleRegister = (e)=>{
        e.preventDefault();
        // console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name');
        const url = form.get('url');



        
        
        console.log(email,password,name,url);

// Password varification done
            if(password.length<6){
                toast('password should be atleast 6 character')
                return;
            }else if(!/[A-Z]/.test(password)){
                toast('password should be contain atleast one upper case character')
                return;
            }else if(!/[a-z]/.test(password)){
                toast('password should be contain atleast one lower case character')
                return;
            }else{
                toast('You have register successfully')
            }



        createUser(email, password)
        .then(result=>{
            console.log(result);

            updateProfile(result.user,{
                displayName: name,
                photoURL: url
            })
            .then()
            .catch()
        })
        .catch(error=>{
            console.error(error); 
            toast(error.message);
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
                  Register Now
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
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo-URL</span>
                </label>
                <input
                  type="text"
                  placeholder="photo-URL"
                  name="url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className=" text-white btn bg-[#cb8d5c]">Register</button>
                <p className="text-center mb-5 mt-10">Already have an account please <NavLink to='/login'><span className="font-bold text-white">Register</span></NavLink></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
