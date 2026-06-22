import { useState } from "react";

const AnswerBlockForm = ({ currentAnswer }) => {
  const [answer, setAnswer] = useState("");
  const [streak, setStreak] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);

  const [longestStreak, setLongestStreak] = useState(0);

  const checkAnswer = () => {
    const correctAnswer = currentAnswer
      .replace("Answer: ", "")
      .trim()
      .toLowerCase();

    if (correctAnswer.includes(answer.trim().toLowerCase())) {
      setStreak(streak + 1);
      setIsCorrect("correct");
      const newStreak = streak + 1;

      setStreak(newStreak);

      if (newStreak > longestStreak) {
        setLongestStreak(newStreak);
      }
    } else {
      setStreak(0);
      setIsCorrect("incorrect");
    }
  };

  return (
    <div>
      <p>Current streak: {streak} </p>
      <p>Longest streak: {longestStreak}</p>

      <input
        type="text"
        value={answer}
        onChange={e => setAnswer(e.target.value)}
        placeholder="Answer:"
        className={isCorrect}
      />

      <button className="submit-button" onClick={checkAnswer}>
        Submit
      </button>
    </div>
  );
};

export default AnswerBlockForm;
