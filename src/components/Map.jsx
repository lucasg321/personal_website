import React from "react";

const Map = () => {
  return (
    <>
      <div className="google-map">
        <iframe
          className="embed-responsive-item"
          title="My Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54916.57018666722!2d-79.44575922557095!3d43.66487904566573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1637210906821!5m2!1sen!2sca"
        ></iframe>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;
