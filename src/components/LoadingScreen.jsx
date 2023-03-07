import React from 'react';
import { Circle } from 'better-react-spinkit';

function LoadingScreen() {
  return (
    <div className='flex items-center justify-center h-screen'>
          <Circle color="#3CBC28" size = { 60 }/>
    </div>
  );
}

export default LoadingScreen;

