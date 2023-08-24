import Link from "next/link";

const Kinderland = () => {
  return (
    <section className="kinderland mt-[6rem] mx-[15px] w-full flex align-middle justify-center">
      <div className="w-4/5">
        <div className="pb-4">
          <h1 className="md:!text-[3rem] font-semibold">Privacy Policy</h1>
        </div>
        <div className="privacy-policy">
          <p className="mb-3 ">Effective Date: 24 Jul 2023</p>
          <p>
            Welcome to Kinderland, a game app created by Brilworks! We are
            committed to providing a safe and enjoyable experience for children.
            This Privacy Policy outlines how we handle data associated with our
            app, as well as our Terms of Use. By using Kinderland, you agree to
            the practices described in this policy.
          </p>
          <h2 className="font-semibold text-[1.5rem] py-3">Privacy Policy:</h2>
          <ol>
            <li>No Collection of Personal Information:</li>
            <p>
              Brilworks' Kinderland does not collect any personally identifiable
              information (PII) from its users, especially children. We do not
              ask for names, emails, addresses, or any other personal
              information.
            </p>

            <li>No Tracking or Analytics:</li>
            <p>
              We do not employ any tracking or analytics tools that collect data
              about individual users or their behavior within the app.
            </p>

            <li>No In-App Purchases or Advertisements:</li>
            <p>
              Kinderland does not contain any in-app purchases or third-party
              advertisements. Your child can enjoy a completely ad-free and safe
              learning environment.
            </p>

            <li>Anonymous Usage Data:</li>
            <p>
              To improve our app's performance and user experience, we may
              collect anonymous usage data, such as crash reports or general
              statistics. This data is completely anonymized and does not
              contain any personal information.
            </p>
            <li>COPPA Compliance:</li>
            <p>
              We are fully committed to complying with the Children's Online
              Privacy Protection Act (COPPA) and do not knowingly collect any
              personal information from children under the age of 13.
            </p>
          </ol>
        </div>

        <div className="pt-[2rem]">
          <p className="text-[1.5rem] pb-4">
            For more information about our partners’ practices, kindly visit the
            following links:
          </p>
          <p>
            <Link
              className="!underline hover:bg-gray-200 hover:!underline italic text-xl"
              href="https://policies.google.com/technologies/partner-sites/"
            >
              https://policies.google.com/technologies/partner-sites
            </Link>
            <br />
            <Link
              className="!underline hover:bg-gray-200 hover:!underline italic text-xl"
              href="https://policies.google.com/privacy"
            >
              https://policies.google.com/privacy
            </Link>
            <br />
            <Link
              className="!underline hover:bg-gray-200 hover:!underline italic text-xl"
              href="https://cocos2d-x.org/privacy_policy"
            >
              https://cocos2d-x.org/privacy_policy
            </Link>
            <br />
            <Link
              className="!underline hover:bg-gray-200 hover:!underline italic text-xl"
              href="https://download.cocos.com/CocosUdc/agreement/Cocos_Privacy_Policy_en_20200904.html"
            >
              https://download.cocos.com/CocosUdc/agreement/Cocos_Privacy_Policy_en_20200904.html
            </Link>
            <br />
          </p>
        </div>

        <div className="terms-of-use pt-[2rem]">
          <h2 className="font-semibold text-[1.5rem] py-3">Terms of Use</h2>
          <p className="mb-2">
            By using Kinderland, you agree to the following terms:
          </p>
          <ol>
            <li>Appropriate Usage:</li>
            <p>
              You agree to use Kinderland only for its intended purposes and in
              compliance with all applicable laws and regulations.
            </p>
            <li>Intellectual Property:</li>
            <p>
              {" "}
              All content, designs, and intellectual property associated with
              Kinderland are the property of Brilworks and protected by
              copyright and other intellectual property laws.
            </p>
            <li>Modifications to the App:</li>
            <p>
              We reserve the right to update, modify, or discontinue Kinderland
              or any part of it at any time without prior notice.
            </p>
            <l1>Third-Party Content:</l1>
            <p>
              Kinderland may contain links to third-party websites or content.
              We are not responsible for the content or privacy practices of
              such third parties.
            </p>
            <li>Indemnification:</li>
            <p>
              You agree to indemnify and hold harmless Brilworks from any
              claims, damages, or liabilities arising from your use of
              Kinderland.
            </p>

            <li>Changes to the Privacy Policy and Terms of Use:</li>
            <p>
              We may update our Privacy Policy and Terms of Use from time to
              time. Any significant changes will be communicated through the app
              or by other means.
            </p>
          </ol>
        </div>
        <div className="pt-[2rem]">
          <h2 className="font-semibold text-[1.5rem] py-3">Contact Us</h2>
          <p>
            {" "}
            If you have any questions or concerns about our Privacy Policy or
            Terms of Use, please contact us at <b>contact@brilworks.com</b>.
            <br />
            Thank you for using Kinderland. We hope you enjoy the game!
          </p>
        </div>
        <div className="pt-[2rem]">
          <h2 className="font-semibold text-[1.5rem] py-3">
            Brilworks Software
          </h2>
          <Link
            className="!underline hover:bg-gray-200 hover:!underline italic text-xl"
            href="https://www.brilworks.com/"
          >
            https://www.brilworks.com/
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Kinderland;
