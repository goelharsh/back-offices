import React from "react";

const Loader = (props) => {
  const { loading } = props;
  return (
    <>
      {loading && (
        <div className="loader-outter">
          <div className="loader-inner">
            <div className="icon">
              <div className="outterCircle">
                <div className="innerCircle" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Loader;
