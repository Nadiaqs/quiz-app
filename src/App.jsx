import React, { useState } from "react";
import Login from "./assets/components/Login";
import StartApp from "./assets/components/StartApp";
import QuizApp from "./assets/components/QuizApp";
import Register from "./assets/components/Register";

function App() {
  const [user, setUser] = useState(null); //Usuario logueado
  const [started, setStarted] = useState(false); //Si comenzo el quiz

  if (!user) {
    return (
      <div>
        <Login onLogin={setUser} />

        <div style={{ textAlign: "center", marginTop: "20px" }}></div>
      </div>
    );
  }

  if (!started) {
    return <StartApp user={user} onStart={() => setStarted(true)} />;
  }

  return <QuizApp user={user} />;
}

export default App;
