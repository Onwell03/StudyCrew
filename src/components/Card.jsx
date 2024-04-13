import React from "react";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { supabase } from "../client";

const Card = ({crew}) => {
    console.log(crew.pcount)
    const [count, setCount] = useState(crew.pcount);

    const Join = async(event) =>{
        event.preventDefault();

        await supabase
            .from('Crews')
            .update({pcount: count + 1})
            .eq('id', crew.id);

        setCount(count + 1);
    }
    return (
        <div className='pb-5'>
            <Link to={`/view/${crew.id}`}> <img src="src/assets/read.png" width={'300px'}/> </Link>
            <h2 className='text-center'>{crew.name}</h2>
            <p className='text-center'>Subject: {crew.subject}</p>
            <p className='text-center'>Total: {count}/{crew.total}</p>
            <div className="flex justify-center mt-4">
                <button onClick={Join} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2'>Join</button>
                <Link to={`/edit/${crew.id}`}><button className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'>Edit Crew</button></Link>
            </div> 
        </div>
    )
};

export default Card; 
