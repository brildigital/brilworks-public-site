"use client";
import React, { useState } from "react";
import Loader from "../Homepage/Loader";
import uuid4 from "uuid4";

const AIGenerateField = () => {
  const [productName, setProductName] = useState("");
  const [isValidProductName, setIsValidProductName] = useState(true);
  const [respMessage, setRespMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateCharacterLimit = (text) => {
    return typeof text === "string" && text.length <= 255;
  };

  const onChange = ({ target }) => {
    const text = target.value;
    setProductName(text);
    setIsValidProductName(validateCharacterLimit(text));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setRespMessage(
      "Please keep this page open while we are generating product"
    );

    console.log("object");

    try {
      const timestamp = new Date().toISOString();
      let chatId = uuid4();
      uuid4.valid(chatId);

      const newProduct = {
        chat_id: chatId,
        user_query: productName,
        timestamp: timestamp,
      };
      const response = await fetch(`https://devapi.swiftsupport.ai/api/prd`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      const data = await response.json();

      if (data?.chat_id) {
        const responseDocGeneration = await fetch(
          `https://devapi.swiftsupport.ai/api/document_generator`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              question: productName,
              chat_id: chatId,
            }),
          }
        );

        const docData = await responseDocGeneration.json();

        setProductName("");

        if (typeof window !== "undefined") {
          const redirectUrl = `https://prd-doc-generator.vercel.app/prd?chat=${data?.chat_id}`;
          window.open(redirectUrl, "_blank"); // Open new window
        }
        setRespMessage("Your response is submitted successfully.");
        setTimeout(() => {
          setRespMessage("");
        }, 5000);
      } else {
        setRespMessage("Something went wrong!");
      }
      setIsSubmitting(false);
    } catch (error) {
      console.error("Error getting response", error);
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form
        className="xl:w-[70%] w-full max-w-full relative"
        onSubmit={handleSubmit}
      >
        <input
          className={`border border-borderGray rounded-[50px] w-full md:h-16 h-14 text-base xl:pl-5 xl:pr-36 focus:outline-1 text-colorBlack ${
            isValidProductName ? "focus:outline-colorGray" : "border-red-500"
          }`}
          disabled={isSubmitting}
          type="text"
          onChange={onChange}
          placeholder="Describe your project or features, and let AI generate your PRD effortlessly..."
        />

        <button
          className={`disabled:bg-opacity-70 bg-themeColor text-base rounded-full text-colorWhite absolute xl:top-2 md:top-[28%] top-[11%] right-2 disabled:cursor-not-allowed cursor-pointer ${
            isSubmitting ? "py-2 md:px-16 px-8" : "py-3 md:px-[30px] px-5"
          }`}
          disabled={!productName || !isValidProductName || isSubmitting}
          type="submit"
        >
          {isSubmitting ? <Loader /> : "Generate"}
        </button>
      </form>
      {isSubmitting && (
        <span className="text-colorDarkBlue text-sm text-center bg-colorLightBlue py-2 px-4 mt-4 font-medium rounded-md">
          {respMessage}
        </span>
      )}
      {!isValidProductName && (
        <span className="xl:w-3/5 w-full max-w-full text-red-500 text-sm text-left pl-4">
          Please enter a valid URL.
        </span>
      )}
    </>
  );
};

export default AIGenerateField;
