import React from 'react';
import { Link, useLoaderData } from 'react-router';

const Details = () => {

    const {_id,title,thumbnail, description, category, location, volunteersNeeded, deadline, organizerName, organizerEmail}  = useLoaderData();
   

    return (
        <div className='items-center mx-auto flex justify-center min-h-screen '>
          <div className="card bg-gradient-to-b from-amber-100 to-lime-50 w-96 shadow-sm">
            
  <figure>
    <img
      src={thumbnail}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-xl">
     {title}
      <div className="badge badge-secondary"><span>Needed</span>{volunteersNeeded}</div>
    </h2>
    <div className="font-bold ">Name: { organizerName}</div>
    <p>{description}</p>
    <h1>Category: {category}</h1>
    <h1>Location: {location}</h1>
    <h1>Date: { deadline}</h1>
    
      <div className="badge badge-outline"> Email: {organizerEmail}</div>
    
    <Link to={`/AddPost/${_id}`}>
     <button className='btn bg-green-400 text-white '>Add Post</button>
    </Link>
   
  </div>
</div>
        </div>
    );
};

export default Details;