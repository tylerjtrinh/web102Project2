import React from 'react';
import { useState } from 'react';

const Card = ({question, answer}) => {
    const [flipped, setFlipped] = useState(false);

    const cardClicked = () => {
        setFlipped(!flipped);
    }
  return (
    <div className='Card' onClick={cardClicked}>
        {!flipped ? (
            <p>{question}</p>
        ) : (
            <p>{answer}</p>
        )}
    </div>
  );
};

export default Card;
