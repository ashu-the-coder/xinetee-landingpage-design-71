
import React from 'react';

const Globe3D = () => {
  return (
    <div className="globe-container" style={{ top: '220px' }}>
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
      {/* Note: The Spline watermark is controlled by Spline and can only be removed with a Spline Pro subscription */}
    </div>
  );
};

export default Globe3D;
