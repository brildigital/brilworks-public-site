import Image from "next/image";
import Link from "next/link";

const ToolsAndGetInTouch = () => {
  return (
    <div className="service_width reveal">
      <div className="">
        <div className="sec6_work work_padding xl:pt-[6rem] md:pt-[4rem] pt-[2rem]">
          <div className="end-To-end">
            <div className="endTO_text home_sec2_txt3">
              <p className="md:!w-[75%] !w-full font-bold">
                TOOLS WE USE TO MANAGE OUR WORKFLOW
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
                <p className="ng-binding">Jira</p>
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
                <p className="ng-binding">GitHub</p>
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
                <p className="ng-binding">Miro</p>
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
                <p className="ng-binding">Google Meet</p>
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
                <p className="ng-binding">Slack</p>
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
                <p className="ng-binding">Confluence</p>
              </div>
            </div>
          </div>
          <div className="xl:!pt-[6rem] md:!pt-[4rem] !pt-[2rem] reveal">
            <div className="ready_img relative">
              <p>
                <img
                  decoding="async"
                  loading="lazy"
                  className="ready_main web_img alignnone"
                  src="/images/ready.png"
                  alt="get in touch"
                />
                <img
                  decoding="async"
                  loading="lazy"
                  className="mobile_img border_redius20 alignnone"
                  src="/images/ready-mobile.webp"
                  alt="get in touch"
                />
              </p>
              <div className="redy_title home_sec2_txt3">
                <p className="!w-full font-bold">
                  READY TO DEVELOP YOUR SUCCESS STORY WITH US?
                </p>
              </div>
              <div className="get_touch">
                <div className="get_flex ml-14">
                  <div className="get_icon">
                    <Link href="/contact-us/">
                      <img
                        decoding="async"
                        loading="lazy"
                        className="alignnone"
                        src="/images/right_arrow.png"
                        alt="right arrow"
                      />
                    </Link>
                  </div>
                  <div className="get_text">
                    <p>
                      <Link href="/contact-us/">Get in Touch</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsAndGetInTouch;
