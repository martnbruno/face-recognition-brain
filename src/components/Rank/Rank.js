import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className="white f3 b mb">
        {`${name}, you already have successfully detected ${entries} faces!`}
      </div>
      <div className="white f3"></div>
    </div>
  );
};

export default Rank;
