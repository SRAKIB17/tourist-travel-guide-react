import React from 'react';

const Blog = () => {
    return (
        <div style={{ marginTop: '100px' }} className="mx-4">

            <div className='blogq-1'>
                <h3 className='text-center'> Q1. Difference between authorization and authentication </h3>
                <table className='table table-hover' >
                    <tbody>
                        <tr>
                            <td>
                                <strong>Authentication</strong>
                            </td>
                            <td>
                                <strong>Authorization</strong>
                            </td>
                        </tr>
                        <tr>
                            <td>Authentication verifies who the user is.</td>
                            <td>Authorization determines what resources a user can access.</td>
                        </tr>
                        <tr>
                            <td>Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.
                            </td>
                            <td>Authorization works through settings that are implemented and maintained by the organization.</td>
                        </tr>
                        <tr>
                            <td>Authentication is the first step of a good identity and access management process.</td>
                            <td>Authorization always takes place after authentication.</td>
                        </tr>
                        <tr>
                            <td>Authentication is visible to and partially changeable by the user.</td>
                            <td>Authorization isn’t visible to or changeable by the user.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='blogq-2'>
                <h3>Why are you using firebase? What other options do you have to implement authentication? </h3>
                <p>Firebase Authentication makes it easier to get your users signed-in without having to understand the complexities behind implementing your own authentication system.</p>
                <div>
                    What are options for authentication?
                    5 Common Authentication Types:

                    <ul>
                        <li> Password-based authentication. Passwords are the most common methods of authentication.</li>
                        <li>Multi-factor authentication</li>
                        <li>  Certificate-based authentication.</li>
                        <li> Biometric authentication</li>
                        <li> Token-based authentication</li>
                    </ul>

                </div>
            </div>
            <div className='blogq-3'>
                <h3> What other services does firebase provide other than authentication</h3>
                <p><strong>There are many services which Firebase provides, Most useful of them are:</strong></p>
                <ul>
                    <li>Cloud Firestore</li>
                    <li>Cloud Functions</li>
                    <li>Authentication</li>
                    <li>Hosting</li>
                    <li>Cloud Storage</li>
                    <li>Google Analytics</li>
                    <li>Predictions</li>
                    <li>Cloud Messaging</li>
                    <li>Dynamic Links</li>
                    <li>Remote Config</li>
                </ul>
            </div>

        </div>
    );
};

export default Blog;