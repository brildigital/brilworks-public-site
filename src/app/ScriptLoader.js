"use client"
import { useEffect } from 'react';

const LoadScripts = ({ organization, website, gtm, clr }) => {
  useEffect(() => {
    const loadScripts = () => {
      setTimeout(() => {
        // GTM Script
        const gtmScript = document.createElement('script');
        gtmScript.async = true;
        gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${gtm}`;
        document.body.appendChild(gtmScript);

        // Clearbit Script
        const clearbitScript = document.createElement('script');
        clearbitScript.src = clr;
        clearbitScript.async = true;
        document.body.appendChild(clearbitScript);

        // Organization Script
        const organizationScript = document.createElement('script');
        organizationScript.type = 'application/ld+json';
        organizationScript.innerHTML = JSON.stringify(organization);
        document.body.appendChild(organizationScript);

        // Website Script
        const websiteScript = document.createElement('script');
        websiteScript.type = 'application/ld+json';
        websiteScript.innerHTML = JSON.stringify(website);
        document.body.appendChild(websiteScript);

        // Factors AI Script
        const factorsScript = document.createElement('script');
        factorsScript.innerHTML = `
          window.faitracker=window.faitracker||function(){this.q=[];var t=new CustomEvent("FAITRACKER_QUEUED_EVENT");return this.init=function(t,e,a){this.TOKEN=t,this.INIT_PARAMS=e,this.INIT_CALLBACK=a,window.dispatchEvent(new CustomEvent("FAITRACKER_INIT_EVENT"))},this.call=function(){var e={k:"",a:[]};if(arguments&&arguments.length>=1){for(var a=1;a<arguments.length;a++)e.a.push(arguments[a]);e.k=arguments[0]}this.q.push(e),window.dispatchEvent(t)},this.message=function(){window.addEventListener("message",function(t){"faitracker"===t.data.origin&&this.call("message",t.data.type,t.data.message)})},this.message(),this.init("m0xecm5ma5nhslhwubr122po3otqgfmi",{host:"https://api.factors.ai"}),this}(),function(){var t=document.createElement("script");t.type="text/javascript",t.src="https://app.factors.ai/assets/factors.js",t.async=!0,(d=document.getElementsByTagName("script")[0]).parentNode.insertBefore(t,d)}();
        `;
        document.body.appendChild(factorsScript);

      }, 3000); // 3 seconds delay
    };

    if (document.readyState === 'complete') {
      loadScripts();
    } else {
      window.addEventListener('load', loadScripts);
      return () => window.removeEventListener('load', loadScripts);
    }
  }, [organization, website, gtm, clr]);

  return null;
};

export default LoadScripts;