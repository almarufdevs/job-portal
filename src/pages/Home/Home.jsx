import React, { Suspense } from 'react';
import Banner from '../Banner';
import Hotjobs from './Hotjobs';
import Whyvolunteer from '../Whyvolunteer';
import HowVolunteer from '../HowVolunteer';

const jobsPromise = fetch('http://localhost:3000/donate').then(res => res.json())
const Home = () => {
   
    return (
        <div>
            <Banner></Banner>
           
            <Suspense fallback={'Loading Donate'}>
                <Hotjobs jobsPromise={jobsPromise}></Hotjobs>
            </Suspense>
             <Whyvolunteer></Whyvolunteer>
             <HowVolunteer></HowVolunteer>
        </div>
    );
};

export default Home;