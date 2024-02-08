import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaCloudDownloadAlt, FaUserAlt, FaUserGraduate, FaUsers } from "react-icons/fa";
import { AuthContext } from '../context/AuthProvider';
import Pdf from "react-to-pdf";
const ref = React.createRef();
const Courses = () => {
    const {darkToggle, setDarkToggle} = useContext(AuthContext);

    const courses = useLoaderData();
    console.log(courses[0]);
    const {description_1, description_2 ,image_url, name, participants, time_require, id, quote} = courses[0];


    
    return (
       
        
        <div ref={ref}  className={`${darkToggle && 'dark'}`}>
            <div className='dark:bg-gray-800'>
                <div className='w-[90%] mx-auto pt-5'>
                    <div className='flex itmes-center justify-between'>
                <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">{name}</span></h1>    
               
                <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) =>  <button onClick={toPdf}>
                   <FaCloudDownloadAlt className='w-16 h-8  dark:text-white'></FaCloudDownloadAlt>
              </button>}
      </Pdf>
                    </div>
           
           <p className="text-gray-500 dark:text-gray-400">
           {description_1}
           </p>
           <blockquote className="p-4 my-4 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
               <p className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">{quote}</p>
           </blockquote>
           <p className="text-gray-500 dark:text-gray-400">
          {description_2}
           </p>
                </div>
            
   
           <hr className="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700"></hr> 
   
           <img className=" w-[95%] md:w-[85%] lg:w-[85%] mx-auto rounded-lg transition-all duration-300 blur-sm hover:blur-none" src={`${image_url}`} alt=" description"/>
   
             
    {/*========================
       GET Premium Access
     ==========================*/}
              <hr className="my-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700"></hr> 
   
   
   <Link to={`/checkout/${id}`}>
       <div className="p-4 w-[90%] mx-auto text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700 mt-20 py-20">
           <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Get Premium Access</h5>
           <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Choose plan according to your need and get unlimited access to over 200+ courses</p>
           <div className="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
               <p className="w-full sm:w-auto bg-slate-400 hover:bg-slate-300 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                  <FaUserAlt className="mr-3 w-7 h-7"></FaUserAlt>
                   <div className="text-left">
                       <div className="mb-1 text-xs">For Students</div>
                       <div className="-mt-1 font-sans text-sm font-semibold">Silver</div>
                   </div>
               </p>
               <p className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                   <FaUserGraduate className="mr-3 w-7 h-7"></FaUserGraduate>
                   <div className="text-left">
                       <div className="mb-1 text-xs">For Individuals</div>
                       <div className="-mt-1 font-sans text-sm font-semibold">Gold</div>
                   </div>
               </p>
               <p className="w-full sm:w-auto bg-blue-400 hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-blue-400 dark:hover:bg-blue-600 dark:focus:ring-gray-700">
                   <FaUsers className="mr-3 w-7 h-7"></FaUsers>
                   <div className="text-left">
                       <div className="mb-1 text-xs">For Teams</div>
                       <div className="-mt-1 font-sans text-sm font-semibold">Platinum</div>
                   </div>
               </p>
              
           </div>
       </div>
   </Link>
            </div>
        


            
 {/*=================
        comments
  ==================*/}
{/* <article>
    <div className="flex items-center mb-4 space-x-4">
        <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt=""/>
        <div className="space-y-1 font-medium dark:text-white">
            <p>Jese Leos <time datetime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">Joined on August 2014</time></p>
        </div>
    </div>
    <div className="flex items-center mb-1">
        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <h3 className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
    </div>
    <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed in the United Kingdom on <time datetime="2017-03-03 19:00">March 3, 2017</time></p></footer>
    <p className="mb-2 font-light text-gray-500 dark:text-gray-400">This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.</p>
    <p className="mb-3 font-light text-gray-500 dark:text-gray-400">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>
    <a href="#" className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Read more</a>
    <aside>
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people found this helpful</p>
        <div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
            <a href="#" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Helpful</a>
            <a href="#" className="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Report abuse</a>
        </div>
    </aside> */}
{/* </article> */}
<div className='h-20 dark:bg-gray-800'>

</div>
        </div>
    
      
    );
};

export default Courses;