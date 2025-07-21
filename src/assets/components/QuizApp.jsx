import React, { useEffect, useState } from "react";
import questions from "../data";
// import frida from "../components/images/frida.png";
import "./app.css";
import saveQuizResult from "./SaveQuiz";

function QuizApp({ user }) {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [date, setDate] = useState("");
  const [saved, setsaved] = useState(false);
  const [startTime] = useState(Date.now());

  const handleNext = (options) => {
    const current = questions[step];
    if (current.answer && options === current.answer) {
      setScore(score + 1);
    }
    setStep(step + 1);
  };

  const level =
    score <= 2 ? "A1" : score <= 4 ? "A2" : score <= 6 ? "B1" : "B2";

  useEffect(() => {
    if (step >= questions.length && user && !saved) {
      const endTime = Date.now();
      const timeTaken = Math.floor((endTime - startTime) / 1000);
      console.log("✅ user en QuizApp:", user);
      saveQuizResult({
        uid: user.uid,
        email: user.email,
        nativeLanguage: user.nativeLanguage,
        score,
        level,
        timeTaken,
      });
      setsaved(true);
    }
  }, [step, user, score, level, saved, startTime]);

  if (step >= questions.length) {
    return (
      <div className="quiz-container">
        <div className="quiz-card quiz-result">
          <h2 className="quiz-result-title">Your Level:</h2>
          <p className="quiz-result-score">{level}</p>
          <p className="quiz-result-text">
            Correct answers: {score} / {questions.length}
          </p>
        </div>
      </div>
    );
  }

  const current = questions[step];
  return (
    <div className="quiz-container">
      <div className="quiz-card">
        {current.section && <h2 className="quiz-section">{current.section}</h2>}
        {/* <img
          className="quiz-img"
          src={frida}
          style={{ width: "120px", display: "block", float: "right" }}
          alt="Frida"
        /> */}
        <p className="quiz-question">{current.question}</p>

        {current.type === "date" ? (
          <>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="quiz-input"
            />
            {date && (
              <button className="quiz-button" onClick={() => handleNext(date)}>
                Siguiente
              </button>
            )}
          </>
        ) : (
          current.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleNext(opt)}
              className="quiz-button"
            >
              {opt}
            </button>
          ))
        )}
      </div>
    </div>
  );
}

export default QuizApp;
