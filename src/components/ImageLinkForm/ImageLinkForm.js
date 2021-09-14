import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f3 b white">
        This Face Detector will recognize faces on images from the Web. <br /> <br />
        1. Add the url of an image with a face into the form. <br />{" "}
        <br /> 2. Click on the "Detect" button and wait for detection! <br />{" "}
        <br /> 3. You will see the amount of detected faces below.
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={onInputChange}
            placeholder="Add an image's URL..."
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
