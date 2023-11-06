import { useNavigate, useLocation } from "react-router-dom";
import "./index.scss";
import imgArrow from "../../assets/images/icons/arrow.svg";
import { useEffect, useState } from "react";

interface HeaderProps {
  view: number;
  handleView: React.Dispatch<React.SetStateAction<number>>;
}

const Header: React.FC<HeaderProps> = ({ view, handleView }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentRoute, setCurrentRoute] = useState(0);

  useEffect(() => {
    if (location.pathname.includes("/product/")) {
      const strNumber = location.pathname.replace("/product/", "");
      const number = parseInt(strNumber, 10);

      setCurrentRoute(number);
    } else if (location.pathname === "/") {
      setCurrentRoute(0);
    } else {
      setCurrentRoute(-1);
    }
  }, [location.pathname]);

  const iconsData = [
    { id: 1, name: "icon--1" },
    { id: 2, name: "icon--2" },
    { id: 3, name: "icon--3" },
    { id: "fullscreen", name: "icon--fullscreen" },
    { id: "cart", name: "icon--cart" },
  ];

  const goBack = () => {
    navigate("/");
  };

  return currentRoute >= 0 ? (
    <div className="header">
      {currentRoute > 0 ? (
        <button className="button header__button" onClick={goBack}>
          <img className="header__button-icon" src={imgArrow} alt="back" /> Back
          to shop
        </button>
      ) : null}
      <div className="icons">
        {!currentRoute ? (
          <div className="icons__left">
            {iconsData.slice(0, 3).map((iconData) => (
              <div
                key={iconData.id}
                onClick={() => handleView(iconData.id)}
                className={`button icon__wrapper ${
                  view === iconData.id ? "icon__wrapper--active" : ""
                }`}
              >
                <div className={`icon ${iconData.name}`}></div>
              </div>
            ))}
          </div>
        ) : null}
        {currentRoute > 0 ? (
          <div className={`button icon__wrapper ${view === 2 ? "active" : ""}`}>
            <div className={`icon icon--fullscreen`}></div>
          </div>
        ) : null}
        <div className={`button icon__wrapper ${view === 2 ? "active" : ""}`}>
          <div className={`icon icon--cart`}></div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Header;
