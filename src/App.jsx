import './App.css'
import Card from './components/Card'
import { useState } from 'react';
function App() {
 
  const cardSet = [
  {
    "question": "How many alphabets (writing systems) are used in standard Japanese?",
    "answer": "Three (Hiragana, Katakana, and Kanji)"
  },
  {
    "question": "What is the Japanese word for 'Thank you'?",
    "answer": "Arigatou (ありがとう)"
  },
  {
    "question": "Which writing system is primarily used for foreign loanwords?",
    "answer": "Katakana (カタカナ)"
  },
  {
    "question": "What does the greeting 'Konnichiwa' mean in English?",
    "answer": "Hello / Good afternoon (こんにちは)"
  },
  {
    "question": "What is the Japanese name for Japan?",
    "answer": "Nihon (にほん)"
  },
  {
    "question": "True or False: Japanese nouns have gender (masculine/feminine).",
    "answer": "False"
  },
  {
    "question": "What is the English meaning of the word 'Sayonara'?",
    "answer": "Goodbye (さよなら)"
  },
  {
    "question": "Which honorific is most commonly added to the end of a person's name to show respect?",
    "answer": "-san (～さん)"
  },
  {
    "question": "How do you say 'Yes' and 'No' in Japanese?",
    "answer": "Hai (はい) and Iie (いいえ)"
  },
  {
    "question": "What are the phonetic characters used for native Japanese words called?",
    "answer": "Hiragana (ひらがな)"
  }
 ];

 const [currentCard, setCurrentCard] = useState(0)
 const [userGuess, setUserGuess] = useState("");
 const [feedback, setFeedback] = useState("");
 
 const nextCard = () => {
    if (currentCard < cardSet.length - 1) {
      setCurrentCard(currentCard + 1);
      resetTurn();
    }
  };

 const prevCard = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
      resetTurn();
    }
  };

 const resetTurn = () => {
    setUserGuess("");
    setFeedback("");
  };

 const checkAnswer = () => {
    const correctAnswer = cardSet[currentCard].answer.toLowerCase();
    if (userGuess.toLowerCase() === correctAnswer || correctAnswer.includes(userGuess.toLowerCase()) && userGuess !== "") {
      setFeedback("correct");
    } else {
      setFeedback("wrong");
    }
  };

  /*
  commenting out due to change of requirements
  const nextCard = () => {
  let randomInt = Math.floor(Math.random() * cardSet.length);
  //this is so that we don't get the same card again
  while(randomInt == currentCard) {
    randomInt = Math.floor(Math.random() * cardSet.length);
  }
  setCurrentCard(randomInt);
 } */

  return (
    <>
    <div>
      <h1>
        Learn Japanese!
      </h1>
      <h5>Test your knowledge of beginner Japanese!</h5>
      <h5>
        Number of cards: {cardSet.length}
      </h5>
    </div>
    <Card className = 'Card' question={cardSet[currentCard]["question"]} answer={cardSet[currentCard]["answer"]}/>
    <div>
      <p>Guess the answer here</p>
      <input 
          type="text" 
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
          placeholder="Type your guess here..."
          className={feedback}
        />
      <button className='nextButton' onClick={checkAnswer}>Submit Guess</button>
    </div>
    <div >
    <button className='nextButton' onClick = {prevCard} disabled={currentCard === 0}>←</button>
    <button className='nextButton' onClick={nextCard} disabled={currentCard === cardSet.length - 1}>→</button>
    </div>
    </>
  )
}

export default App
