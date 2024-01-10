"use client";

import { usePathname } from "next/navigation";

const AutoSlidesFooter = () => {
  const pathname = usePathname();
  return (
    <>
      <div className={`footer ${pathname.includes("/gist/") ? "!pt-0" : ""}`}>
        <div className="marquee">
          <div className="track">
            <div className="content">
              &nbsp;Fueled by <span className="gradiant">Passion.</span> Driven
              by <span className="gradiant">Skills.</span> Fueled by{" "}
              <span className="gradiant">Passion.</span> Driven by{" "}
              <span className="gradiant">Skills.</span> Fueled by{" "}
              <span className="gradiant">Passion.</span> &nbsp;Fueled by{" "}
              <span className="gradiant">Passion.</span> Driven by{" "}
              <span className="gradiant">Skills.</span> Fueled by{" "}
              <span className="gradiant">Passion.</span> Driven by{" "}
              <span className="gradiant">Skills.</span> Fueled by{" "}
              <span className="gradiant">Passion.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AutoSlidesFooter;
