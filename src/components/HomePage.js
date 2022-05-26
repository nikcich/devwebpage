import { AiOutlineMenu } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { MdHome } from 'react-icons/md';
import SideBar from './SideBar';
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'
import Container from './Container';
import { useEffect, useState } from 'react';
import React from 'react';
import SortVisual from './SortVisual';


function HomePage() {

    const { text } = useTypewriter({
        words: ['Hello, welcome to my website!', 'Open the left navigation menu to view projects.'],
        loop: true,
        onLoopDone: () => console.log(`loop completed after loop.`),
    });








    useEffect(() => {
    });


    return (
        <div>
            <SideBar />

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                {/* <div style={{ marginLeft: '100px', color: 'white' }}>
                    <span style={{ fontSize: '2.5rem' }}>{text}</span>
                    <Cursor cursorStyle="_" />
                </div> */}
                <SortVisual />

                <div style={{ zIndex: 1 }}>
                    <h1 style={{ color: 'white', marginTop: '3rem' }}> Current Application Developer - Technical Specialist Intern at IBM </h1>
                    <h1 style={{ color: 'white', marginTop: '1rem' }}> Incoming Software Engineer 1 at Raytheon Intelligence & Space </h1>
                    <h1 style={{ color: 'white', marginTop: '1rem' }}> Summer 2022 </h1>

                    {/* <div className="glass">
                        <h1 style={{ color: 'white', marginTop: '3rem' }}> Hello there </h1>
                    </div> */}
                </div>



            </div>

        </div>
    )
}

export default HomePage;