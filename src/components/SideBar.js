import { useState } from 'react';
import { AiOutlineMenu, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { MdHome } from 'react-icons/md';
import { FaFileCode } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im';

import React, { useEffect } from 'react';

import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    useHistory,
    useLocation
} from "react-router-dom";

function SideBar() {

    const history = useHistory();
    const location = useLocation();

    const [barSize, setbarSize] = useState('60');

    const handlePage = (page) => {
        history.push(page);
    }

    useEffect(() => {
        console.log(location);
    }, [location]);

    const current = '#da1e28';
    const other = 'white';


    return (
        <div className="sideBar" style={{
            width: (barSize + 'px'), height: '100%', background: '#161616', display: 'flex', flexDirection: 'column',
            position: 'absolute', zIndex: '10', overflowX: 'hidden'
        }}>


            <div className="HamburgerButton" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1rem', marginLeft: '10px', marginBottom: '10rem' }}
                onClick={() => {
                    if (barSize === '60') {
                        setbarSize('400');
                    } else {
                        setbarSize('60');
                    }
                }}
            >
                {barSize === '60' ?
                    <AiOutlineMenu className="ham" size={'40px'} color='#ffffff' /> :
                    <IoMdClose className="ham" size={'40px'} color='#ffffff' />
                }
            </div>


            <div className="sideBarContent">

                <div className={"sideBarIndicator " + (location.pathname === '/' ? ' sideBarPos1' : location.pathname === '/projects' ? ' sideBarPos2' : location.pathname === '/github' ? ' sideBarPos3' : location.pathname === '/linkedin' ? ' sideBarPos4' : location.pathname === '/resume' ? ' sideBarPos5' : '')} >
                    <div className={"sidebarButton " + ' sideBarActive'} style={{
                        display: 'flex', alignItems: 'center', height: '50px', flexShrink: '0', gridArea: '1/1', zIndex: 1, width: '3px'
                    }}>
                    </div>
                </div>

                <div className="buttonContainer" style={{ display: 'grid', height: '50px' }}

                    onClick={() => {
                        handlePage('/');
                    }}>
                    <div className="slideContainer" style={{ display: 'flex', alignItems: 'center', height: '50px', gridArea: '1/1' }}>
                        <div className="slide" style={{ height: '100%', width: '100%', position: 'relative', left: '-30rem', background: '#393939' }}></div>
                    </div>

                    <div className={"sidebarButton"} style={{
                        display: 'flex', alignItems: 'center', height: '50px', flexShrink: '0', gridArea: '1/1', zIndex: 1
                    }}>
                        <MdHome className='iconButton' size={'30px'} color="white" style={{ minWidth: '30px', marginLeft: '15px' }} />
                        <h1 style={{ marginLeft: '2rem', color: 'white' }}> Home </h1>
                    </div>
                </div>





                <div className="buttonContainer" style={{ display: 'grid', height: '50px' }} onClick={() => {
                    handlePage('/projects');
                }}>
                    <div className="slideContainer" style={{ display: 'flex', alignItems: 'center', height: '50px', gridArea: '1/1' }}>
                        <div className="slide" style={{ height: '100%', width: '100%', position: 'relative', left: '-30rem', background: '#393939' }}></div>
                    </div>

                    <div className={"sidebarButton"} style={{ display: 'flex', alignItems: 'center', height: '50px', flexShrink: '0', gridArea: '1/1', zIndex: 1 }}>
                        <FaFileCode className='iconButton' size={'30px'} color="white" style={{ minWidth: '30px', marginLeft: '15px' }} />
                        <h1 style={{ marginLeft: '2rem', color: "white" }}> Projects </h1>
                    </div>
                </div>





                <div className="buttonContainer" style={{ display: 'grid', height: '50px' }} onClick={() => {
                    handlePage('/github');
                }}>
                    <div className="slideContainer" style={{ display: 'flex', alignItems: 'center', height: '50px', gridArea: '1/1' }}>
                        <div className="slide" style={{ height: '100%', width: '100%', position: 'relative', left: '-30rem', background: '#393939' }}></div>
                    </div>

                    <div className={"sidebarButton"} style={{ display: 'flex', alignItems: 'center', height: '50px', flexShrink: '0', gridArea: '1/1', zIndex: 1 }}>
                        <AiFillGithub className='iconButton' size={'30px'} color="white" style={{ minWidth: '30px', marginLeft: '15px' }} />
                        <h1 style={{ marginLeft: '2rem', color: "white" }}> GitHub </h1>
                    </div>
                </div>




                <div className="buttonContainer" style={{ display: 'grid', height: '50px' }} onClick={() => {
                    handlePage('/linkedin');
                }}>
                    <div className="slideContainer" style={{ display: 'flex', alignItems: 'center', height: '50px', gridArea: '1/1' }}>
                        <div className="slide" style={{ height: '100%', width: '100%', position: 'relative', left: '-30rem', background: '#393939' }}></div>
                    </div>

                    <div className={"sidebarButton"} style={{ display: 'flex', alignItems: 'center', height: '50px', flexShrink: '0', gridArea: '1/1', zIndex: 1 }}>
                        <AiFillLinkedin className='iconButton' size={'30px'} color="white" style={{ minWidth: '30px', marginLeft: '15px' }} />
                        <h1 style={{ marginLeft: '2rem', color: "white" }}> LinkedIn </h1>
                    </div>
                </div>




                <div className="buttonContainer" style={{ display: 'grid', height: '50px' }}
                    onClick={() => {
                        handlePage('/resume');
                    }}
                >
                    <div className="slideContainer" style={{ display: 'flex', alignItems: 'center', height: '50px', gridArea: '1/1' }}>
                        <div className="slide" style={{ height: '100%', width: '100%', position: 'relative', left: '-30rem', background: '#393939' }}></div>
                    </div>

                    <div className={"sidebarButton"} style={{ display: 'flex', alignItems: 'center', height: '50px', flexShrink: '0', gridArea: '1/1', zIndex: 1 }}>
                        <ImProfile className='iconButton' size={'30px'} color="white" style={{ minWidth: '30px', marginLeft: '15px' }} />
                        <h1 style={{ marginLeft: '2rem', color: "white" }}> Resumé </h1>
                    </div>
                </div>
            </div>






        </div>
    );
}

export default SideBar;
