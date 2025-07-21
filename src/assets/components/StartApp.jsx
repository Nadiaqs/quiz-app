import React, { useState } from "react";
import frida from "../components/images/frida.png";
import { useMediaQuery } from "react-responsive";
import QuizApp from "./QuizApp";
import "./app.css";
import Login from "./Login";

function StartApp({ user, onStart }) {
  const [start, setStart] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const handleStart = () => {
    setStart(true);
    onStart();
  };

  if (!start) {
    return (
      <div className="container">
        {isMobile ? <p>Vista móvil</p> : <p>Vista escritorio</p>}
        <div className="quiz-container">
          <div className="quiz-card">
            Het Latin Lab
            <br/>
            <br/>
            Hi {user.email}👋!
            <h1
              className="quiz-imag"
              style={{ height: "170px", margin: "20px 0px 50px 0px" }}
            >
              <p style={{fontSize:'20px'}}>
                I'm your Spanish coach. Let's get to know you a little befores
                we begin.
              </p>
              <img src={frida} className="quiz-img" alt="Frida" />
            </h1>
            <button className="quiz-button" onClick={handleStart}>
              Let's Start/ Vamos!
            </button>
          </div>
        </div>
      </div>
    );
  }
  return <QuizApp user={user} />;
}
export default StartApp;
