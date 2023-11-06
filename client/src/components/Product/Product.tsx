import React, { useState, useEffect, useMemo } from "react";
import "./index.scss";

import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import Counter from "../Counter/Counter";

interface Item {
  id: number;
  name: string;
  description: string;
  image_path: string;
  price: number;
  sale: number;
}

const Product: React.FC = () => {
  const [item, setItem] = useState<Item | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const data = useSelector((state) => state.items.data);

  useEffect(() => {
    const numericId = parseInt(id, 10);
    const items = data.filter((item) => item.id === numericId);

    console.log(items.length);

    const changeRoute = () => {
      if (items.length === 0) {
        navigate("/-1");
      }
    };

    const timerId = setTimeout(() => {
      changeRoute();
    }, 1500);

    setItem(items[0]);

    return () => clearTimeout(timerId);
  }, [data]);

  const MCounter = useMemo(() => React.memo(Counter), []);

  return item ? (
    <>
      <div className="product__left">
        <div className="product__items">
          <div className="product__item"></div>
        </div>
        <div className="product__image-wrapper">
          <div
            className="product__image"
            style={{ backgroundImage: `url(${item.image_path})` }}
          ></div>
        </div>
      </div>
      <div className="product__info">
        <h2 className="product__title">{item.name}</h2>
        <p className="product__text">{item.description}</p>

        <p className="product-price">
          <span className="product-price__real">${item.price}</span>
          {item.sale ? (
            <s className="product-price__sell">${item.price / 2}</s>
          ) : null}
        </p>
        <MCounter />
      </div>
    </>
  ) : null;
};

export default Product;
