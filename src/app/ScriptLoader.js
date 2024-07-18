"use client"
import { useEffect } from 'react';


const LoadScripts = ({ organization, website  ,gtm, clr}) => {
  useEffect(() => {
    const loadScripts = () => {
      setTimeout(() => {
        // if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production') {
          const gtmScript = document.createElement('script');
          gtmScript.async=true;
          gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${gtm}`;
          gtmScript.async = true;
          document.body.appendChild(gtmScript);

          const clearbitScript = document.createElement('script');
          clearbitScript.src = clr;
          clearbitScript.async = true;
          clearbitScript.async = true;
          document.body.appendChild(clearbitScript);

          const organizationScript = document.createElement('script');
          organizationScript.async = true;
          organizationScript.type = 'application/ld+json';
          organizationScript.innerHTML = JSON.stringify(organization);
          document.body.appendChild(organizationScript);

          const websiteScript = document.createElement('script');
          websiteScript.async = true;
          websiteScript.type = 'application/ld+json';
          websiteScript.innerHTML = JSON.stringify(website);
          document.body.appendChild(websiteScript);
        // }
      }, 3000); // Adjust the delay as needed (5000ms = 5 seconds)
    };

    if (document.readyState === 'complete') {
      loadScripts();
    } else {
      window.addEventListener('load', loadScripts);
      return () => window.removeEventListener('load', loadScripts);
    }
  }, [organization, website]);

  return null;
};

export default LoadScripts;
