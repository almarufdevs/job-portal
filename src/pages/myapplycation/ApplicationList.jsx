import React, { use } from 'react';
import ApplicationRow from './ApplicationRow';


const ApplicationList = ({myApplycationPromise}) => {
    const application = use(myApplycationPromise)
    return (
        <div>
            
            <div className="overflow-x-auto ">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Location</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        application.map((application, index)=> <ApplicationRow  key={application._id}
        index={index}
            application ={application}
        ></ApplicationRow>)
      }
    </tbody>
   
  </table>
</div>
        </div>
    );
};

export default ApplicationList;