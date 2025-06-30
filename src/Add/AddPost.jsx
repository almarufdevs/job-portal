import React from 'react';
import { Form, Link, useParams } from 'react-router';
import Useauth from '../hooks/Useauth';
import axios from 'axios';


const AddPost = () => {
    const {id:jobId} = useParams();
const {user} = Useauth();

    console.log(jobId, user);

    const handleAddFormSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        
        const LinkedIn = form.linkedId.value;
        const github = form.github.value;
        const resume = form.rasume.value;

        console.log(LinkedIn, github, resume);
        const application = {
            jobId,
            applicant: user.email,
            LinkedIn,
            github,
            resume



        }

        axios.post('http://localhost:3000/donation', application)
        .then( res=>{
            console.log(res.data)
            
        })
        .catch(Error =>{
            console.log(Error)
        })
    }
    return (

        <div className='items-center flex justify-center'>
        
        <div className=''>
            <h1 className='text-3xl'>Be a Volunteer Apply this:<Link to={`/donate/${jobId}`}>details</Link></h1>
           <Form onSubmit={handleAddFormSubmit}>
            <fieldset className="fieldset bg-amber-100 border-base-300 rounded-box w-xs border p-4 ">
  

  <label className="label text-xl font-bold text-black">LinkedIn Link</label>
  <input type="url" name='linkedIn' className="input" placeholder="LinkedIn Profile Link" />

  <label className="label text-xl font-bold text-black">GitHub Link</label>
  <input type="url" name='github' className="input" placeholder="GitHub  Link" />

  <label className="label text-xl font-bold text-black">Resume Link</label>
  <input type="url" name='resume' className="input" placeholder="Resume Link" />
  <input type="submit" class='btn font-bold text-2xl text-white bg-sky-400'
   value="Add Now" />
</fieldset>
           </Form>
        </div>
        </div>
    );
};

export default AddPost;


