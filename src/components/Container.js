import { Parallax, Background } from 'react-parallax';
import React from 'react';
const Container = () => (
    <Parallax
        
        bgImage={require('../assets/sky.jpg')}
        bgImageAlt="LOADING"
        strength={-1000}
    >
        <div style={{ height: '50vh' }} />
    </Parallax>
);

export default Container;
