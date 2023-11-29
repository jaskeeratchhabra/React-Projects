import React, { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Gitub() {
  const data=useLoaderData();
  // const [data,setData]=useState([])
  // useEffect(()=>{
  //    fetch('https://api.github.com/users/jaskeeratchhabra')
  //    .then(response=>response.json())
  //    .then(data=>{
  //       console.log(data);
  //       setData(data)
  //    })
  // },[])
  return (
    <div className='w-1/2 bg-blue-500 text-white
    m-4 '>
      Github Followers:{data.followers}
      <img src={data.avatar_url} alt="Git picture"
        width="30"
      />

    </div>
  )
}

export default Gitub
export const gihubInfoLoader=async ()=>{
    const res=await fetch('https://api.github.com/users/jaskeeratchhabra')
    return res.json();
}