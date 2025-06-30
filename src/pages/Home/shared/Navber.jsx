import React from 'react';
import { Links, NavLink } from 'react-router';
import { AuthContext } from '../../../Context/AuthContextt';
import { use } from 'react';

const Navber = () => {

  const {user, signOutUser} = use(AuthContext);

  const handleSignOut = () =>{
    signOutUser()
    .then(() =>{
      console.log('signed out user')
    })
    .catch(error =>{
      console.log(error)
    })
  }

    const links=<>
    
     <li className='bg-lime-200 rounded-b-md'><NavLink to="/">Home</NavLink></li>
     {
      user &&<>
      <li className='bg-lime-200 rounded-b-md'><NavLink to="/Application">Add volunteer</NavLink></li>
      </>

     }
     
    </>

    return (
        <div>
            <div className="navbar bg-gradient-to-b from-amber-100 to-lime-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="logo text-4xl text-red-600">Volunteer<span className='text-green-600'>Hub</span> </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
   {
     user ? <button onClick={handleSignOut} className='btn bg-sky-400 text-white'>Sign Out</button> :
     <>
      <NavLink className= "btn bg-sky-400 text-white" to="/register">Registation</NavLink>
    <NavLink className= "btn bg-sky-400 text-white" to="/signIn">Sign In</NavLink>
    </>
   }
  </div>
</div>
        </div>
    );
};

export default Navber;