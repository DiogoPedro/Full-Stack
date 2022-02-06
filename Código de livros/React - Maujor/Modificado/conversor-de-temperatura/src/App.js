import React from "react";
import TemperatureConverter from "./components/TemperatureConverter";

function App() {
  return (
    <div className="temperatureConverter">
      <header className="titulo">Conversor de temperatura</header>
      <main>
        <TemperatureConverter />
      </main>
      <footer>Use o mouse para entrar a temperatura a converter</footer>
    </div>
  );
}

export default App;
