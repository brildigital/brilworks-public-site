import "./privacypolicy.scss";
import parse from "html-react-parser";
import FetchDataSpinner from "../Homepage/FetchDataSpinner";

const ExpenifyTermsAndConditions = ({ data }) => {
  return (
    <section className="kinderland mt-[6rem] !mb-8 md:mx-[15px] w-full flex align-middle justify-center">
      <div className="md:w-4/5 w-full md:px-0 px-4">
        <div className="pb-4">
          <h1 className="md:!text-[3rem] !text-[2rem]  font-semibold">
            Expenify Terms and Conditions
          </h1>
        </div>
        {data ? (
          <div>{parse(data?.content?.content?.content)}</div>
        ) : (
          <div className="flex align-middle justify-center p-24">
            <FetchDataSpinner />
          </div>
        )}
      </div>
    </section>
  );
};

export default ExpenifyTermsAndConditions;
