"use client";

import Footer from "../components/Footer";
import Header from "../components/Header/Header";

export default function Error({ error, reset }) {
  return (
    <div>
      <Header />

      <div class="flex align-middle justify-center pt-20">
        <div class="flex-container">
          <div class="text-center">
            <h1 className="!pt-[90px] text-center">
              <span class="!text-[5rem] mr-2" id="digit1">
                4
              </span>
              <span class="!text-[5rem] m-2" id="digit2">
                0
              </span>
              <span class="!text-[5rem] ml-2" id="digit3">
                4
              </span>
            </h1>
            <h3 class="text-[3rem] pb-[3rem] text-center ">
              Something went wrong!
            </h3>
            <div className="w-[25%] inline-flex justify-center align-middle p-3 rounded bg-black text-white">
              <button className="text-[18px]" onClick={() => reset()}>
                Try again
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
