const FetchDataSpinner = ({ size }) => {
  return (
    <div className={`flex w-full py-28 justify-center items-center ${size}`}>
      <div></div>
      <div className="loader">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default FetchDataSpinner;
