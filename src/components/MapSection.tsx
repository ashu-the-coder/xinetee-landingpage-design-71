
import React from 'react';
import GlassCard from '@/components/GlassCard';
import Button from '@/components/Button';
import { ExternalLink } from 'lucide-react';

const MapSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <GlassCard className="p-0 overflow-hidden h-80">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d261979.41850046045!2d73.6981553041223!3d18.52454504095413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e1!3m2!1sen!2sin!4v1747855895844!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{border: 0}} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
          className="w-full h-full"
        ></iframe>
      </GlassCard>
      <div className="flex justify-center">
        <a 
          href="https://maps.app.goo.gl/HCG3DDfMtiC8GuXg6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="secondary" className="flex items-center gap-2">
            <span>Open in Google Maps</span> 
            <ExternalLink size={16} />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default MapSection;
