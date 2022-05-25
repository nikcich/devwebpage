import SideBar from "./SideBar";
import React from "react";
import ProjectDisplay from './ProjectDisplay';

import binderPic from '../assets/binder.PNG';
import bot from '../assets/bot.png';
import capstone from '../assets/capstone.png';
import meetup from '../assets/motomeetup.PNG';
import monte from '../assets/monte.PNG';

function Projects() {

    return (

        <React.Fragment>
            <SideBar />
            <div style={{ marginLeft: '100px', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>

                <h1 style={{ color: 'white', marginTop: '1rem' }}> My Projects List </h1>
                


                <ProjectDisplay
                    title="Project #1 - Binder"
                    description={`
                    A website that allows users to upload images of motorcycles, 
                    for other users to view and vote \"Yes\" or \"No\" on. Users can also view the top voted motorcycles. This project made use of
                    ReactJS, NodeJS, ExpressJS, HTML/CSS, MariaDB, and was deployed on a Linux server. A basic account system is implemented,
                     storing users username and an encrypted password in the database. Additionally, there are protected routes to keep users who are
                     not logged in from accessing pages other than the login page. Basic file upload system is present, to allow users to upload images of motorcycles.
                    `}
                    image={binderPic}
                    side="left"
                />

                <ProjectDisplay
                    title={"Project #2 - Senior \"Capstone\" Project"}
                    description={`
                    Worked with six fellow senior Software Engineering majors as well as an industry sponsor from MediaKind to develop
                    a web based workforce planning application. Assumed role of Front-End Lead (As I was the only one with experience in full-stack development)
                    and guided the development of the User Interface and API's needed for the application. The application was built using ReactJS, NodeJS, Python Flask, MariaDB,
                    and used the Carbon Design System. Allows for admin and non-admin users, with admin only protected routes, and user level permissions for read/write on particular plans.
                    Admin ability to create and edit plans, create and edit users, etc. User ability to modify plan cells, add new rows, carry changes forward to future dates, etc. all reflected in database stored plans.
                    `}
                    image={capstone}
                    side="right"
                />

                <ProjectDisplay
                    title="Project #3 - Motorcycle Meetup Map"
                    description={`
                        My first ever attempt as front-end development. With minimal knowledge of JavaScript, I  wanted to create a tool for motorcycle riders in an online community
                        to more easily find fellow riders in their area and connect with them. I used HTML/CSS, JavaScript, and Google Maps API to create a map and plot markers for users.
                        This was developed using ReactJS, NodeJS, HTML/CSS, Firebase, and Google Maps API.
                    `}
                    image={meetup}
                    side="left"
                />

                <ProjectDisplay
                    title="Project #4 - Discord-Roblox Bot"
                    description={`
                        A discord bot that allows for users to associate a discord account with a roblox account. This then enabled the ability for a roblox based "radio" GUI
                        to be created for users to interact with, moving a users associated discord account from voice chat channels creating a seudo-Radio frequncy system.
                        This was developed using ReactJS, NodeJS, DiscordJS, MariaDB, Lua, Roblox API's, and deployed on a Linux server.
                    `}
                    image={bot}
                    side="right"
                />

                <ProjectDisplay
                    title="Project #5 - Page Replacement Monte Carlo Simulation"
                    description={`
                        A Monte Carlo simulation of page replacement algorithms. This was developed using C++, implementing the FIFO, LRU, and Clock page replacement algorithms.
                        Ran memory traces of 1,000 page numbers placed in 10 regions. Each region having a base page number of 10 times its region number. Adjusted using normal distribution,
                        and each algorithm tested on working set sizes of 4 to 20.
                    `}
                    image={monte}
                    side="left"
                />





            </div>

        </React.Fragment>
    );
}

export default Projects;