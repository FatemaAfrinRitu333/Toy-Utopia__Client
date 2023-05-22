import React from 'react';

const Blog = () => {
    return (
        <div className='my-12 container mx-auto'>
            <div className="card w-full bg-accent/50 text-black my-8">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                    <p>
                        Access tokens and refresh tokens are used to authenticate and authorize access to web APIs. Access tokens are short-lived tokens that are issued by an authorization server to grant access to a protected resource. Refresh tokens, on the other hand, are long-lived tokens that can be used to obtain a new access token when the current one expires.
                        <br />
                        When a user logs into a system, the system generates an access token and a refresh token. The access token is used to access protected resources and is valid for a short period of time. The refresh token is used to obtain a new access token once the current one expires.

                        When the access token expires, the client sends a request to the authorization server with the refresh token to obtain a new access token. The authorization server checks the validity of the refresh token and, if it's valid, issues a new access token.
                        <br />
                        Access tokens and refresh tokens should be stored securely on the client-side. More specifically on local storage or HTTP-only cookie. Among these two HTTP-only cookie is recommended as it is a bit more secure than local storage. However, one should keep in mind, that none of these two places are ideal to store it.
                    </p>
                </div>
            </div>
            <div className="card w-full bg-accent/50 text-black my-8">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Compare SQL and NoSQL databases</h2>
                    <div className="w-full overflow-x-auto">
                        <table className="table w-full text-center">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>SQL</th>
                                    <th>NoSQL</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <td>1</td>
                                    <td>Cy Ganderton</td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <td>2</td>
                                    <td>Hart Hagerty</td>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <td>3</td>
                                    <td>Brice Swyre</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="card w-full bg-accent/50 text-black my-8">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">What is express js? What is Nest JS?</h2>
                    <p>Express JS is a popular and widely-used web application framework for Node.js that provides a robust set of features for web and mobile applications. It is minimal and flexible, and offers a range of HTTP utility methods for creating robust APIs. <br />
                        On the other hand, Nest JS is a relatively new, progressive Node.js framework that is built with TypeScript. It is designed to make the development of scalable, testable, and maintainable server-side applications easier and more efficient. <br />
                        Both frameworks have their own unique features and advantages, and the choice of which one to use depends on the specific needs and requirements of the application being developed.</p>
                </div>
            </div>
            <div className="card w-full bg-accent/50 text-black my-8">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">What is MongoDB aggregate and how does it work?</h2>
                    <p>MongoDB aggregate is a powerful tool used for data aggregation, analysis, and processing. It allows you to perform complex queries on collections and get the desired data in a structured way. <br />

                        The aggregate framework in MongoDB consists of various stages that allow you to filter, group, sort, and transform data in different ways. Some of the commonly used stages in the aggregate pipeline include $match, $group, $sort, $project, and $limit. To use the aggregate framework, you need to specify one or more stages and chain them together in the desired order. Each stage takes input from the previous stage and produces output that is passed to the next stage in the pipeline. In summary, MongoDB aggregate is a powerful feature that allows you to perform complex data processing and analysis operations on collections in MongoDB.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;