import Die from './components/Die'

function App() {

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
      <Die pip={1} />
      <Die pip={2} />
    </div>
    </>
  )
}

export default App
