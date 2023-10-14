"use client";
import React, { useEffect, useState } from "react";
export default function List() {
  let products = ["Tomato", "Pasta", "Coconut"];
  let [volume, setVolume] = useState([0, 0, 0]);
  return (
    <div>
      <h2>Products</h2>
      {products.map((product, index) => {
        return (
          <div className="food" key={index}>
            <h4>{product} $40</h4>
            <span> {volume[index]} </span>
            <button
              onClick={() => {
                let newVolume = [...volume];
                newVolume[index]++;
                setVolume(newVolume);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                let newVolume = [...volume];
                newVolume[index]--;
                setVolume(newVolume);
              }}
            >
              -
            </button>
          </div>
        );
      })}
    </div>
  );
}
