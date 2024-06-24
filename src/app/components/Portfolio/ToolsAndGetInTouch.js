import Image from "next/image";

const ToolsAndGetInTouch = () => {
  return (
    <div className="service_width reveal">
      <div className="sec6_work xl:py-[6rem] md:py-[4rem] py-[2rem]">
        <div className="end-To-end">
          <div className="md:text-center text-start home_sec2_txt3">
            <p className="md:!w-[75%] !w-full font-bold !leading-tight">
              TOOLS WE USE TO MANAGE <br />
              <span className="text-themeColor">OUR WORKFLOW</span>
            </p>
          </div>
        </div>
        <div className="jira_icon_flex">
          <div className="icon_logo">
            <div className="jira_icon_img">
              <Image
                className="alignnone"
                src="/images/jira.png"
                alt="jira"
                width="90"
                height="90"
              />
            </div>
            <div className="jira_textTitle service_title">
              <p>Jira</p>
            </div>
          </div>
          <div className="icon_logo">
            <div className="jira_icon_img">
              <Image
                className="alignnone"
                src="/images/gitHub.png"
                alt="GitHub"
                width="90"
                height="90"
              />
            </div>
            <div className="jira_textTitle service_title">
              <p>GitHub</p>
            </div>
          </div>
          <div className="icon_logo">
            <div className="jira_icon_img">
              <Image
                className="alignnone"
                src="/images/miro.png"
                alt="Miro"
                width="90"
                height="90"
              />
            </div>
            <div className="jira_textTitle service_title">
              <p>Miro</p>
            </div>
          </div>
          <div className="icon_logo">
            <div className="jira_icon_img">
              <Image
                className="alignnone"
                src="/images/Google-Meet.png"
                alt="Google Meet"
                width="90"
                height="90"
              />
            </div>
            <div className="jira_textTitle service_title">
              <p>Google Meet</p>
            </div>
          </div>
          <div className="icon_logo">
            <div className="jira_icon_img">
              <Image
                className="alignnone"
                src="/images/slack.png"
                alt="Slack"
                width="90"
                height="90"
              />
            </div>
            <div className="jira_textTitle service_title">
              <p>Slack</p>
            </div>
          </div>
          <div className="icon_logo">
            <div className="jira_icon_img">
              <Image
                className="alignnone"
                src="/images/confluence.png"
                alt="Confluence"
                width="90"
                height="90"
              />
            </div>
            <div className="jira_textTitle service_title">
              <p>Confluence</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsAndGetInTouch;
