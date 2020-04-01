import React from 'react';
import 'tachyons'
// import './FaceRecognition.css'

const FaceRecognition = ({ imageUrl }) => {
    return (
        <div className='center ma'>
            <div className='absolute nt2'>
            <img alt='' src={imageUrl} width='500px' height='auto'/>
           </div>
        </div>
    );
}

export default FaceRecognition