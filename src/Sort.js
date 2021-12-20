import React from "react";
import { useEffect, useState } from "react";
const Sort = () => {
  const [elements, setElements] = useState([]);
  let array = [];

  const elArray = document.getElementById("slider");
  const speedSlider = document.getElementById("speed");

  const genRandomNum = () => {
    return Math.floor(Math.random() * 500) + 20;
  };

  const generateElements = (input) => {
    for (let i = 0; i < input; i++) {
      setElements((oldElements) => [...oldElements, genRandomNum()]);
    }
  };

  //Pri pritisku dugmeta zovemo startSort funkcicomparingElementu kocomparingElementa arrayu
  //za mencomparingElementacomparingElemente pridacomparingElemente startni array u useState, ta funkcicomparingElementa pozove
  //funkcicomparingElementu innerSort kocomparingElementa prodcomparingElemente kroz ostatak niza uporedi sa el.
  //kocomparingElementi comparingElemente passovan od strane startSort-mainElement
  //innerSort uporedi el. iz startSorta sa ostatkom niza

  const switchArrayElements = (mainElement, b) => {
    document.getElementById(mainElement).style.backgroundColor = "red";
    //color the element that is about to switch to red (the one that we found)
    setTimeout(() => {
      [array[mainElement], array[b]] = [array[b], array[mainElement]];
      setElements([...array]);
      document.getElementById(mainElement).style.backgroundColor = "#61dafb";
      //color the red element back to its original color
    }, 40);
  };

  const innerSort = (inputElement) => {
    let mainElement = inputElement;
    let comparingElement = mainElement + 1;
    //set the sorting numbers
    setTimeout(() => {
      document.getElementById(inputElement).style.backgroundColor = "#beff00";
    }, speedSlider.value * elArray.value + 100);
    //styling after every iteration
    if (comparingElement > elArray.value - 1) return;
    //check if the main comparing element is the last one
    const sort = setInterval(function () {
      if (comparingElement == elArray.value) {
        document.getElementById(elArray.value - 1).style.backgroundColor =
          "#247bff";
        clearInterval(sort);
        //stop comparing if its the last element
        if (inputElement != mainElement)
          switchArrayElements(mainElement, inputElement);
        return;
      }
      if (array[mainElement] > array[comparingElement]) {
        mainElement = comparingElement;
      }
      //selection sort check
      document.getElementById(comparingElement++).style.backgroundColor =
        "#247bff";
      //color the "scanning" line
      document.getElementById(inputElement).style.backgroundColor = "#95c700";
      //color the current main comparing element
      setTimeout(function () {
        document.getElementById(comparingElement - 1).style.backgroundColor =
          "#61DAFB";
        //undo the coloring made by the "scanning line"
        document.getElementById(elArray.value - 1).style.backgroundColor =
          "#61DAFB";
        //fixes the bug that doesnt color the last element
      }, speedSlider.value - 3); //timer for the "after-check" coloring - has to be lower than the counter below
    }, speedSlider.value);
    //do 1 "lesser" comparison in x ms
  };
  const startSort = () => {
    array = [...elements];
    for (let i = 0; i <= elArray.value - 1; i++) {
      setTimeout(() => {
        innerSort(i);
      }, speedSlider.value * elArray.value * 1.15 * i);
    }
  };

  // "schedules" the comparison of the entire array - every "big" comparison is exactly x
  // ms inbetween and every other "lesser" comparison needs to take less time than the big one

  useEffect(() => {
    generateElements(50);
    console.log(document.getElementById("slider").value);
  }, []);

  const setElSize = () => {
    console.log(document.getElementById("slider").value);
    setElements([]);
    generateElements(document.getElementById("slider").value);
  };

  return (
    <div className="mainElement">
      <div className="btn-container">
        <button className="sort-btn" onClick={startSort}>
          SORT
        </button>

        <input
          type="range"
          min="10"
          max="60"
          id="slider"
          onChange={setElSize}
        ></input>

        <input type="range" min="7" max="20" id="speed"></input>
      </div>
      <div className="el-container">
        {elements.map((el, idx) => {
          return (
            <div
              id={idx}
              className="algo-div"
              style={{ height: `${el}px` }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Sort;
