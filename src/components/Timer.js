import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;
  const formattedTime = `${mins < 10 ? "0" : ""}${mins}:${
    secs < 10 ? "0" : ""
  }${secs}`;

  useEffect(
    function () {
      const id = setInterval(function () {
        //console.log("Timer tick");
        dispatch({ type: "tick" });
      }, 1000);

      return () => {
        clearInterval(id);
      };
      /* This is an alternative way to clear the interval.
        It can be used if you want to return a cleanup function
        that will be called when the component unmounts or when
        the effect is re-run. 
      */
      /* return function () {
        clearInterval(id);
      }; */
    },
    [dispatch]
  );

  return <div className="timer">{formattedTime}</div>;
}

export default Timer;
