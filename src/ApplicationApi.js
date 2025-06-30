export  const myApplycationPromise = email =>{
    return fetch(`http://localhost:3000/donate?email=${email}`).then(res => res.json())
}
