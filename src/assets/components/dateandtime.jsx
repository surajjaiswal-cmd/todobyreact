import React, { useState, useEffect } from "react";

export function GetCurrentDateTime() {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      let cur = new Date();
      let dateOption = {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      };
      let formatter = new Intl.DateTimeFormat("en-us", dateOption);
      setCurrentDateTime(formatter.format(cur));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div className="dateandtime container-fluid">{currentDateTime}</div>;
}
