import axios from "axios";
import React, { useState, useEffect } from "react";
import List from "./List";

const Search = () => {
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    let timerId = null;

    if (value) {
      timerId = setTimeout(async () => {
        const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
          params: {
            action: "query",
            list: "search",
            origin: "*",
            format: "json",
            srsearch: value
          }
        });

        setResults(data.query.search);
      }, 100);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [value]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <React.Fragment>
      <h1 className="data" style={{padding: "4rem 0 1.5rem", fontSize:"2.8rem",
  fontWeight: "900"}}>W i k i p e d i a</h1>
      <form className="ui form">
        <input
          style={{fontSize: "1.8rem"}}
          type="text"
          placeholder="Search Wikipedia..."
          value={value}
          onChange={handleChange}
          autoFocus="on"
        />
      </form>
      <List info={results} />
    </React.Fragment>
  );
};

export default Search;
