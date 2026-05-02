import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ReactDOM from "react-dom";

const SearchDropdown = ({ onSelect, onAdd }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://finnhub.io/api/v1/search", {
        params: { q: query, token: process.env.REACT_APP_SEARCH_API_KEY },
      });
      setResults(res.data.result || []);
      setShow(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!query || query.trim().length < 2) {
      setResults([]);
      setShow(false);
      return;
    }
    const delay = setTimeout(fetchData, 500);
    return () => clearTimeout(delay);
  }, [query]);

  const handleAddClick = (item) => {
    onAdd({ name: item.symbol });
    setQuery("");
    setShow(false);
  };

  const getDropdownStyle = () => {
    if (!inputRef.current) return {};
    const rect = inputRef.current.getBoundingClientRect();
    return {
      position: "absolute",
      top: rect.bottom + window.scrollY + 5,
      left: rect.left + window.scrollX,
      width: rect.width,
      zIndex: 9999,
    };
  };

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        className="search-input"
        placeholder="Search eg: TCS, INFY"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {show && ReactDOM.createPortal(
        <div className="dropdown" style={getDropdownStyle()}>
          <div className="results">
            {loading && <div className="no-results">Loading...</div>}
            {!loading && results.map((item, i) => (
              <div key={i} className="result-item">
                <div className="result-left" onClick={() => onSelect(item.symbol)}>
                  <span className="name">{item.description || item.symbol}</span>
                  <span className="tag">{item.type || "STOCK"}</span>
                </div>
                <button className="add-btn" onClick={() => handleAddClick(item)}>+ Add</button>
              </div>
            ))}
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default SearchDropdown;