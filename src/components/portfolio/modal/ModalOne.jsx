import React from "react";

const ModalOne = () => {
  return (
    <div className="popup_informations">
      <div className="image">
        <img src="img/thumbs/4-3.jpg" alt="" />
        <div
          className="main"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/service/1.jpg"
            })`,
          }}
        ></div>
      </div>
      {/* End big image */}

      <div className="description">
        <h3>Respira - Air Purifier and Self Maintaining Garden</h3>
        <p>
        Fully automated in-home garden and air purifier. A hydroponic growing system utilizes a water pump to
        continuously and automatically water plants. A dosing system automatically adds nutrients to the water when
        the TDS in the water is low. The user simply has to refill the water basin every 2-3 weeks and replace the nutrient
        bags once every 6 months. Last but not least, the biophilic design exposes the root zones of the plants to
        purify air.
        </p>
        <h3>Technical Work</h3>
        <p>
        Developed the middleware integrations between the IoT device and the web application.
        This involved creating Cloud integrations with the Google Cloud Platform, notably, IoT Pub/Sub and Cloud Functions.
        An MQTT gateway is opened between each device and GCP, secured with an auto-refreshing JWT as well as public and private key
        pairs. The gateway can receive and send data from the device, where it will end up in GCP's IoT Pub/Sub.
        The Pub/Sub message is used as a trigger for a cloud function which then analyzes the packet and determines where to route the data.
        It is either routed into firebase for real-time updates, or stored in SQL for long-lasting data.
        </p>
        <h3>Tech Stack</h3>
        <div className="in_list">
          <ul>
            <li>
              <p>Python</p>
            </li>
            <li>
              <p>Linux/Bash/Shell Scripting</p>
            </li>
            <li>
              <p>GCP (SQL, IoT Core, Pub/Sub, Firebase, Cloud Functions, etc.)</p>
            </li>
            <li>
              <p>OBC: RPI 4b</p>
            </li>
          </ul>
        </div>
        {/* End list */}
      </div>
      <div className="edina_tm_button">
      <a href="https://www.respira.ca/" className="color" target={"_blank"}>
        Respira.ca
      </a>
    </div>
    </div>
  );
};

export default ModalOne;
