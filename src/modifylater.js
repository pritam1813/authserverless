let switchCtn = document.querySelector("#switch-cnt");
let switchC1 = document.querySelector("#switch-c1");
let switchC2 = document.querySelector("#switch-c2");
let switchCircle = document.querySelectorAll(".switch__circle");
let switchBtn = document.querySelectorAll(".switch-btn");
let aContainer = document.querySelector("#a-container");
let bContainer = document.querySelector("#b-container");
let allButtons = document.querySelectorAll(".submit");

let getButtons = (e) => e.preventDefault();

let changeForm = (e) => {
  switchCtn.classList.add("is-gx");
  setTimeout(function () {
    switchCtn.classList.remove("is-gx");
  }, 1500);

  switchCtn.classList.toggle("is-txr");
  switchCircle[0].classList.toggle("is-txr");
  switchCircle[1].classList.toggle("is-txr");

  switchC1.classList.toggle("is-hidden");
  switchC2.classList.toggle("is-hidden");
  aContainer.classList.toggle("is-txl");
  bContainer.classList.toggle("is-txl");
  bContainer.classList.toggle("is-z200");
};

let mainF = (e) => {
  for (var i = 0; i < allButtons.length; i++)
    allButtons[i].addEventListener("click", getButtons);
  for (var i = 0; i < switchBtn.length; i++)
    switchBtn[i].addEventListener("click", changeForm);
};

window.addEventListener("load", mainF);



/# In React #/

import React, { useEffect, useRef } from 'react';

const MyComponent = () => {
  const switchCtn = useRef(null);
  const switchC1 = useRef(null);
  const switchC2 = useRef(null);
  const switchCircle = useRef(null);
  const switchBtn = useRef(null);
  const aContainer = useRef(null);
  const bContainer = useRef(null);
  const allButtons = useRef(null);

  useEffect(() => {
    const getButtons = (e) => e.preventDefault();

    const changeForm = (e) => {
      switchCtn.current.classList.add("is-gx");
      setTimeout(function(){
          switchCtn.current.classList.remove("is-gx");
      }, 1500)

      switchCtn.current.classList.toggle("is-txr");
      switchCircle.current[0].classList.toggle("is-txr");
      switchCircle.current[1].classList.toggle("is-txr");

      switchC1.current.classList.toggle("is-hidden");
      switchC2.current.classList.toggle("is-hidden");
      aContainer.current.classList.toggle("is-txl");
      bContainer.current.classList.toggle("is-txl");
      bContainer.current.classList.toggle("is-z200");
    }

    for (var i = 0; i < allButtons.current.length; i++)
        allButtons.current[i].addEventListener("click", getButtons );
    for (var i = 0; i < switchBtn.current.length; i++)
        switchBtn.current[i].addEventListener("click", changeForm)
  }, []);

  return (
    // Your JSX goes here
    // Make sure to attach the refs to your elements like so: <div ref={switchCtn}></div>
  );
};

export default MyComponent;
