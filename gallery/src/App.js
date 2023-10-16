import './App.css';
import Photo from './components/photo';

function App() {
  return (
    <div className="App">
      <h1>Gallery </h1>
      <div className='images'>
        <Photo />
      </div>
    </div>
  );
}

export default App;
