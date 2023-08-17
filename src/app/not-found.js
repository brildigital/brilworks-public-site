"use client";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";

export default function NotFound({ error, reset }) {
  return (
    <div>
      <Header />
      <div className="flex align-middle justify-center md:pt-20 pt-18">
        <div className="flex-container">
          <div className="text-center">
            <h1 className="!pt-[90px] text-center">
              <span className="!text-[5rem] mr-2" id="digit1">
                4
              </span>
              <span className="!text-[5rem] m-2" id="digit2">
                0
              </span>
              <span className="!text-[5rem] ml-2" id="digit3">
                4
              </span>
            </h1>
            <h3 className="text-[3rem] pb-[3rem] text-center ">
              PAGE NOT FOUND
            </h3>
            <div className="md:pb-[4rem] pb-8">
              <div className="w-[30%] inline-flex justify-center align-middle p-3 rounded bg-black text-white">
                <button className="text-[18px]" onClick={() => reset()}>
                  Try again
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
