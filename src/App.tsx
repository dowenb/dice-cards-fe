import Die from './components/Die';
import { Button } from 'react-aria-components'
import { deck } from 'dice-cards';

function App() {
  const diceCards = deck();
  const card = diceCards.pop();

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
          <Button onPress={() => alert('roll the Dice!')}>
            Roll Dice
          </Button>
        </div>
      </div>
    </>
  )
}

export default App
