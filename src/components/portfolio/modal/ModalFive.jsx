import React from "react";

const ModalFour = () => {
  return (
    <div className="popup_informations">
      <div className="image">
        <img src="img/thumbs/4-3.jpg" alt="" />
        <div
          className="main"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/service/5.png"
            })`,
          }}
        ></div>
      </div>
      {/* End big image */}

      <div className="description">
        <h3>Farmland Optimization - Drone LiDAR and Computer Vision</h3>
        <p>
          This project was conducted in a team of four. Our goal was to improve agricultural land use by providing
          fertility and topography mapping of farmland.
        </p>
        <h3>Technical Work</h3>
        <p>
          The image analysis portion of the project utilizes Python with numPy and OpenCV to analyse images taken from a drone. The
          pixels of each image are added to a matrix wherein the soil color/hue is compared to a database of over 300 samples of soil.
          This allows us to determine such things moisture and the fertility of the soil. On the hardware side, an ATmega328P microcontroller is used to
          connect a LiDAR sensor to an SD card and store distance and signal strength values while the drone is in flight. The distance values are
          then used to create a topographical view of the land. In combination, the soil fertility measurements and land
          topography will allow us to provide recommendations for land use in order to optimize crop yields.
        </p>
        <h3>Tech Stack</h3>
        <div className="in_list">
          <ul>
            <li>
              <p>Python</p>
            </li>
            <li>
              <p>OpenCV</p>
            </li>
            <li>
              <p>numPy</p>
            </li>
            <li>
              <p>ATmega328P</p>
            </li>
          </ul>
        </div>
        {/* End list */}
      </div>
      <div className="edina_tm_button">
        <a href="https://github.com/lucasg321/Capstone-Project--Image-Analysis-Python/" className="color" target={"_blank"}>
        GitHub
      </a>
    </div>
    </div>
  );
};

export default ModalFour;
