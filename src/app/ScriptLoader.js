"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { generateBreadcrumb } from "./components/lib/schemaCode";
import Cookies from "js-cookie";

const LoadScripts = ({ organization, website, localBusiness, gtm, clr }) => {
  const pathname = usePathname();
  useEffect(() => {
    const loadScripts = () => {
      setTimeout(() => {
        // GTM Script
        //commented as we have already this in src/app/layout.js to load it as early as possible for better tracking.

        if (gtm) {
          const gtmScript = document.createElement("script");
          gtmScript.async = true;
          gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${gtm}`;
          document.body.appendChild(gtmScript);
        }

        // Clearbit Script
        const clearbitScript = document.createElement("script");
        clearbitScript.src = clr;
        clearbitScript.async = true;
        document.body.appendChild(clearbitScript);

        // Organization Script
        const organizationScript = document.createElement("script");
        organizationScript.type = "application/ld+json";
        organizationScript.innerHTML = pathname.startsWith("/blog")
          ? generateBreadcrumb("Brilworks Blogs")
          : JSON.stringify(organization);
        document.body.appendChild(organizationScript);

        // Website Script
        const localBusinessScript = document.createElement("script");
        localBusinessScript.type = "application/ld+json";
        localBusinessScript.innerHTML = JSON.stringify(localBusiness);
        document.body.appendChild(localBusinessScript);
        // Website Script
        const websiteScript = document.createElement("script");
        websiteScript.type = "application/ld+json";
        websiteScript.innerHTML = JSON.stringify(website);
        document.body.appendChild(websiteScript);

        // Factors AI Script
        const factorsScript = document.createElement("script");
        factorsScript.innerHTML = `
          window.faitracker=window.faitracker||function(){this.q=[];var t=new CustomEvent("FAITRACKER_QUEUED_EVENT");return this.init=function(t,e,a){this.TOKEN=t,this.INIT_PARAMS=e,this.INIT_CALLBACK=a,window.dispatchEvent(new CustomEvent("FAITRACKER_INIT_EVENT"))},this.call=function(){var e={k:"",a:[]};if(arguments&&arguments.length>=1){for(var a=1;a<arguments.length;a++)e.a.push(arguments[a]);e.k=arguments[0]}this.q.push(e),window.dispatchEvent(t)},this.message=function(){window.addEventListener("message",function(t){"faitracker"===t.data.origin&&this.call("message",t.data.type,t.data.message)})},this.message(),this.init("m0xecm5ma5nhslhwubr122po3otqgfmi",{host:"https://api.factors.ai"}),this}(),function(){var t=document.createElement("script");t.type="text/javascript",t.src="https://app.factors.ai/assets/factors.js",t.async=!0,(d=document.getElementsByTagName("script")[0]).parentNode.insertBefore(t,d)}();
        `;
        document.body.appendChild(factorsScript);
        //clearty script
        const clarityScript = document.createElement("script");
        clarityScript.innerHTML = `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=gtm2";
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window,document,"clarity","script","g7tzogb1si");
        `;
        document.body.appendChild(clarityScript);
      }, 3000); // 3 seconds delay
    };

    if (document.readyState === "complete") {
      loadScripts();
    } else {
      window.addEventListener("load", loadScripts);
      return () => window.removeEventListener("load", loadScripts);
    }
  }, [organization, website, gtm, clr]);

  useEffect(() => {
    const fetchWithIP = async () => {
      try {
        const existingCookie = Cookies.get("user-data");
        const existingData = existingCookie ? JSON.parse(existingCookie) : {};

        // Skip the entire geo fetch chain if we already have complete location data
        if (existingData.city && existingData.region && existingData.country) {
          return;
        }

        const ipRes = await fetch("https://api.ipify.org?format=json");
        const { ip } = await ipRes.json();

        const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
        if (!geoRes.ok) throw new Error("Failed to fetch location data");
        const geoData = await geoRes.json();

        // Extract required fields
        const latestData = {
          city: geoData.city || "",
          region: geoData.region || "",
          country: geoData.country_name || "",
        };

        // Compare each key
        let hasChanged = false;
        const updatedData = { ...existingData };

        ["city", "region", "country"].forEach((key) => {
          if (latestData[key] && latestData[key] !== existingData[key]) {
            updatedData[key] = latestData[key];
            hasChanged = true;
          }
        });

        // 6️⃣ Update cookie only if something changed
        if (hasChanged) {
          Cookies.set("user-data", JSON.stringify(updatedData), {
            expires: 7,
            path: "/",
            sameSite: "lax",
          });
        }
      } catch (error) {
        console.error("Location fetch error:", error);
      }
    };

    fetchWithIP();
  }, []);

  return null;
};

export default LoadScripts;
