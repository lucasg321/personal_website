import React from "react";

const experienceContent = [
  {
    year: "   2021 - Present",
    position: "Intermediate Software Developer",
    companyName: "Nu Terra Labs",
    details: `Founding developer of NTL. Maintained and developed various projects for clients. Notably, the Respira 
    IoT device and its infrastructure. Additionally, developed various Full Stack applications primarily using Django, 
    Angular and GCP.`,
  },
  {
    year: "   2021 - Present",
    position: "Full Stack Developer",
    companyName: "Homework Help Global - Part Time",
    details: `Developed new features for their CMS to improve workflow efficiency. Resolved issues as they arose. Developed 
    in Python/Django and hosted on AWS.`,
  },
  {
    year: "2020 - 2021",
    position: "Full Stack Developer",
    companyName: "New Earth Solutions",
    details: `Researched and developed cloud based solutions to enable an IoT device
    (Respira) to communicate with a web application. Also developed multiple Full Stack websites spanning from web 
    applications to ecommerce websites. Python, Django and Angular were used extensively for web development. Python 
    and Bash scripting was used for IoT development. The projects were all deployed on GCP using such features as, SQL,
    IoT Core, Pub/Sub, Firebase, IAM and Secret Manager, and Cloud Functions.`,
  },
  {
    year: "2020 - 2020",
    position: "Back End Developer",
    companyName: "Quanta Vici",
    details: `Worked with the CTO to design, develop, document and deploy an API for Quanta Vici’s
     back-end to be used on mobile and web platforms. Used the following tech stack: Python, Django, PostgreSQL, AWS,
     BitBucket, Git.`,
  },
  {
    year: "2018 - 2019",
    position: "Software Integration Engineer Intern",
    companyName: "Avaya",
    details: `Tested enterprise level and cloud-based telephony software. Streamlined the
    software development process by automating testing/integration and creating pipelines. Utilized C# and Ranorex as 
    well as Python and Git to automate test cases and setup pipelines.`,
  },
  {
    year: "2017 - 2017",
    position: "Engineering Intern",
    companyName: "Mars Inc",
    details: `Developed a Windows application to display key statistics from machines in the
    manufacturing plant into the main office. Developed the software using C#, MySQL, and the .NET Framework.`,
  },
  {
    year: "2016 - 2016",
    position: "Engineering Intern",
    companyName: "Mars Inc",
    details: ` Developed a scheduling algorithm to reduce manufacturing downtime
    from SKU changeovers, ultimately reducing inefficiencies in the supply chain process.
    The algorithm was developed in C and a UI was made with .NET/Win Forms.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <img src="img/about/briefcase.png" alt="icon" />
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.companyName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
