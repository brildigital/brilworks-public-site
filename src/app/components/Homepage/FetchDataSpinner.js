const FetchDataSpinner = ({ size }) => {
  return (
    <div style={{ color: "#1a1a1a" }} className={`la-ball-clip-rotate ${size}`}>
      <div></div>
    </div>
  );
};

export default FetchDataSpinner;
