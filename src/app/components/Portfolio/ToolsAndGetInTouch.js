import Image from "next/image";
import Heading from "../HTMLComponents/Heading";

const ToolsAndGetInTouch = () => {
  const toolsData = [
    {
      title: "Jira",
      imageSrc: "/images/v2/jira-icon.png",
      className: "lg:w-[100px] md:w-[80px] w-[60px]",
    },
    {
      title: "GitHub",
      imageSrc: "/images/v2/github-icon.png",
      className: "lg:w-[110px] md:w-[85px] w-[65px]",
    },
    {
      title: "Miro",
      imageSrc: "/images/v2/miro-icon.png",
      className: "lg:w-[100px] md:w-[80px] w-[60px]",
    },
    {
      title: "Google Meet",
      imageSrc: "/images/v2/google-meet.png",
      className: "lg:w-[110px] md:w-[90px] w-[70px]",
    },
  ];
  return (
    <div className="container max-w-[1280px] mx-auto main-section-padding">
      <Heading
        type="h2"
        className="lg:!text-[34px] md:!text-3xl !text-2xl"
        text="Tools We Use to Manage Our Workflow"
      />
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4 lg:pt-10 md:pt-8 pt-5">
        {toolsData.map(({ title, imageSrc, className }) => (
          <div
            key={title}
            className="border max-w-[270px] lg:w-[270px] lg:h-[270px] max-h-[270px] flex flex-col items-center justify-center rounded-2xl lg:py-10 md:py-7.5 py-5"
          >
            <Image
              className={className}
              src={imageSrc}
              width={100}
              height={100}
              alt={`${title}-icon`}
            />
            <p className="md:text-lg text-base font-medium pt-5">{title}</p>
          </div>
        ))}
      </div>
    </div>
    // <div className="service_width reveal">
    //   <div className="sec6_work xl:py-[6rem] md:py-[4rem] py-[2rem]">
    //     <div className="end-To-end">
    //       <div className="md:text-center text-start home_sec2_txt3">
    //         <p className="md:!w-[75%] !w-full font-bold !leading-tight">
    //           TOOLS WE USE TO MANAGE <br />
    //           <span className="text-themeColor">OUR WORKFLOW</span>
    //         </p>
    //       </div>
    //     </div>
    //     <div className="jira_icon_flex">
    //       <div className="icon_logo">
    //         <div className="jira_icon_img">
    //           <Image
    //             className="alignnone"
    //             src="/images/jira.png"
    //             alt="jira"
    //             width="90"
    //             height="90"
    //           />
    //         </div>
    //         <div className="jira_textTitle service_title">
    //           <p>Jira</p>
    //         </div>
    //       </div>
    //       <div className="icon_logo">
    //         <div className="jira_icon_img">
    //           <Image
    //             className="alignnone"
    //             src="/images/gitHub.png"
    //             alt="GitHub"
    //             width="90"
    //             height="90"
    //           />
    //         </div>
    //         <div className="jira_textTitle service_title">
    //           <p>GitHub</p>
    //         </div>
    //       </div>
    //       <div className="icon_logo">
    //         <div className="jira_icon_img">
    //           <Image
    //             className="alignnone"
    //             src="/images/miro.png"
    //             alt="Miro"
    //             width="90"
    //             height="90"
    //           />
    //         </div>
    //         <div className="jira_textTitle service_title">
    //           <p>Miro</p>
    //         </div>
    //       </div>
    //       <div className="icon_logo">
    //         <div className="jira_icon_img">
    //           <Image
    //             className="alignnone"
    //             src="/images/Google-Meet.png"
    //             alt="Google Meet"
    //             width="90"
    //             height="90"
    //           />
    //         </div>
    //         <div className="jira_textTitle service_title">
    //           <p>Google Meet</p>
    //         </div>
    //       </div>
    //       <div className="icon_logo">
    //         <div className="jira_icon_img">
    //           <Image
    //             className="alignnone"
    //             src="/images/slack.png"
    //             alt="Slack"
    //             width="90"
    //             height="90"
    //           />
    //         </div>
    //         <div className="jira_textTitle service_title">
    //           <p>Slack</p>
    //         </div>
    //       </div>
    //       <div className="icon_logo">
    //         <div className="jira_icon_img">
    //           <Image
    //             className="alignnone"
    //             src="/images/confluence.png"
    //             alt="Confluence"
    //             width="90"
    //             height="90"
    //           />
    //         </div>
    //         <div className="jira_textTitle service_title">
    //           <p>Confluence</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ToolsAndGetInTouch;
