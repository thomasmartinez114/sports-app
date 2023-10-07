import './App.css';

function App() {
  fetch(
    ' https://api.the-odds-api.com/v4/sports/americanfootball_ncaaf/scores/?daysFrom=1&apiKey=51b97a139b90607c626656313bed0d6b'
  )
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });

  return (
    <div className='App'>
      <div className='App'>
        <button>Sports App</button>
      </div>
    </div>
  );
}

export default App;
