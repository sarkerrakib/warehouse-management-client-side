import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <div>
                <h2 className='text-center m-5 blog fs-1'>BLOGS</h2>
            </div>
            <div className='container'>
                <div className="border border-secondary p-3 rounded">
                    <div className='fw-bolder fs-4 '>
                        1. Difference between javascript and node js <br />

                    </div>
                    <div className="fs-5">
                        Ans:- <br />
                        <b>JavaScript:</b><br />
                        -It is a fast, flexible, lightweight, and open-source programming language.<br />
                        -It works with interfaces, modules, and classes to give an interactive look to your web pages.<br />
                        -You can use it for both frontend and backend development.<br />
                        -All browsers support JavaScript, and you can run it on almost every device.<br />
                        -You can create amazing web interfaces with JS, such as mouse hovers.<br />
                        -Because of its versatile nature, you can use this language to build mobile apps, web apps, and games.<br />
                        -JavaScript can be extended for developing large applications.

                        <br /><br />
                        <b>Node JS:</b><br />
                        -Node JS is a lightweight framework that uses very few modules. You can add more modules if required.<br />
                        -Being a cross-platform language, it can work on Windows, Mac, and Linux.<br />
                        -It is an open-sourced MIT licensed language.<br />
                        -To create server-side applications, it works with JavaScript.<br />
                        -All of the library APIs in Node JS is non-blocking and asynchronous. In this framework, servers don’t wait for data to return from the API.<br />
                        -The programming execution library of Node JS builds on the V8 JavaScript engine.
                    </div>
                </div>


                <br />
                <br />

                {/* second question */}

                <div className="border border-secondary p-3 rounded">
                    
                    <div className="fs-5">
                        Ans:- <br />
                        <b>Node JS:</b><br />
                        Everyone's talking about Node.js taking over the programming world and its great advantages. While all frameworks and languages come with some benefits, it's Node.js that takes over development in enterprises. The big question is...
                        Why use Node.js and it has become a standard for large-scale applications?

                        It’s hard to escape the gravitational pull of JavaScript and its ubiquity in modern Web development. While it’s been offering great frameworks and libraries for creating interactive, modern interfaces for many years now, it never did deploy any backend platform that could compete with other well-established languages. Node.js, however, the cool kid on the JavaScript block, has come to offer a viable alternative, one that has since been embraced by multiple startups and enterprises.
                        Development with Node.js lives up to its opinion as the new standard for enterprise applications. Any programming language will give you some reasons to choose them over others. The thing about Node.js is that it was developed for applications at scale. Modern tooling and its embrace of the forward-looking way of developing complex applications make Node.js stand apart from other programming technologies.


                        <br /><br />
                        <b>MongoDB:</b><br />
                        MongoDB is built on a scale-out architecture that has become popular with developers of all kinds for developing scalable applications with evolving data schemas.

                        As a document database, MongoDB makes it easy for developers to store structured or unstructured data. It uses a JSON-like format to store documents. This format directly maps to native objects in most modern programming languages, making it a natural choice for developers, as they don’t need to think about normalizing data. MongoDB can also handle high volume and can scale both vertically or horizontally to accommodate large data loads.

                        MongoDB was built for people building internet and business applications who need to evolve quickly and scale elegantly. Companies and development teams of all sizes use MongoDB for a wide variety of reasons.

                        MongoDB is a general-purpose database used in various ways to support applications in many different industries (e.g., telecommunications, gaming, finances, healthcare, and retail). MongoDB has found a home in many different businesses and functions because it solves long-standing problems in data management and software development. Typical use cases for MongoDB include: <br />
                        -Integrating large amounts of diverse data <br />
                        -Describing complex data structures that evolve <br />
                        -Delivering data in high-performance applications <br />
                        -Supporting hybrid and multi-cloud applications <br />
                        -Supporting agile development and collaboration
                    </div>
                </div>


                <br />
                <br />

                {/* thirt question */}

                <div className="border border-secondary p-3 rounded">
                    <div className='fw-bolder fs-4'>
                        3. Differences between sql and nosql databases. <br />
                    </div>
                    <div className="fs-5">
                        Ans:- <br />
                        <b>SQL:</b><br />
                        SQL (Structured Query Language) is a language that can be used to interact with relational databases. SQL is the standard language that is used to perform CRUD (create, read, update, delete) operations across all Relational Database Management Systems (RDBMS). People love SQL because it provides a rigid structure which makes working with data in your database quite simple. SQL has been around since the late 1970s and is industry standard across RDBSs, so there are lots of resources available for you to learn and problem-solve.
                        <br />

                        -Complex queries and reporting: If you are working with complex queries and want your data presented in a specific and consistent way, SQL is likely the better option.<br />
                        -No anticipated changes to data: If your data will always follow the same structure, using a NoSQL database might be overkill. SQL databases can handle structured, consistent data very well.<br />
                        -Relational data: Both NoSQL and SQL databases can handle relational data, however, SQL can do so while occupying less memory and using organized tables. It might require more effort to create a schema for your data, but querying with it will be easier.<br />
                        -Consistency is a must: If you are building a database for a payroll system or a bank, consistency is extremely important. In situations like these, the rigid structure of a SQL database is useful.


                        <br /><br />
                        <b>NoSQL:</b><br />
                        NoSQL databases are non-relational and can handle structured, unstructured, or semi-structured data. NoSQL databases can use many different data structures like key-value pairs, graphs, documents, or columns to store your data, which can make it better suited for specific applications. <br />

                        -Data is constantly changing: It is difficult to predict how your application, and as a result your data, will change over time. Using NoSQL allows for different fields and data types without having to restructure your database. <br />
                        -Unstructured, unrelated data: This is where NoSQL excels. There are far fewer limitations on what you can store and how you need to store it. You can have a mix of structured and unstructured data. <br />
                        -Want to get set up fast: Using NoSQL allows you to have a dynamic schema so you don't need to spend time thoroughly planning how you are going to store your data. This is great when following practices like Agile or Scrum where you need to build prototypes quickly.<br />
                        -Significant scale needed: Scaling a NoSQL database is extremely easy because you can scale horizontally. If you are anticipating having huge amounts of data that needs to be accessed in near real-time, NoSQL might be better for you.
                    </div>
                </div>


                <br />
                <br />

                {/* forth question */}

                <div className="border border-secondary p-3 mb-5 rounded">
                    <div className='fw-bolder fs-4'>
                        4. What is the purpose of jwt and how does it work. <br />
                    </div>
                    <div className="fs-5">
                        Ans:- <br />
                        JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.

                        It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.<br />

                        The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.

                        JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.<br />

                        Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.<br />
                        -User sign-in using username and password or google/facebook.<br />
                        -Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.<br />
                        -User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.<br />
                        -Resource server then verifies the authenticity of the token using the secret salt/ public key.
                    </div>
                </div>




            </div>
        </div>
    );
};

export default Blog;