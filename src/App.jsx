import "./App.css";
import { useState } from "react";
import AnswerBlockForm from "./components/AnswerBlockForm";

function App() {
  const questions = [
    {
      question: "How many countries are in the world cup?",
      answer: "Answer: 48",
      color: "yellow",
      image: "/src/images/image1.jpg",
    },
    {
      question: "When soccer was invented?",
      answer: "Answer: 1863",
      color: "yellow",
      image: "/src/images/image2.jpg",
    },
    {
      question:
        "Which legendary striker holds the record for scoring the most international goals in men's soccer history?",
      answer: "Answer: Cristiano Ronaldo",
      color: "red",
      image: "/src/images/image3.jpg",
    },
    {
      question: "Which country has won the most FIFA World Cups?",
      answer: "Answer: Brazil",
      color: "green",
      image: "/src/images/image4.jpg",
    },
    {
      question: "How many players does each team start with?",
      answer: "Answer: 11",
      color: "green",
      image: "/src/images/image5.jpg",
    },
    {
      question: "What was the first World Cup year?",
      answer: "Answer: 1930",
      color: "yellow",
      image: "/src/images/image6.jpg",
    },
    {
      question: "How many panels are there on a traditional soccer ball?",
      answer: "Answer: 32",
      color: "yellow",
      image: "/src/images/image7.jpg",
    },
    {
      question:
        "What is the record for red cards given in a single soccer game?",
      answer: "Answer: 36",
      color: "red",
      image: "/src/images/image8.jpg",
    },
    {
      question:
        "According to the official FIFA rulebook, how long can a goalkeeper hold the ball?",
      answer: "Answer: 6 seconds",
      color: "yellow",
      image: "/src/images/image9.jpg",
    },
    {
      question: "What was the fastest red card ever issued in a game?",
      answer: "Answer: 2 seconds",
      color: "red",
      image: "/src/images/image10.jpg",
    },
  ];

  const [flip, setFlip] = useState(false);
  const [card, setCard] = useState(0);
  const [cards, setCards] = useState(questions);

  const click = () => {
    setFlip(!flip);
  };

  const nextCard = () => {
    if (card < cards.length - 1) {
      setCard(card + 1);
      setFlip(false);
    }
  };

  const prevCard = () => {
    if (card > 0) {
      setCard(card - 1);
      setFlip(false);
    }
  };

  const shuffleButton = () => {
    const shuffle = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffle);
    setCard(0);
  };

  return (
    <div>
      <div className="header">
        <h1>Ultimate Soccer Player</h1>
        <h3>How good you know about soccer?</h3>
      </div>
      <div
        className="card"
        onClick={click}
        style={{ backgroundColor: cards[card].color }}
      >
        <div className="image">
          {!flip && cards[card].image && (
            <img src={cards[card].image} alt="soccer" />
          )}
        </div>

        <div>
          <h3 className="card-text">
            {flip ? cards[card].answer : cards[card].question}
          </h3>
        </div>
      </div>
      <div>
        <AnswerBlockForm currentAnswer={cards[card].answer} />
      </div>
      <div className="buttons">
        <button onClick={prevCard} disabled={card === 0}>
          ←
        </button>
        <button onClick={nextCard} disabled={card === cards.length - 1}>
          →
        </button>
        <button className="shuffle-button" onClick={shuffleButton}>
          Shuffle Cards
        </button>
      </div>
    </div>
  );
}

export default App;
