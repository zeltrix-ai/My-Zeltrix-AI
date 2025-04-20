import { useEffect } from 'react';

const CalendlyBadge = () => {
  useEffect(() => {
    // Add Calendly CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Add Calendly JS
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Initialize the badge widget after script loads
    script.onload = () => {
      // @ts-ignore
      window.Calendly.initBadgeWidget({
        url: 'https://calendly.com/zeltrix-ai/30min?background_color=0d0c0c&text_color=12eb45&primary_color=0ca420',
        text: 'Schedule time with me',
        color: '#18d412',
        textColor: '#282626'
      });
    };

    // Cleanup function
    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  // This component doesn't render anything visible itself
  return null;
};

export default CalendlyBadge;
