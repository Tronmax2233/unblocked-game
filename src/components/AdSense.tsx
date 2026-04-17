import React, { useEffect, useRef } from 'react';

interface AdSenseProps {
  adClient: string;
  adSlot: string;
  style?: React.CSSProperties;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

/**
 * Reusable Google AdSense Component.
 */
export const AdSense: React.FC<AdSenseProps> = ({ adClient, adSlot, style }) => {
  const adRef = useRef<HTMLModElement>(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    // Small timeout to ensure the container has a width (fixes availableWidth=0)
    const timer = setTimeout(() => {
      if (adRef.current && !isInitialized.current) {
        // Check if this specific element already has an ad to avoid "already have ads" error
        if (!adRef.current.getAttribute('data-adsbygoogle-status')) {
          try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            isInitialized.current = true;
          } catch (e) {
            console.error('AdSense Initialization Error:', e);
          }
        }
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center my-8 overflow-hidden w-full min-h-[90px]">
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={style || { display: 'block', width: '100%', minHeight: '90px' }}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
};
