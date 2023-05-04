import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto px-[60px] mb-10'>
            <h3 className='text-3xl font-bold text-center my-10'>Frequently Asked Questions</h3>
            <div>
                <h2 className='font-bold'>Q.1: Differences between uncontrolled and controlled components.</h2>
                <p className='mt-3'>
                    Uncontrolled components are those that can be accessed and modified by any part of the system, without any restrictions or checks. These components typically have no defined interfaces or protocols for communication, which can make it difficult to ensure their correct functioning or to prevent unauthorized access or modifications. Examples of uncontrolled components include global variables and functions, as well as certain types of data structures and system resources. <br /> <br />

                    On the other hand, controlled components are those that are accessed and modified through well-defined interfaces and protocols, which are designed to ensure their correct and safe functioning. These components typically have explicit input and output parameters, as well as restrictions and validation checks to prevent misuse or errors. Examples of controlled components include APIs, libraries, modules, and certain types of data structures, such as encapsulated objects and abstract data types.
                </p><br /><br />

                <h2 className='font-bold'>Q.2: How to validate React props using PropTypes?</h2>
                <p className='mt-3'>
                    <p>
                        React PropTypes is a built-in type-checking feature that allows you to validate the props of your React components at runtime. It is a popular tool used by many React developers to ensure that their components are receiving the expected data types and values for their props. Here's how you can use PropTypes to validate your React props:
                    </p>
                    <ul className='space-y-2 mt-2 list-inside'>
                        <li className='list-disc'>Import PropTypes from the 'prop-types' package.</li>
                        <li className='list-disc'>Define the expected PropTypes for your component by adding a propTypes property to your component.</li>
                        <li className='list-disc'>Pass the props to your component.</li>
                    </ul>
                </p> <br /> <br />

                <h2 className='font-bold'>Q.3: Tell us the difference between nodejs and express js.</h2>
                <p className='mt-3'>
                    <p>
                        Node.js and Express.js are both popular technologies used in building web applications with JavaScript. However, they serve different purposes and have different capabilities. Here are the key differences between Node.js and Express.js:
                    </p>
                    <ul className='space-y-2 mt-2 list-inside'>
                        <li className='list-disc'>Node.js is a runtime environment for executing JavaScript code outside of a web browser. It provides a platform for building server-side applications, such as web servers, command-line tools, and desktop applications. Express.js, on the other hand, is a web framework built on top of Node.js. It provides a set of libraries and tools for building web applications and APIs using Node.js.</li>
                        <li className='list-disc'>Node.js is low-level and provides a basic set of APIs for building network applications. It allows developers to handle HTTP requests and responses, create and manage network sockets, and perform file I/O operations, among other things. Express.js, on the other hand, is a high-level framework that provides a more convenient and structured way of building web applications using Node.js. It simplifies common web development tasks such as routing, middleware, and error handling.</li>
                        <li className='list-disc'>Node.js is unopinionated, which means that it does not impose any specific programming paradigms or design patterns on developers. It allows developers to build applications using any combination of libraries and tools they prefer. Express.js, on the other hand, is an opinionated framework that follows a specific design pattern called the Model-View-Controller (MVC) architecture. It provides a set of conventions and best practices for structuring and organizing code in a consistent and maintainable way.</li>
                        <li className='list-disc'>Node.js is a runtime environment and can be used to build a variety of applications, not just web applications. Express.js, on the other hand, is specifically designed for building web applications and APIs, and provides features such as middleware, routing, and templating engines that are specific to web development.</li>
                    </ul>
                </p> <br /> <br />

                <h2 className='font-bold'>Q.4: What is a custom hook, and why will you create a custom hook?</h2>
                <p className='mt-3'>
                    <ul className='space-y-2 mt-2'>
                        <li>In React, a custom hook is a JavaScript function that uses React's built-in hooks to provide a reusable logic for a specific feature or behavior. Custom hooks allow you to encapsulate complex stateful logic into a single function, which can be reused across multiple components or even multiple projects.</li>
                        <li>The key benefits of using a custom hook are code reusability, modularity, and simplicity. By creating a custom hook, you can abstract away complex logic and reuse it across multiple components, making your code more modular and easier to maintain.</li>
                        <li>To create a custom hook, you need to use one or more of React's built-in hooks, such as useState, useEffect, useContext, useRef, and useReducer, to encapsulate the logic you want to reuse. You can then export the custom hook as a separate module and import it into your components.</li>
                    </ul>
                </p>
            </div>
        </div>
    );
};

export default Blog;