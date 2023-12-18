import React, { useState } from 'react'

function Channel({id,name,views,verified,buttonSymbol}) {
    const[buttonSign, setButtonSign]= useState(buttonSymbol);
    function clickHandler(e)
    {
        e.stopPropagation();
        if(buttonSign==="▶️")
          setButtonSign("⏸️");
        else
        setButtonSign("▶️");
    }
  return (
    <>
    <span style={{display: 'inline-block', padding:'22px'}}>
        <img src={`https://picsum.photos/id/${id}/200/300`} alt="channelRandomImage" />
        <div>
            {name} {verified? "✔":null} {views}
            <button onClick={clickHandler}>{buttonSign}</button>
        </div>   
    </span>
    </>
  )
}

export default Channel