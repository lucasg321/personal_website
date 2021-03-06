import React from "react";

const skillsContent = [
  {
    name: "Python",
    skillPercent: "95",
  },
  {
    name: "Django",
    skillPercent: "95",
  },
  {
    name: "JavaScript",
    skillPercent: "90",
  },
  {
    name: "Angular",
    skillPercent: "90",
  },
  {
    name: "AWS & GCP",
    skillPercent: "85",
  },
  {
    name: "Linux/Shell/Bash Scripting",
    skillPercent: "85",
  },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="progress_inner" key={i}>
          <span className="label">{val.name}</span>
          <div className="background">
            <div className="bar">
              <div
                className="bar_in"
                style={{ width: val.skillPercent + "%" }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
