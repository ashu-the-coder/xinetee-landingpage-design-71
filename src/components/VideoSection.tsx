
import React from 'react';
import AnimatedSection from './AnimatedSection';
import GlassCard from './GlassCard';

interface VideoSectionProps {
  title: string;
  description: string;
  videoSrc?: string;
  reversed?: boolean;
}

const VideoSection = ({ 
  title, 
  description, 
  videoSrc = "https://xinetee.network/videos/demo.mp4", 
  reversed = false 
}: VideoSectionProps) => {
  return (
    <AnimatedSection className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${reversed ? 'md:flex-row-reverse' : ''}`}>
          <div className={`${reversed ? 'md:order-2' : ''}`}>
            <h2 className="text-3xl font-semibold mb-6">{title}</h2>
            <p className="text-foreground/80 mb-4">
              {description}
            </p>
          </div>
          
          <GlassCard className={`p-0 overflow-hidden aspect-video ${reversed ? 'md:order-1' : ''}`}>
            <video
              className="w-full h-full object-cover"
              controls
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </GlassCard>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default VideoSection;
