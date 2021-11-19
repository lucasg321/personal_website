import React from "react";

const ModalThree = () => {
  return (
    <div className="popup_informations">
      <div className="image">
        <img src="img/thumbs/4-3.jpg" alt="" />
        <div
          className="main"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/service/3.jpg"
            })`,
          }}
        ></div>
      </div>
      {/* End big image */}

      <div className="description">
        <h3>Trader Journal - A Web Application for Tracking Financial Transactions</h3>
        <p>
          Trader Journal is a website that allows investors, daytraders, or anyone with an interest in stocks to track their
          transactions. The aim of the website is to let finance enthusiasts track their trades with the goal of finding out
          what is profitable for themselves. Automatically calculated statistics are shown on each user's profile based on
          the trades they have made. These will guide users into finding what their strengths and weaknesses are, so they can be successful.
        </p>
        <h3>Technical Work</h3>
        <p>
          A custom made front and back-end website. The back-end was made with Node, Express, and MongoDB, utilizing RESTful
          best practices with CRUD functionality. The front-end was made with HTML, CSS, Javascript and Bootstrap. Features include, user posts,
          comments, and user profiles. Node.js and Express were used for routing requests and returning data.
        </p>
        <h3>Tech Stack</h3>
        <div className="in_list">
          <ul>
            <li>
              <p>Node.js</p>
            </li>
            <li>
              <p>MongoDB</p>
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
              <p>Heroku</p>
            </li>
          </ul>
        </div>
        {/* End list */}
      </div>
      <div className="row">
      <div className="edina_tm_button">
        <a href="https://github.com/lucasg321/TraderJournal/" className="color" target={"_blank"}>
        GitHub
      </a>
    </div>
      <div className="gg edina_tm_button">
      <a href="https://still-beach-81054.herokuapp.com/" className="color" target={"_blank"}>
        TraderJournal.com
      </a>
    </div>
    </div>
    </div>
  );
};

export default ModalThree;
