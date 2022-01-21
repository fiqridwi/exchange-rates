import "./App.css";
import React, { useEffect, useState } from "react";
import Tables from "../src/components/Tables";
import Footer from "./components/Footer";

function App() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(
      "https://api.currencyfreaks.com/latest?apikey=c9ea9da23fac4dc8bfa9a4fdb1b9237a "
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.rates);
        setList(data.rates);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <h1 style={{ margin: "5rem" }}>Loading...</h1>
      ) : (
        <Tables list={list} />
      )}
      <Footer />
    </div>
  );
}

export default App;
