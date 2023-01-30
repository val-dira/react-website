import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route, json } from "react-router-dom";
import Home from "./Components/pages/Home";
import SignUp from "./Components/pages/SignUp";
import Products from "./Components/pages/Products";
import Services from "./Components/pages/Services";
import Favourite from "./Components/pages/Favourite";

function App() {
  const [favourites, setFavourites] = useState(
    JSON.parse(localStorage.getItem("Favourites"))
  );
  useEffect(() => {
    // localStorage.setItem("Favourites", JSON.stringify([]));
    if (localStorage.getItem("Favourites") == null) {
      localStorage.setItem("Favourites", JSON.stringify([]));
    } else {
      setFavourites(JSON.parse(localStorage.getItem("Favourites")));
      console.log(favourites);
    }
  }, []);

  // useEffect(() => {
  //   // localStorage.setItem("Favourites", JSON.stringify([]));
  //   setFavourites(JSON.parse(localStorage.getItem("Favourites")));
  // }, [favourites?.length]);

  return (
    <>
      <BrowserRouter>
        <Navbar favourites={favourites} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                favourites={favourites}
                setFavourites={(data) => setFavourites(data)}
              />
            }
          />
          <Route path="services" element={<Services />} />
          <Route path="products" element={<Products />} />
          <Route
            path="favourite"
            element={
              <Favourite
                favourites={favourites}
                setFavourites={(data) => {
                  setFavourites(data);
                }}
              />
            }
          />
          <Route path="sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
