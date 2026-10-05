"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { generateBreadcrumb } from "./components/lib/schemaCode";
import { installMailtoListener } from "./components/lib/leadSource";
import { afterFirstPaint } from "./components/lib/afterFirstPaint";
import Cookies from "js-cookie";

const injectInlineScript = (id, code) => {
  if (document.getElementById(id)) return;
  const script = document.createElement("script");
  script.id = id;
  script.innerHTML = code;
  document.body.appendChild(script);
};

const LoadScripts = ({ organization, website, localBusiness, gtm, clr }) => {
  const pathname = usePathname();
  useEffect(() => {
    installMailtoListener();
  }, []);

  useEffect(() => {
    // GTM and Vector start right after the first contentful paint instead of at
    // hydration, so they no longer sit on the LCP critical path. GTM keeps its
    // standard gtm.start/dataLayer bootstrap (BRI-535); events pushed before it
    // loads stay queued in dataLayer, and CookieConsent's consent defaults are
    // always pushed before the container loads.
    afterFirstPaint(() => {
      if (gtm) {
        injectInlineScript(
          "gtm-config",
          `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtm}');`,
        );
      }

      injectInlineScript(
        "vector-script",
        `!function(e,r){try{if(e.vector)return void console.log("Vector snippet included more than once.");var t={};t.q=t.q||[];for(var o=["load","identify","on"],n=function(e){return function(){var r=Array.prototype.slice.call(arguments);t.q.push([e,r])}},c=0;c<o.length;c++){var a=o[c];t[a]=n(a)}if(e.vector=t,!t.loaded){var i=r.createElement("script");i.type="text/javascript",i.async=!0,i.src="https://cdn.vector.co/pixel.js";var l=r.getElementsByTagName("script")[0];l.parentNode.insertBefore(i,l),t.loaded=!0}}catch(e){console.error("Error loading Vector:",e)}}(window,document);
          vector.load("1a1e4f1f-0942-4b35-bbad-8ef11726a7e4");`,
      );
    });
  }, [gtm]);
  useEffect(() => {
    const loadScripts = () => {
      setTimeout(() => {
        // GTM is bootstrapped by the afterFirstPaint effect above. Do NOT load it
        // here too: this path was a redundant, ~3s-deferred second gtm.js load with
        // no gtm.start/dataLayer bootstrap, which (together with the old lazyOnload)
        // deferred GA4 past most sessions and broke collection from Apr 22 2026
        // (BRI-535).

        // Clearbit Script
        const clearbitScript = document.createElement("script");
        clearbitScript.src = clr;
        clearbitScript.async = true;
        document.body.appendChild(clearbitScript);

        // Organization Script
        // const organizationScript = document.createElement("script");
        // organizationScript.type = "application/ld+json";
        // organizationScript.innerHTML = pathname.startsWith("/blog")
        //   ? generateBreadcrumb("Brilworks Blogs")
        //   : JSON.stringify(organization);
        // document.body.appendChild(organizationScript);

        // Website Script
        // const localBusinessScript = document.createElement("script");
        // localBusinessScript.type = "application/ld+json";
        // localBusinessScript.innerHTML = JSON.stringify(localBusiness);
        // document.body.appendChild(localBusinessScript);
        // Website Script
        // const websiteScript = document.createElement("script");
        // websiteScript.type = "application/ld+json";
        // websiteScript.innerHTML = JSON.stringify(website);
        // document.body.appendChild(websiteScript);

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

    afterFirstPaint(fetchWithIP);
  }, []);

  return null;
};

export default LoadScripts;
