"use client"

import { useEffect } from 'react';
import Script from "next/script";

const LoadScripts = ({ organization, website, gtm, clr }) => {
  useEffect(() => {
    const loadScripts = () => {
      setTimeout(() => {
        if (typeof window !== 'undefined') {
          const gtmScript = document.createElement('script');
          gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${gtm}`;
          gtmScript.async = true;
          document.body.appendChild(gtmScript);

          const clearbitScript = document.createElement('script');
          clearbitScript.src = clr;
          clearbitScript.async = true;
          document.body.appendChild(clearbitScript);

          const organizationScript = document.createElement('script');
          organizationScript.type = 'application/ld+json';
          organizationScript.innerHTML = JSON.stringify(organization);
          document.body.appendChild(organizationScript);

          const websiteScript = document.createElement('script');
          websiteScript.type = 'application/ld+json';
          websiteScript.innerHTML = JSON.stringify(website);
          document.body.appendChild(websiteScript);
        }
      }, 3000);
    };

    if (typeof window !== 'undefined') {
      if (document.readyState === 'complete') {
        loadScripts();
      } else {
        window.addEventListener('load', loadScripts);
        return () => window.removeEventListener('load', loadScripts);
      }
    }
  }, [organization, website, gtm, clr]);

  return (
    <>
      
    </>
  );
};

export default LoadScripts;