import React from "react";
import Card from "../components/Card";
import { supabase } from "../client";
import { useState, useEffect } from "react";

const View = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPost = async() => {
            const {data} = await supabase
                .from('Crews')
                .select()
                .order('created_at', {ascending:true})
            setPosts(data);
            }
        fetchPost().catch(console.error)
    }, []);

    return(
        <div>
            <h1 className='text-center text-6xl'>Available study groups</h1>
            <div className='flex flex-wrap items-center pt-5 justify-evenly'>
                {posts && posts.length > 0 ? (
                    posts.map((crew, index) => (
                        <Card key={index} crew={crew}/>
                ))
                ) : (
                    <div>
                        <p>No photos to be shown</p>
                    </div>
                )}
            </div>
        </div>
    )
}; 

 export default View; 