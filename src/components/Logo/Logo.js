import React from 'react';
import 'tachyons'
import Tilt from 'react-tilt'
import './Logo.css';
import smartbrains from './brain-icon.png'

const Logo = () => {
    return (
        <div className='ma4 mt0 center'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3">
                    <img style={{paddingTop: '5px'}} src={smartbrains} alt='logo'/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo