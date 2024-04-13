import React from "react";
import { supabase } from "../client";
import { useState } from "react";

const Create = () => {
    const [post, setPost] = useState({name: "", subject: "", description: "", total:0})

    const HandleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }
    
    const Createcrew = async(event) => {
        event.preventDefault();
        await supabase
            .from('Crews')
            .insert({name:post.name,subject:post.subject, description:post.description, total:post.total})
            .select();

        window.location = "/view";
    }

    return(
        <div className='container mx-auto'>
            <div className='flex flex-col items-center p-6'>
                <h1 className='text-center text-6xl'>Create a New Study Crew</h1><br/>
                <img src="src/assets/crew.webp" width={'500px'}/>
            </div>
            <div className='flex justify-center items-center'>
                <div className='pr-4'>
                    <label className='text-center'> Name</label><br />
                    <input 
                    name="name"
                    type="text" 
                    placeholder="Enter crew name.."
                    onChange={HandleChange}
                    className='bg-slate-200'/>
                </div>
                <div className='pr-4'>
                    <label> Subject</label><br />
                    <input 
                    name="subject"
                    type="text"
                    placeholder="Enter the subject.."
                    onChange={HandleChange}
                    className='bg-slate-200'/>
                </div>
                <div>
                    <label htmlFor='total'>Number of people</label><br />
                    <select className='bg-slate-200' name="total" onChange={HandleChange}>
                        <option value="">Total number of people needed</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                    </select>
                </div>
            </div>
            <div className='flex justify-center pt-6'>
                <label className='pr-2' for="description">Description</label> <br/>
                <textarea className='bg-slate-200' rows="5" cols="50" id="description" name='description' onChange={HandleChange}>
                </textarea>
            </div>
            <div className='flex justify-center items-center pt-5'>
                <button className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded' onClick={Createcrew}>Create Crew</button>
            </div>
        </div>
    )
};

export default Create;