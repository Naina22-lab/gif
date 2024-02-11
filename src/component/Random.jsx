import React, { useEffect, useState } from "react";
import axios from 'axios'

const Random=() =>{

    

const API_KEY =import.meta.env.VITE_REACT_APP_GIPHY_API_KEY;
//console.log("Can You see me??" ,API_KEY)



    const [gif ,setGif]=useState('');



    
    async function fetchData(){
        //const url =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

         const url = "https://api.giphy.com/v1/gifs/random?api_key=N1hOVJgZvYcrktASICy7C05yg8d1t9lH";

        const {data} = await axios.get(url);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource)
    }

    useEffect( () =>{
       fetchData();
    },[])

    function changeHandler(){
         fetchData();
    }

    return (
        <div className="w-1/2  bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
           <h1 className=" mt-[15px] text-2xl underline uppercase font-bold"> A Random GIF</h1>
           <img src={gif} width='450'/>
           <button
           className="w-10/12 bg-white  text-lg py-2 rounded-lg mb-[20px]"
           onClick={changeHandler}>
            Generate
           </button>
        </div>
    )
}
export default Random;