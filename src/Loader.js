import React, { useEffect, useState } from 'react'
import './index.css'

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
        setImage('https://www.google.com/search?q=memes+in+code&tbm=isch&ved=2ahUKEwik44q_zLeDAxWjqGMGHUcvA9oQ2-cCegQIABAA&oq=memes+in+code&gs_lcp=CgNpbWcQAzIGCAAQCBAeOgoIABCABBCKBRBDOgUIABCABDoGCAAQBxAeOgQIIxAnOgsIABCABBCxAxCDAToICAAQgAQQsQM6DggAEIAEEIoFELEDEIMBOg0IABCABBCKBRBDELEDOgYIABAFEB46BwgAEIAEEBhQkQpYoyJg2yNoAHAAeACAAckBiAGMEZIBBjAuMTMuMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=jkeQZaTkMKPRjuMPx96M0A0&bih=617&biw=1366&rlz=1C1GCEB_enIN1037IN1067#imgrc=1OPnomhH3EyGSM');
      }
      return ()=> clearInterval(timerId);
      
    },[count]);
    
    
  return (
    <div className= "container">
      <div className="loader">
        <div className="loader_count" style={{width: `${count}%`}}>{count}%</div>
      </div>
      <p>{message}</p>
      <img src={image} alt="error" />
    </div>
  )
}

export default Loader;