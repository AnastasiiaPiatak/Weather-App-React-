import React from "react";
import "./Weather";


export default function Search(){
    return (
      <form >
        <input type="search" placeholder="Another location"/>
        <input type="submit" value="🔍" />
      </form>
    );
}