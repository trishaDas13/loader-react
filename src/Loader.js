import React, { useEffect, useState } from 'react'
import './index.css'
import images from './meme.png'

function Loader() {
    const[count, setCount] = useState(0);
    const[message, setMessage] = useState("Loading...");
    const[image, setImage] = useState();

    useEffect(() => {
      let timerId = null;
      if(count < 100){
        timerId = setInterval(() => {
          setCount((val) => val+1);
        }, 100);
      }
      if(count === 50){
        setMessage("Please wait we are loading memes for you.")
      }
      if(count === 100){
        setMessage("Memes loaded successfully. 🎉");
        setImage(images);
      }
      return ()=> clearInterval(timerId);
      
    },[count]);
    
    
  return (
    <div className= "container">
      <div className="loader">
        <div className="loader_count" style={{width: `${count}%`}}>{count}%</div>
      </div>
      <p>{message}</p>
      <img src={image} alt="" width= "400px"/>
    </div>
  )
}

export default Loader;