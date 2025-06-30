import React, { use } from 'react';
import Jobcard from './shared/Jobcard';

const Hotjobs = ({jobsPromise}) => {
    const jobs = use(jobsPromise);
    return (
        <div className='grid gap-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-4'>
            {
              jobs?.map(job => <Jobcard key={job._id} job={job}></Jobcard>)  
              
            }
            
        </div>
    );
};

export default Hotjobs;