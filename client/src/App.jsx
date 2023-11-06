import React, { useEffect, useState } from "react";

import "./assets/styles/main.scss";
import Product from "./components/Product/Product";
import Header from "./components/Header/Header";
import Catalog from "./components/Catalog/Catalog";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchData } from "./redux/slice";
import NotFound from "./components/NotFound/NotFound";

export const App: React.FC = () => {
  const dispatch = useDispatch();
  const [view, setView] = useState(3);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="page">
      <Router>
        <div>
          <Header view={view} handleView={setView} />
          <main className="main">
            <Routes>
              <Route path="/" element={<Catalog view={view} />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path='*' element={<NotFound />}/>
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
};
