"use client";

import Footer from "../components/Footer";
import Header from "../components/Header/Header";

export default function Error({ error, reset }) {
  return (
    <div>
      <Header />
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
      <Footer />
    </div>
  );
}
