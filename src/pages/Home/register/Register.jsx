import Lottie from 'lottie-react';
import React, { use } from 'react';
import { AuthContext } from '../../../Context/AuthContextt';
import Socaillogin from '../shared/Socaillogin';

// import registerLottie from 'public/Register.json'


const Register = () => {

  const {createUser} = use(AuthContext);

const handleRegister =e =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)

    createUser(email, password)
    .then(result =>{
      console.log(result.user)
    })
    .catch(Error =>{
      console.log(Error)
    })
}

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
     
    
    </div>
    <div className="card  w-full max-w-sm shrink-0 shadow-2xl bg-amber-50">
      <div className="card-body">
         <h1 className="text-5xl font-bold">Ragister now!</h1>
       <form onSubmit={handleRegister}>

        <fieldset className="fieldset">
          <label className="label font-bold text-xl">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label font-bold text-xl">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover font-bold text-xl">Forgot password?</a></div>
          <button className="btn bg-primary text-white text-xl mt-4">Registation</button>
        </fieldset>
       
       

       </form>
       <Socaillogin></Socaillogin>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;