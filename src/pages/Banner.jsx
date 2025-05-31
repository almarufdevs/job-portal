import React from 'react';
import { motion } from "motion/react"

const Banner = () => {
    return (
        <div>
           <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div>
        <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    </div>
    <div>
      <motion.h1 
      animate={{rotate:360, transition: { duration: 4 }} }
       className="text-5xl font-bold">Latest <motion.span 
       animate={{color: ['#b8ff33','#3361ff', '#ff335e'],
        transition: { duration: 4, repeat:Infinity }
       }}
       >Jobs</motion.span>  for you</motion.h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;