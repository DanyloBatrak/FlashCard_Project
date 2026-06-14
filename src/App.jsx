import "./App.css";
import { useState } from "react";

function App() {
  const questions = [
    {
      question: "How many countries are in the world cup?",
      answer: "Answer: 48",
      color: "Yellow",
      image: "/src/images/image1.jpg",
    },
    {
      question: "When soccer was invented?",
      answer: "Answer: in 1863 in England",
      color: "Yellow",
      image: "/src/images/image2.jpg",
    },
    {
      question:
        "Which legendary striker holds the record for scoring the most international goals in men's soccer history?",
      answer: "Answer: Cristiano Ronaldo",
      color: "Red",
      image: "/src/images/image3.jpg",
    },
    {
      question: "Which country has won the most FIFA World Cups?",
      answer: "Answer: Brazil",
      color: "Green",
      image: "/src/images/image4.jpg",
    },
    {
      question: "How many players does each team start with?",
      answer: "Answer: 11",
      color: "Green",
      image: "/src/images/image5.jpg",
    },
    {
      question: "What was the first World Cup year?",
      answer: "Answer: 1930",
      color: "Yellow",
      image: "/src/images/image6.jpg",
    },
    {
      question: "How many panels are there on a traditional soccer ball?",
      answer: "Answer: 32 panels",
      color: "Yellow",
      image: "/src/images/image7.jpg",
    },
    {
      question:
        "What is the record for red cards given in a single soccer game?",
      answer: "Answer: 36",
      color: "Red",
      image: "/src/images/image8.jpg",
    },
    {
      question:
        "According to the official FIFA rulebook, how long can a goalkeeper hold the ball?",
      answer: "Answer: 6 seconds",
      color: "Yellow",
      image: "/src/images/image9.jpg",
    },
    {
      question: "What was the fastest red card ever issued in a game?",
      answer: "Answer: 2 seconds",
      color: "Red",
      image: "/src/images/image10.jpg",
    },
  ];

  const [flip, setFlip] = useState(false);
  const [card, setCard] = useState(0);

  const click = () => {
    setFlip(!flip);
  };

  const nextCard = () => {
    let randomCard;
    do {
      randomCard = Math.floor(Math.random() * questions.length);
    } while (randomCard == card && questions.length > 1);
    setCard(randomCard);
    setFlip(false);
  };

  return (
    <div>
      <div className="header">
        <h1>Ultimate Soccer Player</h1>
        <h3>How good you know about soccer?</h3>
        <p>Number of cards: {questions.length}</p>
      </div>
      <div
        className="card"
        onClick={click}
        style={{ backgroundColor: questions[card].color }}
      >
        <div className="image">
          {!flip && questions[card].image && (
            <img src={questions[card].image} alt="soccer" />
          )}
        </div>

        <div>
          <h3 className="card-text">
            {flip ? questions[card].answer : questions[card].question}
          </h3>
        </div>
      </div>
      <div className="buttons">
        <button onClick={nextCard}>→</button>
      </div>
    </div>
  );
}

export default App;
