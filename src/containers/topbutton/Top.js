import React, {useEffect} from "react";
import "./Top.scss";
import scrollToTopImg from "../../assets/images/finger.png";

export default function Top() {
  function topEvent() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  useEffect(() => {
    function scrollFunction() {
      const topButton = document.getElementById("topButton");

      if (!topButton) {
        return;
      }

      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        topButton.style.visibility = "visible";
      } else {
        topButton.style.visibility = "hidden";
      }
    }

    window.addEventListener("scroll", scrollFunction);
    window.addEventListener("load", scrollFunction);

    scrollFunction();

    return () => {
      window.removeEventListener("scroll", scrollFunction);
      window.removeEventListener("load", scrollFunction);
    };
  }, []);

  return (
    <button onClick={topEvent} id="topButton" title="Go to top">
      <img src={scrollToTopImg} alt="Back to top" className="top-button-icon" />
    </button>
  );
}
