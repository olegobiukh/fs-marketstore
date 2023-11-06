import React from "react";
import image from "../../assets/images/404.png";
import { useNavigate } from "react-router-dom";
import "./index.scss";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const redirect = () => {
    navigate("/");
  };
  return (
    <div className="notfound">
      <img className="notfound__image" src={image} alt="404" />
      <div className="notfound__right">
        <h1 className="notfound__title">
          Oops! Page
          <br />
          not found
        </h1>
        <p className="notfound__text">
          You must have picked the wrong door because I haven't been able to lay
          my eye on the page you've been searching for
        </p>
        <button className="notfound__button" onClick={redirect}>
          Back home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
