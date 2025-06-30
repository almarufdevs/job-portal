
import React, { use  } from 'react';
import { AuthContext } from '../../../Context/AuthContextt';
import Lottie from 'lottie-react';
import Socaillogin from '../shared/Socaillogin';
import { useLocation, useNavigate } from 'react-router';
// import registerLottie from '../../../assets/lotties/register.json'; // update path as needed

const SignIn = () => {
  const {signInUser} = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || '/';
  console.log('location in sign in page', location)

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);


    signInUser(email, password)
    .then(result =>{
        console.log(result.user)
        navigate(from);
    })
    .catch(error =>{
        console.log(error)
    })
  }
   
  return (
    <div>
      <div className="hero  min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            
          </div>
          <div className="card bg-amber-50 w-full max-w-sm shrink-0 shadow-2xl ">
            <div className="card-body">
              <h1 className="text-5xl font-bold">Sign In now!</h1>
              <form onSubmit={handleSignIn}>
                <fieldset className="fieldset">
                  <label className="label font-bold text-xl">Email</label>
                  <input type="email" name="email" className="input" placeholder="Email" required />
                  <label className="label font-bold text-xl">Password</label>
                  <input type="password" name="password" className="input" placeholder="Password" required />
                  <div>
                    <a className="link link-hover font-bold text-xl">Forgot password?</a>
                  </div>
                  <button className="btn bg-primary text-white text-2xl mt-4" type="submit">
                    Sign in
                  </button>
                </fieldset>
              </form>
              <Socaillogin from={from}></Socaillogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
