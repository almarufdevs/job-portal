import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContextt';

const Useauth = () => {
    const authInfo = use(AuthContext);
    return authInfo
       
};

export default Useauth;