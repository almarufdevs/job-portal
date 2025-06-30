


import React from 'react';
import { motion } from "framer-motion"; 

const VolunteerBanner = () => {
  return (
    <div className="hero min-h-screen bg-gradient-to-b from-amber-100">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-10">
        
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img 
            src="/team.jpeg"
            className="max-w-sm rounded-xl shadow-lg border-2 border-amber-200"
            alt="Volunteer Helping"
          />
        </motion.div>

        {/* Text Section */}
        <div>
          <motion.h1
            className="text-5xl font-bold leading-tight"
            animate={{ rotate: 360 }}
            transition={{ duration: 3 }}
          >
            Be a&nbsp;
            <motion.span
              animate={{
                color: ['#22c55e', '#3b82f6', '#f43f5e'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
              className="inline-block"
            >
              Volunteer
            </motion.span>
            &nbsp;Today!
          </motion.h1>

          <p className="py-6 text-gray-600 max-w-xl">
            Join hands with hundreds of others making a difference. Whether it’s teaching,
            supporting healthcare, or community clean-up — your time can change lives.
          </p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary"
          >
            Explore Opportunities
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default VolunteerBanner;
