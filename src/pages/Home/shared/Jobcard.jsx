import React from 'react';
import { Link } from 'react-router';

const Jobcard = ({job}) => {
    const{title, thumbnail, category,_id, deadline} = job||{};
    return (
        <div>
            <div className="card bg-gradient-to-b from-amber-100 to-lime-50 w-96 shadow-sm">
  <figure>
    
     <img className='h-80' 
      src={thumbnail}
      alt="Shoes" /> 
  </figure>
  <div className="card-body">
    <h2 className="card-title font-bold">
     {title}
      
    </h2>
    <p className='font-bold text-xl'>{category}</p>
    <h1 className='font-semibold'>{deadline}</h1>
    <div className="card-actions justify-end">
      
     <Link to={`/donate/${_id}`}><div className=" btn bg-blue-600 text-amber-50">View Details</div></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Jobcard;