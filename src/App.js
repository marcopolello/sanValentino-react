import React, { useState, useRef } from 'react';
import Swal from 'sweetalert2';

import './App.css';



function App() {

  const [x, setx] = useState(52);
  const [y, sety] = useState(55);
  const form = useRef();


  const body = document.querySelector("body");
  if (!body) {
    throw new ReferenceError("Body section not found.");
  }

  function createHeart() {
    const heart = document.createElement("i");
    heart.className = "fa-solid fa-heart";
    heart.style.left = (Math.random() * 100) + "vw";
    heart.style.animationDuration = (Math.random() * 3) + 2 + "s"
    body.appendChild(heart);
  }
  setInterval(createHeart, 1000);
  setInterval(function name(params) {
    var heartArr = document.querySelectorAll(".fa-heart")
    if (heartArr.length > 200) {
      heartArr[0].remove()
    }

  }, 100);


  /* code for moving button */
  const popUp = () => {
    alert("AH bravaaa!!, hai preso il bottone. \nI fortunati cacciatori di bottoni vincono un appuntamento gratuito il 14 febbraio o un giorno seguente!!");
  }

const clickedYes = () => {
  Swal.fire({
    title: '<p class="valentine">Ti amo!</p>',
    color: 'rgb(60, 0, 60)',
    fontStyle: 'bold',
    background: '#F392E6 url(images/noi.jpg)',
    backdrop: `
    rgba(0,0,123,0.4)
    url("/images/nyan-cat.gif")
    left top
    no-repeat
    `,
    width: '100%',
    padding: '3em',
    customClass: 'swal-height',
  })
}


  function mouseOver() {
    setx(Math.random() * 100);
    sety(Math.random() * 100);
  }
  
  var noStyle = {
    left: x + "%",
    top: y + "%",
    position: "absolute",
  };
  
  var yesStyle = {
    left: "40%",
    top: "55%",
    position: "absolute",
  }

  return (
    <>
    <p className="pre-valentine">
      Vuoi essere la mia
    </p>
    <p className="valentine">Valentina?</p>
      <button 
        style={yesStyle}
        type="submit"
        onClick={clickedYes}
      >
        SI!
      </button> 
    <button
      onMouseOver={mouseOver}
      style={noStyle}
      onClick={popUp}
    >
      no
  </button>
  </>
  );
}

export default App;
