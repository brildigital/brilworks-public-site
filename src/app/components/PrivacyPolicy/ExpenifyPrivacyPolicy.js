"use client"
import parse from "html-react-parser";
import FetchDataSpinner from "../Homepage/FetchDataSpinner";
import { useEffect, useState } from "react";

const ExpenifyPrivacyPolicy = ({ data }) => {
  const [content, setContent] = useState('');
  useEffect(() => {
    if (data?.content?.content?.content) {
      const newData = data.content.content.content;

      const processedContent = newData.split('<strong>').map((section, index) => {
        if (index === 0) return section; // First part doesn't need <strong> tag
        if (section.includes("Account Deletion")) {
          return `<strong id='account-deletion'>${section}`;
        } else {
          return `<strong>${section}`;
        }
      }).join("");

      setContent(processedContent);
    }
  }, [data]);

  useEffect(()=>{

     if(window.location.href.includes('account-deletion')){
      setTimeout(()=>{
        document.getElementById("account-deletion")?.scrollIntoView({
          behavior: 'smooth',
        
         })
      },500)
  
      
     }
  },[])

  return (
    <section className="kinderland healthvault mt-[6rem] !mb-8 md:mx-[15px] w-full flex align-middle justify-center ">
      <div className="md:w-4/5 w-full md:px-0 px-4 min-h-[100vh] ">
        <div className="pb-4">
          <h1 className="md:!text-[3rem] !text-[2rem]  font-semibold">
            ExpenseFlow Privacy Policy
          </h1>
        </div>
        
        {data ? (
          <div className=" scroll-pt-5">{parse(content)}</div> 
        ) : (
          <div className="flex align-middle justify-center p-24">
            <FetchDataSpinner />
          </div>
        )}
      </div>
    </section>
  );
};

export default ExpenifyPrivacyPolicy;