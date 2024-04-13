import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
    return(
        <nav className='relative container mx-auto p-6'>
            <div className='flex items-center justify-between'>
                <div className='pt-2'>
                    <img src='src/assets/logo.png' width={'200px'}/>
                </div>
                <div className='hidden md:flex space-x-6'>
                    <Link to="/">HOME</Link>
                    <Link to="/create">CREATE</Link>
                    <Link to="/view">GROUPS</Link>
                </div>
            </div> 
        </nav>
    )
}; 

export default Navigation;
