import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../client";

const Edit = () => {
    const my_id = useParams()
    console.log("ID is ", my_id.id)
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

    const Updatecrew = async(event) => { 
        event.preventDefault()

        await supabase 
            .from('Crews')
            .update({name:post.name,subject:post.subject, description:post.description, total:post.total})
            .eq('id', my_id.id);
        
        window.location = '/view';
    }
    const deleteCrew = async(event) => {
        event.preventDefault()

        await supabase
            .from('Crews')
            .delete()
            .eq('id', my_id.id)
        
        window.location = '/view'
    }

    return(
        <div className='container mx-auto'>
            <div className='flex flex-col items-center p-6'>
                <h1 className='text-center text-6xl'>Edit this Study Crew</h1><br/>
                <img src="https://img.freepik.com/premium-vector/old-open-book-feather-inkwell-education-wisdom-concept_87946-1829.jpg?w=2000" width={'500px'}/>
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
                <button className='bg-blue-500 hover:bg-blue-700 text-white mr-2 py-2 px-4 rounded' onClick={Updatecrew}>Update Crew</button>
                <button className='bg-gray-500 hover:bg-gray-700 text-white ml-2 py-2 px-4 rounded' onClick={deleteCrew}>Delete Crew</button>
            </div>
        </div>
    )
};

export default Edit;