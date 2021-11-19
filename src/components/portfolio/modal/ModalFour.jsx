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
              process.env.PUBLIC_URL + "img/service/4.gif"
            })`,
          }}
        ></div>
      </div>
      {/* End big image */}

      <div className="description">
        <h3>Fly and Search AR - Mobile Game</h3>
        <p>
          The functionality of the game is as follows: the app takes the users camera input and imposes an avatar over it. The user
          must control their avatar with a joystick for x and y plane movements, and a slider for z plane movements. One coin
          object will spawn at a time. The user must pan their camera around to find the object. Once you find the coin, navigate
          your avatar to capture it. But be careful, because you only have a limited amount of time! Capturing a coin will increment
          your score and increase the time limit by 15 seconds. Capture as many coins as you can before the time runs out!
        </p>
        <h3>Technical Work</h3>
        <p>
          Unity was used for object and model design as well as the central game engine. Google ARCore and its additional Unity objects were used to
          enable camera capture to create the game world. In combination, these two platforms were responsible for displaying the game objects
          and environment via camera capture from the users mobile device. C# scripts were used to enable interactions between game objects, as
          well as for score and time keeping.
        </p>
        <h3>Tech Stack</h3>
        <div className="in_list">
          <ul>
            <li>
              <p>Unity</p>
            </li>
            <li>
              <p>C#</p>
            </li>
            <li>
              <p>Google ARCore</p>
            </li>
            <li>
              <p>Android</p>
            </li>
            <li>
              <p>iOs</p>
            </li>
          </ul>
        </div>
        {/* End list */}
      </div>
      <div className="edina_tm_button">
        <a href="https://github.com/lucasg321/AR-Fly-And-Search/" className="color" target={"_blank"}>
        GitHub
      </a>
    </div>
    </div>
  );
};

export default ModalFour;
