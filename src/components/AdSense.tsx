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
    let checkInterval: number;
    let attempts = 0;
    const maxAttempts = 20; // Try for up to 10 seconds (500ms * 20)

    const tryInitialize = () => {
      if (!adRef.current || isInitialized.current) {
        clearInterval(checkInterval);
        return;
      }

      // Ensure the element is in the DOM and has width > 0
      const width = adRef.current.offsetWidth || adRef.current.clientWidth;
      const isVisible = !!(adRef.current.offsetWidth || adRef.current.offsetHeight || adRef.current.getClientRects().length);

      if (width > 0 && isVisible) {
        if (!adRef.current.getAttribute('data-adsbygoogle-status')) {
          try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            isInitialized.current = true;
            clearInterval(checkInterval);
          } catch (e) {
            console.error('AdSense Initialization Error:', e);
            clearInterval(checkInterval);
          }
        } else {
          isInitialized.current = true;
          clearInterval(checkInterval);
        }
      }

      attempts++;
      if (attempts >= maxAttempts) {
        clearInterval(checkInterval);
      }
    };

    // Initial check after a small delay
    const initialTimer = setTimeout(tryInitialize, 200);

    // If initial check fails, start interval polling
    checkInterval = window.setInterval(tryInitialize, 500);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(checkInterval);
    };
  }, [adClient, adSlot]); // Re-run if client/slot changes (unlikely)

  return (
    <div className="flex justify-center my-4 overflow-hidden w-full min-h-[50px]">
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
