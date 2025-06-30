import React, { Suspense } from 'react';
import ApplicationStatas from './ApplicationStatas';
import ApplicationList from './ApplicationList';
import Useauth from '../../hooks/Useauth';
import { myApplycationPromise } from '../../ApplicationApi';





const Application = () => {
    const {user} = Useauth();
    return (
        <div>
           <ApplicationStatas></ApplicationStatas>
          <Suspense fallback={'loading application'}>
              <ApplicationList  myApplycationPromise={myApplycationPromise(user.email)} > 
               
             </ApplicationList> 
             </Suspense>
        </div>
    );
};

export default Application;