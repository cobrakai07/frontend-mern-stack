import { useState } from "react";
import channelDB from "../assets/Data/ChannelDB";
import Channel from "./Channel";
import AddChannel from "./AddChannel";
const ChannelComponent=()=>{

    console.log("ChannelComponent rendered!!");

    const[DB,setDB]=useState(channelDB);

    function newChannelHandler(formData)//we sent the data in function parameters by setting the state up
    {
        const demoChannel={
            name: formData.name,
            verified: formData.verified,
            views: formData.views,
            id: formData.id
        }

        setDB([...DB,demoChannel]);
    }

    return(
        <>
        <div>
            {
                DB.map(c=><Channel name={c.name} views={c.views} verified={c.verified} id={c.id} key={c.id} buttonSymbol="▶️" ></Channel>)
            }
            
        </div>
        <AddChannel AddChannelprop={newChannelHandler}></AddChannel>
        </>
    );
}
export default ChannelComponent;