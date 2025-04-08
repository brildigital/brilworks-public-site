import Image from "next/image";
import React from "react";

const KeyOutcomes = () => {
  return (
    <div className="bg-sectionBG main-section-padding">
      <div className="container max-w-[1280px] mx-auto">
        <div className="flex items-center justify-between lg:flex-row flex-col lg:gap-10 md:gap-8 gap-5">
          <div className="lg:basis-2/5">
            <Image
              src="/images/key-outcomes.webp"
              width="560"
              height="426"
              alt="key-outcome-img"
            />
          </div>
          <div className="lg:basis-3/5">
            <h2 className="font-bold 2xl:text-4xl xl:text-3xl lg:text-3xl text-xl !leading-tight mb-5">
              Key
              <span className="text-themeColor"> Outcomes</span>
            </h2>
            <ol className="list-outside list-decimal pl-6 lg:w-11/12 w-full">
              <li className="text-xl font-bold mb-2">
                Smart Alert:&nbsp;
                <span className="text-colorGray font-normal">
                  Receive alerts by text, email, and app notifications for
                  emergency events, safety zone breach, speed thresholds and
                  sudden movement.
                </span>
              </li>
              <li className="text-xl font-bold mb-2">
                Worldwide Coverage: &nbsp;
                <span className="text-colorGray font-normal">
                  Trackimo devices can be tracked via web or smartphone app
                  anywhere GSM cellular reception exists.
                </span>
              </li>
              <li className="text-xl font-bold mb-2">
                Real Time Tracking:&nbsp;
                <span className="text-colorGray font-normal">
                  GPS and GSM connections provide instant, highly accurate
                  current location and history
                </span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyOutcomes;
