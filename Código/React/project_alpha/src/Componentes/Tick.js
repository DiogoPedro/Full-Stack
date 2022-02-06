import React, { useEffect, useState } from "react";

function Tick() {
  const [clock, setClock] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClock(date.toLocaleTimeString());
    }, 1000);
  });

   return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {clock}.</h2>
      </div>
    );
};
export default Tick;