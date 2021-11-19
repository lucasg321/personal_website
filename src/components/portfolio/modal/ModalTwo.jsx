import React from "react";

const ModalTwo = () => {
  return (
    <div className="popup_informations">
      <div className="image">
        <img src="img/thumbs/4-3.jpg" alt="" />
        <div
          className="main"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/service/2.jpg"
            })`,
          }}
        ></div>
      </div>
      {/* End big image */}

      <div className="description">
        <h3>Phyto - Web Application for Respira</h3>
        <p>
        Phyto is the web application that accompanies the Respira device. Each unit can be controlled on the device itself or
        via the web application. The web application allows simple data visualization and a better user experience. Phyto
        enables users to send commands to the Respira device, such as turning the fan, pump, or light, on or off. Additionally, it provides historic data
        in a graph format for easy data visualization.
        </p>
        <h3>Technical Work</h3>
        <p>
        Worked on Phyto from a full-stack perspective, however, with an emphasis on the backend. The bulk of the
        development on this application I completed involved allowing communication from the Front End of the application
        to each Respira device. Firebase, SQL, and Cloud Functions were used to facilitate this. Each time a control
        button (light, pump, fan) is pressed, it will send a request to a Cloud Function. The cloud function then routes
        the request to the appropriate device, whereby the Respira will receive and interpret the request.
        Additionally, Phyto reads the Respira's sensor data from an SQL database and displays it on a visually appealing graph.
        </p>
        <h3>Tech Stack</h3>
        <div className="in_list">
          <ul>
            <li>
              <p>Python</p>
            </li>
            <li>
              <p>Django</p>
            </li>
            <li>
              <p>JavaScript</p>
            </li>
            <li>
              <p>HTML</p>
            </li>
            <li>
              <p>CSS</p>
            </li>
            <li>
              <p>Firebase</p>
            </li>
            <li>
              <p>PostgreSQL</p>
            </li>
          </ul>
        </div>
        {/* End list */}
      </div>
      <div className="edina_tm_button">
      <a href="https://www.respira.ca/" className="color" target={"_blank"}>
        Phyto.ca
      </a>
    </div>
    </div>
  );
};

export default ModalTwo;
