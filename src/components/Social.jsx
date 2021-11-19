import React from "react";
import {
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

const SocialShare = [
  { iconName: <FiGithub />, link: "https://github.com/lucasg321/" },
  {
    iconName: <FiLinkedin />,
    link: "https://www.linkedin.com/in/lucas-gigliozzi-093159127/",
  },
];
const Social = () => {
  return (
    <ul>
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            {val.iconName}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
