import Die from './components/Die';
import { deck } from 'dice-cards';

function App() {
  const diceCards = deck();
  const card = diceCards.pop();

  return (
    <>
    <div style={
      {
        display: 'flex',
        justifyContent: 'center',
        gap: '2em',
        alignItems: 'center',
      }
    }>
      <Die pip={card.die1} />
      <Die pip={card.die2} />
    </div>
    </>
  )
}

export default App
