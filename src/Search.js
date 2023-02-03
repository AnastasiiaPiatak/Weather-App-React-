import React from "react";
import "./Weather.css";

export default function Search(props) {
  

  return (
    <div className="Search">
    <form >
      <input
        type="search"
        placeholder="Another location"
        
      />
      <input type="submit" value="🔍" />
    </form>
    </div>
  );
}
