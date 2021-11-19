import React from "react";
import Achievements from "../Achievements";
import PersonalInfo from "../PersonalInfo";
import Experience from "../Experience";
import Education from "../Education";

const ModalContent = () => {
  return (
    <>
      <div className="row resume-box">
        <div className="col-12">
          <h3>Experience</h3>
          <Experience />
        </div>
        {/* End  Experience */}

        <div className="col-12">
          <h3>Education</h3>
          <Education />
          <div className="edina_tm_button">
            <a href="LucasGigliozzi-Resume.pdf" download className="color">
              Download CV
            </a>
          </div>
        </div>
        {/* End  Education */}
      </div>
    </>
  );
};

export default ModalContent;
