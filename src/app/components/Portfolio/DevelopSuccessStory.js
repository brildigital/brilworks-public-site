import React from "react";
import Button from "../Common/Button";

const DevelopSuccessStory = () => {
  return (
    <div className="bg-sectionBG">
      <div className="container mx-auto">
        <div className="xl:!p-16 md:!py-12 !py-8 md:px-8 px-4 reveal">
          <h2 className="md:text-center text-start font-bold xl:text-3xl text-2xl mb-4">
            Ready to develop your success story with us?
          </h2>
          <p className="md:text-center text-start md:text-xl text-lg !mb-14">
            Tell us your project idea and get a free consultation to create an
            outstanding digital product.
          </p>
          <div className="flex items-center md:!justify-center !justify-start">
            <Button
              innerClassName="flex items-center justify-center gap-2"
              label="Let's Discuss"
              icon="right-arrow-next"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopSuccessStory;
