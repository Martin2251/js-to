import "./App.css";
import React, { useEffect, useState } from "react";

function Card() {
  return (
    <div>
      <h4>Data</h4>
      <p>data</p>
      <p> data</p>
    </div>
  );
}

function App() {
  const [listApi, setListApi] = useState([]);

  useEffect(function () {
    fetch("https://api.github.com/orgs/godaddy/repos")
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        setListApi(data.id);
      });
  }, []);
  return (
    <div className="App">
      {listApi.map(function (api) {
        return <Card api={api}></Card>;
      })}
    </div>
  );
}

export default App;
