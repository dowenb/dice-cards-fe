import { useState } from 'react';
import Die from './components/Die';
import { Button } from 'react-aria-components'
import { deck } from 'dice-cards';

function App() {
  let diceCards = deck();
  const [card, setCard] = useState(diceCards.pop());

  function rollDice() {
    if(diceCards.length > 0){
      setCard(diceCards.pop())
    } else {
      // If the deck of dice cards as run out, start a new one.
      diceCards = deck();
      setCard(diceCards.pop())
    }
  }

  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2em'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '2em'
        }}>
          <Die pip={card.die1} />
          <Die pip={card.die2} />
        </div>
        <div>
          <Button onPress={() => rollDice()}>
            Roll Dice
          </Button>
        </div>
      </div>
    </>
  )
}

export default App
