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
 const nextCard = () => {
  let randomInt = Math.floor(Math.random() * cardSet.length);
  //this is so that we don't get the same card again
  while(randomInt == currentCard) {
    randomInt = Math.floor(Math.random() * cardSet.length);
  }
  setCurrentCard(randomInt);
 }
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
    <div >
    <button className='nextButton'>←</button>
    <button className='nextButton' onClick={nextCard}>→</button>
    </div>
    </>
  )
}

export default App
