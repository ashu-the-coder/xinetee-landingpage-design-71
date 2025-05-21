
import React from 'react';

const Globe3D = () => {
  return (
    <div className="globe-container relative" style={{ top: '240px' }}>
      {/* Purple glow effect behind the globe */}
      <div className="absolute inset-0 -z-10 bg-gradient-radial from-purple-500/30 to-transparent opacity-80 blur-3xl"></div>
      <div className="absolute inset-0 -z-10 bg-gradient-radial from-pink-400/20 to-transparent opacity-60 blur-3xl transform translate-x-1/4"></div>
      
      <iframe 
        src='https://my.spline.design/worldplanet-FknnUoXYV1aapXi5Yt5E9uMx/' 
        frameBorder='0' 
        width='100%' 
        height='100%'
        title="3D Globe"
        style={{ 
          pointerEvents: 'none',
          overflow: 'hidden'
        }}
      ></iframe>
    </div>
  );
};

export default Globe3D;
