import React from "react";
import {useParams, Link} from 'react-router-dom'
import {useState, useEffect} from 'react';
import { supabase } from "../client";

const CrewInfo = () => {
    const {id} = useParams()
    const [info, setInfo] = useState([])
    console.log(id)
 
    useEffect(() => {
        const fetchData = async() => {
            const {data} = await supabase
                .from('Crews')
                .select()
                .eq('id', id)
                .single()
            setInfo(data);
            }
        fetchData().catch(console.error)
    }, []);

    console.log(info)
 
    return(
        <div className='container flex-col justify-center items-center'>
            <div className="flex flex-col items-center">
                <img src="https://www.fairerfinance.com/assets/uploads/images/blogimages/_bigFit/Smallprint.jpg" width={'350px'}/>
            </div>
            <h1 className='text-center text-6xl'>{info.name} study group</h1>
            <h2 className='text-center text-4xl mt-8'>Subject : {info.subject}</h2>
            <h2 className='text-center text-4xl mt-2'>Number of people interested : {info.pcount}</h2>
            <h2 className='text-center text-4xl mt-2'>Total needed in this group : {info.total}</h2>
            <p className='text-center text-3xl mt-8'>We will be focusing on {info.description} in this study group so come prepared!!!</p> <br/>
            <div className='flex justify-center items-center pt-5'>
                <Link to={`/edit/${info.id}`}>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded'>Edit Crew</button>
                </Link>
            </div>
        </div>
    )

};

export default CrewInfo;
