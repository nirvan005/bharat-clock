import { useEffect, useState } from "react";

function Para() {
  let [d, setD] = useState(new Date());
  useEffect(() => {
    const intervalID = setInterval(() => {
      setD(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);
  return (
    <div className="container">
      <div className="row text-center">
        <p className="Para">
          This is the clock that shows the time in Bharat at all times.
          <br />
          This is the current time:{" "}
          <span className="badge text-bg-primary">
            {d.toLocaleDateString()} - {d.toLocaleTimeString()}
          </span>
        </p>
      </div>
    </div>
  );
}
export default Para;
