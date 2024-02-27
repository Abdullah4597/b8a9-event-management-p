import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registragion= () => {

  const { createUser } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState('');
  const [registerSuccess, setRegisterSuccess] = useState('');

  const handleRegister = e => {
     e.preventDefault();
     const form = new FormData(e.currentTarget);
     // const name = form.get('name')
     // const photo = form.get('photo')
     const email = form.get('email');
     const password = form.get('password');

     e.target.email.value = '';
     e.target.password.value = '';

     if (password.length < 6) {
        setRegisterError('Password should be at least 6 characters');
        return;
     }
     else if (!/[A-Z]/.test(password)) {
        setRegisterError('Password should have at least one uppercase letter characters');
        return;
     }
     else if (!/[!#$%^&*()_+{}:;<>.?~]/.test(password)) {
        setRegisterError('Password should have at least one special characters');
        return;
     }

     // create user account
     createUser(email, password)
        .then(result => {
           console.log(result.user);
           setRegisterSuccess('User created successfully')
           toast('User created successfully');
        })
        .catch(error => {
           console.error(error);
           toast("There is register error");
        })
  }

  return (
     <div>
        <div className="hero min-h-screen bg-base-200">
           <div className="hero-content flex-col">
           <h1 className="text-5xl font-bold">Register now!</h1>
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                 
                 <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                       <label className="label">
                          <span className="label-text">Name</span>
                       </label>
                       <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                       <label className="label">
                          <span className="label-text">Email</span>
                       </label>
                       <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                       <label className="label">
                          <span className="label-text">Password</span>
                       </label>
                       <input type="password" placeholder="password" name='password' className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                       <button className="btn btn-primary">Register</button>
                       <ToastContainer/>
                    </div>
                 </form>
                 {
                    registerError && <p className="text-red-800 font-extrabold">{registerError}</p>
                 }
                 {
                    registerSuccess && <p className="text-green-800 font-extrabold">{registerSuccess}</p>
                 }
                 <p>Already have account? Please <Link to='/login' className="underline text-blue-600 btn-sm">Login</Link></p>
              </div>
           </div>
        </div>
     </div>
  );
};

export default Registragion;