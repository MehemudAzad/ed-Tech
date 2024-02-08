import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';

const Blogs = () => {
    const {darkToggle, setDarkToggle} = useContext(AuthContext);
  const handleReadMore = () =>{
    
  }
   
    return (
        <div className={`${darkToggle && 'dark'}`}>
            <div className='dark:bg-gray-800'>
            <figure class="mx-auto max-w-screen-md text-center pt-8">
                    <svg aria-hidden="true" class="mx-auto mb-3 w-12 h-12 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"></path></svg>
                    <blockquote>
                        <p class="text-2xl italic font-medium text-gray-900 dark:text-white">"You can never get a cup of tea large enough or a book long enough to suit me."</p>
                    </blockquote>
                    <figcaption class="flex justify-center items-center mt-6 space-x-3">
                        <img class="w-6 h-6 rounded-full" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.biography.com%2Fbusiness-figure%2Felon-musk&psig=AOvVaw0XE_GxMmHMdD9-rBAxGAub&ust=1667901652142000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCOCi-_3nm_sCFQAAAAAdAAAAABAE" alt="profile pictre"/>
                        <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                            <cite class="pr-3 font-medium text-gray-900 dark:text-white">Elon Musk</cite>
                            <cite class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at TechED</cite>
                        </div>
                    </figcaption>
                </figure>

            <div className='border-2 p-4 w-[90%] mx-auto shadow-lg rounded-lg my-4 mt-10'>

                <h2 class="text-4xl font-extrabold dark:text-white">What is CORS?</h2>
                <p class="my-4 text-lg text-gray-500 dark:text-gray-400">&gt; &gt; Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. </p>
                <p class="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                <p onClick={handleReadMore} class="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline">
                Read more
                <svg class="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                </p>

            </div>

            <hr class="my-8 mx-auto w-8 h-8 bg-gray-200 rounded border-0 md:my-12 dark:bg-gray-700"/>
            <div className='border-2 p-4 w-[90%] mx-auto shadow-lg rounded-lg my-4'>

                <h2 class="text-4xl font-extrabold dark:text-white">Why are you using Firebase? WhatWhat other options do you have to implement authentication? </h2>
                <p class="my-4 text-lg text-gray-500 dark:text-gray-400">&gt; &gt;Firebase is a Backend as a server (BaaS) providing platform. Firebase is used for various perpuses but I am using it for Authentication of my website. It handles the login and sign in of my website. And also I am using it for Authorization of my website. </p>
                <p class="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">Using a BaaS, we outsource the responsibilities of running and maintaining servers to a third party and focus on the frontend or client-side development. Some alternatives are nhost, AWS Amplify, Heroku, Back4app, parse, backendless etc.</p>
                <p onClick={handleReadMore} class="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline">
                Read more
                <svg class="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                </p>

          </div>
          <hr class="my-8 mx-auto w-8 h-8 bg-gray-200 rounded border-0 md:my-12 dark:bg-gray-700"/>

          <div className='border-2 p-4 w-[90%] mx-auto shadow-lg rounded-lg my-4'>

            <h2 class="text-4xl font-extrabold dark:text-white">How does the private route work?</h2>
            <p class="my-4 text-lg text-gray-500 dark:text-gray-400">&gt; &gt; The private route is a route create to stop unauthorized user from entering sensative pages in the website. To create a private route we just create a js file called PrivateRoute and then we check if the user is present or not if the user is not present we send them to the login page.</p>
            <p class="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">We set the PrivateRoute and then inside of it we place the route that we want to protect. The main route becomes the children of the private route and then we return the private route as a children.</p>
            <p onClick={handleReadMore} class="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline">
            Read more
            <svg class="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
            </p>

          </div>

          <hr class="my-8 mx-auto w-8 h-8 bg-gray-200 rounded border-0 md:my-12 dark:bg-gray-700"/>
        <div className='border-2 p-4 w-[90%] mx-auto shadow-lg rounded-lg mt-4 pb-10'>

            <h2 class="text-4xl font-extrabold dark:text-white"> What is Node? How does Node work?</h2>
            <p class="my-4 text-lg text-gray-500 dark:text-gray-400">&gt; &gt;Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications. </p>
            <p class="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>
            <p onClick={handleReadMore} class="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline">
            Read more
            <svg class="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
            </p>

        </div>
            </div>
               <div className='h-20 dark:bg-gray-800'>

               </div>

        </div>
    );
};

export default Blogs;