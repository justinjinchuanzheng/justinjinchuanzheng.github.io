import React from "react";
import "./Top.scss";
import scrollToTopImg from "../../assets/images/finger.png"; // or finger.webp

export default function Top() {
  function topEvent() {
    // Scroll to top
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE, Opera
  }

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("topButton").style.visibility = "visible";
    } else {
      document.getElementById("topButton").style.visibility = "hidden";
    }
  }

  window.onscroll = function () {
    scrollFunction();
  };

  window.onload = function () {
    scrollFunction();
  };

  return (
    <button onClick={topEvent} id="topButton" title="Go to top">
      <img src={scrollToTopImg} alt="Back to top" className="top-button-icon" />
    </button>
  );
}
