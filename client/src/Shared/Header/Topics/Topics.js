import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Topics = () => {
    const {darkToggle, setDarkToggle} = useContext(AuthContext);

    const [topics, setTopics] = useState([])
    useEffect(()=>{
        fetch('https://assignment-10-server-silk.vercel.app/topics')
        .then(res => res.json())
        .then(data => setTopics(data));
    },[]);
    console.log(topics);

    return (
        <div className={`${darkToggle && 'dark'}`}>
            {/* <div className=" lg:hidden drawer mb-10 fixed">
                <div className="drawer-content ">
                    <label htmlFor="my-drawer" className="btn btn-primary drawer-button absolute">Topics</label>
                </div> 
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-side  z-10000">
                    <label htmlFor="my-drawer" className="drawer-overlay "></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content ">
                
                    {
                        topics.map(topic =>
                            <Link to={`/courses/${topic.id}`} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <li 
                            key={topic.id}>   {topic.name}
                            </li>

                            </Link>
                            
                    )}
                    
                    </ul>
                </div>
                </div> */}

             
                <div className='dark:bg-gray-800'>
                <aside className=" lg:block" aria-label="Sidebar">
                <h3 className='bg-gray-50 font-bold p-4 px-3  dark:text-white dark:bg-gray-600'>Topics</h3>
            <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
                <ul className="space-y-2">
                    {
                        topics.map(topic =>
                            <li 
                            key={topic.id}>                    
                            <Link to={`/courses/${topic.id}`} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                            <span className="ml-3">{topic.name}</span>
                            </Link>
                        </li>
                        )
                    }  
                </ul>
            </div>
            </aside>
            <div className='dark:bg-gray-800 h-96 bg-gray-50 hidden lg:block'>

            </div>
                </div>

{/*            
<div className='lg:hidden' id="drawer-disable-body-scrolling" className="fixed z-40 h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-disable-body-scrolling-label">
    <h5 id="drawer-disable-body-scrolling-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Menu</h5>
    <button type="button" data-drawer-dismiss="drawer-disable-body-scrolling" aria-controls="drawer-disable-body-scrolling" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        <span className="sr-only">Close menu</span>
    </button>
  <div className="py-4 overflow-y-auto">
      <ul className="space-y-2">
        {
             topics.map(topic =>
                <li 
                key={topic.id}>   
                <Link to={`/courses/${topic.id}`} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
                <span className="flex-1 ml-3 whitespace-nowrap">{topic.name}</span>
               </Link>
                </li>
       ) }
        
      </ul>
   </div>
</div> */}


{/* =====================
    sidebar  
=========================*/}
           
        </div>
        
    );
};

export default Topics;