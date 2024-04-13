import React from "react";

const Home = () => {
    return(
        <div className="container mx-auto">
            <h1 className='text-center text-6xl'>Welcome to StudyCrew Creator</h1>
            <h3 className="text-center text-2xl font-light pt-4">Here is where you can create you very own set of study friends according to a specific subject before these finals!!</h3><br/>
            <div className='flex flex-col items-center p-6'>
                <img className='w-1/2' src="src/assets/reading.png"/>
            </div>
            
        </div>
    )
};

 export default Home; 