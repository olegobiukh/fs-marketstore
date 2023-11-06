import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./index.scss";

interface CatalogProps {
  view: number;
}

const Catalog: React.FC<CatalogProps> = ({ view }) => {
  const data = useSelector((state) => state.items.data);

  return (
    <div className={`catalog && catalog--${view}`}>
      {data &&
        data.map((item) => (
          <Link to={`/product/${item.id}`} key={item.id} className="item__link">
            <div
              key={item.id}
              className={`item${view === 1 ? " item--1" : ""}`}
            >
              <div className="item__image--wrapper">
                {item.sale ? (
                  <div className="item__sale">sale 50%</div>
                ) : null}

                <div
                  className={`item__image item__image--${view}`}
                  style={{ backgroundImage: `url(${item.image_path})` }}
                />
              </div>
              <div className={view === 1 ? " item__text" : ""}>
                <p
                  className={`item__title${
                    view === 1 ? " item__title--1" : ""
                  }`}
                >
                  {item.name}
                </p>
                <p
                  className={`item__price${
                    view === 1 ? " item__price--1" : ""
                  }`}
                >
                  Price: ${item.price}
                </p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Catalog;
