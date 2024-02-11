import React, { useEffect, useState } from "react";
import axios from 'axios'


const Tag=() =>{

    

const API_KEY =import.meta.env.VITE_REACT_APP_GIPHY_API_KEY;
//console.log("Can You see me??" ,API_KEY)



    const [gif ,setGif]=useState('');
    const[tag , setTag]=useState('');


    
    async function fetchData(){
        //const url =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

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

    function changeHandlers(event){
         setTag(event.target.value)
    }

    return (
        <div className="w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
           <h1 className=" mt-[15px] text-2xl underline uppercase font-bold"> Random {tag} GIF</h1>
           <img src={gif} width='450'/>

           <input
           className="w-10/12 rounded-lg text-lg py-2 mb-[20px] "
           onChange={changeHandlers}
           value={tag}/>

           <button
           className="w-10/12 bg-white  text-lg py-2 rounded-lg mb-[3px] text-center "
            onClick={changeHandler}>
            Generate
           </button>
        </div>
    )
}
export default Tag;