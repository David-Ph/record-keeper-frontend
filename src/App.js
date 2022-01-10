import "./App.css";
import React from "react";
import Card from "./components/UI/Card/Card";

function App() {
  return (
    <div className="bg-logo-bg h-screen bg-cover bg-center bg-no-repeat">
      <Card>
        <h1>Hello World</h1>
        <p>Welcome to record keeper!</p>
      </Card>
    </div>
  );
}

export default App;
