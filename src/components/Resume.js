import SideBar from "./SideBar";

import React from "react";

import { BsDownload } from "react-icons/bs";





import { Link } from "react-router-dom";


function Resume() {

    return (

        <React.Fragment>
            <SideBar />
            <div style={{ marginLeft: '100px', display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '0rem' }}>



                <div style={{ background: '#393939', height: '100%', width: '90%', borderRadius: '0.2rem', padding: '15px', marginTop: '3rem', marginBottom: '5rem' }}>
                    <Link to="../assets/Resume.pdf" target="_blank" download>
                        <BsDownload size={'40px'} color='#ffffff' style={{ minWidth: '40px', marginLeft: '30px' }} />
                    </Link>



                    <div style={{ marginTop: '1rem' }}>
                        <h1 style={{ color: 'white' }}>Nikolas Cichosz</h1>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                        <h1 style={{ color: 'white' }}>nrc170001@utdallas.edu</h1>
                        <h1 style={{ color: 'white' }}>•</h1>
                        <h1 style={{ color: 'white' }}>248-770-2804</h1>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                        <h1 style={{ color: 'white' }}>Parker, TX</h1>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>



                        <div style={{ width: '50%' }}>
                            <h1 style={{ color: 'white' }}>Education</h1>
                            <hr style={{ marginBottom: '1rem' }} />

                            <h1 style={{ color: 'white' }}>• BS Software Engineering</h1>
                            <h2 style={{ color: 'white', marginLeft: '40px' }}>University of Texas at Dallas</h2>
                            <h2 style={{ color: 'white', marginLeft: '40px' }}>GPA: 3.392/4.0</h2>
                            <h2 style={{ color: 'white', marginLeft: '40px' }}>2018-2022</h2>


                            <h1 style={{ color: 'white', marginTop: '1rem' }}>• High School</h1>
                            <h2 style={{ color: 'white', marginLeft: '40px' }}>Cichosz Homeschool Academy</h2>
                            <h2 style={{ color: 'white', marginLeft: '40px' }}>GPA: 4.0/4.0</h2>
                            <h2 style={{ color: 'white', marginLeft: '40px' }}>2014-2018</h2>


                            <h1 style={{ color: 'white', marginTop: '1rem' }}>Experience Using</h1>
                            <hr style={{ marginBottom: '1rem' }} />

                            <h2 style={{ color: 'white', marginLeft: '40px', marginTop: '0.25rem' }}>C++ Java Python JavaScript HTML</h2>
                            <h2 style={{ color: 'white', marginLeft: '40px', marginTop: '0.25rem' }}>CSS ReactJS NodeJS ExpressJS Lua</h2>
                            <h2 style={{ color: 'white', marginLeft: '40px', marginTop: '0.25rem' }}>MySQL MariaDB Linux Windows</h2>
                            <h2 style={{ color: 'white', marginLeft: '40px', marginTop: '0.25rem' }}>MacOS IBM-Cloud GitHub Docker</h2>
                            <h2 style={{ color: 'white', marginLeft: '40px', marginTop: '0.25rem' }}>Node-RED OpenShift AngularJS</h2>

                            <h1 style={{ color: 'white', marginTop: '1rem' }}>Work Experience</h1>
                            <hr style={{ marginBottom: '1rem' }} />

                            <h1 style={{ color: 'white' }}>• IBM</h1>
                            <h2 style={{ color: 'white', marginLeft: '40px', marginTop: '0.25rem' }}>Application Developer - Technical Specialist Intern</h2>
                            <h2 style={{ color: 'white', marginLeft: '40px', marginTop: '0.25rem' }}>
                                Create high quality proof of concepts and generate technical sales assets
                                relating to artificial intelligence. Actualize complex systems of engagement
                                leveraging IBM Cloud PaaS and IBM data analytics capabilities. Work in front
                                end using MERN, and back-end work for using IoT, Node-RED, and docker.
                            </h2>
                            <h2 style={{ color: 'white', marginLeft: '40px', marginTop: '0.25rem' }}>August 2021 - June 2022</h2>



                            <h1 style={{ color: 'white', marginTop: '1rem' }}>• Solstice Senior Living at Plano</h1>
                            <h2 style={{ color: 'white', marginLeft: '40px', marginTop: '0.25rem' }}>Prep Cook / Dishwasher / Server</h2>
                            <h2 style={{ color: 'white', marginLeft: '40px', marginTop: '0.25rem' }}>
                                Reported directly to culinary director, handled meal and food prep, food inventory and receiving,
                                as well as assisted with managing employee schedules.
                            </h2>
                            <h2 style={{ color: 'white', marginLeft: '40px', marginTop: '0.25rem' }}>April 2017 - August 2019</h2>










                        </div>

                        <div style={{ width: '50%' }}>
                            <h1 style={{ color: 'white' }}>Personal Projects</h1>
                            <hr style={{ marginBottom: '1rem' }} />

                            <h1 style={{ color: 'white' }}>• "Binder"</h1>
                            <div style={{marginLeft: '40px'}}>
                                <Link to={{ pathname: "https://github.com/nikcich/BinderCodes" }} style={{color: 'white', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 'bold'}}>CLICK FOR CODE</Link>
                                <Link to={{ pathname: "https://binder.cichosz.dev/" }} style={{ marginLeft: '2.5rem', color: 'white', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 'bold'}}>CLICK FOR DEMO</Link>
                            </div>
                            <h2 style={{ color: 'white', marginLeft: '40px', marginBottom: '0.5rem' }}>
                                Akin to a HotOrNot/Tinder for motorcycles. Allows users to create accounts,
                                upload images, and vote yes/no on other users motorcycle pictures.
                                Displays highest voted bikes on leader board, etc.
                            </h2>
                            <h2 style={{ color: 'white', marginLeft: '40px' }}>JavaScript, ReactJS, ExpressJS, NodeJS, MariaDB, HTML, CSS, Linode Server</h2>


                            <h1 style={{ color: 'white', marginTop: '1rem' }}>• Motorcycle Meetup Map</h1>
                            <div style={{marginLeft: '40px'}}>
                                <Link to={{ pathname: "https://github.com/nikcich/MotoMapV2/tree/master" }} style={{color: 'white', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 'bold'}}>CLICK FOR CODE</Link>
                            </div>
                            <h2 style={{ color: 'white', marginLeft: '40px', marginBottom: '0.5rem' }}>
                                Real-time data visualization tool created for and used by online community of motorcycle riders.
                                Allows users to submit locations and other information to more easily connect with fellow riders near them.
                            </h2>
                            <h2 style={{ color: 'white', marginLeft: '40px' }}>JavaScript, ReactJS, NodeJS, HTML, CSS, Firebase</h2>




                            <h1 style={{ color: 'white', marginTop: '1rem' }}>• Discord-Roblox Bot</h1>
                            <h2 style={{ color: 'white', marginLeft: '40px' }}>CODE AND DEMO NOT AVAILABLE</h2>
                            <h2 style={{ color: 'white', marginLeft: '40px', marginBottom: '0.5rem' }}>
                                Paid to make a discord bot that would recieve post requests from roblox containing account information and a voice
                                channel to move the users discord account into. Made use of MariaDB to store roblox-discord account
                                associated which would be created by users themselves through the bot.
                            </h2>
                            <h2 style={{ color: 'white', marginLeft: '40px' }}>JavaScript, ReactJS, NodeJS, HTML, CSS, Firebase</h2>


                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default Resume;