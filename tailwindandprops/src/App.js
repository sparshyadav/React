import Card from './components/card';
import './App.css';

function App() {
   let myObject={
    username: "Sparsh",
    age: 21,
    userId: 1383
   }
   let newArr=[1, 2, 3];
  return (
    <div className="App">
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card UserName="Sparsh Yadav" btnTxt="Click Me"/>
      <Card btnTxt="Visit Me" UserName="Sweta Shreya"/>
      <Card />
    </div>

  );
}

export default App;
